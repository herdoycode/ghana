import Link from "next/link";
import { MdCheckCircle } from "react-icons/md";
import Slider from "../components/slider/Slider";
import "./page.scss";

const AboutPage = () => {
  return (
    <div className="about-wrapper">
      <div className="ab-top">
        <h1>About us</h1>
        <p>
          Growing up, Bright always knew his mother was a generous and
          compassionate person. But when she asked him to help pay tuition for
          some students as a birthday gift, it really hit home just how deeply
          she cared about helping others.
        </p>
        <p>
          That request inspired Bright to think beyond his own needs and wants,
          and to consider how he could make a positive impact in the world. With
          that in mind, Bright set out to start a non-profit organization, even
          though he had no idea what he was doing or where to begin. There were
          plenty of ups and downs along the way, but through persistence and
          passion, he was able to turn ideas into reality with Brianca Adams.
        </p>
        <p>
          Brianca and her family were interested in assisting and supported
          hugely for our first donation in Ghana together with another friend.
          They did not only provide financial support, but they also became a
          source of mentorship and guidance. With their support, we were able to
          make our first donation in Ghana. Seeing the impact of that donation
          was a life-changing experience for Bright and Brianca, and it showed
          the power of teamwork and the difference one person (or one family!)
          can make.
        </p>
        <p>
          Bright and Brianca began supporting students in Winston Salem, NC in
          October 2023. They saw a need in their community, and had a desire to
          make a positive impact on a larger scale. They partnered with a local
          school in the area to help them pay for a field trip that was about to
          be cancelled. They wanted to ensure that no student misses out on
          enriching field trips due to financial constraints. Through community
          support and donors, they were able to establish a fund that covers the
          expenses for students who can&apos;t afford these educational
          experiences. This endeavor aims to create equal opportunities for all,
          fostering a sense of inclusivity and shared learning.
        </p>
        <p>
          After many months of hard work, Brianca Adams and Bright Kavi began
          the application process to get Bridge in the Gap Worldwide a 501(c)(3)
          status. Obtaining 501(c)(3) status was a long and challenging process
          that involved a lot of paperwork and legal requirements, but they were
          determined to see it through. This was a huge milestone, and it
          allowed them to officially operate as a tax-exempt charitable
          organization. With their 501(c)(3) status in place, they were able to
          expand their reach and support even more students in Winston Salem.
          They launched new projects, such as tutoring programs and mentorship
          initiatives, to provide students with the resources they needed to
          succeed. Bridge in the Gap Worldwide was created to address gaps in
          children&apos;s education, driven by a belief that every child
          deserves quality learning opportunities. Motivated by a deep concern
          for the well-being of underprivileged children, they initiated a
          nonprofit focused primarily on aiding economically disadvantaged kids
          in accessing education. Recognizing the transformative power of
          education and witnessing disparities firsthand, they sought to break
          the cycle of poverty and offer children a chance for a brighter
          future. Our overall goal to make a positive impact by providing
          resources and support for their educational journey.
        </p>
        <p>
          &lsquo;When u agree on a common idea and work towards it together, you
          can create something special&lsquo; Brianca and Bright
        </p>
      </div>
      <div className="container">
        <div className="ab-main">
          <div className="ab-left">
            <Slider />
            <div className="ab-lb">
              <Link href="https://www.zeffy.com/en-US/donation-form/aa13ac2d-07c5-42fd-8f8c-aba90133e72f">
                <button>
                  <MdCheckCircle /> Donate to Underprivileged
                </button>
              </Link>
              <Link href="https://www.zeffy.com/en-US/donation-form/aa13ac2d-07c5-42fd-8f8c-aba90133e72f">
                <button>
                  <MdCheckCircle /> Donate for Education
                </button>
              </Link>
            </div>
          </div>
          <div className="ab-rigtht">
            <h2>We believe we can touch many lives.</h2>
            <p>
              At Bridge in the Gap, we recognize the immense value that
              education holds as a transformative force, capable of shaping
              brighter futures for individuals, communities, and entire nations.
            </p>
            <p>
              Our Education Empowerment Initiative has already made a profound
              impact in two communities in Ghana, West Africa. With the support
              of our donors and volunteers, we provided over 450 students with
              essential school supplies like bookbags, shoes, uniforms,
              notebooks, pencils, erasers, and a wide selection of reading
              books. This investment in education has resulted in improved
              academic performance, increased school enrollment, and greater
              involvement of parents and the PTA in the lives of the students.
              Our Nonprofit can boast of three brilliant students in College
              pursuing Medicine, Nursing and Biomedical Science. We aim very
              high to build a community of well-mannered professional who are
              going to replicate the compassion shown to them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
