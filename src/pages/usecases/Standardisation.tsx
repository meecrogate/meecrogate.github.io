import { FileCheck, Users, BarChart, Settings } from "lucide-react";

import UseCaseDetailPage from "./UseCaseDetailPage";

const StandardisationPage = () => (
  <UseCaseDetailPage id="standardisation" icons={[FileCheck, Users, BarChart, Settings]} />
);

export default StandardisationPage;
