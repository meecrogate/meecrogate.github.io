
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Fonctionnalités", path: "/features" },
    { name: "Architecture", path: "/architecture" },
    { name: "Bénéfices", path: "/benefits" },
  ];

  const useCaseItems = [
    { name: "Portails API", path: "/usecases/portails-api" },
    { name: "Intégration rapide", path: "/usecases/integration-rapide" },
    { name: "Processus métiers", path: "/usecases/processus-metiers" },
    { name: "Orchestration intelligente", path: "/usecases/orchestration" },
    { name: "Déploiement hybride", path: "/usecases/deploiement-hybride" },
    { name: "Standardisation API", path: "/usecases/standardisation" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isUseCaseActive = () => location.pathname.includes('/usecases');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">🟦 Meecrogate</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-blue-400 bg-blue-400/10"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Cas d'usage dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                  isUseCaseActive()
                    ? "text-blue-400 bg-blue-400/10"
                    : "text-gray-300 hover:text-white"
                }`}>
                  Cas d'usage
                  <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-slate-800 border-gray-700">
                  <DropdownMenuItem asChild>
                    <Link
                      to="/usecases"
                      className="text-gray-300 hover:text-white w-full"
                    >
                      Vue d'ensemble
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
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/demo">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Demander une démo
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
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
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-blue-400 bg-blue-400/10"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="px-3 py-2">
                <div className="text-gray-400 text-sm font-medium mb-2">Cas d'usage</div>
                <Link
                  to="/usecases"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-1 text-gray-300 hover:text-white text-sm"
                >
                  Vue d'ensemble
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
              
              <div className="pt-2">
                <Link to="/demo" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                    Demander une démo
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
