import CTA from "@/components/home/CTA";
import PageHeader from "@/components/layout/PageHeader";
import { environments } from "@/data/environments";
import { artworkDataClient } from "@/lib/artwork-data-client";
import {
  LangParams,
  makeGenerateStaticParamsForLanguages,
  PageParams,
} from "@/lib/ssg";
import { getTranslations } from "@/translations";

export const dynamic = "force-static";
export const generateStaticParams = makeGenerateStaticParamsForLanguages();

type HomeProps = PageParams<LangParams>;

const Home = async ({ params }: HomeProps) => {
  const { lang } = await params;
  const t = getTranslations(lang);

  const highlightedArtworks = await artworkDataClient.getHightlighted();
  // TODO: const highlightedEnvironments = await environmentsDataClient.getHighlighted()

  return (
    <>
      <PageHeader
        title={t.welcome.subtitle}
        descritpion={t.welcome.description}
      />

      <div className="mt-20 lg:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section aria-labelledby="artworks-section">
          <CTA
            id="artworks-section"
            lang={lang}
            title={t.artworks.title}
            description={t.artworks.layout.adaptable}
            CTAText={t.ui.buttons.viewArtworks}
            CTAHref={`/${lang}/artworks`}
            contactText={t.ui.buttons.contactArtist}
            items={highlightedArtworks.map((art) => ({
              image: art.fileUrl!,
              title: art.title,
            }))}
          />
        </section>

        <section aria-labelledby="environments-section">
          <CTA
            id="environments-section"
            cardClassName="bg-secondary/60"
            lang={lang}
            title={t.environments.title}
            description={t.environments.layout.focus}
            CTAText={t.ui.buttons.exploreEnvironments}
            CTAHref={`/${lang}/environments`}
            contactText={t.ui.buttons.contactArtist}
            items={environments.map((env) => ({
              image: env.fileUrl!,
              title: env.id,
            }))}
            carouselDelay={2800}
          />
        </section>
      </div>
    </>
  );
};

export default Home;
