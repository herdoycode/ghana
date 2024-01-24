import "./page.scss";
import ProfileCard from "./components/profileCard/ProfileCard";
import Slider from "./components/slider/Slider";

const page = () => {
  return (
    <div>
      <Slider />
      <div className="donor">
        <h2>Our Main Donors</h2>
        <ProfileCard />
      </div>
    </div>
  );
};

export default page;
