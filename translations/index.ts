/* ------------------------
    Public Types
   ------------------------ */

export interface Translation {
  welcome: {
    title: string;
    subtitle: string;
    description: string;
  };
  environments: {
    title: string;
    subtitle: string;
    description: string;
    layout: {
      gallery: string;
      focus: string;
    };
  };
  artworks: {
    title: string;
    subtitle: string;
    description: string;
    layout: {
      gallery: string;
      adaptable: string;
    };
  };
  career: {
    title: string;
    education: {
      title: string;
      items: string[];
    };
    exhibitions: {
      title: string;
      items: string[];
    };
  };
  reviews: {
    title: string;
    quotes: Array<{
      text: string;
      author: string;
      source: string;
    }>;
  };
  contact: {
    title: string;
    description: string;
    phone: string;
    email: string;
    formNote: string;
  };
}

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
export type SupportedLanguage = (typeof supportedLanguages)[number];

export const defaultLanguage: SupportedLanguage = "ca";

export const languageNames: Record<SupportedLanguage, string> = {
  ca: "Català",
  es: "Español",
  en: "English",
};

/* ------------------------
    Translations internal MAP
   ------------------------ */

const TRANSLATIONS: Record<SupportedLanguage, Translation> = {
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
export const getTranslations = (lang: SupportedLanguage): Translation => {
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
