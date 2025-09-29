import {
  H2Typo,
  H3Typo,
  LeadTypo,
} from "@/components/typography/TypographyComponents";
import { getTranslations, SupportedLanguage } from "@/translations";

interface EnvironmentsProps {
  params: {
    lang: SupportedLanguage;
  };
}

const Environments = ({ params: { lang } }: EnvironmentsProps) => {
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
