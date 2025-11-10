import ControlledCarousel from "@/components/envrionments/controlled-carousel";
import { ImageDialog } from "@/components/envrionments/image-modal";
import PageHeader from "@/components/layout/PageHeader";
import { CarouselItem } from "@/components/ui/carousel";
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

      <ControlledCarousel>
        {environments.map((environment) => (
          <CarouselItem
            key={environment.id}
            className="basis-full h-full flex items-center justify-center"
          >
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
          </CarouselItem>
        ))}
      </ControlledCarousel>
    </div>
  );
};
export default Environments;
