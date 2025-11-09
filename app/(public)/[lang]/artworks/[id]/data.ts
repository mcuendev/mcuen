import { getTranslations, supportedLanguages } from "@/translations";
import { SupportedLanguage } from "@/translations/types";
import { makeGenerateStaticParamsFromProvider, PageParams } from "@/lib/ssg";
import { artworkDataClient } from "@/lib/artwork-data-client";
import { ArtworkDocumentWithImage } from "@/convex/artworks/types";
import { Id } from "@/convex/_generated/dataModel";
import { Metadata } from "next";

export type ArtworkDetailPageProps = PageParams<{
  id: Id<"artworks">;
  lang: SupportedLanguage;
}>;

const provider = async () => {
  return artworkDataClient.getAll();
};

const mapper = (artwork: ArtworkDocumentWithImage) => {
  const id = String(artwork._id);
  return supportedLanguages.map((lang: SupportedLanguage) => ({
    lang,
    id,
  }));
};

export const generateStaticParams = makeGenerateStaticParamsFromProvider(
  provider,
  mapper,
);

export const generateMetadata = async ({
  params,
}: ArtworkDetailPageProps): Promise<Metadata> => {
  const { id, lang } = await params;
  const t = getTranslations(lang);

  const artwork = await artworkDataClient.getById(id);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const path = `/${lang}/artworks/${id}`;
  const canonical = `${siteUrl}${path}`;

  if (!artwork) {
    return {
      title: `${t.ui.common.notFound} | Monica Cuén`,
      description: t.ui.common.notFound,
      alternates: {
        canonical,
        languages: supportedLanguages.reduce<Record<string, string>>(
          (acc, l) => {
            acc[l] = `${siteUrl}/${l}/artworks/${id}`;
            return acc;
          },
          {},
        ),
      },
    };
  }

  return {
    title: `${artwork.title} | Monica Cuén`,
    description:
      artwork.description?.slice(0, 160) ?? t.artworks.artworkDescription,
    alternates: {
      canonical,
      languages: supportedLanguages.reduce<Record<string, string>>((acc, l) => {
        acc[l] = `${siteUrl}/${l}/artworks/${id}`;
        return acc;
      }, {}),
    },
    openGraph: {
      title: `${artwork.title} | Monica Cuén`,
      description:
        artwork.description?.slice(0, 160) ?? t.artworks.artworkDescription,
      url: canonical,
      images: [{ url: artwork.fileUrl!, alt: artwork.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${artwork.title} | Monica Cuén`,
      description:
        artwork.description?.slice(0, 160) ?? t.artworks.artworkDescription,
      images: [artwork.fileUrl!],
    },
  };
};
