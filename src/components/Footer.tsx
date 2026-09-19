
import { useTranslation } from "react-i18next";
import { Link } from "@/i18n/Link";
import { Button } from "@/components/ui/button";
import meecrogateLogoSvg from "@/assets/meecrogate-logo.svg";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-gray-900/80 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img 
              src={meecrogateLogoSvg} 
              alt="Meecrogate" 
              className="h-8 mb-4"
            />
            <p className="text-gray-400 mb-6 max-w-md">
              {t("footer.tagline")}
            </p>
            <div className="flex space-x-4">
              <Link to="/demo">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  {t("actions.support")}
                </Button>
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">{t("footer.components")}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/components/api-gateway" className="hover:text-white transition-colors">{t("footer.componentLinks.apiGateway")}</Link></li>
              <li><Link to="/components/identity-server" className="hover:text-white transition-colors">{t("footer.componentLinks.identityServer")}</Link></li>
              <li><Link to="/components/orchestrator" className="hover:text-white transition-colors">{t("footer.componentLinks.orchestrator")}</Link></li>
              <li><Link to="/components/process-executor" className="hover:text-white transition-colors">{t("footer.componentLinks.processExecutor")}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">{t("footer.resources")}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/usecases" className="hover:text-white transition-colors">{t("nav.useCases")}</Link></li>
              <li><Link to="/demo" className="hover:text-white transition-colors">{t("actions.contact")}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {t("footer.copyright")}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/mentions-legales" className="text-gray-400 hover:text-white text-sm transition-colors">{t("footer.legalNotice")}</Link>
            <Link to="/politique-confidentialite" className="text-gray-400 hover:text-white text-sm transition-colors">{t("footer.privacyPolicy")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
