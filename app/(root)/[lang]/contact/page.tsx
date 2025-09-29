import {
  H2Typo,
  H3Typo,
  LargeTypo,
  LeadTypo,
} from "@/components/typography/TypographyComponents";
import { getTranslations, SupportedLanguage } from "@/translations/intl";

interface ContactProps {
  params: { lang: SupportedLanguage };
}

const Contact = ({ params: { lang } }: ContactProps) => {
  const t = getTranslations(lang);

  return (
    <div>
      <H2Typo className="hidden">{t.contact.title}</H2Typo>

      <H3Typo>{t.contact.description}</H3Typo>
      <LargeTypo>{t.contact.email}</LargeTypo>
      <LargeTypo>{t.contact.phone}</LargeTypo>
      <LeadTypo>{t.contact.formNote}</LeadTypo>
    </div>
  );
};
export default Contact;
