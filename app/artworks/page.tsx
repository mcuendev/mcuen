"use client";

import ArtworkList from "@/components/artworks/ArtworkList";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

const ArtworksPage = () => {
  const artworks = useQuery(api.artworks.queries.listArtworks) ?? [];

  return (
    <div>
      <ArtworkList artworks={artworks} />
    </div>
  );
};
export default ArtworksPage;
