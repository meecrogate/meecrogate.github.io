import { LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface UseCaseDetailPageProps {
  /** Key under `usecases.details` in the translation files. */
  id: string;
  /** One icon per feature, in the same order as the `features` array. */
  icons: LucideIcon[];
}

interface Entry {
  title: string;
  description: string;
}

/**
 * Shared layout for the six use-case detail pages: they only differ by
 * their icons and by the block of text they read from the `usecases`
 * namespace, so a new one is a JSON entry plus four icons.
 */
const UseCaseDetailPage = ({ id, icons }: UseCaseDetailPageProps) => {
  const { t } = useTranslation("usecases");

  const features = t(`details.${id}.features`, { returnObjects: true }) as Entry[];
  const scenarios = t(`details.${id}.scenarios`, { returnObjects: true }) as Entry[];

  return (
    <div className="min-h-screen bg-slate-900">
      <Seo
        title={t(`details.${id}.seoTitle`)}
        description={t(`details.${id}.seoDescription`)}
      />
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              {t(`details.${id}.title`)}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t(`details.${id}.intro`)}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = icons[index];
              return (
                <Card
                  key={feature.title}
                  className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      {Icon && <Icon className="h-8 w-8 text-blue-400" />}
                      <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="bg-gray-800/30 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                {t(`details.${id}.scenariosTitle`)}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {scenarios.map((scenario) => (
                <div key={scenario.title} className="text-gray-300">
                  <h3 className="text-lg font-semibold text-white mb-2">{scenario.title}</h3>
                  <p>{scenario.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UseCaseDetailPage;
