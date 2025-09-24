"use client";

import { useLanguage } from "@/context/language-context";

// import ArtworkList from "@/components/artworks/ArtworkList";
// import { api } from "@/convex/_generated/api";
// import { useQuery } from "convex/react";

const ArtworksPage = () => {
  // const artworks = useQuery(api.artworks.queries.listArtworks) ?? [];
  const { t } = useLanguage();

  return (
    <div>
      {/* <ArtworkList artworks={artworks} /> */}
      <h2 className="hidden">{t.artworks.title}</h2>

      <h3>{t.artworks.subtitle}</h3>
      <p>{t.artworks.description}</p>
    </div>
  );
};
export default ArtworksPage;
