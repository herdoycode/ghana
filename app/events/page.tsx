import { Hero } from "@/components/hero";
import Sidebar from "@/components/sidebar";
import { Container, Grid } from "@radix-ui/themes";

const Events = () => {
  const images = [
    { id: 1, image: "/womenem/s1.webp" },
    { id: 2, image: "/womenem/s2.webp" },
    { id: 3, image: "/womenem/s1.webp" },
  ];
  return (
    <>
      <Hero images={images} />
      <Container className="px-3 my-10">
        <Grid
          columns={{ initial: "1fr", md: "1fr 400px" }}
          gap={{ initial: "8", md: "3" }}
        >
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
          <Sidebar />
        </Grid>
      </Container>
    </>
  );
};

export default Events;
