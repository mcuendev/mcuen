import ArtworkFilters from "@/components/artworks/artwork-filters";
import ArtworkGrid from "@/components/artworks/artwork-grid";
import PageHeader from "@/components/layout/PageHeader";
import { siteConfig } from "@/config/site";
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
  searchParams: Promise<{ search?: string }>;
}

const ArtworksPage = async ({ params, searchParams }: ArtworksPageProps) => {
  const { lang } = await params;
  const { search = "" } = await searchParams;

  const t = getTranslations(lang);

  const artworks = await artworkDataClient.search(search);
  // const artworks: ArtworkDocumentWithImage[] = []; // to test empty page

  return (
    <div className="flex flex-col space-y-8">
      <PageHeader
        title={t.artworks.subtitle}
        descritpion={t.artworks.description}
        note={t.artworks.note}
        button={{ href: `/${lang}/contact`, text: t.ui.buttons.contactArtist }}
      />

      {siteConfig.showSearchFilters && (
        <ArtworkFilters lang={lang} searchValue={search} />
      )}

      <ArtworkGrid artworks={artworks} lang={lang} />
    </div>
  );
};
export default ArtworksPage;
