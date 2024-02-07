import Image from "next/image";
import "./Subscribe.scss";

const Subscribe = () => {
  return (
    <div className="subscribe-wrapper">
      <div className="subscribe">
        <Image src="/envelope.png" width="120" height="120" alt="mail-icon" />
        <h2>SUBSCRIBE</h2>
        <p>Subscribe to our newsletter & stay updated</p>
        <div className="subscribe-input">
          <input type="text" placeholder="Your Email" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
