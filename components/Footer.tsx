import { Container, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { MdMail } from "react-icons/md";
import DonateButton from "./DonateButton";

const Footer = () => {
  return (
    <footer>
      <div className="bg-black dark:bg-secondary text-zinc-200 px-2">
        <Container>
          <Grid
            columns={{ initial: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" }}
            py="9"
            gap="6"
          >
            <div className="space-y-3">
              <Image src="/logo.png" width="100" height="100" alt="logo" />
              <p>Winston-Salem, North Carolina.</p>
            </div>
            <div className="space-y-2">
              <Heading as="h3" size="4">
                Quick Links
              </Heading>
              <ul className="space-y-1">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/gallery">Gallery</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <Heading as="h3" size="4">
                Contact
              </Heading>
              <ul className="space-y-1">
                <Flex align="center" gap="2">
                  <div className="icon">
                    <FaPhoneAlt />
                  </div>
                  <p className="text">743-213-4065</p>
                </Flex>
                <Flex align="center" gap="2">
                  <div className="icon">
                    <MdMail />
                  </div>
                  <p className="text">bridgeinthegap23@gmail.com</p>
                </Flex>
              </ul>
            </div>
            <Flex align="center" justify="start">
              <DonateButton />
            </Flex>
          </Grid>
        </Container>
      </div>
      <div className="bg-green-800 py-2 text-white">
        <Container>
          <Flex align="center" justify="between">
            <Text as="p" size="1">
              &copy; 2023 Copyrights by Bridge in the Gap. All Rights Reserved
            </Text>

            <ul className="flex items-center gap-3">
              <li>
                <Link href="https://www.facebook.com/bridgeinthegapworldwide?mibextid=ZbWKwL">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/bridgeinthegap23?igsh=ZHp6ZmdxdTlseHdj">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/bridge-in-the-gap-worldwide">
                  <IoLogoLinkedin />
                </Link>
              </li>
            </ul>
          </Flex>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
