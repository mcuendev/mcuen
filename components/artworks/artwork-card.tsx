import { ArtworkDocumentWithImage } from "@/convex/artworks/types";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import { SupportedLanguage } from "@/translations/types";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

interface ArtworkCardProps {
  artwork: ArtworkDocumentWithImage;
  lang: SupportedLanguage;
  priority?: boolean;
  className?: string;
}

const ArtworkCard = ({
  priority,
  artwork,
  lang,
  className,
}: ArtworkCardProps) => {
  const linkHref = `/${lang}/artworks/${artwork._id}`;

  return (
    <Card
      className={cn(
        "overflow-hidden border-border/50 hover:shadow-xl hover:scale-[1.01] transition-all duration-200",
        className,
      )}
    >
      <Link href={linkHref} className="group block">
        <div className="aspect-[4/3] relative overflow-hidden">
          <Image
            src={artwork.fileUrl || "/placeholder.svg"}
            alt={artwork.title}
            fill
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            priority={priority}
          />
        </div>
      </Link>
      <CardContent className="p-4 space-y-2">
        <div className="flex flex-col items-center gap-4">
          <Link href={linkHref}>
            <h4 className="font-serif text-lg lg:text-xl font-medium text-foreground line-clamp-1 text-balance hover:text-primary transition-colors">
              {artwork.title}
            </h4>
          </Link>
          <Badge variant={"secondary"}>{artwork.technique}</Badge>
        </div>
      </CardContent>
    </Card>
  );
};
export default ArtworkCard;
