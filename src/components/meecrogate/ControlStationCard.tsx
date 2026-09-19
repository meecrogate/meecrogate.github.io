import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/Link";
import controlStationImg from "@/assets/control-station-hero.jpg";

const ControlStationCard = () => {
  const { t } = useTranslation("home");

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700 mb-16 relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={controlStationImg} 
          alt={t("controlStation.imageAlt")}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center relative z-10">
        <div className="lg:w-2/3 text-center lg:text-left mb-6 lg:mb-0">
          <h2 className="text-4xl font-extrabold text-white mb-3">
            {t("controlStation.title")}
          </h2>
          <p className="text-xl text-gray-300 max-w-xl">
            {t("controlStation.description")}
          </p>
        </div>
        <div className="lg:w-1/3 flex justify-center lg:justify-end">
          <Link to="/control-station">
            <Button size="lg" className="bg-[#FFB300] text-gray-900 px-8 py-4 text-lg h-auto font-semibold hover:bg-[#FFB300]/90">
              {t("controlStation.cta")}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ControlStationCard;
