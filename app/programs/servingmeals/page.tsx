import { Container, Flex } from "@radix-ui/themes";
import Image from "next/image";

const images = [
  { id: 1, src: "/programs/meals/1.jpg", alt: "Searving Meals" },
  { id: 2, src: "/programs/meals/2.jpg", alt: "Searving Meals" },
  { id: 3, src: "/programs/meals/3.jpg", alt: "Searving Meals" },
];

export default function SearvingMeals() {
  return (
    <Container className="px-3">
      <h1 className="text-4xl font-semibold text-primary my-10">
        Searving Meals
      </h1>
      <Flex my="8" gap="4" wrap="wrap">
        {images.map((i) => (
          <Image
            key={i.id}
            src={i.src}
            alt={i.alt}
            width={400}
            height={300}
            className="object-cover"
          />
        ))}
      </Flex>
    </Container>
  );
}
