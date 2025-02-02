import { Container, Flex, Grid, Heading } from "@radix-ui/themes";
import { FaBowlFood, FaUserGraduate } from "react-icons/fa6";
import { MdOutlineCastForEducation } from "react-icons/md";

const items = [
  {
    id: 1,
    icon: <FaUserGraduate className="text-4xl text-primary" />,
    title: "Kids Education",
    text: "We believe in the power of education to transform lives and create a brighter future for all children.",
  },
  {
    id: 2,
    icon: <MdOutlineCastForEducation className="text-4xl text-primary" />,
    title: "School Charity",
    text: "Through our dedicated efforts, we aim to provide quality education and essential resources to schools in need.",
  },
  {
    id: 3,
    icon: <FaBowlFood className="text-4xl text-primary" />,
    title: "Food Security",
    text: "We are committed to promoting food security and addressing the underlying issues that contribute to it through our Harvest Hope Initiative.",
  },
];

const Help = () => {
  return (
    <div className="py-16 px-2 bg-secondary">
      <Container>
        <div className="help">
          <Flex
            align="center"
            justify="center"
            direction="column"
            gap="2"
            py="9"
          >
            <h1 className="text-3xl text-primary md:text-4xl font-semibold">
              We&apos;re here to help others
            </h1>
            <p className="w-full md:max-w-[600px] text-center">
              Our mission is to provide equitable access to quality education,
              empower marginalized individuals and create an inclusive and
              thriving society.
            </p>
          </Flex>

          <Grid
            columns={{ initial: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }}
            gap="6"
          >
            {items.map((i) => (
              <Flex
                key={i.id}
                align="center"
                className="flex-1 bg-white dark:bg-[#000] p-3"
                justify="center"
                direction="column"
                gap="2"
              >
                {i.icon}
                <Heading as="h3" size="4" className="text-primary">
                  {i.title}
                </Heading>
                <p className="text-center">{i.text}</p>
              </Flex>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Help;
