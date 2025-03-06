import { Hero } from "@/components/hero";
import Sidebar from "@/components/sidebar";
import { Container, Grid } from "@radix-ui/themes";

const Programs = () => {
  const images = [
    { id: 1, image: "/programs/women/s1.webp" },
    { id: 2, image: "/programs/women/s2.webp" },
    { id: 3, image: "/programs/women/3.jpg" },
  ];
  return (
    <>
      <Hero images={images} />
      <Container className="px-3 my-10">
        <Grid columns={{ initial: "1fr", md: "1fr 400px" }}>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold text-primary">
              Our Programs
            </h1>
            <h3 className="text-xl font-semibold">EMPOWER HER CONFERENCE</h3>
            Our &apos;Empower Her&apos; program is a bold approach to youth-led
            advocacy. Supporting young women and investing in their education
            can address the barriers standing in the way of their dreams. Every
            year, over 400 young women are inspired to pursue STEM careers. In
            2023, we welcomed 7 women from the United States of America to Ghana
            with different portfolios including speech pathology, Biochemistry,
            Accounting, Business, and engineering to speak to these women about
            how they can achieve higher than where they are in life. This
            program also supports menstrual equity through our pad distribution
            throughout the year.
            <h3 className="text-xl font-semibold">
              EQUIPPING FOR A BRIGHTER FUTURE
            </h3>
            Our &apos;Equipping for a Brighter Tomorrow&apos; project is
            dedicated to supporting students in less privileged communities by
            providing essential book bags and school supplies. In the summer, we
            work tirelessly to ensure that, every student has the tools
            necessary to succeed. By donating book bags, pencils, notebooks, and
            other vital supplies, we&apos;re helping students prepare for the
            upcoming school year and boosting their confidence and enthusiasm
            for learning. Join us in making a difference in the lives of these
            deserving students. Together, we can empower them to reach their
            full potential and create a brighter future for themselves and their
            communities.
            <h3 className="text-xl font-semibold">
              PARTNERING WITH LOCAL AND INTERNATIONAL NONPROFITS
            </h3>
            We are proud to be partnering with nonprofits such as Samaritan
            Ministries, Winston-Salem, NC to provide nutritious meals for their
            residents. The program aims to nourish both the bodies and souls of
            those we serve, demonstrating compassion and care for our community.
            Our team prepares and cooks meals for over 120 residents on-site at
            Samaritan Ministries.
          </div>
          <Sidebar />
        </Grid>
      </Container>
    </>
  );
};

export default Programs;
