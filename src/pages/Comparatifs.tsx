
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";

const StatusIcon = ({ status }: { status: "good" | "warning" | "bad" }) => {
  if (status === "good") return <CheckCircle className="w-5 h-5 text-emerald-400 inline-block" />;
  if (status === "warning") return <AlertTriangle className="w-5 h-5 text-yellow-400 inline-block" />;
  return <XCircle className="w-5 h-5 text-red-400 inline-block" />;
};

const techRows = [
  { feature: "Philosophie", gravitee: "Monolithique / Riche", kong: "Performance / DevOps", cloud: "Écosystème captif (Lock-in)", meecrogate: "Lean / Modulaire" },
  { feature: "Poids & Ressources", gravitee: "Lourd (JVM / RAM++)", kong: "Léger (Lua-Nginx / Go)", cloud: "Géré par le Cloud", meecrogate: "Ultra-Léger (Go-based)" },
  { feature: "Mode de Déploiement", gravitee: "VM / K8s", kong: "VM / K8s / Docker", cloud: "Cloud Only", meecrogate: "VM, K8s & Cloud Agnostic" },
  { feature: "Approche Config", gravitee: "UI de gestion dense", kong: "YAML / CLI / Scripts Lua", cloud: "Console Cloud / Terraform", meecrogate: "Low-Code Visuel" },
  { feature: "Audibilité", gravitee: "Binaire / Base de données", kong: "YAML complexe", cloud: "Propriétaire", meecrogate: "JSON Humain & Auditable" },
  { feature: "GitOps Ready", gravitee: "Difficile (Stateful)", kong: "Oui (Déclaratif)", cloud: "Moyen (via IaC lourd)", meecrogate: "Natif (JSON versionnable)" },
  { feature: "Indépendance", gravitee: "Souverain mais lourd", kong: "Agnostique", cloud: "Cloud Lock-in total", meecrogate: "100% Cloud Agnostic" },
];

const sovereigntyRows = [
  { feature: "Souveraineté Cloud", gravitee: { text: "Très élevée (Self-hosted)", status: "good" as const }, kong: { text: "Moyenne (Éditeur US)", status: "warning" as const }, cloud: { text: "Nulle (Cloud Act)", status: "bad" as const }, meecrogate: { text: "Maximale (Agnostique)", status: "good" as const } },
  { feature: "Data Privacy (RGPD)", gravitee: { text: "Localisation totale", status: "good" as const }, kong: { text: "Flux de contrôle US", status: "warning" as const }, cloud: { text: "Métadonnées aux US", status: "bad" as const }, meecrogate: { text: "Full Local / On-Prem", status: "good" as const } },
  { feature: "Auditabilité Config", gravitee: { text: "Base de données (Blob)", status: "bad" as const }, kong: { text: "YAML (Verbeux)", status: "warning" as const }, cloud: { text: "Interface Cloud", status: "bad" as const }, meecrogate: { text: "JSON Human-Readable", status: "good" as const } },
  { feature: "Pérennité (Lock-in)", gravitee: { text: "Dépendance JVM/Stack", status: "warning" as const }, kong: { text: "Dépendance Plugins", status: "warning" as const }, cloud: { text: "Verrouillage total", status: "bad" as const }, meecrogate: { text: "Réversibilité Totale", status: "good" as const } },
];

const ComparatifsPage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-indigo-500 mx-auto mb-6"></div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Comparatifs
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez comment Meecrogate se positionne face aux principales solutions du marché
            </p>
          </div>

          {/* Table 1: Technical Comparison */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Comparatif technique</h2>
            <div className="rounded-xl border border-gray-700 overflow-hidden bg-gray-800/50 backdrop-blur-sm">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700 hover:bg-transparent">
                    <TableHead className="text-gray-400 font-semibold min-w-[180px]">Caractéristique</TableHead>
                    <TableHead className="text-gray-400 font-semibold">Solutions Java (Gravitee)</TableHead>
                    <TableHead className="text-gray-400 font-semibold">API Gateways (Kong / APISIX)</TableHead>
                    <TableHead className="text-gray-400 font-semibold">Cloud Native (AWS / Apigee)</TableHead>
                    <TableHead className="text-blue-400 font-bold">Meecrogate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {techRows.map((row, i) => (
                    <TableRow key={i} className="border-gray-700 hover:bg-gray-700/30">
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
            <h2 className="text-3xl font-bold text-white mb-8">Souveraineté & Conformité</h2>
            <div className="rounded-xl border border-gray-700 overflow-hidden bg-gray-800/50 backdrop-blur-sm">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-700 hover:bg-transparent">
                    <TableHead className="text-gray-400 font-semibold min-w-[180px]">Caractéristique</TableHead>
                    <TableHead className="text-gray-400 font-semibold">Solutions Java (Gravitee)</TableHead>
                    <TableHead className="text-gray-400 font-semibold">API Gateways (Kong)</TableHead>
                    <TableHead className="text-gray-400 font-semibold">Cloud US (AWS / Apigee)</TableHead>
                    <TableHead className="text-blue-400 font-bold">Meecrogate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sovereigntyRows.map((row, i) => (
                    <TableRow key={i} className="border-gray-700 hover:bg-gray-700/30">
                      <TableCell className="font-medium text-white">{row.feature}</TableCell>
                      <TableCell className="text-gray-300">
                        <StatusIcon status={row.gravitee.status} /> <span className="ml-1">{row.gravitee.text}</span>
                      </TableCell>
                      <TableCell className="text-gray-300">
                        <StatusIcon status={row.kong.status} /> <span className="ml-1">{row.kong.text}</span>
                      </TableCell>
                      <TableCell className="text-gray-300">
                        <StatusIcon status={row.cloud.status} /> <span className="ml-1">{row.cloud.text}</span>
                      </TableCell>
                      <TableCell className="text-blue-300 font-medium bg-blue-500/5">
                        <StatusIcon status={row.meecrogate.status} /> <span className="ml-1">{row.meecrogate.text}</span>
                      </TableCell>
                    </TableRow>
                  ))}
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
