import { Shield, Users, BarChart3, Lock } from "lucide-react";

import UseCaseDetailPage from "./UseCaseDetailPage";

const PortailsApiPage = () => (
  <UseCaseDetailPage id="apiPortals" icons={[Shield, Users, BarChart3, Lock]} />
);

export default PortailsApiPage;
