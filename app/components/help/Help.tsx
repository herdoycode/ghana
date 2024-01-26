import { MdOutlineCastForEducation } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";
import "./Help.scss";

const Help = () => {
  return (
    <div className="help-wrapper">
      <div className="container">
        <div className="help">
          <div className="h-top">
            <h2>We&apos;re here to help others</h2>
            <p>
              Our mission is to provide equitable access to quality education,
              empower marginalized individuals and create an inclusive and
              thriving society.
            </p>
          </div>
          <div className="h-main">
            <div className="h-item">
              <div className="icon">
                <FaUserGraduate />
              </div>
              <h3>Kids Education</h3>
              <p>
                We believe in the power of education to transform lives and
                create a brighter future for all children.
              </p>
            </div>
            <div className="h-item">
              <div className="icon">
                <MdOutlineCastForEducation />
              </div>
              <h3>School Charity</h3>
              <p>
                Through our dedicated efforts, we aim to provide quality
                education and essential resources to schools in need
              </p>
            </div>
            <div className="h-item">
              <div className="icon">
                <FaBowlFood />
              </div>
              <h3>Food Security</h3>
              <p>
                We are committed to promoting food security and addressing the
                underlying issues that contribute to it through our Harvest Hope
                Initiative.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
