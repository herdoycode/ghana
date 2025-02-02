import { Avatar, Container, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Tastimonial = () => {
  const tt = [
    {
      id: 1,
      img: "/tastimonials/t1.jpg",
      quote:
        "These testimonials are a testament to the incredible impact Bridge In The Gap has on the lives of those they support. Through education and empowerment, they are turning dreams into reality and lighting up the path to a brighter future",
      name: "Brianca Adams",
    },
    {
      id: 2,
      img: "/tastimonials/t2.jpg",
      quote: "Marvelously helping the less privileged, God bless them.🙏",
      name: "Jessica Addo",
    },
    {
      id: 3,
      img: "/tastimonials/t3.jpg",
      quote:
        "They were lights in the lives of students in Ghana. they gave many stationaries. it was touching.",
      name: "Sitsofe Kodzo",
    },
    {
      id: 4,
      img: "/tastimonials/t4.webp",
      quote: "Doing amazing work in the community.",
      name: "Francisca Amorni",
    },
  ];

  return (
    <div className="bg-secondary py-16 px-2">
      <Container>
        <Flex align="center" justify="center">
          <Flex
            align="center"
            justify="center"
            direction="column"
            gap="2"
            className="w-full md:w-[600px] mb-6"
          >
            <h1 className="text-3xl text-primary md:text-4xl font-semibold">
              What they&apos;re saying about us
            </h1>
            <Text align="center">
              These testimonials are a testament to the incredible impact Bridge
              In The Gap has on the lives of those they support. Through
              education and empowerment, they are turning dreams into reality
              and lighting up the path to a brighter future
            </Text>
          </Flex>
        </Flex>
        <Grid columns={{ initial: "1fr", sm: "1fr 1fr" }} gap="6">
          {tt.map((i) => (
            <Flex
              gap="3"
              key={i.id}
              className="bg-white dark:bg-[#000] p-3 rounded-lg"
            >
              <div className="t-img">
                <Avatar
                  size="4"
                  radius="full"
                  src={i.img}
                  fallback="Our feedback"
                />
              </div>
              <div className="relative">
                <div>
                  <div className="text-4xl text-zinc-200">
                    <RiDoubleQuotesL />
                  </div>
                  <p>{i.quote}</p>
                  <div className="text-4xl absolute right-0 text-zinc-200">
                    <RiDoubleQuotesR />
                  </div>
                </div>
                <div className="mt-8">
                  <Heading as="h3" size="4" className="text-primary">
                    {i.name}
                  </Heading>
                  <p className="text-zinc-400">Donatee</p>
                </div>
              </div>
            </Flex>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Tastimonial;
