import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { MdMail } from "react-icons/md";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer-top">
        <div className="container">
          <div className="f-top">
            <div className="f-top-i">
              <Image src="/logo.png" width="100" height="100" alt="logo" />
              <p>Winston-Salem, North Carolina.</p>
            </div>
            <div className="f-top-i">
              <h3>Quick Links</h3>
              <ul className="quick-links">
                <li>
                  <Link href="/">About Us</Link>
                </li>
                <li>
                  <Link href="/">Contact Us</Link>
                </li>
                <li>
                  <Link href="/">Gallery</Link>
                </li>
              </ul>
            </div>
            <div className="f-top-i">
              <h3>Contact</h3>
              <ul className="quick-links">
                <div
                  className="item"
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <div className="icon">
                    <FaPhoneAlt />
                  </div>
                  <p className="text">(743)20213-4065</p>
                </div>
                <div
                  className="item"
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <div className="icon">
                    <MdMail />
                  </div>
                  <p className="text">bridgeinthegap23@gmail.com</p>
                </div>
              </ul>
            </div>
            <div className="f-top-i">
              <h3>Raise Money and help them.</h3>
              <Link
                href="https://www.zeffy.com/en-US/donation-form/aa13ac2d-07c5-42fd-8f8c-aba90133e72f"
                target="blank"
              >
                <div className="f-donate-btn">
                  <span>Donate now</span>
                  <div className="icon">
                    <FaHeart />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container f-bot">
          <div className="f-left">
            <p>
              &copy; 2023 Copyrights by Bridge in the Gap. All Rights Reserved
            </p>
          </div>
          <div className="f-right">
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
    </>
  );
};

export default Footer;
