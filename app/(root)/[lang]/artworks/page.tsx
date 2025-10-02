import {
  H2Typo,
  H3Typo,
  LeadTypo,
} from "@/components/typography/TypographyComponents";
import { api } from "@/convex/_generated/api";
import {
  LangParams,
  makeGenerateStaticParamsForLanguages,
  PageParams,
} from "@/lib/ssg";
import { getTranslations } from "@/translations";
import { fetchQuery } from "convex/nextjs";

export const dynamic = "force-static";
export const generateStaticParams = makeGenerateStaticParamsForLanguages();
export const revalidate = 604800;

type ArtworksPageProps = PageParams<LangParams>;

const ArtworksPage = async ({ params }: ArtworksPageProps) => {
  const { lang } = await params;
  const t = getTranslations(lang);
  const artworks = await fetchQuery(api.artworks.queries.listArtworks);

  return (
    <div>
      {/* <ArtworkList artworks={artworks} /> */}
      <H2Typo className="hidden">{t.artworks.title}</H2Typo>

      <H3Typo>{t.artworks.subtitle}</H3Typo>
      <LeadTypo>{t.artworks.description}</LeadTypo>

      {artworks.length > 0 ? (
        artworks.map((artwork) => <div key={artwork._id}>{artwork.title}</div>)
      ) : (
        <div>not artworks found</div>
      )}
    </div>
  );
};
export default ArtworksPage;
