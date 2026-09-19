
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Link } from "@/i18n/Link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import meecrogateLogoSvg from "@/assets/meecrogate-logo.svg";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { splitLanguagePath } from "@/i18n/paths";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation("common");

  // Compared without the language prefix, so a page is "active" in every language.
  const currentPath = splitLanguagePath(location.pathname).path;

  const navItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.features"), path: "/features" },
    { name: t("nav.architecture"), path: "/architecture" },
    { name: t("nav.service"), path: "/service" },
    { name: t("nav.pricing"), path: "/pricing" },
  ];

  const useCaseItems = [
    { name: t("nav.useCaseItems.apiPortals"), path: "/usecases/portails-api" },
    { name: t("nav.useCaseItems.fastIntegration"), path: "/usecases/integration-rapide" },
    { name: t("nav.useCaseItems.businessProcesses"), path: "/usecases/processus-metiers" },
    { name: t("nav.useCaseItems.orchestration"), path: "/usecases/orchestration" },
    { name: t("nav.useCaseItems.hybridDeployment"), path: "/usecases/deploiement-hybride" },
    { name: t("nav.useCaseItems.standardisation"), path: "/usecases/standardisation" },
  ];

  const clientProjectItems = [
    { name: t("nav.clientProjectItems.overview"), path: "/projets-clients" },
    { name: t("nav.clientProjectItems.banking"), path: "/projets-clients/bancaire" },
    { name: t("nav.clientProjectItems.ecommerce"), path: "/projets-clients/ecommerce" },
    { name: t("nav.clientProjectItems.health"), path: "/projets-clients/sante" },
  ];

  const isActive = (path: string) => currentPath === path;
  const isUseCaseActive = () => currentPath.includes('/usecases');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-gray-700 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={meecrogateLogoSvg}
                alt="Meecrogate"
                className="h-8 hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive(item.path)
                      ? "text-blue-400 bg-blue-400/10"
                      : "text-gray-300 hover:text-white"
                    }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Solutions dropdown */}
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 outline-none ${isUseCaseActive() || currentPath.includes('/projets-clients')
                    ? "text-blue-400 bg-blue-400/10"
                    : "text-gray-300 hover:text-white"
                  }`}>
                  {t("nav.solutions")}
                  <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" sideOffset={8} className="bg-slate-800 border-gray-700 z-50">
                  <div className="px-2 py-1">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                      {t("nav.useCases")}
                    </div>
                    <DropdownMenuItem asChild>
                      <Link
                        to="/usecases"
                        className="text-gray-300 hover:text-white w-full"
                      >
                        {t("nav.overview")}
                      </Link>
                    </DropdownMenuItem>
                    {useCaseItems.map((item) => (
                      <DropdownMenuItem key={item.path} asChild>
                        <Link
                          to={item.path}
                          className="text-gray-300 hover:text-white w-full"
                        >
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                  <div className="border-t border-gray-700 my-1"></div>
                  <div className="px-2 py-1">
                    <DropdownMenuItem asChild>
                      <Link
                        to="/comparatifs"
                        className="text-gray-300 hover:text-white w-full font-medium"
                      >
                        {t("nav.comparisons")}
                      </Link>
                    </DropdownMenuItem>
                  </div>
                  {/*  
                 <div className="border-t border-gray-700 my-1"></div>
                  <div className="px-2 py-1">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                      {t("nav.clientProjects")}
                    </div>
                    {clientProjectItems.map((item) => (
                      <DropdownMenuItem key={item.path} asChild>
                        <Link
                          to={item.path}
                          className="text-gray-300 hover:text-white w-full"
                        >
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div> 
                  
                  */}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Language switcher + CTA Button */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />
            <Link to="/demo">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                {t("actions.requestDemo")}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 ${isActive(item.path)
                      ? "text-blue-400 bg-blue-400/10"
                      : "text-gray-300 hover:text-white"
                    }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="px-3 py-2">
                <div className="text-gray-400 text-sm font-medium mb-2">{t("nav.solutions")}</div>

                <div className="mb-3">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    {t("nav.useCases")}
                  </div>
                  <Link
                    to="/usecases"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-1 text-gray-300 hover:text-white text-sm"
                  >
                    {t("nav.overview")}
                  </Link>
                  {useCaseItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-1 text-gray-300 hover:text-white text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="border-t border-gray-700 my-1"></div>
                <div className="px-2 py-1">
                  <Link
                    to="/comparatifs"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-300 hover:text-white w-full font-medium"
                  >
                    {t("nav.comparisons")}
                  </Link>

                </div>

                {/* 
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    {t("nav.clientProjects")}
                  </div>
                  {clientProjectItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-3 py-1 text-gray-300 hover:text-white text-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                */}
              </div>

              <div className="border-t border-gray-700 my-1"></div>
              <LanguageSwitcher variant="mobile" onSelect={() => setIsMenuOpen(false)} />

              <div className="pt-2">
                <Link to="/demo" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                    {t("actions.requestDemo")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
