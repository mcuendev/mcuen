import { supportedLanguages } from "@/translations";
import { SupportedLanguage } from "@/translations/types";

/**
 * Generic page params wrapper type.
 * Usage: type Props = PageParams<{ lang: SupportedLanguage }>
 */
export type PageParams<P extends Record<string, string>> = {
  params: Promise<P>;
};

/** Concrete alias for the common { lang } case */
export type LangParams = { lang: SupportedLanguage };

/**
 * makeGenerateStaticParamsForLanguages
 * Returns a generateStaticParams function that yields one params object per supported language.
 *
 * Example usage in a page:
 * export const generateStaticParams = makeGenerateStaticParamsForLanguages();
 */
export const makeGenerateStaticParamsForLanguages =
  () => async (): Promise<LangParams[]> =>
    supportedLanguages.map((lang) => ({ lang }));

/**
 * makeGenerateStaticParamsFromProvider
 *
 * Generic helper to build generateStaticParams from a provider + mapper.
 *
 * - provider: either a static array or an async function returning an array of items T.
 * - mapper: maps each item T -> P where P is the params object (e.g. { id: string } or { lang, id }).
 *
 * Returns a function suitable to assign to `export const generateStaticParams`.
 *
 * Example:
 * const provider = async () => [{ id: "a" }, { id: "b" }];
 * export const generateStaticParams = makeGenerateStaticParamsFromProvider(provider, i => ({ id: i.id }));
 */
export function makeGenerateStaticParamsFromProvider<
  T,
  P extends Record<string, string>,
>(provider: T[] | (() => Promise<T[]>), mapper: (item: T) => P | P[]) {
  return async function generateStaticParams(): Promise<P[]> {
    const list = Array.isArray(provider) ? provider : await provider();
    return list.flatMap((item) => {
      const mapped = mapper(item);
      return Array.isArray(mapped) ? mapped : [mapped];
    });
  };
}

// type GenMetaParams<P extends Record<string, string>> = {
//   params: P;
// };

// /**
//  * makeGenerateMetadataFromTranslations
//  *
//  * Crea una función `generateMetadata` para pages/layouts de Next que:
//  * - carga las traducciones vía `getTranslations(lang)`
//  * - llama a `mapper(t, params)` para obtener overrides específicos
//  * - garantiza un title/description por defecto desde las traducciones
//  * - construye alternates.languages con las rutas base por idioma ("/ca", "/es", "/en")
//  *
//  * mapper puede devolver cualquier parte de Metadata y será mergeado con los defaults.
//  */
// export function makeGenerateMetadataFromTranslations<
//   P extends { lang: SupportedLanguage } = { lang: SupportedLanguage },
// >(
//   mapper: (
//     t: AppTranslation,
//     params?: P,
//   ) => Partial<Metadata> | Promise<Partial<Metadata>>,
// ) {
//   return async function generateMetadata(
//     ctx: GenMetaParams<P>,
//   ): Promise<Metadata> {
//     const lang = (ctx?.params?.lang ?? defaultLanguage) as SupportedLanguage;
//     const t = getTranslations(lang);

//     const overrides = (await mapper(t, ctx.params as P)) ?? {};

//     // Defaults sencillos: title/description tomados desde las traducciones de negocio.
//     const defaultTitle = t.welcome?.title ?? "";
//     const defaultDescription = t.welcome?.description ?? "";

//     // Alternates: aquí construimos una mapping simple /<lang> — ajústalo si tu canonical path es distinto
//     const alternatesLanguages: Record<string, string> =
//       supportedLanguages.reduce(
//         (acc, l) => {
//           acc[l] = `/${l}`;
//           return acc;
//         },
//         {} as Record<string, string>,
//       );

//     const meta: Metadata = {
//       title: overrides.title ?? defaultTitle,
//       description: overrides.description ?? defaultDescription,
//       alternates: {
//         languages: alternatesLanguages,
//       },
//       // Mergea otros campos devueltos por mapper (openGraph, twitter, manifest, icons, robots, etc.)
//       ...overrides,
//     };

//     return meta;
//   };
// }

// /* ------------------------
//     Ejemplo de uso
//    ------------------------ */

// /*
//   En una page server component (app/[lang]/page.tsx) puedes hacer:

//   export const generateMetadata = makeGenerateMetadataFromTranslations(({ welcome }) => ({
//     title: `${welcome.title} — Mónica Cuén`,
//     description: welcome.description,
//     openGraph: {
//       title: `${welcome.title} — Mónica Cuén`,
//       description: welcome.description,
//       // ...otros campos OG
//     },
//   }));

//   O si necesitas usar params adicionales:
//   export const generateMetadata = makeGenerateMetadataFromTranslations((t, params) => {
//     // params.lang ya disponible
//     return { title: `${t.welcome.title} — ${params.lang}` };
//   });
// */
