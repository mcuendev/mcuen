import ArtworkGrid from "@/components/artworks/artwork-grid";
import {
  H2Typo,
  H3Typo,
  LeadTypo,
} from "@/components/typography/TypographyComponents";
import { dataClient } from "@/lib/data-client";
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
  const artworks = await dataClient.getAll();
  // const artworks: ArtworkDocumentWithImage[] = [];

  return (
    <div>
      <H2Typo className="hidden">{t.artworks.title}</H2Typo>

      <H3Typo>{t.artworks.subtitle}</H3Typo>
      <LeadTypo>{t.artworks.description}</LeadTypo>

      <ArtworkGrid artworks={artworks} lang={lang} />
    </div>
  );
};
export default ArtworksPage;
