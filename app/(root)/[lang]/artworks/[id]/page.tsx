import { Id } from "@/convex/_generated/dataModel";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getArtworkById, generateStaticParams } from "./data";
import { PageParams } from "@/lib/ssg";

export { generateStaticParams };
export const revalidate = 604800; // Weekly

type ArtworkPageProps = PageParams<{ id: Id<"artworks"> }>;

const ArtworkPage = async ({ params }: ArtworkPageProps) => {
  const { id } = await params;
  const artwork = await getArtworkById(id);

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
