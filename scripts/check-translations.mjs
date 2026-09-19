#!/usr/bin/env node
/**
 * Compares every locale under src/i18n/locales against the reference
 * language and reports keys that are missing, extra, or left untranslated
 * (identical to the reference and long enough that it is unlikely to be a
 * brand name or a number).
 *
 * Run with `npm run i18n:check`. Exits non-zero when keys are missing or
 * extra, so it can gate a build; untranslated values are only warnings.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const LOCALES_DIR = new URL("../src/i18n/locales/", import.meta.url).pathname;
const REFERENCE = "fr";
/** Values shorter than this are ignored by the "untranslated" check. */
const MIN_LENGTH = 12;

const flatten = (value, prefix = "") => {
  if (Array.isArray(value)) {
    return value.flatMap((entry, index) => flatten(entry, `${prefix}[${index}]`));
  }
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, entry]) =>
      flatten(entry, prefix ? `${prefix}.${key}` : key),
    );
  }
  return [[prefix, String(value)]];
};

const readNamespace = (language, file) =>
  JSON.parse(readFileSync(join(LOCALES_DIR, language, file), "utf8"));

const languages = readdirSync(LOCALES_DIR).filter((entry) =>
  statSync(join(LOCALES_DIR, entry)).isDirectory(),
);

if (!languages.includes(REFERENCE)) {
  console.error(`Reference language "${REFERENCE}" not found in ${LOCALES_DIR}`);
  process.exit(1);
}

const referenceFiles = readdirSync(join(LOCALES_DIR, REFERENCE)).filter((file) =>
  file.endsWith(".json"),
);

let problems = 0;
let warnings = 0;

for (const language of languages) {
  if (language === REFERENCE) continue;

  const files = readdirSync(join(LOCALES_DIR, language)).filter((file) => file.endsWith(".json"));

  for (const file of referenceFiles) {
    if (!files.includes(file)) {
      console.error(`✗ ${language}: missing namespace ${file}`);
      problems += 1;
      continue;
    }

    const reference = new Map(flatten(readNamespace(REFERENCE, file)));
    const translation = new Map(flatten(readNamespace(language, file)));

    for (const [key, value] of reference) {
      if (!translation.has(key)) {
        console.error(`✗ ${language}/${file}: missing key ${key}`);
        problems += 1;
      } else if (value.length >= MIN_LENGTH && translation.get(key) === value) {
        console.warn(`! ${language}/${file}: ${key} is still the ${REFERENCE} text`);
        warnings += 1;
      }
    }

    for (const key of translation.keys()) {
      if (!reference.has(key)) {
        console.error(`✗ ${language}/${file}: key ${key} does not exist in ${REFERENCE}`);
        problems += 1;
      }
    }
  }

  for (const file of files) {
    if (!referenceFiles.includes(file)) {
      console.error(`✗ ${language}: namespace ${file} has no ${REFERENCE} counterpart`);
      problems += 1;
    }
  }
}

if (problems === 0) {
  console.log(
    `✓ translations are in sync across ${languages.join(", ")}` +
      (warnings ? ` (${warnings} value${warnings > 1 ? "s" : ""} still identical to ${REFERENCE})` : ""),
  );
}

process.exit(problems === 0 ? 0 : 1);
