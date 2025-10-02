import {
  H2Typo,
  H3Typo,
  LargeTypo,
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

type ContactProps = PageParams<LangParams>;

const Contact = async ({ params }: ContactProps) => {
  const { lang } = await params;
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
