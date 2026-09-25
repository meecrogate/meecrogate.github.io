import { useTranslation } from "react-i18next";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/i18n/Link";
import { 
  BookOpen, 
  FileJson, 
  Shield, 
  Fingerprint, 
  Layers, 
  Zap, 
  Settings, 
  BarChart3, 
  Users, 
  Lock
} from "lucide-react";
import controlStationHero from "@/assets/control-station-hero.jpg";

const ControlStation = () => {
  const { t } = useTranslation("controlstation");

  const features = [
    { id: "catalog", icon: BookOpen },
    { id: "monitoring", icon: BarChart3 },
    { id: "access", icon: Users },
    { id: "security", icon: Lock },
  ];

  const templates = [
    {
      id: "apiGateway",
      icon: Shield,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      href: "/components/api-gateway",
    },
    {
      id: "identityServer",
      icon: Fingerprint,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      href: "/components/identity-server",
    },
    {
      id: "orchestrator",
      icon: Layers,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      href: "/components/orchestrator",
    },
    {
      id: "processExecutor",
      icon: Zap,
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
      href: "/components/process-executor",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Seo title={t("seo.title")} description={t("seo.description")} />
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={controlStationHero} 
              alt={t("hero.imageAlt")}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-[#FFB300]/10 border border-[#FFB300]/30 rounded-full px-4 py-2 mb-6">
                <Settings className="w-5 h-5 text-[#FFB300]" />
                <span className="text-[#FFB300] font-medium">{t("hero.badge")}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                {t("hero.title")}
              </h1>
              <div className="w-16 h-1 bg-indigo-500 rounded-sm mx-auto mb-6"></div>
              
              <p className="text-xl text-brand-orange font-extrabold mb-8 max-w-2xl mx-auto">
                {t("hero.description")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/demo">
                  <Button size="lg" className="bg-[#FFB300] text-gray-900 hover:bg-[#FFB300]/90 font-semibold px-8">
                    {t("hero.demo")}
                  </Button>
                </Link>
                <Link to="/architecture">
                  <Button size="lg" className="bg-[#007AFF] text-white hover:bg-[#007AFF]/90">
                    {t("hero.architecture")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t("features.title")}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {t("features.subtitle")}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.id} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all">
                    <CardHeader>
                      <div className="w-12 h-12 bg-[#007AFF]/10 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#007AFF]" />
                      </div>
                      <CardTitle className="text-white text-lg">{t(`features.items.${feature.id}.title`)}</CardTitle>
                      <CardDescription className="text-gray-400">{t(`features.items.${feature.id}.description`)}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {(t(`features.items.${feature.id}.details`, { returnObjects: true }) as string[]).map((detail, i) => (
                          <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#FFB300] rounded-full" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* JSON Templates Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2 mb-6">
                <FileJson className="w-5 h-5 text-[#007AFF]" />
                <span className="text-gray-300 font-medium">{t("templates.badge")}</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {t("templates.title")}
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                {t("templates.subtitle")}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {templates.map((template) => {
                const Icon = template.icon;
                return (
                  <Link to={template.href} key={template.id}>
                    <Card 
                      className={`${template.bgColor} ${template.borderColor} border-2 hover:scale-[1.02] transition-all cursor-pointer h-full`}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gray-900/50`}>
                              <Icon className={`w-7 h-7 ${template.color}`} />
                            </div>
                            <div>
                              <CardTitle className="text-white text-xl">{t(`templates.items.${template.id}.title`)}</CardTitle>
                              <CardDescription className="text-gray-400 mt-1">
                                {t(`templates.items.${template.id}.description`)}
                              </CardDescription>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t("cta.title")}
              </h2>
              <p className="text-gray-400 mb-8">
                {t("cta.description")}
              </p>
              <Link to="/demo">
                <Button size="lg" className="bg-[#FFB300] text-gray-900 hover:bg-[#FFB300]/90 font-semibold px-8">
                  {t("cta.button")}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ControlStation;
