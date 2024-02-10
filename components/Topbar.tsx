import { Box, Container, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { MdLocationPin, MdMail } from "react-icons/md";

const Topbar = () => {
  return (
    <Box className="bg-primary text-white p-2">
      <Container>
        <Flex align="center" justify="between" gap="2">
          <Flex
            direction={{ initial: "column", md: "row" }}
            gap={{ initial: "0", md: "2" }}
          >
            <Flex align="center" gap="1">
              <div className="icon">
                <MdLocationPin />
              </div>
              <p className="text">Winston-Salem, North Carolina.</p>
            </Flex>
            <Flex align="center" gap="1">
              <div className="icon">
                <MdMail />
              </div>
              <p className="text">bridgeinthegap23@gmail.com</p>
            </Flex>
          </Flex>
          <Flex align="center" justify="end" gap="3">
            <Flex align="center" gap="1">
              <Link href="https://www.facebook.com/bridgeinthegapworldwide?mibextid=ZbWKwL">
                <FaFacebookF />
              </Link>
            </Flex>
            <Flex align="center" gap="1">
              <Link href="https://www.instagram.com/bridgeinthegap23?igsh=ZHp6ZmdxdTlseHdj">
                <FaInstagram />
              </Link>
            </Flex>
            <Flex align="center" gap="1">
              <Link href="https://www.linkedin.com/company/bridge-in-the-gap-worldwide">
                <IoLogoLinkedin />
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Topbar;
