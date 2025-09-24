"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const ArtworkPage = () => {
  const pathname = usePathname();
  const id = pathname.split("/")[2];
  const artwork = useQuery(api.artworks.queries.getArtwork, {
    id: id as Id<"artworks">,
  });

  if (!artwork) return null;

  return (
    <div>
      <p>{artwork.title}</p>
      <p>{artwork.author}</p>
      <p>{artwork.year}</p>
      {artwork.fileUrl && (
        <Image
          src={artwork.fileUrl}
          alt={artwork.title}
          width={250}
          height={250}
        />
      )}
    </div>
  );
};
export default ArtworkPage;
