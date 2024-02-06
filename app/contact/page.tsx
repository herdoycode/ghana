import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import ContactForm from "./ContactForm";
import "./page.scss";
import DonateBtn from "../components/donateBtn/DonateBtn";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";

const ContactPage = () => {
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7335C4Y82J"
        ></script>
      </Head>
      <div className="contact-page">
        <div className="container">
          <div className="contact-info">
            <div
              className="c-top"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <h2>Contact Us</h2>
              <p>
                Through education, we empower not just individuals, but entire
                generations.
              </p>
              <div
                style={{
                  width: "155px",
                }}
              >
                <DonateBtn />
              </div>
            </div>
            <div className="contact-items">
              <div className="c-item">
                <div className="icon">
                  <IoMdMail />
                </div>
                <h3>Email Address</h3>
                <p>bridgeinthegap23@gmail.com</p>
              </div>
              <div className="c-item">
                <div className="icon">
                  <IoLocation />
                </div>
                <h3>Location</h3>
                <p>Winston Salem, North Carolina.</p>
              </div>
              <div className="c-item">
                <div className="icon">
                  <FaPhone />
                </div>
                <h3>Phone</h3>
                <p>(743) 213-4065</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="container">
            <div className="c-form">
              <div className="left">
                <h2>We&apos;d Love to hear from you</h2>
                <p>
                  We are thrilled that you&apos;re interested in connecting with
                  Bridge In The Gap. Whether you have a question, want to learn
                  more about our programs, or simply want to join hands in
                  making a difference, we are here to listen and engage. Feel
                  free to reach out to us using any of the following methods:
                </p>
              </div>
              <div className="right">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      <GoogleAnalytics gaId="G-7335C4Y82J" />
    </>
  );
};

export default ContactPage;
