import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { fetchQuery } from "convex/nextjs";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ArtworkPageProps {
  params: {
    id: Id<"artworks">;
  };
}

const ArtworkPage = async ({ params: { id } }: ArtworkPageProps) => {
  const artwork = await fetchQuery(api.artworks.queries.getArtwork, { id });

  if (!artwork) notFound();

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
