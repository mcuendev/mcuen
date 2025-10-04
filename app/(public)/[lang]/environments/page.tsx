import PageHeader from "@/components/layout/PageHeader";
import {
  LangParams,
  makeGenerateStaticParamsForLanguages,
  PageParams,
} from "@/lib/ssg";
import { getTranslations } from "@/translations";

export const dynamic = "force-static";
export const generateStaticParams = makeGenerateStaticParamsForLanguages();

type EnvironmentsProps = PageParams<LangParams>;

const Environments = async ({ params }: EnvironmentsProps) => {
  const { lang } = await params;
  const t = getTranslations(lang);
  return (
    <div>
      <PageHeader
        title={t.environments.subtitle}
        descritpion={t.environments.description}
      />
    </div>
  );
};
export default Environments;
