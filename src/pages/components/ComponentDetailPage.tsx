import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Link } from "@/i18n/Link";

interface Entry {
  title: string;
  description: string;
}

interface ComponentDetailPageProps {
  /** Key at the root of the `componentpages` namespace. */
  id: string;
  hero: { icon: LucideIcon; accent: "blue" | "orange"; iconClassName?: string; boxClassName?: string };
  /** One icon per `benefits` entry, then one per `features` entry. */
  benefitIcons: LucideIcon[];
  featureIcons: LucideIcon[];
  /** Page-specific sections, rendered around the use-case section. */
  beforeUseCases?: ReactNode;
  afterUseCases?: ReactNode;
}

/** Accent colours alternate blue/orange down each list, as in the original pages. */
const accentOf = (index: number) => (index % 2 === 0 ? "text-brand-blue" : "text-brand-orange");

/**
 * Written out in full rather than composed at runtime: Tailwind only
 * emits the classes it can find as literal strings in the source.
 */
const heroAccents = {
  blue: { box: "bg-brand-blue/20", icon: "text-brand-blue", title: "text-brand-blue" },
  orange: { box: "bg-brand-orange/20", icon: "text-brand-orange", title: "text-brand-orange" },
} as const;

/**
 * Shared layout for the four component detail pages. Each page supplies
 * its icons and, where it has one, an extra section; everything it says
 * comes from the `componentpages` namespace.
 */
const ComponentDetailPage = ({
  id,
  hero,
  benefitIcons,
  featureIcons,
  beforeUseCases,
  afterUseCases,
}: ComponentDetailPageProps) => {
  const { t } = useTranslation("componentpages");
  const HeroIcon = hero.icon;
  const accent = heroAccents[hero.accent];

  const benefits = t(`${id}.benefits`, { returnObjects: true }) as Entry[];
  const features = t(`${id}.features`, { returnObjects: true }) as Entry[];
  const useCases = t(`${id}.useCases`, { returnObjects: true }) as Entry[];

  // The use-case section is laid out as two balanced columns.
  const half = Math.ceil(useCases.length / 2);
  const useCaseColumns = [useCases.slice(0, half), useCases.slice(half)];

  return (
    <div className="min-h-screen bg-slate-900">
      <Seo title={t(`${id}.seoTitle`)} description={t(`${id}.seoDescription`)} />
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className={hero.boxClassName ?? `${accent.box} w-24 h-24 rounded-2xl flex items-center justify-center mb-6`}>
                  <HeroIcon className={hero.iconClassName ?? `w-14 h-14 ${accent.icon}`} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className={accent.title}>
                    {t(`${id}.title`)}
                  </span>
                </h1>
                <p className="text-brand-orange text-xl mb-6">
                  {t(`${id}.subtitle`)}
                </p>
                <p className="text-brand-light/80 text-lg leading-relaxed mb-8">
                  {t(`${id}.description`)}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/demo"
                    className="bg-brand-orange text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    {t("labels.demo")}
                  </Link>
                  <Link
                    to="/components"
                    className="border border-brand-light/20 text-brand-light px-8 py-4 rounded-lg font-semibold hover:bg-brand-light/5 transition-all duration-300"
                  >
                    {t("labels.allComponents")}
                  </Link>
                </div>
              </div>
              <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-8 border border-brand-light/10">
                <h2 className="text-2xl font-bold text-brand-light mb-6">{t(`${id}.benefitsTitle`)}</h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => {
                    const Icon = benefitIcons[index];
                    return (
                      <div key={benefit.title} className="flex items-start">
                        {Icon && <Icon className={`w-6 h-6 mr-3 mt-1 flex-shrink-0 ${accentOf(index)}`} />}
                        <div>
                          <h3 className="font-semibold text-brand-light">{benefit.title}</h3>
                          <p className="text-brand-light/70 text-sm">{benefit.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 border-t border-brand-light/10">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-brand-light text-center mb-16">
              {t(`${id}.featuresTitle`)}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = featureIcons[index];
                return (
                  <div key={feature.title} className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                    {Icon && <Icon className={`w-8 h-8 mb-4 ${accentOf(index)}`} />}
                    <h3 className="text-xl font-bold text-brand-light mb-3">{feature.title}</h3>
                    <p className="text-brand-light/80">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {beforeUseCases}

        {/* Use Cases Section */}
        <section className="py-20 px-6 border-t border-brand-light/10">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-brand-light text-center mb-16">
              {t(`${id}.useCasesTitle`)}
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              {useCaseColumns.map((column, columnIndex) => (
                <div key={columnIndex} className="space-y-6">
                  {column.map((useCase) => (
                    <div key={useCase.title} className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                      <h3 className="text-xl font-bold text-brand-light mb-3">{useCase.title}</h3>
                      <p className="text-brand-light/80">{useCase.description}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {afterUseCases}
      </div>
      <Footer />
    </div>
  );
};

export default ComponentDetailPage;
