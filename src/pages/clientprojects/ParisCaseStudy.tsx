import { useTranslation } from "react-i18next";
import { ArrowLeft, CheckCircle, MapPin, Users, Shield, Zap, Globe, TrendingUp } from "lucide-react";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Link } from "@/i18n/Link";

interface Entry {
  title: string;
  description: string;
}

/** Icons for the challenge cards, in the order of `paris.challenges`. */
const challengeIcons = [Shield, Globe, Zap, Users];
/** Icons for the two result cards, and for the outlook cards. */
const resultIcons = [TrendingUp, Users];
const resultIconClasses = ["text-green-400", "text-purple-400"];
const outlookIcons = [Globe, TrendingUp, Shield];

const ParisCaseStudy = () => {
  const { t } = useTranslation("clientprojects");
  const key = "projects.paris";

  const highlights = t(`${key}.highlights`, { returnObjects: true }) as { value: string; label: string }[];
  const challenges = t(`${key}.challenges`, { returnObjects: true }) as Entry[];
  const solutions = t(`${key}.solutions`, { returnObjects: true }) as Entry[];
  const results = t(`${key}.results`, { returnObjects: true }) as { title: string; items: string[] }[];
  const outlook = t(`${key}.outlook`, { returnObjects: true }) as Entry[];

  return (
    <div className="min-h-screen bg-slate-900">
      <Seo title={t(`${key}.seoTitle`)} description={t(`${key}.seoDescription`)} />
      <Navigation />
      <div className="pt-16">
        {/* Header */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900/20 to-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/projets-clients" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              {t(`${key}.back`)}
            </Link>
            <div className="flex items-center mb-6">
              <MapPin className="w-16 h-16 text-purple-400 mr-4" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {t(`${key}.heroTitle`)}
                </h1>
                <p className="text-xl text-gray-300">
                  {t(`${key}.heroSubtitle`)}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {highlights.map((highlight) => (
                <div key={highlight.label} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
                  <h3 className="text-2xl font-bold text-purple-400 mb-2">{highlight.value}</h3>
                  <p className="text-gray-300">{highlight.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/30 p-8 rounded-lg border border-slate-700/50 mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">{t(`${key}.contextTitle`)}</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {t(`${key}.contextText`)}
              </p>
              <blockquote className="border-l-4 border-purple-400 pl-4 italic text-gray-200">
                &ldquo;{t(`${key}.contextQuote`)}&rdquo;
                <span className="block mt-2 text-purple-400 font-semibold">
                  {t(`${key}.contextQuoteAuthor`)}
                </span>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">{t(`${key}.challengesTitle`)}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {challenges.map((challenge, index) => {
                const Icon = challengeIcons[index];
                return (
                  <div key={challenge.title} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
                    {Icon && <Icon className="w-12 h-12 text-purple-400 mb-4" />}
                    <h3 className="text-xl font-bold text-white mb-3">{challenge.title}</h3>
                    <p className="text-gray-300">{challenge.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">{t(`${key}.solutionTitle`)}</h2>
            <div className="bg-gradient-to-br from-purple-900/20 to-slate-800/30 p-8 rounded-lg border border-purple-500/30 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">{t(`${key}.solutionSubtitle`)}</h3>
              <div className="space-y-6">
                {solutions.map((solution) => (
                  <div key={solution.title} className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{solution.title}</h4>
                      <p className="text-gray-300">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">{t(`${key}.resultsTitle`)}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {results.map((result, index) => {
                const Icon = resultIcons[index];
                return (
                  <div key={result.title} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
                    {Icon && <Icon className={`w-12 h-12 mb-4 ${resultIconClasses[index]}`} />}
                    <h3 className="text-xl font-bold text-white mb-3">{result.title}</h3>
                    <ul className="space-y-2 text-gray-300">
                      {result.items.map((item) => (
                        <li key={item} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-slate-800/50 p-8 rounded-lg border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">{t(`${key}.impactTitle`)}</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                {t(`${key}.impactText`)}
              </p>
              <p className="text-purple-400 font-semibold">
                {t(`${key}.impactPositioning`)}
              </p>
            </div>
          </div>
        </section>

        {/* Outlook */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">{t(`${key}.outlookTitle`)}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {outlook.map((item, index) => {
                const Icon = outlookIcons[index];
                return (
                  <div key={item.title} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 text-center">
                    {Icon && <Icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />}
                    <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900/20 to-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              {t(`${key}.ctaTitle`)}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t(`${key}.ctaSubtitle`)}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/demo"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                {t(`${key}.ctaDemo`)}
              </Link>
              <Link 
                to="/projets-clients"
                className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                {t(`${key}.ctaOther`)}
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ParisCaseStudy;
