import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface Image {
  id: number;
  image: string;
}

interface Props {
  images: Image[];
}

export function Hero({ images }: Props) {
  return (
    <div className="flex items-center justify-center">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {images.map((slider) => (
            <CarouselItem key={slider.id}>
              <Image
                src={slider.image}
                width={1920}
                height={1080}
                alt={"slider" + slider.id}
                className="h-auto md:h-[80dvh] object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute left-14 top-[40%]">
          <CarouselPrevious />
        </div>
        <div className="absolute right-14 top-[40%]">
          <CarouselNext />
        </div>
        <div className="flex items-center justify-around absolute bottom-0 w-full bg-primary/70 py-4 md:py-6">
          <Link
            target="_blank"
            href="https://www.zeffy.com/en-US/donation-form/aa13ac2d-07c5-42fd-8f8c-aba90133e72f"
          >
            <Button
              variant="outline"
              className="bg-transparent py-4 md:py-7 px-6 md:px-10 border-white border-2 text-white hover:bg-white text-xl font-normal hover:text-black"
            >
              Donate
            </Button>
          </Link>
          <Link href="/">
            <Button
              variant="outline"
              className="bg-transparent py-4 md:py-7 px-6 md:px-10 border-white border-2 text-white hover:bg-white text-xl font-normal hover:text-black"
            >
              Programs
            </Button>
          </Link>
          <Link href="/">
            <Button
              variant="outline"
              className="bg-transparent py-4 md:py-7 px-6 md:px-10 border-white border-2 text-white hover:bg-white text-xl font-normal hover:text-black"
            >
              Events
            </Button>
          </Link>
        </div>
      </Carousel>
    </div>
  );
}
