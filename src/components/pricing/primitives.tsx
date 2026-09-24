import type { ReactNode } from "react";

/**
 * The small set of shapes every pricing section is built from. The page is
 * mostly headings and tables, so keeping them here stops a dozen near-identical
 * class strings from drifting apart.
 */

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) => (
  <header className="mb-8">
    {eyebrow && (
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-orange mb-3">{eyebrow}</p>
    )}
    <h2 className="text-2xl sm:text-3xl font-bold text-brand-light">{title}</h2>
    {subtitle && <p className="mt-3 text-brand-light/70 max-w-3xl leading-relaxed">{subtitle}</p>}
  </header>
);

export const Panel = ({ className = "", children }: { className?: string; children: ReactNode }) => (
  <div className={`rounded-2xl border border-brand-light/10 bg-brand-dark/60 ${className}`}>{children}</div>
);

export interface Column {
  label: string;
  /** Right-aligned columns also get tabular numbers and no wrapping. */
  align?: "left" | "right";
}

export const DataTable = ({
  columns,
  rows,
  highlightLastRow = false,
  minWidth = 640,
}: {
  columns: Column[];
  rows: ReactNode[][];
  highlightLastRow?: boolean;
  minWidth?: number;
}) => (
  <div className="overflow-x-auto rounded-2xl border border-brand-light/10 bg-brand-dark/60">
    <table className="w-full border-collapse text-sm" style={{ minWidth }}>
      <thead>
        <tr className="bg-brand-light/5">
          {columns.map((column) => (
            <th
              key={column.label}
              scope="col"
              className={`whitespace-nowrap px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-light/50 ${
                column.align === "right" ? "text-right" : "text-left"
              }`}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((cells, rowIndex) => {
          const isLast = highlightLastRow && rowIndex === rows.length - 1;
          return (
            <tr
              key={rowIndex}
              className={`border-t border-brand-light/10 ${isLast ? "bg-brand-orange/5" : ""}`}
            >
              {cells.map((cell, cellIndex) => {
                const right = columns[cellIndex]?.align === "right";
                return (
                  <td
                    key={cellIndex}
                    className={[
                      "px-4 py-3 align-top",
                      cellIndex === 0 ? "font-semibold text-brand-light" : "text-brand-light/70",
                      right ? "text-right tabular-nums whitespace-nowrap" : "",
                      isLast ? "text-brand-orange font-bold" : "",
                    ].join(" ")}
                  >
                    {cell}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
