import { Box, Container, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import ContactForm from "./ContactForm";

const items = [
  {
    id: 1,
    icon: <IoMdMail className="text-2xl" />,
    title: "Email Address",
    text: "bridgeinthegap23@gmail.com",
  },
  {
    id: 2,
    icon: <IoLocation className="text-2xl" />,
    title: "Location",
    text: "Winston Salem, North Carolina",
  },
  {
    id: 3,
    icon: <FaPhone className="text-2xl" />,
    title: "Phone",
    text: "(743) 213-4065",
  },
];

const ContactPage = () => {
  return (
    <div className="px-2">
      <Box className="bg-secondary" py="7">
        <Container>
          <Box className="text-center space-y-2 mb-8">
            <Heading as="h1" size="8">
              Contact Us
            </Heading>
            <Text as="p" size="5" align="center">
              Through education, we empower not just individuals, but entire
              generations.
            </Text>
          </Box>
          <Grid columns={{ initial: "1fr", md: "1fr 1fr 1fr" }} gap="5">
            {items.map((i) => (
              <Box
                key={i.id}
                className="bg-white dark:bg-[#000] flex flex-col items-center py-6 rounded-lg"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center">
                  {i.icon}
                </div>
                <Heading as="h3" size="4">
                  {i.title}
                </Heading>
                <p> {i.text} </p>
              </Box>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box className="py-10">
        <Container>
          <Flex
            align="center"
            justify="between"
            direction={{ initial: "column", md: "row" }}
            gap={{ initial: "6", md: "0" }}
          >
            <div className="flex-1">
              <Heading as="h2" size="8" mb="4">
                We&apos;d Love to hear from you
              </Heading>
              <Text as="p">
                We are thrilled that you&apos;re interested in connecting with
                Bridge In The Gap. Whether you have a question, want to learn
                more about our programs, or simply want to join hands in making
                a difference, we are here to listen and engage. Feel free to
                reach out to us using any of the following methods:
              </Text>
            </div>
            <div className="flex-1">
              <ContactForm />
            </div>
          </Flex>
        </Container>
      </Box>
    </div>
  );
};

export default ContactPage;
