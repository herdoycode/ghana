import { Button } from "@/components/ui/button";
import { Container, Flex, Heading } from "@radix-ui/themes";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GalleryPage = ({ children }: Props) => {
  const projectsLink = [
    { id: 2, path: "/gallery/winston", label: "Winston-Salem, NC" },
    { id: 3, path: "/gallery", label: "Ghana,  West Africa" },
  ];

  return (
    <Container py="6">
      <div className="text-center">
        <Heading as="h1" size="8" mb="3">
          Gallery
        </Heading>
        <p className="mb-2">
          Charity activities are taking place around the world.
        </p>
      </div>
      <Flex align="center" justify="center" gap="3">
        {projectsLink.map((p) => (
          <Link key={p.id} href={p.path}>
            <Button variant="outline" key={p.id}>
              {p.label}
            </Button>
          </Link>
        ))}
      </Flex>
      <div className="mt-8">{children}</div>
    </Container>
  );
};

export default GalleryPage;
