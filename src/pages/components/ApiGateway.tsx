import { Shield, Zap, BarChart3, Settings, Lock, Globe, Network } from "lucide-react";

import ComponentDetailPage from "./ComponentDetailPage";

const ApiGatewayPage = () => (
  <ComponentDetailPage
    id="apiGateway"
    hero={{ icon: Network, accent: "blue" }}
    benefitIcons={[Shield, Zap, BarChart3]}
    featureIcons={[Lock, Settings, Globe, Zap, BarChart3, Shield]}
  />
);

export default ApiGatewayPage;
