import { AppTranslation, SupportedLanguage } from "./types";

/* ------------------------
    Locales import
   ------------------------ */
import { ca } from "./locales/ca";
import { es } from "./locales/es";
import { en } from "./locales/en";

/* ------------------------
    Names & Languages List
   ------------------------ */

export const supportedLanguages = ["ca", "es", "en"] as const;

export const defaultLanguage: SupportedLanguage = "ca";

export const languageNames: Record<SupportedLanguage, string> = {
  ca: "Català",
  es: "Español",
  en: "English",
};

/* ------------------------
    Translations internal MAP
   ------------------------ */

const TRANSLATIONS: Record<SupportedLanguage, AppTranslation> = {
  ca,
  es,
  en,
};

/* ------------------------
    Helpers
   ------------------------ */

/**
 * getTranslations(lang)
 * - Safe Type: constrains `lang` to SupportedLanguage.
 * - If language does not exist returns default.
 */
export const getTranslations = (lang: SupportedLanguage): AppTranslation => {
  return TRANSLATIONS[lang] ?? TRANSLATIONS[defaultLanguage];
};

/**
 * isSupportedLanguage
 */
export const isSupportedLanguage = (lang: string): lang is SupportedLanguage =>
  (supportedLanguages as readonly string[]).includes(lang);

/**
 * normalizeLang
 * - Extracts base language code (e.g., "es-ES" -> "es").
 * - Ensures it's one of the supported languages, otherwise falls back to default.
 */
export const normalizeLang = (raw: string): SupportedLanguage => {
  const base = raw.split(/[-_]/)[0] as SupportedLanguage;
  return supportedLanguages.includes(base) ? base : defaultLanguage;
};
