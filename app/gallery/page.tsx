import { Container, Grid } from "@radix-ui/themes";
import Image from "next/image";

const g1 = [
  { id: 1, src: "/programs/school/1.jpg", alt: "School" },
  { id: 2, src: "/programs/school/2.jpg", alt: "School" },
  { id: 3, src: "/programs/school/3.jpg", alt: "School" },
  { id: 4, src: "/programs/school/4.jpg", alt: "School" },
];
const g2 = [
  { id: 1, src: "/programs/women/1.jpg", alt: "Women Empowerment" },
  { id: 2, src: "/programs/women/2.jpg", alt: "Women Empowerment" },
  { id: 3, src: "/programs/women/s1.webp", alt: "Women Empowerment" },
  { id: 4, src: "/programs/women/s2.webp", alt: "Women Empowerment" },
];
const g3 = [
  { id: 1, src: "/programs/school/11.jpg", alt: "School" },
  { id: 2, src: "/programs/meals/2.jpg", alt: "School" },
  { id: 3, src: "/programs/school/13.jpg", alt: "School" },
  { id: 4, src: "/programs/meals/1.jpg", alt: "School" },
];

export default function Gallery() {
  return (
    <Container className="px-3">
      <Grid columns={{ initial: "1", md: "3" }} gap="5" my="9">
        <div className="flex flex-col gap-6">
          {g1.map((i) => (
            <Image
              key={i.id}
              src={i.src}
              alt={i.alt}
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
        <div className="flex flex-col gap-6">
          {g2.map((i) => (
            <Image
              key={i.id}
              src={i.src}
              alt={i.alt}
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          ))}
        </div>
        <div className="flex flex-col gap-6">
          {g3.map((i) => (
            <Image
              key={i.id}
              src={i.src}
              alt={i.alt}
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          ))}
        </div>
      </Grid>
    </Container>
  );
}
