import PageHeader from "@/components/layout/PageHeader";
import {
  H2Typo,
  H3Typo,
  PTypo,
} from "@/components/typography/TypographyComponents";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  LangParams,
  makeGenerateStaticParamsForLanguages,
  PageParams,
} from "@/lib/ssg";
import { getTranslations } from "@/translations";

export const dynamic = "force-static";
export const generateStaticParams = makeGenerateStaticParamsForLanguages();

type CareerProps = PageParams<LangParams>;

const Career = async ({ params }: CareerProps) => {
  const { lang } = await params;
  const t = getTranslations(lang);
  return (
    <div className="flex flex-col space-y-12">
      <PageHeader
        title={t.career.subtitle}
        descritpion={t.career.description}
      />

      <section className="mt-4 p-4 bg-card rounded-lg shadow-xl">
        <H2Typo className="border-0 text-primary">
          {t.career.education.title}
        </H2Typo>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue={t.career.education.items[0].title}
        >
          {t.career.education.items.map((item) => (
            <AccordionItem key={item.title} value={item.title}>
              <AccordionTrigger>
                <H3Typo className="my-0">{item.title}</H3Typo>
              </AccordionTrigger>
              <AccordionContent>
                <PTypo className="text-base pl-2 text-pretty">
                  {item.description}
                </PTypo>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="p-4 bg-card rounded-lg shadow-xl">
        <H2Typo className="border-0 text-primary">
          {t.career.exhibitions.title}
        </H2Typo>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue={t.career.exhibitions.items[0].title}
        >
          {t.career.exhibitions.items.map((item) => (
            <AccordionItem key={item.title} value={item.title}>
              <AccordionTrigger>
                <H3Typo className="my-0">{item.title}</H3Typo>
              </AccordionTrigger>
              <AccordionContent>
                <PTypo className="text-base pl-2 text-pretty">
                  {item.description}
                </PTypo>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
};
export default Career;
