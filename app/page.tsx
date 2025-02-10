import Achievement from "@/components/achievement";
import Donors from "@/components/donors";
import Goal from "@/components/goal";
import Help from "@/components/help";
import { Hero } from "@/components/hero";
import Subscribe from "@/components/subscribe";
import Tastimonial from "@/components/tastimonial";
import { Flex, Heading } from "@radix-ui/themes";
import { Metadata } from "next";

export default function Home() {
  const images = [
    { id: 1, image: "/slider/s1.jpg" },
    { id: 2, image: "/slider/s2.jpg" },
    { id: 3, image: "/slider/1.jpg" },
    { id: 4, image: "/slider/2.jpg" },
    { id: 5, image: "/slider/3.jpg" },
  ];
  return (
    <>
      <Hero images={images} />
      <Goal />
      <div className="px-2 bg-slate-400 bg-1">
        <Flex align="center" justify="center" className="h-[400px]">
          <div className="text-center z-10">
            <p className="text-2xl">
              We&apos;re here to support underserved communities.
            </p>
            <Heading as="h2" size="8" className="text-5xl font-semibold">
              Fundraising for the people and causes you care about
            </Heading>
          </div>
        </Flex>
      </div>
      <Help />
      <Donors />
      <Tastimonial />
      <Achievement />
      <Subscribe />
    </>
  );
}

export const metadata: Metadata = {
  title: "Bridge in the Gap Worldwide",
  description:
    "Bridge in the Gap is a nonprofit organization with a profound commitment to transforming lives through education. We firmly believe that education is not only a fundamental right but also a powerful catalyst for positive social change. Our mission is to break down educational barriers, foster a love for learning among children and adults, and invest in education as a means to inspire lasting and positive transformations in society.",
  keywords:
    "Education, Food Security, Scholarships for disadvantaged kids, Tools for Tomorrow, Empower Her Project, Tools for Tomorrow Initiative, Beyound classrom Horizons",
};
