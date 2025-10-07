"use client";

import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { useRef } from "react";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

export interface CarouselItemType {
  title: string;
  image: string;
}

interface ArtworkCTACarouselProps {
  items: CarouselItemType[];
  delay?: number;
}

const CTAImagesCarousel = ({
  items,
  delay = 3000,
}: ArtworkCTACarouselProps) => {
  const plugin = useRef(
    Autoplay({ delay, stopOnInteraction: true, stopOnMouseEnter: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ align: "center", loop: true }}
      className="w-10/12 mx-auto max-w-2xl translate-y-12 rounded-md overflow-hidden shadow-2xl"
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <AspectRatio ratio={16 / 9} className="shadow-2xl">
              <Image
                src={item.image}
                alt={item.title}
                className="rounded-md object-cover"
                width={800}
                height={600}
                priority
              />
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious
        className="translate-x-13 translate-y-15 opacity-80 border-none text-primary shadow-none rounded-es-2xl rotate-45"
        arrowClassName="size-6 -rotate-45"
      />
      <CarouselNext
        className="-translate-x-13 translate-y-15 opacity-80 border-none text-primary shadow-none rounded-ee-sm -rotate-45"
        size={"lg"}
        arrowClassName="size-6 rotate-45"
      /> */}
    </Carousel>
  );
};
export default CTAImagesCarousel;
