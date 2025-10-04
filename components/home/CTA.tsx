import Link from "next/link";
import { H2Typo, LeadTypo } from "../typography/TypographyComponents";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
} from "../ui/card";
import CTAImagesCarousel, { CarouselItemType } from "./CTAImagesCarousel";
import { SupportedLanguage } from "@/translations/types";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CTAProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  CTAText: string;
  CTAHref: string;
  contactText: string;
  items: CarouselItemType[];
  lang: SupportedLanguage;
  carouselDelay?: number;
  cardClassName?: string;
}

const CTA = ({
  title,
  description,
  CTAText,
  CTAHref,
  contactText,
  items,
  lang,
  carouselDelay,
  cardClassName,
  ...props
}: CTAProps) => {
  return (
    <Card
      className={cn("flex flex-col overflow-hidden h-full", cardClassName)}
      {...props}
    >
      <CardHeader className="flex flex-col h-full">
        {/* TITLE */}
        <CardTitle>
          <H2Typo id="artworks-section" className="border-b-0 mb-2">
            {title}
          </H2Typo>
        </CardTitle>

        {/* DESCRIPTION */}
        <CardDescription className="grow">
          <LeadTypo className="text-primary">{description}</LeadTypo>
        </CardDescription>

        {/* CTA BUTTONS */}
        <div className="flex gap-4 mt-4">
          <CardAction>
            <Button asChild variant="outline">
              <Link href={CTAHref}>{CTAText}</Link>
            </Button>
          </CardAction>
          <CardAction>
            <Button asChild>
              <Link href={`/${lang}/contact`}>{contactText}</Link>
            </Button>
          </CardAction>
        </div>
      </CardHeader>

      {/* CONTENT: Carousel debajo de los actions */}
      <CardContent className="-mt-2">
        <CTAImagesCarousel items={items} delay={carouselDelay} />
      </CardContent>
    </Card>
  );
};
export default CTA;
