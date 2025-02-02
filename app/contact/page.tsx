import { Hero } from "@/components/hero";
import { Box, Container, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import { Metadata } from "next";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import ContactForm from "./contact-form";

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
  const images = [
    { id: 1, image: "/slider/1.jpg" },
    { id: 2, image: "/slider/2.jpg" },
    { id: 3, image: "/slider/3.jpg" },
  ];
  return (
    <>
      <Hero images={images} />
      <div className="px-3 bg-secondary">
        <Container className="py-28">
          <Box className="text-center space-y-2 mb-8">
            <Heading as="h1" size="8" className="text-primary">
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
      </div>

      <Container className="py-10">
        <Flex
          align="center"
          justify="between"
          direction={{ initial: "column", md: "row" }}
          gap={{ initial: "6", md: "0" }}
        >
          <div className="flex-1">
            <Heading className="text-primary" as="h2" size="8" mb="4">
              We&apos;d Love to hear from you
            </Heading>
            <Text as="p">
              We are thrilled that you&apos;re interested in connecting with
              Bridge In The Gap. Whether you have a question, want to learn more
              about our programs, or simply want to join hands in making a
              difference, we are here to listen and engage. Feel free to reach
              out to us using any of the following methods:
            </Text>
          </div>
          <div className="flex-1">
            <ContactForm />
          </div>
        </Flex>
      </Container>
    </>
  );
};

export const metadata: Metadata = {
  title: "Contacts to Bridge in the Gap Worldwide.",
  description:
    "Reach out to Bridge in the Gap Worldwide and connect with us! Share your questions, comments, or partnership ideas and we'll respond promptly. Let's work together to bridge the gap and create a brighter future for all.",
  keywords: "Brianca, Sitsofe, Generations",
};

export default ContactPage;
