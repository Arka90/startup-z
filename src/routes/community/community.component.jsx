import "./community.styles.scss";

function Community() {
  return (
    <div className="section-pages">
      <p className="heading-section heading-section-big">
        Community Guidelines
      </p>
      <p className="section-page-para">
        Welcome to StartupZ.world, a platform designed to connect startups and
        investors in the most efficient way possible. Our service is designed to
        be user-friendly and easy to navigate, but it is important that you
        understand the terms and conditions of using our platform.
      </p>

      <p className="section-page-para">
        By using our website, you agree to be bound by the following terms of
        service. If you do not agree to these terms, please do not use our
        website.
      </p>

      <p className="community-list-heading">For Startups:</p>
      <ul className="community-list-item">
        <li>
          Startups are required to provide accurate and up-to-date information
          about their business and financials. Any false or misleading
          information will result in termination of their account.
        </li>
        <li>Startups must comply with all applicable laws and regulations.</li>
        <li>
          Startups are responsible for protecting their own intellectual
          property and must not infringe on the intellectual property of others.
        </li>
      </ul>

      <p className="community-list-heading">Website Visitors:</p>
      <ul className="community-list-item">
        <li>
          Investors are required to comply with all applicable laws and
          regulations.
        </li>
        <li>
          All investments are made at the investor's own risk. StartupZ.World
          does not provide any guarantees or assurances about the success of any
          investment.
        </li>
        <li>
          Investors must do their own due diligence and research before making
          any investment decisions.
        </li>
      </ul>

      <p className="community-list-heading">Website Visitors:</p>
      <ul className="community-list-item">
        <li>
          By accessing our website, you agree to be bound by these terms of
          service.
        </li>
        <li>
          We reserve the right to make changes to these terms at any time
          without notice.
        </li>
        <li>
          We are not responsible for any errors or omissions on our website.
        </li>
      </ul>
    </div>
  );
}

export default Community;
