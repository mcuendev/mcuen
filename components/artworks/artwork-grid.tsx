import { ArtworkDocumentWithImage } from "@/convex/artworks/types";
import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";
import { H4Typo, SmallTypo } from "../typography/TypographyComponents";
import { SupportedLanguage } from "@/translations/types";
import { getTranslations } from "@/translations";
// import ArtworkPainting from "./artwork-painting";
import ArtworkCard from "./artwork-card";

interface ArtworkGridProps {
  lang: SupportedLanguage;
  artworks: ArtworkDocumentWithImage[];
  className?: string;
}

const ArtworkGrid = ({ lang, artworks, className }: ArtworkGridProps) => {
  const t = getTranslations(lang);

  if (artworks.length === 0) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center py-16 text-center bg-muted",
          className,
        )}
      >
        <div className="w-16 h-16 mb-4 rounded-xl bg-primary flex items-center justify-center">
          <ImageIcon className="text-secondary" />
        </div>
        <H4Typo>{t.ui.common.noResults}</H4Typo>
        <SmallTypo>{t.ui.common.noResultsDetails}</SmallTypo>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-12">
      {artworks.map((artwork, i) => (
        <div key={artwork._id}>
          {/* MOBILE */}
          <ArtworkCard
            artwork={artwork}
            lang={lang}
            priority={i < 8}
            // className="block lg:hidden"
          />

          {/* DESKTOP */}
          {/* <ArtworkPainting
            artwork={artwork}
            lang={lang}
            priority={i < 8}
            className="hidden lg:block"
          /> */}
        </div>
      ))}
    </div>
  );
};
export default ArtworkGrid;
