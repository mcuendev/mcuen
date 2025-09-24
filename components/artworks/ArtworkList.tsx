import { ArtworkDocumentWithImage } from "@/convex/artworks/types";
import Image from "next/image";
import Link from "next/link";

interface ArtworkListProps {
  path?: string;
  artworks: ArtworkDocumentWithImage[];
}

const ArtworkList = ({ artworks, path = "/artworks" }: ArtworkListProps) => {
  return (
    <ul>
      {artworks.map((a) => (
        <li key={a._id}>
          <Link href={`${path}/${a._id}`}>
            {a.title} - {a.author} ({a.year})
            {a.fileUrl && (
              <Image src={a.fileUrl} alt={a.title} width={250} height={250} />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default ArtworkList;
