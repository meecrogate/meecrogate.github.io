import { CheckCircle, LucideIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface CaseStudyPageProps {
  /** Key under `clientprojects.projects` in the translation files. */
  id: string;
  /** Illustration for the hero, and its colour class. */
  icon: LucideIcon;
  iconClassName: string;
  /** One icon per entry of the `metrics` array, in the same order. */
  metricIcons: LucideIcon[];
}

interface Metric {
  title: string;
  subtitle: string;
  description: string;
}

interface Detail {
  title: string;
  description: string;
}

/**
 * Shared layout for the customer case studies. Each study is one entry
 * in the `clientprojects` namespace plus the icons passed here.
 */
const CaseStudyPage = ({ id, icon: Icon, iconClassName, metricIcons }: CaseStudyPageProps) => {
  const { t } = useTranslation("clientprojects");
  const key = `projects.${id}`;

  const metrics = t(`${key}.metrics`, { returnObjects: true }) as Metric[];
  const challenges = t(`${key}.challenges`, { returnObjects: true }) as string[];
  const solutions = t(`${key}.solutions`, { returnObjects: true }) as string[];
  const details = t(`${key}.details`, { returnObjects: true }) as Detail[];

  return (
    <div className="min-h-screen bg-slate-900">
      <Seo title={t(`${key}.title`)} description={t(`${key}.intro`)} />
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Icon className={`w-16 h-16 mx-auto mb-6 ${iconClassName}`} />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t(`${key}.title`)}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                {t(`${key}.intro`)}
              </p>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 max-w-2xl mx-auto">
                <p className="text-lg text-gray-200 italic">
                  &ldquo;{t(`${key}.quote`)}&rdquo;
                </p>
                <p className="text-[#FFB300] font-semibold mt-4">
                  {t(`${key}.author`)}, {t(`${key}.company`)}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              {t(`${key}.metricsTitle`)}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {metrics.map((metric, index) => {
                const MetricIcon = metricIcons[index];
                return (
                  <Card key={metric.title} className="bg-slate-800/50 border-slate-700/50 text-center">
                    <CardHeader>
                      {MetricIcon && <MetricIcon className="w-12 h-12 text-blue-400 mx-auto mb-4" />}
                      <CardTitle className="text-2xl text-white">{metric.title}</CardTitle>
                      <CardDescription className="text-[#FFB300] font-semibold">
                        {metric.subtitle}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{metric.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Challenge & Solution Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Challenges */}
              <Card className="bg-slate-800/30 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">{t(`${key}.challengesTitle`)}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {t(`${key}.challengesSubtitle`)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {challenges.map((challenge) => (
                    <div key={challenge} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300">{challenge}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Solutions */}
              <Card className="bg-slate-800/30 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">{t(`${key}.solutionsTitle`)}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {t(`${key}.solutionsSubtitle`)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {solutions.map((solution) => (
                    <div key={solution} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">{solution}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Implementation Details */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-3xl text-white">{t(`${key}.detailsTitle`)}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {details.map((detail) => (
                  <div key={detail.title}>
                    <h3 className="text-xl font-semibold text-white mb-3">{detail.title}</h3>
                    <p className="text-gray-300">{detail.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudyPage;
