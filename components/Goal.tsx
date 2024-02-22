import { Container, Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import { Button } from "./ui/button";

const Goal = () => {
  return (
    <div className="py-16 px-2">
      <Container>
        <Flex
          align="center"
          direction={{ initial: "column", md: "row" }}
          gap={{ initial: "8", md: "2" }}
        >
          <Flex align="center" justify="center" className="flex-1">
            <div className="rounded-[80px] overflow-hidden">
              <Image
                width={500}
                height={400}
                className="w-auto"
                src="/goal2.jpg"
                alt="Children going to school"
              />
            </div>
          </Flex>
          <div className="flex-1">
            <Heading as="h2" size="7" mb="2">
              Our goal is to help people
            </Heading>
            <Text as="p" size="5" mb="3">
              Bridge in the Gap is a nonprofit organization with a profound
              commitment to transforming lives through education. We firmly
              believe that education is not only a fundamental right but also a
              powerful catalyst for positive social change. Our mission is to
              break down educational barriers, foster a love for learning among
              children and adults, and invest in education as a means to inspire
              lasting and positive transformations in society.
            </Text>
            <Button>Contact Us</Button>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Goal;
