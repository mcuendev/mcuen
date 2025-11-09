import AnimatedIcon from "@/components/icons/AnimatedIcon";
import PageHeader from "@/components/layout/PageHeader";
import { BlockQuoteTypo } from "@/components/typography/TypographyComponents";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { siteConfig } from "@/config/site";
import {
  LangParams,
  makeGenerateStaticParamsForLanguages,
  PageParams,
} from "@/lib/ssg";
import { getTranslations } from "@/translations";

export const dynamic = "force-static";
export const generateStaticParams = makeGenerateStaticParamsForLanguages();

type ReviewsProps = PageParams<LangParams>;

const Reviews = async ({ params }: ReviewsProps) => {
  const { lang } = await params;
  const t = getTranslations(lang);
  return (
    <div className="flex flex-col">
      <PageHeader
        title={t.reviews.subtitle}
        descritpion={t.reviews.description}
      />

      {/* <ul className="flex flex-col space-y-4 items-center">
        {t.reviews.quotes.map((quote) => (
          <BlockQuoteTypo
            key={quote.author}
            author={quote.author}
            source={quote.source}
          >
            {quote.text}
          </BlockQuoteTypo>
        ))}
      </ul> */}

      <Carousel
        opts={{ loop: true }}
        orientation="vertical"
        className="relative flex md:hidden w-full mx-auto fade-y"
      >
        <CarouselContent className="my-8 h-[350px]">
          {t.reviews.quotes.map((quote) => (
            <CarouselItem key={quote.author} className="py-4 basis-1/2">
              <BlockQuoteTypo
                className="mx-auto my-0 select-none"
                author={quote.author}
                source={quote.source}
              >
                {quote.text}
              </BlockQuoteTypo>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />

        {siteConfig.animatedIconOnReviews && (
          <AnimatedIcon
            src="/icons/animated-icons/slide.gif"
            className="absolute top-12 left-8 rotate-90"
            opacity="70"
            durationMs={3000}
          />
        )}
      </Carousel>

      <Carousel
        opts={{ loop: true }}
        className="hidden md:flex max-w-2/3 mx-auto"
      >
        <CarouselContent className="my-8 flex items-center">
          {t.reviews.quotes.map((quote) => (
            <CarouselItem key={quote.author}>
              <BlockQuoteTypo
                className="mx-auto select-none"
                author={quote.author}
                source={quote.source}
              >
                {quote.text}
              </BlockQuoteTypo>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};
export default Reviews;
