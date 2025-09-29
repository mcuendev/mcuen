// /config/nav.ts
import type { Translation } from "@/translations";
import type { SupportedLanguage } from "@/translations";
import { siteConfig } from "./site";

/* ---------------------------
    Types of nav items (source)
   --------------------------- */

/** Item translated using a key from the translation file (server-side) */
export interface TranslatedNavItem {
  type: "translated";
  titleKey: keyof Translation;
  baseHref: import("./site").BaseRoute;
  showAdmin?: boolean;
}

/** Item with absolute text (non-internationalized) */
export interface StaticNavItem {
  type: "static";
  title: string;
  href: string;
  showAdmin?: boolean;
}

/** Union of input types (what you define in config) */
export type NavItem = TranslatedNavItem | StaticNavItem;

/* ------------------------------------------------
    Final type consumed by components (with href)
   ------------------------------------------------ */

/** NavItem already resolved with `href` (final list for rendering) */
export type NavItemWithHref =
  | (TranslatedNavItem & { href: string })
  | StaticNavItem; // already has href

/* ---------------------------
    Definition of items (source)
   --------------------------- */

/** Public items: use keys from the translation file */
export const publicNavItems: TranslatedNavItem[] = [
  { type: "translated", titleKey: "welcome", baseHref: "/" },
  { type: "translated", titleKey: "artworks", baseHref: "/artworks" },
  { type: "translated", titleKey: "environments", baseHref: "/environments" },
  { type: "translated", titleKey: "career", baseHref: "/career" },
  { type: "translated", titleKey: "reviews", baseHref: "/reviews" },
  { type: "translated", titleKey: "contact", baseHref: "/contact" },
];

/** Administrative / private items (static text) */
export const adminNavItems: StaticNavItem[] = [
  {
    type: "static",
    title: "Dashboard",
    href: "/private/dashboard",
    showAdmin: true,
  },
];

/** Export all «raw» items in case you want to use them in tests or generation */
export const defaultNavItems: NavItem[] = [...publicNavItems, ...adminNavItems];

/* ---------------------------
    Helpers for generating hrefs
   --------------------------- */

/**
 * Generates the list of NavItemWithHref for a specific language.
 * - Translates baseHref -> href using siteConfig.getLocalizedPath.
 * - Concatenates static items as is.
 */
export const getLocalizedNavItems = (
  lang: SupportedLanguage,
): NavItemWithHref[] => {
  const translatedResolved: (TranslatedNavItem & { href: string })[] =
    publicNavItems.map((item) => ({
      ...item,
      href: siteConfig.getLocalizedPath(item.baseHref, lang),
    }));

  return [...translatedResolved, ...adminNavItems];
};
