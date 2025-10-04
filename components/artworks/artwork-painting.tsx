import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import Link from "next/link";
import { HoverCard } from "../ui/hover-card";
import { HoverCardContent, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { ArtworkDocumentWithImage } from "@/convex/artworks/types";
import { SupportedLanguage } from "@/translations/types";
import ArtworkCard from "./artwork-card";

interface ArtworkPaintingProps {
  artwork: ArtworkDocumentWithImage;
  lang: SupportedLanguage;
  priority: boolean;
  className?: string;
}

const ArtworkPainting = ({
  artwork,
  lang,
  priority,
  className,
}: ArtworkPaintingProps) => {
  return (
    <div className={className}>
      <HoverCard openDelay={300}>
        <HoverCardTrigger asChild>
          <Link href={`/${lang}/artworks/${artwork._id}`}>
            <AspectRatio ratio={4 / 3} className="frame transition-all">
              <Image
                src={artwork.fileUrl!}
                alt={artwork.title}
                className="object-cover w-full"
                width={800}
                height={600}
                priority={priority}
              />
            </AspectRatio>
          </Link>
        </HoverCardTrigger>

        <HoverCardContent
          align="center"
          side="bottom"
          className="max-w-xs xl:max-w-sm 2xl:max-w-md z-10 m-4 shadow-2xl p-4 rounded-lg border backdrop-blur-sm bg-white/20"
        >
          <ArtworkCard artwork={artwork} lang={lang} className="shadow-none" />
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};
export default ArtworkPainting;
