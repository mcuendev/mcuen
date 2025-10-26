import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArtworkDetailPageProps,
  generateStaticParams,
  generateMetadata,
} from "./data";
import { artworkDataClient } from "@/lib/artwork-data-client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getTranslations } from "@/translations";
import { Badge } from "@/components/ui/badge";
import { PTypo } from "@/components/typography/TypographyComponents";

export const dynamic = "force-static";
export { generateStaticParams };
export { generateMetadata };
export const revalidate = 604800; // Weekly

const ArtworkDetailPage = async ({ params }: ArtworkDetailPageProps) => {
  const { id, lang } = await params;
  const t = getTranslations(lang);
  const artwork = await artworkDataClient.getById(id);

  if (!artwork) notFound();

  const relatedArtworks = await artworkDataClient.search(
    "",
    artwork.collection,
  );
  const filteredRelated = relatedArtworks
    .filter((art) => art._id !== artwork._id)
    .slice(0, 3);

  return (
    <>
      <div className="mb-8">
        <Button
          className="text-muted-foreground hover:text-foreground"
          asChild
          variant={"ghost"}
        >
          <Link href={`/${lang}/artworks`}>
            <ArrowLeft className="w-4 h-4" />
            {t.ui.buttons.backToGallery}
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="aspect-[4/3] relative overflow-hidden rounded-lg bg-muted">
          <Image
            src={artwork.fileUrl || "/placeholder.svg"}
            alt={artwork.title}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-serif font-light text-foreground text-balance">
                {artwork.title}
              </h2>
              <Badge variant={"secondary"} className="shrink-0">
                {artwork.collection}
              </Badge>
            </div>

            {artwork.year && (
              <p className="text-lg text-muted-foreground font-mono">
                {artwork.year}
              </p>
            )}
          </div>

          <PTypo className="text-lg text-foreground text-pretty">
            {artwork.description}
          </PTypo>

          <div className="pt-6 border-t border-border">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="font-medium text-muted-foreground mb-1">
                  {t.ui.artworks.labels.collection}
                </dt>
                {/* TODO: make it a link to the related collection */}
                <Link
                  href={`/${lang}/artworks?collection=${artwork.collection}`}
                >
                  <dd className="text-foreground">{artwork.collection}</dd>
                </Link>
              </div>
              {artwork.year && (
                <div>
                  <dt className="font-medium text-muted-foreground mb-1">
                    {t.ui.artworks.labels.year}
                  </dt>
                  <dd className="text-foreground font-mono">{artwork.year}</dd>
                </div>
              )}
            </div>
          </div>

          <div className="pt-4">
            <Button asChild variant={"outline"}>
              <Link href={`/${lang}/contact`}>
                {t.ui.buttons.contactArtist}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {filteredRelated.length > 0 && (
        <div className="mt-16">
          <h3 className="text-2xl font-serif font-light text-foreground mb-8 text-center">
            {t.ui.artworks.sections.moreFromCollection}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredRelated.map((realtedArt) => (
              <Link
                key={realtedArt._id}
                href={`/${lang}/artworks/${realtedArt._id}`}
                className="group block"
              >
                <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-3">
                  <Image
                    src={realtedArt.fileUrl || "/placeholder.svg"}
                    alt={realtedArt.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h4 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                  {realtedArt.title}
                </h4>
                <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                  {realtedArt.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default ArtworkDetailPage;
