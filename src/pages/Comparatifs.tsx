import { useTranslation } from "react-i18next";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";

type Status = "good" | "warning" | "bad";

const StatusIcon = ({ status }: { status: Status }) => {
  if (status === "good") return <CheckCircle className="w-5 h-5 text-emerald-400 inline-block" />;
  if (status === "warning") return <AlertTriangle className="w-5 h-5 text-yellow-400 inline-block" />;
  return <XCircle className="w-5 h-5 text-red-400 inline-block" />;
};

/** Cell wording lives in the `comparatifs` namespace. */
interface Row {
  feature: string;
  gravitee: string;
  kong: string;
  cloud: string;
  meecrogate: string;
}

/**
 * Verdicts for the sovereignty table, in the same order as its rows.
 * They are a judgement, not wording, so they stay out of the translations.
 */
const sovereigntyStatuses: Record<keyof Omit<Row, "feature">, Status>[] = [
  { gravitee: "good", kong: "warning", cloud: "bad", meecrogate: "good" },
  { gravitee: "good", kong: "warning", cloud: "bad", meecrogate: "good" },
  { gravitee: "bad", kong: "warning", cloud: "bad", meecrogate: "good" },
  { gravitee: "warning", kong: "warning", cloud: "bad", meecrogate: "good" },
];

const ComparatifsPage = () => {
  const { t } = useTranslation("comparatifs");

  const techRows = t("technical.rows", { returnObjects: true }) as Row[];
  const sovereigntyRows = t("sovereignty.rows", { returnObjects: true }) as Row[];

  const renderHead = (section: "technical" | "sovereignty") => (
    <TableHeader>
      <TableRow className="border-gray-700 hover:bg-transparent">
        <TableHead className="text-gray-400 font-semibold min-w-[180px]">{t(`${section}.headers.feature`)}</TableHead>
        <TableHead className="text-gray-400 font-semibold">{t(`${section}.headers.gravitee`)}</TableHead>
        <TableHead className="text-gray-400 font-semibold">{t(`${section}.headers.kong`)}</TableHead>
        <TableHead className="text-gray-400 font-semibold">{t(`${section}.headers.cloud`)}</TableHead>
        <TableHead className="text-blue-400 font-bold">{t(`${section}.headers.meecrogate`)}</TableHead>
      </TableRow>
    </TableHeader>
  );

  return (
    <div className="min-h-screen bg-slate-900">
      <Seo title={t("seo.title")} description={t("seo.description")} />
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-3">
              {t("title")}
            </h1>
            <div className="w-16 h-1 bg-indigo-500 rounded-sm mx-auto mb-6"></div>
            <p className="text-xl text-brand-orange font-extrabold max-w-3xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          {/* Table 1: Technical Comparison */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">{t("technical.title")}</h2>
            <div className="rounded-xl border border-gray-700 overflow-hidden bg-gray-800/50 backdrop-blur-sm">
              <Table>
                {renderHead("technical")}
                <TableBody>
                  {techRows.map((row) => (
                    <TableRow key={row.feature} className="border-gray-700 hover:bg-gray-700/30">
                      <TableCell className="font-medium text-white">{row.feature}</TableCell>
                      <TableCell className="text-gray-300">{row.gravitee}</TableCell>
                      <TableCell className="text-gray-300">{row.kong}</TableCell>
                      <TableCell className="text-gray-300">{row.cloud}</TableCell>
                      <TableCell className="text-blue-300 font-medium bg-blue-500/5">{row.meecrogate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Table 2: Sovereignty Comparison */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">{t("sovereignty.title")}</h2>
            <div className="rounded-xl border border-gray-700 overflow-hidden bg-gray-800/50 backdrop-blur-sm">
              <Table>
                {renderHead("sovereignty")}
                <TableBody>
                  {sovereigntyRows.map((row, i) => {
                    const status = sovereigntyStatuses[i];
                    return (
                      <TableRow key={row.feature} className="border-gray-700 hover:bg-gray-700/30">
                        <TableCell className="font-medium text-white">{row.feature}</TableCell>
                        <TableCell className="text-gray-300">
                          <StatusIcon status={status.gravitee} /> <span className="ml-1">{row.gravitee}</span>
                        </TableCell>
                        <TableCell className="text-gray-300">
                          <StatusIcon status={status.kong} /> <span className="ml-1">{row.kong}</span>
                        </TableCell>
                        <TableCell className="text-gray-300">
                          <StatusIcon status={status.cloud} /> <span className="ml-1">{row.cloud}</span>
                        </TableCell>
                        <TableCell className="text-blue-300 font-medium bg-blue-500/5">
                          <StatusIcon status={status.meecrogate} /> <span className="ml-1">{row.meecrogate}</span>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComparatifsPage;
