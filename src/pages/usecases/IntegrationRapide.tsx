import { Zap, Database, Code, Workflow } from "lucide-react";

import UseCaseDetailPage from "./UseCaseDetailPage";

const IntegrationRapidePage = () => (
  <UseCaseDetailPage id="fastIntegration" icons={[Zap, Database, Code, Workflow]} />
);

export default IntegrationRapidePage;
