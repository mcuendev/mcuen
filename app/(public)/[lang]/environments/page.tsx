import { ImageDialog } from "@/components/envrionments/image-modal";
import PageHeader from "@/components/layout/PageHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { environments } from "@/data/environments";
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

      <Carousel
        opts={{ loop: true }}
        className="hidden md:flex max-w-2xl mx-auto justify-center"
      >
        <CarouselContent className="flex items-center">
          {environments.map((environment) => (
            <CarouselItem
              key={environment.id}
              className="basis-full flex items-center justify-center"
            >
              <div className="relative w-full aspect-[4/3] h-144 flex items-center justify-center overflow-hidden">
                {/* <Image
                  src={environment.fileUrl}
                  alt={`Environment ${environment.id}`}
                  fill
                  className="object-contain"
                /> */}
                <ImageDialog
                  src={environment.fileUrl}
                  alt={`Environment ${environment.id}`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};
export default Environments;
