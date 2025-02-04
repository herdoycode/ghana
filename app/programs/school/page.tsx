import { Container, Grid } from "@radix-ui/themes";
import Image from "next/image";

const g1 = [
  { id: 1, src: "/programs/school/1.jpg", alt: "School" },
  { id: 2, src: "/programs/school/2.jpg", alt: "School" },
  { id: 3, src: "/programs/school/3.jpg", alt: "School" },
  { id: 4, src: "/programs/school/4.jpg", alt: "School" },
];
const g2 = [
  { id: 1, src: "/programs/school/5.jpg", alt: "School" },
  { id: 2, src: "/programs/school/6.jpg", alt: "School" },
  { id: 3, src: "/programs/school/7.jpg", alt: "School" },
  { id: 4, src: "/programs/school/8.jpg", alt: "School" },
];
const g3 = [
  { id: 1, src: "/programs/school/11.jpg", alt: "School" },
  { id: 2, src: "/programs/school/12.jpg", alt: "School" },
  { id: 3, src: "/programs/school/13.jpg", alt: "School" },
  { id: 4, src: "/programs/school/14.jpg", alt: "School" },
];

export default function BackToSchool() {
  return (
    <Container className="px-3">
      <h1 className="text-4xl font-semibold text-primary my-10">
        Women Empowerment
      </h1>
      <Grid columns={{ initial: "1", md: "3" }} gap="5">
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
