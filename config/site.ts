// /config/site.ts
import { SupportedLanguage, supportedLanguages } from "@/translations";

export const basePublicPaths = [
  "/",
  "/environments",
  "/artworks",
  "/career",
  "/reviews",
  "/contact",
] as const;

export type BaseRoute = (typeof basePublicPaths)[number];

export const siteConfig = {
  name: "Monica Cuén",
  description:
    "Artista versátil especializada en obras adaptables y personalizadas para espacios únicos. Con exposiciones internacionales y reconocida en prestigiosas revistas de arte y diseño.",

  basePublicPaths,

  getLocalizedPath: (path: BaseRoute, lang: SupportedLanguage) =>
    path === "/" ? `/${lang}` : `/${lang}${path}`,

  getAllLocalizedPublicPaths: (): string[] =>
    basePublicPaths.flatMap((path) =>
      supportedLanguages.map((lang) =>
        path === "/" ? `/${lang}` : `/${lang}${path}`,
      ),
    ),

  supportedLanguages,
};
