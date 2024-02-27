import { Button } from "@/components/ui/button";
import { Container, Flex, Heading } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { MdCheckCircle } from "react-icons/md";
import type { Metadata } from "next";

const AboutPage = () => {
  return (
    <div>
      <Container className="text-center py-8">
        <Heading as="h1" size="8" mb="4">
          About us
        </Heading>
        <div className="space-y-3 mb-6">
          <p>
            Growing up, Bright always knew his mother was a generous and
            compassionate person. But when she asked him to help pay tuition for
            some students as a birthday gift, it really hit home just how deeply
            she cared about helping others.
          </p>
          <p>
            That request inspired Bright to think beyond his own needs and
            wants, and to consider how he could make a positive impact in the
            world. With that in mind, Bright set out to start a non-profit
            organization, even though he had no idea what he was doing or where
            to begin. There were plenty of ups and downs along the way, but
            through persistence and passion, he was able to turn ideas into
            reality with Brianca Adams.
          </p>
          <p>
            Brianca and her family were interested in assisting and supported
            hugely for our first donation in Ghana together with another friend.
            They did not only provide financial support, but they also became a
            source of mentorship and guidance. With their support, we were able
            to make our first donation in Ghana. Seeing the impact of that
            donation was a life-changing experience for Bright and Brianca, and
            it showed the power of teamwork and the difference one person (or
            one family!) can make.
          </p>
          <p>
            Bright and Brianca began supporting students in Winston Salem, NC in
            October 2023. They saw a need in their community, and had a desire
            to make a positive impact on a larger scale. They partnered with a
            local school in the area to help them pay for a field trip that was
            about to be cancelled. They wanted to ensure that no student misses
            out on enriching field trips due to financial constraints. Through
            community support and donors, they were able to establish a fund
            that covers the expenses for students who can&apos;t afford these
            educational experiences. This endeavor aims to create equal
            opportunities for all, fostering a sense of inclusivity and shared
            learning.
          </p>
          <p>
            After many months of hard work, Brianca Adams and Bright Kavi began
            the application process to get Bridge in the Gap Worldwide a
            501(c)(3) status. Obtaining 501(c)(3) status was a long and
            challenging process that involved a lot of paperwork and legal
            requirements, but they were determined to see it through. This was a
            huge milestone, and it allowed them to officially operate as a
            tax-exempt charitable organization. With their 501(c)(3) status in
            place, they were able to expand their reach and support even more
            students in Winston Salem. They launched new projects, such as
            tutoring programs and mentorship initiatives, to provide students
            with the resources they needed to succeed. Bridge in the Gap
            Worldwide was created to address gaps in children&apos;s education,
            driven by a belief that every child deserves quality learning
            opportunities. Motivated by a deep concern for the well-being of
            underprivileged children, they initiated a nonprofit focused
            primarily on aiding economically disadvantaged kids in accessing
            education. Recognizing the transformative power of education and
            witnessing disparities firsthand, they sought to break the cycle of
            poverty and offer children a chance for a brighter future. Our
            overall goal to make a positive impact by providing resources and
            support for their educational journey.
          </p>
          <p>
            &lsquo;When u agree on a common idea and work towards it together,
            you can create something special&lsquo; Brianca and Bright
          </p>
        </div>
      </Container>
      <div className="bg-slate-200 dark:bg-secondary">
        <Container>
          <Flex
            align="center"
            justify="between"
            py="9"
            gap="6"
            direction={{ initial: "column", md: "row" }}
          >
            <Flex direction="column" className="flex-1" gap="2">
              <Image
                src="/bg-1.jpg"
                width={800}
                height={300}
                alt="about image"
              />
              <Flex align="center" justify="between">
                <Link href="https://www.zeffy.com/en-US/donation-form/aa13ac2d-07c5-42fd-8f8c-aba90133e72f">
                  <Button>
                    <MdCheckCircle /> Donate to Underprivileged
                  </Button>
                </Link>
                <Link href="https://www.zeffy.com/en-US/donation-form/aa13ac2d-07c5-42fd-8f8c-aba90133e72f">
                  <Button>
                    <MdCheckCircle /> Donate for Education
                  </Button>
                </Link>
              </Flex>
            </Flex>
            <div className="flex-1 p-4 text-left">
              <Heading as="h2" size="7">
                We believe we can touch many lives.
              </Heading>
              <p>
                At Bridge in the Gap, we recognize the immense value that
                education holds as a transformative force, capable of shaping
                brighter futures for individuals, communities, and entire
                nations.
              </p>
              <p>
                Our Education Empowerment Initiative has already made a profound
                impact in two communities in Ghana, West Africa. With the
                support of our donors and volunteers, we provided over 450
                students with essential school supplies like bookbags, shoes,
                uniforms, notebooks, pencils, erasers, and a wide selection of
                reading books. This investment in education has resulted in
                improved academic performance, increased school enrollment, and
                greater involvement of parents and the PTA in the lives of the
                students. Our Nonprofit can boast of three brilliant students in
                College pursuing Medicine, Nursing and Biomedical Science. We
                aim very high to build a community of well-mannered professional
                who are going to replicate the compassion shown to them.
              </p>
            </div>
          </Flex>
        </Container>
      </div>
    </div>
  );
};

export default AboutPage;

export const metadata: Metadata = {
  title: "Bridge in the Gap Worldwide",
  description:
    "Bridge in the Gap is a nonprofit organization with a profound commitment to transforming lives through education. We firmly believe that education is not only a fundamental right but also a powerful catalyst for positive social change. Our mission is to break down educational barriers, foster a love for learning among children and adults, and invest in education as a means to inspire lasting and positive transformations in society.",
  keywords:
    "Education, Food Security, Scholarships for disadvantaged kids, Tools for Tomorrow, Empower Her Project, Tools for Tomorrow Initiative, Beyound classrom Horizons",
};
