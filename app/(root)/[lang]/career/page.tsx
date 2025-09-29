import {
  H2Typo,
  H3Typo,
  ListTypo,
} from "@/components/typography/TypographyComponents";
import { getTranslations, SupportedLanguage } from "@/translations/intl";

interface CareerProps {
  params: { lang: SupportedLanguage };
}

const Career = ({ params: { lang } }: CareerProps) => {
  const t = getTranslations(lang);
  return (
    <div className="flex flex-col space-y-4">
      <H2Typo className="hidden">{t.career.title}</H2Typo>

      <section>
        <H3Typo>{t.career.education.title}</H3Typo>
        <ListTypo>
          {t.career.education.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ListTypo>
      </section>

      <section>
        <H3Typo>{t.career.exhibitions.title}</H3Typo>
        <ListTypo>
          {t.career.exhibitions.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ListTypo>
      </section>
    </div>
  );
};
export default Career;
