import ArtworkFilters from "@/components/artworks/artwork-filters";
import ArtworkGrid from "@/components/artworks/artwork-grid";
import PageHeader from "@/components/layout/PageHeader";
import { artworkDataClient } from "@/lib/artwork-data-client";
import {
  LangParams,
  makeGenerateStaticParamsForLanguages,
  PageParams,
} from "@/lib/ssg";
import { getTranslations } from "@/translations";

export const generateStaticParams = makeGenerateStaticParamsForLanguages();
export const revalidate = 604800;

interface ArtworksPageProps extends PageParams<LangParams> {
  searchParams: Promise<{ search?: string; collection?: string }>;
}

const ArtworksPage = async ({ params, searchParams }: ArtworksPageProps) => {
  const { lang } = await params;
  const { search = "", collection = "all" } = await searchParams;

  const t = getTranslations(lang);

  const artworks = await artworkDataClient.search(search, collection);
  // const artworks: ArtworkDocumentWithImage[] = []; // to test empty page
  const allArtworks = await artworkDataClient.getAll();

  // TODO: get collections from dataClient
  const collections = Array.from(
    new Set(allArtworks.map((artwork) => artwork.collection)),
  ).sort();

  return (
    <div className="flex flex-col space-y-8">
      <PageHeader
        title={t.artworks.subtitle}
        descritpion={t.artworks.description}
      />

      <ArtworkFilters
        lang={lang}
        collections={collections}
        collectionValue={collection}
        searchValue={search}
      />

      <ArtworkGrid artworks={artworks} lang={lang} />
    </div>
  );
};
export default ArtworksPage;
