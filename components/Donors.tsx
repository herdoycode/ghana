import { Container, Flex, Grid, Heading } from "@radix-ui/themes";
import Image from "next/image";

const items = [
  { id: 1, img: "/22.jpg", name: " Carolyn Larry" },
  { id: 2, img: "/11.jpg", name: " Paulette Adams" },
  { id: 3, img: "/33.jpg", name: " Belle Perkins" },
  { id: 4, img: "/44.jpg", name: " Wegmans, Chapel Hill" },
];

const Donors = () => {
  return (
    <div className="py-16 px-2">
      <Heading as="h2" size="7" align="center" mb="8">
        Our Main Donors
      </Heading>
      <Container>
        <Grid
          columns={{ initial: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
          gap="6"
        >
          {items.map((i) => (
            <div key={i.id}>
              <div className="rounded-2xl overflow-hidden relative shadow-lg">
                <Image
                  src={i.img}
                  width={600}
                  height={600}
                  className="w-100%"
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
