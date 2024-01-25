import Image from "next/image";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import "./Tastimonial.scss";

const Tastimonial = () => {
  const tt = [
    {
      id: 1,
      img: "/t1.jpg",
      quote:
        "These testimonials are a testament to the incredible impact Bridge In The Gap has on the lives of those they support. Through education and empowerment, they are turning dreams into reality and lighting up the path to a brighter future",
      name: "Brianca Adams",
    },
    {
      id: 2,
      img: "/t2.jpg",
      quote: "Marvelously helping the less privileged, God bless them.🙏",
      name: "Jessica Addo",
    },
    {
      id: 3,
      img: "/t3.jpg",
      quote:
        "They were lights in the lives of students in Ghana. they gave many stationaries. it was touching.",
      name: "Sitsofe Kodzo",
    },
    {
      id: 4,
      img: "/t4.webp",
      quote: "Doing amazing work in the community.",
      name: "Francisca Amorni",
    },
  ];

  return (
    <div className="tastimonial-wrapper">
      <div className="tt-top">
        <h2>What they&apos;re saying about us</h2>
        <p>
          These testimonials are a testament to the incredible impact Bridge In
          The Gap has on the lives of those they support. Through education and
          empowerment, they are turning dreams into reality and lighting up the
          path to a brighter future
        </p>
      </div>
      <div className="testimonials">
        {tt.map((i) => (
          <div key={i.id} className="testimonial">
            <div className="t-img">
              <Image width="80" height="80" src={i.img} alt="user" />
            </div>
            <div className="t-content">
              <div>
                <div className="q-t">
                  <RiDoubleQuotesL />
                </div>
                <p>{i.quote}</p>
                <div className="q-b">
                  <RiDoubleQuotesR />
                </div>
              </div>
              <div className="t-user">
                <h3>{i.name}</h3>
                <p>Donatee</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tastimonial;
