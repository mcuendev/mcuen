import {
  BlockQuoteTypo,
  H2Typo,
} from "@/components/typography/TypographyComponents";
import { getTranslations, SupportedLanguage } from "@/translations/intl";

interface ReviewsProps {
  params: {
    lang: SupportedLanguage;
  };
}

const Reviews = ({ params: { lang } }: ReviewsProps) => {
  const t = getTranslations(lang);
  return (
    <div>
      <H2Typo className="hidden">{t.reviews.title}</H2Typo>

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
