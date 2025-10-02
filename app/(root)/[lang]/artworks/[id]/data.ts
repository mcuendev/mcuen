import { api } from "@/convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { Doc, Id } from "@/convex/_generated/dataModel";
import { SupportedLanguage, supportedLanguages } from "@/translations";
import { makeGenerateStaticParamsFromProvider } from "@/lib/ssg";

const provider = async () => {
  const artworks = await fetchQuery(api.artworks.queries.listArtworks);
  return artworks;
};

const mapper = (artwork: Doc<"artworks">) => {
  const id = String(artwork._id);
  return supportedLanguages.map((lang: SupportedLanguage) => ({
    lang,
    id,
  }));
};

export const generateStaticParams = makeGenerateStaticParamsFromProvider(
  provider,
  mapper,
);

export const getArtworkById = async (id: Id<"artworks">) =>
  await fetchQuery(api.artworks.queries.getArtwork, { id });
