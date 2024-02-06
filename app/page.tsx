import Head from "next/head";
import Goal from "./components/goal/Goal";
import Help from "./components/help/Help";
import ProfileCard from "./components/profileCard/ProfileCard";
import Slider from "./components/slider/Slider";
import Tastimonial from "./components/testimonial/Tastimonial";
import Video from "./components/video/Video";
import "./page.scss";
import { GoogleAnalytics } from "@next/third-parties/google";

const page = () => {
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7335C4Y82J"
        ></script>
      </Head>
      <div>
        <Slider />
        <Goal />
        <div className="save">
          <div className="container">
            <div className="content">
              <p>We&apos;re here to support underserved communities.</p>
              <h2>Fundraising for the people and causes you care about</h2>
            </div>
          </div>
        </div>

        <Help />

        <div className="donor">
          <h2>Our Main Donors</h2>
          <ProfileCard />
        </div>

        <Tastimonial />

        <Video />

        <div className="need-wrapper">
          <div className="container">
            <div className="need">
              <div className="n-left">
                <div className="content">
                  <h2>
                    Congratulations on claiming your nonprofit&apos;s Candid
                    profile!
                  </h2>
                </div>
              </div>
              <div className="n-right">
                <img src="/shape-4.png" alt="Shape" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <GoogleAnalytics gaId="G-7335C4Y82J" />
    </>
  );
};

export default page;
