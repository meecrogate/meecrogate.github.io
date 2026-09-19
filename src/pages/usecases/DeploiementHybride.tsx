import { Cloud, Server, Shield, Repeat } from "lucide-react";

import UseCaseDetailPage from "./UseCaseDetailPage";

const DeploiementHybridePage = () => (
  <UseCaseDetailPage id="hybridDeployment" icons={[Cloud, Server, Shield, Repeat]} />
);

export default DeploiementHybridePage;
