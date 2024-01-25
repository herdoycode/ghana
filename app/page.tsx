import "./page.scss";
import ProfileCard from "./components/profileCard/ProfileCard";
import Slider from "./components/slider/Slider";
import Goal from "./components/goal/Goal";

const page = () => {
  return (
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
      <div className="donor">
        <h2>Our Main Donors</h2>
        <ProfileCard />
      </div>
    </div>
  );
};

export default page;
