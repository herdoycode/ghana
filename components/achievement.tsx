import { Container, Flex, Grid } from "@radix-ui/themes";
import Image from "next/image";

export default function Achievement() {
  return (
    <Container className="px-3 py-10">
      <Grid columns={{ initial: "1", md: "1fr 1fr" }} gap="6">
        <Flex align="center" justify="center" className="p-2">
          <h1 className="text-3xl text-primary md:text-4xl font-semibold">
            Congratulations on claiming your nonprofit&apos;s Candid profile!
          </h1>
        </Flex>
        <Image
          src="/achievement.png"
          width={500}
          height={500}
          alt="achievement"
        />
      </Grid>
    </Container>
  );
}
