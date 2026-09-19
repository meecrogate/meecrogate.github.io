import { Building2, Clock, Shield, TrendingUp } from "lucide-react";

import CaseStudyPage from "./CaseStudyPage";

const BancaireCaseStudy = () => (
  <CaseStudyPage
    id="banking"
    icon={Building2}
    iconClassName="text-blue-400"
    metricIcons={[TrendingUp, Shield, Clock]}
  />
);

export default BancaireCaseStudy;
