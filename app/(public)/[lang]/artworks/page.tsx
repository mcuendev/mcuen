import ArtworkGrid from "@/components/artworks/artwork-grid";
import PageHeader from "@/components/layout/PageHeader";
import { artworkDataClient } from "@/lib/artwork-data-client";
import {
  LangParams,
  makeGenerateStaticParamsForLanguages,
  PageParams,
} from "@/lib/ssg";
import { getTranslations } from "@/translations";

export const dynamic = "force-static";
export const generateStaticParams = makeGenerateStaticParamsForLanguages();
export const revalidate = 604800;

type ArtworksPageProps = PageParams<LangParams>;

const ArtworksPage = async ({ params }: ArtworksPageProps) => {
  const { lang } = await params;
  const t = getTranslations(lang);
  const artworks = await artworkDataClient.getAll();
  // const artworks: ArtworkDocumentWithImage[] = []; // to test empty page

  return (
    <div className="flex flex-col space-y-8">
      <PageHeader
        title={t.artworks.subtitle}
        descritpion={t.artworks.description}
      />

      <ArtworkGrid artworks={artworks} lang={lang} />
    </div>
  );
};
export default ArtworksPage;
