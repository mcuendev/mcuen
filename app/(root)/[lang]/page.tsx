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

type HomeProps = PageParams<LangParams>;

const Home = async ({ params }: HomeProps) => {
  const { lang } = await params;
  const t = getTranslations(lang);

  return (
    <div>
      <H2Typo className="hidden">{t.welcome.title}</H2Typo>

      <H3Typo>{t.welcome.subtitle}</H3Typo>
      <LeadTypo>{t.welcome.description}</LeadTypo>
    </div>
  );
};

export default Home;
