import { Container, Flex, Grid } from "@radix-ui/themes";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Goal() {
  return (
    <div className="py-10 my-10 px-3">
      <Container>
        <Grid columns={{ initial: "1", md: "1fr 2fr" }} gap="4">
          <Image
            width={500}
            height={500}
            src="/goal.jpg"
            alt="goal"
            className="rounded-3xl"
          />
          <Flex
            direction="column"
            align="start"
            justify="center"
            className="space-y-3"
          >
            <h1 className="text-3xl text-primary md:text-4xl font-semibold">
              Our goal is to help people
            </h1>
            <p className="text-xl leading-8 text-justify">
              Bridge in the Gap is a nonprofit organization with a profound
              commitment to transforming lives through education. We firmly
              believe that education is not only a fundamental right but also a
              powerful catalyst for positive social change. Our mission is to
              break down educational barriers, foster a love for learning among
              children and adults, and invest in education as a means to inspire
              lasting and positive transformations in society.
            </p>
            <Button className="px-10">Contact Us</Button>
          </Flex>
        </Grid>
      </Container>
    </div>
  );
}
