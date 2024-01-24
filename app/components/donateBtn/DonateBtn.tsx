import { FaHeart } from "react-icons/fa";
import "./DonateBtn.scss";

const DonateBtn = () => {
  return (
    <div className="donate-btn">
      <span>Donate now</span>
      <div className="icon">
        <FaHeart />
      </div>
    </div>
  );
};

export default DonateBtn;
