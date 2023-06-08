import "./startup.styles.scss";
import StartupCard from "../../components/startup-card/startup-card.component";
function Startup() {
  return (
    <div className="section-pages">
      <p className="heading-section">StartUps</p>
      <p className="section-page-para">
        Starting a business can be a challenging and rewarding experience, but
        it can also be a lonely one. That's why we created our platform, to
        provide a community for startups to connect, collaborate, and grow.
      </p>

      <div className="start-up-card-container">
        <StartupCard
          index="1"
          heading="Network Opportunity"
          content="Our platform connects you with a diverse community of entrepreneurs, investors, and industry experts. This gives you the opportunity to meet new people, learn from their experiences, and make valuable connections that can help your business grow."
        />
        <StartupCard
          index="2"
          heading="Access to Capital"
          content="As a startup, access to funding can be a major hurdle. We aim to help bridge that gap by connecting startups with investors who are interested in funding innovative and promising businesses."
        />
        <StartupCard
          index="3"
          heading="Mentorship and Support"
          content="Starting a business can be a daunting task, and it's important to have someone to guide and support you along the way. Our platform provides access to experienced mentors and advisors who can offer valuable advice and support."
        />
        <StartupCard
          index="4"
          heading="Educational Resources"
          content="We understand that starting a business requires a lot of learning, so we provide access to educational resources such as webinars, tutorials, and workshops. These resources cover a wide range of topics, from marketing and finance to legal and compliance."
        />
        <StartupCard
          index="5"
          heading="Exclusive Discounts & Deals"
          content="As a member of our community, you'll have access to exclusive discounts and deals on products and services that can help your business grow. From office space to marketing services, we've got you covered."
        />
        <StartupCard
          index="6"
          heading="Community Events"
          content="We organize various events such as workshops, meetups, and conferences, where startups can learn, network, and showcase their products or services."
        />
        <StartupCard
          index="7"
          heading="Access to Government Grants & Schemes"
          content="Our platform provides access to various government grants and schemes which can be helpful for the startup in their initial stages."
        />
        <StartupCard
          index="8"
          heading="Collaboration with other startups"
          content="Our platform encourages collaboration between startups, which can lead to the formation of new partnerships, joint ventures and even merge of companies."
        />
      </div>

      <p className="section-page-para">
        In addition to these benefits, we also offer a variety of tools and
        resources designed to help you manage and grow your business. From legal
        and financial advice to marketing and PR support, we've got everything
        you need to take your business to the next level.
      </p>

      <p className="section-page-para">
        So if you're a startup looking for a supportive community, access to
        funding and resources, and the opportunity to connect with like-minded
        entrepreneurs, register with us today and start reaping the benefits of
        our platform!
      </p>

      <hr className="line" />
      <div className="figures">
        <div className="figures-content">
          <p className="numbers">20,956,732</p>
          <p className="text">Registed Startups</p>
        </div>
        <div className="figures-content">
          <p className="numbers">9,050,656</p>
          <p className="text">Investors</p>
        </div>
      </div>
      <hr className="line" />
    </div>
  );
}

export default Startup;
