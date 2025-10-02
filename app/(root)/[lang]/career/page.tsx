import {
  H2Typo,
  H3Typo,
  ListTypo,
} from "@/components/typography/TypographyComponents";
import {
  LangParams,
  makeGenerateStaticParamsForLanguages,
  PageParams,
} from "@/lib/ssg";
import { getTranslations } from "@/translations";

export const generateStaticParams = makeGenerateStaticParamsForLanguages();

type CareerProps = PageParams<LangParams>;

const Career = async ({ params }: CareerProps) => {
  const { lang } = await params;
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
