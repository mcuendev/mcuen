import PageHeader from "@/components/layout/PageHeader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { siteConfig } from "@/config/site";
import {
  LangParams,
  makeGenerateStaticParamsForLanguages,
  PageParams,
} from "@/lib/ssg";
import { getTranslations } from "@/translations";
import Image from "next/image";

export const dynamic = "force-static";
export const generateStaticParams = makeGenerateStaticParamsForLanguages();

type ContactProps = PageParams<LangParams>;

const Contact = async ({ params }: ContactProps) => {
  const { lang } = await params;
  const t = getTranslations(lang);

  return (
    <div>
      <PageHeader
        title={t.contact.subtitle}
        descritpion={t.contact.description}
        note={t.artworks.note}
      />

      <Item
        className="my-8 max-w-md h-56 mx-auto sm:mx-0 shadow-sm bg-secondary hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
        variant={"muted"}
      >
        <ItemHeader className="gap-2 sm:gap-4">
          <ItemMedia>
            <Avatar className="size-16 sm:size-18">
              <AvatarImage
                src={"/assets/mcuen-profile.webp"}
                className="object-cover object-top"
              />
              <AvatarFallback>MC</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <div>
            <ItemTitle className="text-lg">{siteConfig.name}</ItemTitle>
            <ItemDescription>{t.contact.cardNote}</ItemDescription>
          </div>
        </ItemHeader>
        <ItemContent className="flex-row justify-between mt-4">
          <div className="relative aspect-video h-full -mt-4">
            <Image
              src={"/logo/logo-black-transparent.webp"}
              alt={`${siteConfig.name} logo`}
              height={100}
              width={100}
            />
          </div>
          <div className="flex flex-col text-right text-base">
            <span>{t.contact.email}</span>
            <span>{t.contact.phone}</span>
          </div>
        </ItemContent>
      </Item>
    </div>
  );
};
export default Contact;
