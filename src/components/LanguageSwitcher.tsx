import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale } from "@/i18n/useLocale";

interface LanguageSwitcherProps {
  /** `mobile` renders a full-width row for the burger menu. */
  variant?: "desktop" | "mobile";
  onSelect?: () => void;
}

const LanguageSwitcher = ({ variant = "desktop", onSelect }: LanguageSwitcherProps) => {
  const { t } = useTranslation("common");
  const { language, languages, changeLanguage } = useLocale();
  const current = languages.find((entry) => entry.code === language);

  const handleSelect = (code: string) => {
    changeLanguage(code);
    onSelect?.();
  };

  if (variant === "mobile") {
    return (
      <div className="px-3 py-2">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
          {t("language.label")}
        </div>
        <div className="flex gap-2">
          {languages.map((entry) => (
            <button
              key={entry.code}
              type="button"
              lang={entry.htmlLang}
              onClick={() => handleSelect(entry.code)}
              aria-current={entry.code === language ? "true" : undefined}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                entry.code === language
                  ? "text-blue-400 bg-blue-400/10"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {entry.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger
        aria-label={t("language.label")}
        className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-1 outline-none"
      >
        <Globe size={16} />
        {current?.shortLabel}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="bg-slate-800 border-gray-700 z-50">
        {languages.map((entry) => (
          <DropdownMenuItem
            key={entry.code}
            lang={entry.htmlLang}
            onSelect={() => handleSelect(entry.code)}
            className={`cursor-pointer ${
              entry.code === language ? "text-blue-400" : "text-gray-300 hover:text-white"
            }`}
          >
            {entry.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
