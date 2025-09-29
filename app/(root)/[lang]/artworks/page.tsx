import {
  H2Typo,
  H3Typo,
  LeadTypo,
} from "@/components/typography/TypographyComponents";
import { api } from "@/convex/_generated/api";
import { getTranslations, SupportedLanguage } from "@/translations/intl";
import { fetchQuery } from "convex/nextjs";

interface ArtworksPageProps {
  params: { lang: SupportedLanguage };
}

// import ArtworkList from "@/components/artworks/ArtworkList";
// import { api } from "@/convex/_generated/api";
// import { useQuery } from "convex/react";

const ArtworksPage = async ({ params: { lang } }: ArtworksPageProps) => {
  // const artworks = useQuery(api.artworks.queries.listArtworks) ?? [];
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
