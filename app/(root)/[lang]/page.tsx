import {
  H2Typo,
  H3Typo,
  LeadTypo,
} from "@/components/typography/TypographyComponents";
import { getTranslations, SupportedLanguage } from "@/translations";

interface HomeProps {
  params: Promise<{ lang: SupportedLanguage }>;
}

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
