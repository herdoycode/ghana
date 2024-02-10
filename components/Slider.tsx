"use client";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Container } from "@radix-ui/themes";
import Image from "next/image";

const sliderItems = [
  { id: 1, url: "/1.jpg" },
  { id: 2, url: "/2.jpg" },
  { id: 3, url: "/3.jpg" },
];

const Slider = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Container>
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {sliderItems.map((item) => (
            <CarouselItem key={item.id}>
              <div className="p-1">
                <Image
                  src={item.url}
                  width="1200"
                  height="500"
                  alt="slider image"
                  className="w-full"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </Container>
  );
};

export default Slider;
