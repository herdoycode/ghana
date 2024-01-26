import Link from "next/link";
import { MdCheckCircle } from "react-icons/md";
import Slider from "../components/slider/Slider";
import Tastimonial from "../components/testimonial/Tastimonial";
import "./page.scss";

const AboutPage = () => {
  return (
    <div className="about-wrapper">
      <div className="ab-top">
        <h1>About us</h1>
        <p>
          The hunger to bridge the gap in the lives of people and set the pace
          to build the foundations of many generations.
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
            <h2>We believe that we can save life</h2>
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
      <Tastimonial />
    </div>
  );
};

export default AboutPage;
