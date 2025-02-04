import { Container, Grid } from "@radix-ui/themes";
import Image from "next/image";

const images = [
  { id: 1, src: "/programs/women/1.jpg", alt: "Women Empowerment" },
  { id: 2, src: "/programs/women/2.jpg", alt: "Women Empowerment" },
  { id: 3, src: "/programs/women/3.jpg", alt: "Women Empowerment" },
  { id: 4, src: "/programs/women/4.jpg", alt: "Women Empowerment" },
  { id: 5, src: "/programs/women/s1.webp", alt: "Women Empowerment" },
  { id: 6, src: "/programs/women/s2.webp", alt: "Women Empowerment" },
  { id: 7, src: "/programs/women/5.jpg", alt: "Women Empowerment" },
  { id: 8, src: "/programs/women/1.jpg", alt: "Women Empowerment" },
];

export default function WomenEmpowerment() {
  return (
    <Container className="px-3">
      <h1 className="text-4xl font-semibold text-primary my-10">
        Women Empowerment
      </h1>
      <Grid columns={{ initial: "1", sm: "2", md: "3" }} my="8" gap="4">
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
      </Grid>
    </Container>
  );
}
