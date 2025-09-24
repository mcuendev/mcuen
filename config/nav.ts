import { Translation } from "@/translations/intl";

// Define un tipo para los items de navegación que necesitan traducción
export interface TranslatedNavItem {
  type: "translated";
  titleKey: keyof Translation;
  href: string;
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
  { type: "translated", titleKey: "welcome", href: "/" },
  { type: "translated", titleKey: "artworks", href: "/artworks" },
  { type: "translated", titleKey: "environments", href: "/environments" },
  { type: "translated", titleKey: "career", href: "/career" },
  { type: "translated", titleKey: "reviews", href: "/reviews" },
  { type: "translated", titleKey: "contact", href: "/contact" },
];

// Items de navegación administrativos (texto estático)
const adminNavItems: StaticNavItem[] = [
  { type: "static", title: "Dashboard", href: "/dashboard", showAdmin: true },
];

// Exporta todos los items de navegación combinados
export const navItems: NavItem[] = [...publicNavItems, ...adminNavItems];
