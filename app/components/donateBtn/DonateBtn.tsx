import { FaHeart } from "react-icons/fa";
import "./DonateBtn.scss";
import Link from "next/link";

const DonateBtn = () => {
  return (
    <Link href='https://www.zeffy.com/en-US/donation-form/aa13ac2d-07c5-42fd-8f8c-aba90133e72f' target="blank">
     <div className="donate-btn">
      <span>Donate now</span>
      <div className="icon">
        <FaHeart />
      </div>
    </div>
    </Link>
  );
};

export default DonateBtn;
