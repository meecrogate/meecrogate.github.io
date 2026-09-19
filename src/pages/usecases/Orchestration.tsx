import { Network, Shuffle, Filter, Layers } from "lucide-react";

import UseCaseDetailPage from "./UseCaseDetailPage";

const OrchestrationPage = () => (
  <UseCaseDetailPage id="orchestration" icons={[Network, Shuffle, Filter, Layers]} />
);

export default OrchestrationPage;
