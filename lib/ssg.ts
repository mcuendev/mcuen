import { supportedLanguages, SupportedLanguage } from "@/translations";

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
