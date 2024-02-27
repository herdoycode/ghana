import { Container, Flex, Heading } from "@radix-ui/themes";
import { Metadata } from "next";
import Image from "next/image";
import Donors from "../components/Donors";
import Goal from "../components/Goal";
import Help from "../components/Help";
import Slider from "../components/Slider";
import Subscribe from "../components/Subscribe";
import Tastimonial from "../components/Tastimonial";
import Video from "../components/Video";

const page = () => {
  return (
    <div>
      <Slider />
      <Goal />
      <div className="px-2 bg-slate-400 bg-1">
        <Flex align="center" justify="center" className="h-[400px]">
          <div className="text-center z-10">
            <p>We&apos;re here to support underserved communities.</p>
            <Heading as="h2" size="8">
              Fundraising for the people and causes you care about
            </Heading>
          </div>
        </Flex>
      </div>

      <Help />
      <Donors />
      <Tastimonial />
      <Video />
      <Subscribe />

      <div className="py-16 px-2">
        <Container>
          <Flex
            align="center"
            justify="between"
            direction={{ initial: "column", md: "row" }}
            gap={{ initial: "8", md: "0" }}
          >
            <div className="flex-1">
              <Heading
                as="h2"
                size="8"
                align={{ initial: "center", md: "left" }}
              >
                Congratulations on claiming your nonprofit&apos;s Candid
                profile!
              </Heading>
            </div>
            <Flex align="center" justify="end" className="flex-1">
              <Image
                src="/shape-4.png"
                width={500}
                height={300}
                className="w-[300px]"
                alt="Shape"
              />
            </Flex>
          </Flex>
        </Container>
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: "Bridge in the Gap Worldwide",
  description:
    "Bridge in the Gap is a nonprofit organization with a profound commitment to transforming lives through education. We firmly believe that education is not only a fundamental right but also a powerful catalyst for positive social change. Our mission is to break down educational barriers, foster a love for learning among children and adults, and invest in education as a means to inspire lasting and positive transformations in society.",
  keywords:
    "Education, Food Security, Scholarships for disadvantaged kids, Tools for Tomorrow, Empower Her Project, Tools for Tomorrow Initiative, Beyound classrom Horizons",
};

export default page;
