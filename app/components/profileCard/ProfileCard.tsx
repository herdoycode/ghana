import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./ProfileCard.scss";

const ProfileCard = () => {
  return (
    <div className="donars">
      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src="/22.jpg" alt="profile one" />
          </div>

          <ul className="social-icons">
            <li>
              <Link href="">
                <i className="fab fa-facebook-f">
                  <FaFacebookF />
                </i>
              </Link>
            </li>
            <li>
              <Link href="">
                <i className="fab fa-instagram">
                  <FaInstagram />
                </i>
              </Link>
            </li>
            <li>
              <Link href="">
                <i className="fab fa-twitter">
                  <CiLinkedin />
                </i>
              </Link>
            </li>
          </ul>

          <div className="details">
            <h2>
              Carolyn Larry
              <br />
              <span className="job-title">Donor</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="card-wrapper">
        <div className="card profile-two">
          <div className="card-image profile-img--two">
            <img src="/11.jpg" alt="profile two" />
          </div>

          <ul className="social-icons">
            <li>
              <Link href="">
                <i className="fab fa-facebook-f">
                  <FaFacebookF />
                </i>
              </Link>
            </li>
            <li>
              <Link href="">
                <i className="fab fa-instagram">
                  <FaInstagram />
                </i>
              </Link>
            </li>
            <li>
              <Link href="">
                <i className="fab fa-twitter">
                  <CiLinkedin />
                </i>
              </Link>
            </li>
          </ul>

          <div className="details jane">
            <h2>
              Paulette Adams
              <br />
              <span className="job-title">Donor</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="card-wrapper">
        <div className="card">
          <div className="card-image">
            <img src="/33.jpg" alt="profile one" />
          </div>

          <ul className="social-icons">
            <li>
              <Link href="">
                <i className="fab fa-facebook-f">
                  <FaFacebookF />
                </i>
              </Link>
            </li>
            <li>
              <Link href="">
                <i className="fab fa-instagram">
                  <FaInstagram />
                </i>
              </Link>
            </li>
            <li>
              <Link href="">
                <i className="fab fa-twitter">
                  <CiLinkedin />
                </i>
              </Link>
            </li>
          </ul>

          <div className="details">
            <h2>
              Belle Perkins
              <br />
              <span className="job-title">Donor</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
