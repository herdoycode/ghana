import { Hero } from "@/components/hero";
import Sidebar from "@/components/sidebar";
import { Container, Grid } from "@radix-ui/themes";

const Programs = () => {
  const images = [
    { id: 1, image: "/programs/women/s1.webp" },
    { id: 2, image: "/programs/women/s2.webp" },
    { id: 3, image: "/programs/women/3.jpg" },
  ];
  return (
    <>
      <Hero images={images} />
      <Container className="px-3 my-10">
        <Grid columns={{ initial: "1fr", md: "1fr 400px" }}>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold text-primary">
              Our Programs
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab velit
              reprehenderit rem dolor nisi alias iste tenetur culpa molestias
              laudantium voluptas impedit inventore fugiat, sit earum ipsam
              similique cupiditate aspernatur! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Ab velit reprehenderit rem dolor
              nisi alias iste tenetur culpa molestias laudantium voluptas
              impedit inventore fugiat, sit earum ipsam similique cupiditate
              aspernatur! Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Ab velit reprehenderit rem dolor nisi alias iste tenetur
              culpa molestias laudantium voluptas impedit inventore fugiat, sit
              earum ipsam similique cupiditate aspernatur!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab velit
              reprehenderit rem dolor nisi alias iste tenetur culpa molestias
              laudantium voluptas impedit inventore fugiat, sit earum ipsam
              similique cupiditate aspernatur! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Ab velit reprehenderit rem dolor
              nisi alias iste tenetur culpa molestias laudantium voluptas
              impedit inventore fugiat, sit earum ipsam similique cupiditate
              aspernatur! Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Ab velit reprehenderit rem dolor nisi alias iste tenetur
              culpa molestias laudantium voluptas impedit inventore fugiat, sit
              earum ipsam similique cupiditate aspernatur!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab velit
              reprehenderit rem dolor nisi alias iste tenetur culpa molestias
              laudantium voluptas impedit inventore fugiat, sit earum ipsam
              similique cupiditate aspernatur! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Ab velit reprehenderit rem dolor
              nisi alias iste tenetur culpa molestias laudantium voluptas
              impedit inventore fugiat, sit earum ipsam similique cupiditate
              aspernatur! Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Ab velit reprehenderit rem dolor nisi alias iste tenetur
              culpa molestias laudantium voluptas impedit inventore fugiat, sit
              earum ipsam similique cupiditate aspernatur!
            </p>
          </div>
          <Sidebar />
        </Grid>
      </Container>
    </>
  );
};

export default Programs;
