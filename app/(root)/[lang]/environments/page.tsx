import {
  H2Typo,
  H3Typo,
  LeadTypo,
} from "@/components/typography/TypographyComponents";
import {
  LangParams,
  makeGenerateStaticParamsForLanguages,
  PageParams,
} from "@/lib/ssg";
import { getTranslations } from "@/translations";

export const dyanmic = "force-static";
export const generateStaticParams = makeGenerateStaticParamsForLanguages();

type EnvironmentsProps = PageParams<LangParams>;

const Environments = async ({ params }: EnvironmentsProps) => {
  const { lang } = await params;
  const t = getTranslations(lang);
  return (
    <div>
      <H2Typo className="hidden">{t.environments.title}</H2Typo>

      <H3Typo>{t.environments.subtitle}</H3Typo>
      <LeadTypo>{t.environments.description}</LeadTypo>
    </div>
  );
};
export default Environments;
