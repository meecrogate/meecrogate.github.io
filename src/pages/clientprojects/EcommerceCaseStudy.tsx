import { Package, ShoppingCart, TrendingUp, Zap } from "lucide-react";

import CaseStudyPage from "./CaseStudyPage";

const EcommerceCaseStudy = () => (
  <CaseStudyPage
    id="ecommerce"
    icon={ShoppingCart}
    iconClassName="text-green-400"
    metricIcons={[TrendingUp, Package, Zap]}
  />
);

export default EcommerceCaseStudy;
