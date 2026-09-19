import { Activity, Clock, Heart, Users } from "lucide-react";

import CaseStudyPage from "./CaseStudyPage";

const SanteCaseStudy = () => (
  <CaseStudyPage
    id="health"
    icon={Heart}
    iconClassName="text-red-400"
    metricIcons={[Users, Clock, Activity]}
  />
);

export default SanteCaseStudy;
