import { Hero } from "@/components/hero";

export default function Gallery() {
  const images = [
    { id: 1, image: "/slider/1.jpg" },
    { id: 2, image: "/slider/2.jpg" },
    { id: 3, image: "/slider/3.jpg" },
  ];
  return (
    <>
      <Hero images={images} />
    </>
  );
}
