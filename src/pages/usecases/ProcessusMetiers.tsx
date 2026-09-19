import { GitBranch, Play, CheckCircle, Clock } from "lucide-react";

import UseCaseDetailPage from "./UseCaseDetailPage";

const ProcessusMetiersPage = () => (
  <UseCaseDetailPage id="businessProcesses" icons={[GitBranch, Play, CheckCircle, Clock]} />
);

export default ProcessusMetiersPage;
