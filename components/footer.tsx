import { Container, Flex } from "@radix-ui/themes";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="py-6 px-3 bg-gray-800 text-white mt-10">
        <Container>
          <Flex
            align={{ initial: "start", md: "center" }}
            justify="between"
            direction={{ initial: "column", md: "row" }}
            gap={{ initial: "8", md: "0" }}
          >
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">Contact</h2>
              <div className="space-y-3">
                <Flex align="center" gap="2">
                  <Phone /> <span>743-213-4065</span>
                </Flex>
                <Flex align="center" gap="2">
                  <Mail /> <span>bridgeinthegap23@gmail.com</span>
                </Flex>
              </div>
            </div>
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">Quick Links</h2>
              <div className="flex flex-col gap-2">
                <Link href="/about">About</Link>
                <Link href="/programs">Programs</Link>
                <Link href="/events">Events</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
            <Flex
              align="center"
              justify="center"
              direction="column"
              gap="4"
              className="w-full md:w-auto"
            >
              <h2 className="text-2xl font-semibold">Follow Us</h2>
              <Flex align="center" justify="center" gap="4">
                <Link href="https://www.facebook.com/bridgeinthegapworldwide?mibextid=ZbWKwL">
                  <Flex
                    align="center"
                    justify="center"
                    className="w-12 h-12 rounded-full bg-primary shadow hover:shadow-white transition-all cursor-pointer"
                  >
                    <FaFacebook className="text-2xl" />
                  </Flex>
                </Link>
                <Link href="https://www.instagram.com/bridgeinthegap23?igsh=ZHp6ZmdxdTlseHdj">
                  <Flex
                    align="center"
                    justify="center"
                    className="w-12 h-12 rounded-full bg-primary shadow hover:shadow-white transition-all cursor-pointer"
                  >
                    <FaInstagram className="text-2xl" />
                  </Flex>
                </Link>
                <Link href="https://www.linkedin.com/company/bridge-in-the-gap-worldwide">
                  <Flex
                    align="center"
                    justify="center"
                    className="w-12 h-12 rounded-full bg-primary shadow hover:shadow-white transition-all cursor-pointer"
                  >
                    <FaLinkedin className="text-2xl" />
                  </Flex>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </div>

      <div className="py-1 bg-primary text-white text-center">
        &copy; 2025 www.bridgeinthegap.org
      </div>
    </>
  );
}
