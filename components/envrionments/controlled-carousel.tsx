"use client";

import { PropsWithChildren, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel";
import { Button } from "../ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

const ControlledCarousel = ({ children }: PropsWithChildren) => {
  const [api, setApi] = useState<CarouselApi>();

  const onPrev = () => {
    if (!api) return;
    api.scrollPrev();
  };
  const onNext = () => {
    if (!api) return;
    api.scrollNext();
  };

  // return <div>EnvironmentsCarousel</div>;
  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="flex max-w-4xl max-h-[80vh] h-[80vh] mx-auto justify-center"
      >
        <CarouselContent className="h-full flex items-center">
          {children}
        </CarouselContent>
        <CarouselPrevious variant={"default"} className="hidden md:flex" />
        <CarouselNext variant={"default"} className="hidden md:flex" />
      </Carousel>
      <div className="flex md:hidden items-center justify-center space-x-8 my-4">
        <Button className="rounded-full" size={"icon"} onClick={onPrev}>
          <ArrowLeftIcon />
        </Button>
        <Button className="rounded-full" size={"icon"} onClick={onNext}>
          <ArrowRightIcon />
        </Button>
      </div>
    </>
  );
};
export default ControlledCarousel;
