import { useTranslation } from "react-i18next";

import { Link } from "@/i18n/Link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Network, ShieldCheck, Fingerprint, Workflow, Zap, Shield, Component } from "lucide-react";
import componentsHero from "@/assets/components-hero.png";

const ComponentsPage = () => {
  const { t } = useTranslation("components");

  // Only icons and styling live here; the wording is in the `components` namespace.
  const components = [
    {
      id: "apiGateway",
      icon: ShieldCheck,
      iconColor: "text-brand-blue",
      gradient: "from-brand-blue/20 to-brand-blue/30",
      border: "border-brand-blue/30",
    },
    {
      id: "identityServer",
      icon: Fingerprint,
      iconColor: "text-brand-orange",
      gradient: "from-brand-orange/20 to-brand-orange/30",
      border: "border-brand-orange/30",
    },
    {
      id: "orchestrator",
      icon: Network,
      iconColor: "text-gray-400",
      gradient: "from-gray-500/20 to-gray-500/30",
      border: "border-gray-500/30",
    },
    {
      id: "processExecutor",
      icon: Zap,
      iconColor: "text-gray-300",
      gradient: "from-gray-800/50 to-gray-800/60",
      border: "border-gray-600",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Seo title={t("seo.title")} description={t("seo.description")} />
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-brand-blue">
              {t("hero.title")}
            </h1>
            <p className="text-xl text-brand-light/80 max-w-3xl mx-auto mb-12">
              {t("hero.subtitle")}
            </p>

            {/* Image with arrows to components */}
            <div className="relative max-w-4xl mx-auto">
              {/* Central image */}
              <div className="max-w-2xl mx-auto relative z-10">
                <img
                  src={componentsHero}
                  alt={t("hero.imageAlt")}
                  className="w-full h-auto rounded-2xl shadow-2xl border border-brand-light/10"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>

              {/* Component icons with arrows */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                {/* API Gateway - Blue arrow */}
                <div className="flex flex-col items-center">
                  <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" fill="none">
                    <path
                      d="M32 0 L32 40 M24 32 L32 40 L40 32"
                      stroke="#007AFF"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="bg-brand-blue/20 w-16 h-16 rounded-2xl flex items-center justify-center">
                    <ShieldCheck className="w-8 h-8 text-brand-blue" />
                  </div>
                  <span className="text-brand-light mt-2 text-sm font-medium">{t("items.apiGateway.title")}</span>
                </div>

                {/* Identity Server - Yellow arrow */}
                <div className="flex flex-col items-center">
                  <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" fill="none">
                    <path
                      d="M32 0 L32 40 M24 32 L32 40 L40 32"
                      stroke="#FFB300"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="bg-brand-orange/20 w-16 h-16 rounded-2xl flex items-center justify-center">
                    <Fingerprint className="w-8 h-8 text-brand-orange" />
                  </div>
                  <span className="text-brand-light mt-2 text-sm font-medium">{t("items.identityServer.title")}</span>
                </div>

                {/* Orchestrator - Gray arrow */}
                <div className="flex flex-col items-center">
                  <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" fill="none">
                    <path
                      d="M32 0 L32 40 M24 32 L32 40 L40 32"
                      stroke="#6B7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="bg-gray-500/20 w-16 h-16 rounded-2xl flex items-center justify-center border border-gray-500/30">
                    <Network className="w-8 h-8 text-gray-400" />
                  </div>
                  <span className="text-brand-light mt-2 text-sm font-medium">{t("items.orchestrator.title")}</span>
                </div>
                {/* Process Executor - Black arrow */}
                <div className="flex flex-col items-center">
                  <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" fill="none">
                    <path
                      d="M32 0 L32 40 M24 32 L32 40 L40 32"
                      stroke="#6B7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="bg-gray-800/50 w-16 h-16 rounded-2xl flex items-center justify-center border border-gray-600">
                    <Zap className="w-8 h-8 text-gray-300" />
                  </div>
                  <span className="text-brand-light mt-2 text-sm font-medium">{t("items.processExecutor.title")}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Components Details */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="space-y-20">
              {components.map((component, index) => (
                <div key={component.id} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className={`bg-gradient-to-br ${component.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-6`}>
                      <component.icon className={`w-10 h-10 ${component.iconColor}`} />
                    </div>
                    <h2 className="text-3xl font-bold text-brand-light mb-2">
                      {t(`items.${component.id}.title`)}
                    </h2>
                    <p className="text-brand-orange text-lg mb-6">
                      {t(`items.${component.id}.subtitle`)}
                    </p>
                    <p className="text-brand-light/80 text-lg leading-relaxed">
                      {t(`items.${component.id}.description`)}
                    </p>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-gradient-to-br from-brand-dark/60 to-brand-dark/40 backdrop-blur-md rounded-2xl p-8 border border-brand-light/10">
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-brand-light mb-4 flex items-center">
                          <Workflow className="w-5 h-5 mr-2 text-brand-blue" />
                          {t("labels.keyFeatures")}
                        </h3>
                        <ul className="space-y-3">
                          {(t(`items.${component.id}.features`, { returnObjects: true }) as string[]).map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-brand-light/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-brand-light mb-4 flex items-center">
                          <Shield className="w-5 h-5 mr-2 text-brand-orange" />
                          {t("labels.businessBenefits")}
                        </h3>
                        <ul className="space-y-3">
                          {(t(`items.${component.id}.benefits`, { returnObjects: true }) as string[]).map((benefit, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-brand-light/80">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 border-t border-brand-light/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-brand-light mb-6">
              {t("cta.title")}
            </h2>
            <p className="text-brand-light/80 text-lg mb-8">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/demo"
                className="bg-brand-orange text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                {t("cta.demo")}
              </Link>
              <Link
                to="/architecture"
                className="border border-brand-light/20 text-brand-light px-8 py-4 rounded-lg font-semibold hover:bg-brand-light/5 transition-all duration-300"
              >
                {t("cta.architecture")}
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ComponentsPage;