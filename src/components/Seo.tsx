import { Helmet } from "react-helmet-async";

import { useLocale } from "@/i18n/useLocale";

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: string;
}

const SITE_NAME = "Meecrogate";

const Seo = ({ title, description, canonical, image, type = "website" }: SeoProps) => {
  const { language, alternates } = useLocale();
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  const current = alternates.find((alternate) => alternate.code === language);
  const url =
    canonical ??
    current?.url ??
    (typeof window !== "undefined" ? window.location.href : undefined);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {url && <link rel="canonical" href={url} />}

      {/* Language alternates */}
      {alternates.map((alternate) => (
        <link
          key={alternate.code}
          rel="alternate"
          hrefLang={alternate.htmlLang}
          href={alternate.url}
        />
      ))}
      {alternates.length > 0 && (
        <link rel="alternate" hrefLang="x-default" href={alternates[0].url} />
      )}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={current?.htmlLang.replace("-", "_") ?? language} />
      {alternates
        .filter((alternate) => alternate.code !== language)
        .map((alternate) => (
          <meta
            key={alternate.code}
            property="og:locale:alternate"
            content={alternate.htmlLang.replace("-", "_")}
          />
        ))}

      {/* Twitter */}
      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default Seo;
