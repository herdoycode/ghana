import { Container, Flex, Grid, Heading } from "@radix-ui/themes";
import Image from "next/image";

const items = [
  { id: 1, img: "/donors/2.jpg", name: "Carolyn Larry" },
  { id: 2, img: "/donors/1.jpg", name: "Paulette Adams" },
  { id: 3, img: "/donors/3.jpg", name: "Belle Perkins" },
  { id: 4, img: "/donors/4.jpg", name: "Wegmans, Chapel Hill" },
  { id: 5, img: "/donors/5.jpg", name: "Panda Express" },
];

const Donors = () => {
  return (
    <div className="py-16 px-2">
      <h1 className="text-3xl text-primary text-center mb-7 md:text-4xl font-semibold">
        Our Main Donors
      </h1>
      <Container>
        <Grid
          columns={{
            initial: "1fr 1fr",
            sm: "1fr 1fr 1fr",
            md: "1fr 1fr 1fr 1fr 1fr",
          }}
          gap="6"
        >
          {items.map((i) => (
            <div key={i.id}>
              <div className="rounded-2xl overflow-hidden relative shadow-lg">
                <Image
                  src={i.img}
                  width={300}
                  height={400}
                  className="w-100% object-cover"
                  alt={i.name}
                />
                <Flex
                  align="center"
                  justify="center"
                  direction="column"
                  className="absolute bottom-0 left-0 w-full text-center bg-primary py-3 text-white"
                >
                  <Heading as="h3" size="4">
                    {i.name}
                  </Heading>
                  <span className="job-title">Donor</span>
                </Flex>
              </div>
            </div>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Donors;
