import PageHeader from "@/components/layout/PageHeader";
import { BlockQuoteTypo } from "@/components/typography/TypographyComponents";
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
    <div>
      <PageHeader
        title={t.reviews.subtitle}
        descritpion={t.reviews.description}
      />

      <ul className="flex flex-col space-y-4 items-center">
        {t.reviews.quotes.map((quote) => (
          <BlockQuoteTypo
            key={quote.author}
            author={quote.author}
            source={quote.source}
          >
            {quote.text}
          </BlockQuoteTypo>
        ))}
      </ul>
    </div>
  );
};
export default Reviews;
