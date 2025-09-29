import { supportedLanguages } from "@/translations/intl";

// Rutas base sin idioma
const basePublicPaths = [
  "/",
  "/environments",
  "/artworks",
  "/career",
  "/reviews",
  "/contact",
] as const;

// Tipo para las rutas base
export type BaseRoute = (typeof basePublicPaths)[number];

export const siteConfig = {
  name: "Monica Cuén",
  description:
    "Artista versátil especializada en obras adaptables y personalizadas para espacios únicos. Con exposiciones internacionales y reconocida en prestigiosas revistas de arte y diseño.",
  basePublicPaths,
  // Generamos las rutas con los idiomas
  publicPaths: basePublicPaths.flatMap((path) =>
    supportedLanguages.map((lang) => `/${lang}${path}`),
  ),
  // Función helper para generar rutas localizadas
  getLocalizedPath: (path: BaseRoute, lang: string) => `/${lang}${path}`,
};
