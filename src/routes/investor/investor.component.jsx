import { AiOutlineCheckCircle } from "react-icons/ai";

import "./investor.styles.scss";

function Investor() {
  return (
    <div className="section-pages">
      <p className="heading-section">Investors</p>
      <p className="section-page-para">
        Welcome to our platform, where we connect innovative startups with savvy
        investors. Our goal is to make the investment process as seamless and
        efficient as possible. We understand that as an investor, you are
        looking for opportunities to grow your portfolio and generate returns.
        That's why we've created a platform that streamlines the process of
        finding, researching, and investing in startups.
      </p>
      <p className="section-page-para">
        Our platform offers a wide range of startups across various industries
        and stages of development, providing investors with a diverse range of
        investment opportunities.
      </p>

      <ul className="investor-list">
        <li className="list-item">
          <div className="point">
            <AiOutlineCheckCircle />
          </div>
          <p>A curated selection of high-potential startups</p>
        </li>
        <li className="list-item">
          <div className="point">
            <AiOutlineCheckCircle />
          </div>
          <p className="list-text">
            Exclusive events and networking opportunities
          </p>
        </li>
        <li className="list-item">
          <div className="point">
            <AiOutlineCheckCircle />
          </div>
          <p className="list-text">A streamlined investment process</p>
        </li>
        <li className="list-item">
          <div className="point">
            <AiOutlineCheckCircle />
          </div>
          <p className="list-text">
            Detailed information on each startup, including financials and pitch
            decks
          </p>
        </li>
        <li className="list-item">
          <div className="point">
            <AiOutlineCheckCircle />
          </div>
          <p className="list-text">
            A curated selection of high-potential startups
          </p>
        </li>
        <li className="list-item">
          <div className="point">
            <AiOutlineCheckCircle />
          </div>
          <p className="list-text">
            Exclusive events and networking opportunities
          </p>
        </li>
        <li className="list-item">
          <div className="point">
            <AiOutlineCheckCircle />
          </div>
          <p className="list-text">
            Wide range of investment options across various industries and
            sectors
          </p>
        </li>
        <li className="list-item">
          <div className="point">
            <AiOutlineCheckCircle />
          </div>
          <p className="list-text">Access to vetted and un-vetted startups</p>
        </li>
        <li className="list-item">
          <div className="point">
            <AiOutlineCheckCircle />
          </div>
          <p className="list-text">Transparent and user-friendly interface</p>
        </li>
        <li className="list-item">
          <div className="point">
            <AiOutlineCheckCircle />
          </div>
          <p className="list-text">
            Opportunity to connect and network with other like-minded
            individuals
          </p>
        </li>
        <li className="list-item">
          <div className="point">
            <AiOutlineCheckCircle />
          </div>
          <p className="list-text">
            Dedicated team of experts constantly researching and analyzing the
            startup ecosystem
          </p>
        </li>
        <li className="list-item">
          <div className="point">
            <AiOutlineCheckCircle />
          </div>
          <p className="list-text">
            Access to regular reports, newsletters and webinars on the latest
            trends and developments in the startup ecosystem.
          </p>
        </li>
      </ul>

      <p className="section-page-para">
        By joining our platform, you'll have access to a diverse range of
        investment opportunities and the support you need to make informed
        decisions. Let's work together to build your portfolio and achieve your
        financial goals.
      </p>

      <hr className="line" />
      <div className="figures">
        <div className="figures-content">
          <p className="numbers">9,050,656</p>
          <p className="text">Investors</p>
        </div>
        <div className="figures-content">
          <p className="numbers">20,956,732</p>
          <p className="text">Registed Startups</p>
        </div>
      </div>
      <hr className="line" />
    </div>
  );
}

export default Investor;
