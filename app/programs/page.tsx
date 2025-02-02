import Card from "@/components/card";
import { Hero } from "@/components/hero";
import { Container, Grid } from "@radix-ui/themes";

const Programs = () => {
  const images = [
    { id: 1, image: "/womenem/s1.webp" },
    { id: 2, image: "/womenem/s2.webp" },
    { id: 3, image: "/womenem/s1.webp" },
  ];
  return (
    <>
      <Hero images={images} />
      <Container className="px-3 my-10">
        <Grid columns={{ initial: "1fr", md: "1fr 400px" }}>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold text-primary">
              Lorem ipsum dolor sit.
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
          <div className="md:border-l p-4 space-y-6">
            <h1 className="text-3xl text-primary">Our Programs</h1>
            <Card
              image="/womenem/1.webp"
              title="Women Empowerment 2024"
              caption="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            />
            <Card
              image="/womenem/2.webp"
              title="Back To School 2024"
              caption="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            />
          </div>
        </Grid>
      </Container>
    </>
  );
};

export default Programs;
