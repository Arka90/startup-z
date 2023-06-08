import { FaCheck } from "react-icons/fa";
import "./pricing.styles.scss";

function Pricing() {
  return (
    <div className="section-pages">
      <p className="heading-section-big heading-section">Pricing</p>

      <div className="price-container">
        <div className="price-box">
          <p className="plan">Silver</p>
          <p className="price">Rs. 500</p>

          <ul className="features">
            <li>
              <FaCheck className="icon-green" /> Duration: 1 Month
            </li>
            <li>
              <FaCheck className="icon-green" /> Premium Listing
            </li>
            <li>
              <FaCheck className="icon-green" /> Contact Display
            </li>
            <li>
              <FaCheck className="icon-green" /> Services Display
            </li>
          </ul>
          <button className="btn btn-subscribe">Suscribe</button>
        </div>
        <div className="price-box price-box-pink">
          <p className="plan plan-pink">Golden</p>
          <p className="price price-pink">Rs. 1000</p>

          <ul className="features">
            <li>
              <FaCheck className="icon-white" /> Duration: 3 Month
            </li>
            <li>
              <FaCheck className="icon-white" /> Premium Listing
            </li>
            <li>
              <FaCheck className="icon-white" /> Contact Display
            </li>
            <li>
              <FaCheck className="icon-white" /> Services Display
            </li>
          </ul>
          <button className="btn btn-subscribe btn-subscribe-white">
            Suscribe
          </button>
        </div>
        <div className="price-box">
          <p className="plan">Platinum</p>
          <p className="price">Rs. 2000</p>

          <ul className="features">
            <li>
              <FaCheck className="icon-green" /> Duration: 6 Month
            </li>
            <li>
              <FaCheck className="icon-green" /> Premium Listing
            </li>
            <li>
              <FaCheck className="icon-green" /> Contact Display
            </li>
            <li>
              <FaCheck className="icon-green" /> Services Display
            </li>
          </ul>
          <button className="btn btn-subscribe">Suscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
