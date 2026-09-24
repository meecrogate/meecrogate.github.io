import { useTranslation } from "react-i18next";

import { DataTable, SectionHeading } from "./primitives";

interface IncludedRow {
  item: string;
  detail: string;
}

/** What every edition carries, whichever one is signed. */
const PricingIncluded = () => {
  const { t } = useTranslation("pricing");
  const rows = t("included.rows", { returnObjects: true }) as IncludedRow[];

  return (
    <section className="px-6 py-12" aria-labelledby="included-title">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("included.eyebrow")}
          title={t("included.title")}
          subtitle={t("included.subtitle")}
        />
        <DataTable
          columns={[{ label: t("included.headers.item") }, { label: t("included.headers.detail") }]}
          rows={rows.map((row) => [row.item, row.detail])}
        />
      </div>
    </section>
  );
};

export default PricingIncluded;
