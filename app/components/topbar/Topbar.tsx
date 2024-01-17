import Link from "next/link";
import { MdLocationPin } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { MdMail } from "react-icons/md";
import "./Topbar.scss";

const Topbar = () => {
  return (
    <div className="topbar-wrapper">
      <div className="container">
        <div className="topbar">
          <div className="left">
            <div className="item">
              <div className="icon">
                <MdLocationPin />
              </div>
              <p className="text">Winston-Salem, North Carolina.</p>
            </div>
            <div className="item">
              <div className="icon">
                <MdMail />
              </div>
              <p className="text">bridgeinthegap23@gmail.com</p>
            </div>
          </div>
          <div className="right">
            <div className="item">
              <Link href="https://www.facebook.com/bridgeinthegapworldwide?mibextid=ZbWKwL">
                <FaFacebookF />
              </Link>
            </div>
            <div className="item">
              <Link href="https://www.instagram.com/bridgeinthegap23?igsh=ZHp6ZmdxdTlseHdj">
                <FaInstagram />
              </Link>
            </div>
            <div className="item">
              <Link href="https://www.linkedin.com/company/bridge-in-the-gap-worldwide">
                <IoLogoLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
