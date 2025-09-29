import { Translation } from "@/translations/intl";
import { BaseRoute, siteConfig } from "./site";

// Define un tipo para los items de navegación que necesitan traducción
export interface TranslatedNavItem {
  type: "translated";
  titleKey: keyof Translation;
  baseHref: BaseRoute;
  showAdmin?: boolean;
}

// Define un tipo para los items de navegación con texto estático
export interface StaticNavItem {
  type: "static";
  title: string;
  href: string;
  showAdmin?: boolean;
}

// Tipo unión para todos los tipos de items de navegación
export type NavItem = TranslatedNavItem | StaticNavItem;

// Items de navegación públicos (necesitan traducción)
const publicNavItems: TranslatedNavItem[] = [
  { type: "translated", titleKey: "welcome", baseHref: "/" },
  { type: "translated", titleKey: "artworks", baseHref: "/artworks" },
  { type: "translated", titleKey: "environments", baseHref: "/environments" },
  { type: "translated", titleKey: "career", baseHref: "/career" },
  { type: "translated", titleKey: "reviews", baseHref: "/reviews" },
  { type: "translated", titleKey: "contact", baseHref: "/contact" },
];

// Items de navegación administrativos (texto estático)
const adminNavItems: StaticNavItem[] = [
  {
    type: "static",
    title: "Dashboard",
    href: "/private/dashboard",
    showAdmin: true,
  },
];

// Helper function to get localized navigation items
export const getLocalizedNavItems = (
  lang: string,
): (TranslatedNavItem | StaticNavItem)[] => {
  return [
    ...publicNavItems.map((item) => ({
      ...item,
      href: siteConfig.getLocalizedPath(item.baseHref, lang),
    })),
    ...adminNavItems,
  ];
};

// Exporta todos los items de navegación
export const navItems = publicNavItems;
