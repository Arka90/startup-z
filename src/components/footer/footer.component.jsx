import {
  RiTwitterFill,
  RiFacebookBoxFill,
  RiInstagramFill,
} from "react-icons/ri";

import "./footer.styles.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="row-first">
        <div className="col">
          <div className="footer-logo">
            <img src="assets/white-logo.png" alt="logo" />
          </div>

          <div className="footer-content">
            <p className="footer-text-normal">101, Relcon Enclave, NH-48</p>
            <p className="footer-text-normal">Surat, Gujarat</p>
            <p className="footer-text-normal">India - 394325</p>
          </div>
        </div>
        <div className="col">
          <p className="footer-title">Company</p>
          <div className="footer-content">
            <Link to="about" className="footer-text">
              About Us
            </Link>
            <Link to="contact" className="footer-text">
              Contact Us
            </Link>
            <Link to="pricing" className="footer-text">
              Pricing
            </Link>
          </div>
        </div>
        <div className="col">
          <p className="footer-title">Quick Links</p>
          <div className="footer-content">
            <Link to="guidelines" className="footer-text">
              Community Guidelines
            </Link>
            <Link to="privacy" className="footer-text">
              Privacy Policy
            </Link>
            <Link to="terms" className="footer-text">
              Terms Of Use
            </Link>
            <Link to="refund" className="footer-text">
              Cancellation & Refund
            </Link>

            <Link to="shipping" className="footer-text">
              Shipping & Exchanges
            </Link>
          </div>
        </div>
        <div className="col">
          <p className="footer-title">FAQs</p>
          <div className="footer-content">
            <Link to="faq" className="footer-text">
              Startup FAQs
            </Link>
          </div>
        </div>
      </div>
      <div className="row-second">
        <div className="socials">
          <RiFacebookBoxFill className="icon" />
          <RiInstagramFill className="icon" />
          <RiTwitterFill className="icon" />
        </div>
        <div className="copyright">
          © 2023{" "}
          <span className="bold-txt bold-txt-hover">StartupzWorld, </span>
          All Rights Resevered.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
