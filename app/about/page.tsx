import { Hero } from "@/components/hero";
import Sidebar from "@/components/sidebar";
import { Container, Grid } from "@radix-ui/themes";
import { Metadata } from "next";

export default function About() {
  const images = [
    { id: 1, image: "/slider/1.jpg" },
    { id: 2, image: "/slider/2.jpg" },
    { id: 3, image: "/slider/3.jpg" },
  ];
  return (
    <>
      <Hero images={images} />
      <Container className="px-3 my-10">
        <Grid columns={{ initial: "1fr", md: "1fr 400px" }}>
          <div className="space-y-4 px-3">
            <h1 className="text-4xl font-semibold">About Us</h1>
            <p>
              Growing up, Bright always knew his mother was a generous and
              compassionate person. But when she asked him to help pay tuition
              for some students as a birthday gift, it really hit home just how
              deeply she cared about helping others.
            </p>
            <p>
              That request inspired Bright to think beyond his own needs and
              wants, and to consider how he could make a positive impact in the
              world. With that in mind, Bright set out to start a non-profit
              organization, even though he had no idea what he was doing or
              where to begin. There were plenty of ups and downs along the way,
              but through persistence and passion, he was able to turn ideas
              into reality with Brianca Adams.
            </p>
            <p>
              Brianca and her family were interested in assisting and supported
              hugely for our first donation in Ghana together with another
              friend. They did not only provide financial support, but they also
              became a source of mentorship and guidance. With their support, we
              were able to make our first donation in Ghana. Seeing the impact
              of that donation was a life-changing experience for Bright and
              Brianca, and it showed the power of teamwork and the difference
              one person (or one family!) can make.
            </p>
            <p>
              Bright and Brianca began supporting students in Winston Salem, NC
              in October 2023. They saw a need in their community, and had a
              desire to make a positive impact on a larger scale. They partnered
              with a local school in the area to help them pay for a field trip
              that was about to be cancelled. They wanted to ensure that no
              student misses out on enriching field trips due to financial
              constraints. Through community support and donors, they were able
              to establish a fund that covers the expenses for students who
              can&apos;t afford these educational experiences. This endeavor
              aims to create equal opportunities for all, fostering a sense of
              inclusivity and shared learning.
            </p>
            <p>
              After many months of hard work, Brianca Adams and Bright Kavi
              began the application process to get Bridge in the Gap Worldwide a
              501(c)(3) status. Obtaining 501(c)(3) status was a long and
              challenging process that involved a lot of paperwork and legal
              requirements, but they were determined to see it through. This was
              a huge milestone, and it allowed them to officially operate as a
              tax-exempt charitable organization. With their 501(c)(3) status in
              place, they were able to expand their reach and support even more
              students in Winston Salem. They launched new projects, such as
              tutoring programs and mentorship initiatives, to provide students
              with the resources they needed to succeed. Bridge in the Gap
              Worldwide was created to address gaps in children&apos;s
              education, driven by a belief that every child deserves quality
              learning opportunities. Motivated by a deep concern for the
              well-being of underprivileged children, they initiated a nonprofit
              focused primarily on aiding economically disadvantaged kids in
              accessing education. Recognizing the transformative power of
              education and witnessing disparities firsthand, they sought to
              break the cycle of poverty and offer children a chance for a
              brighter future. Our overall goal to make a positive impact by
              providing resources and support for their educational journey.
            </p>
            <p>
              When u agree on a common idea and work towards it together, you
              can create something special Brianca and Bright
            </p>
          </div>
          <Sidebar />
        </Grid>
      </Container>
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
