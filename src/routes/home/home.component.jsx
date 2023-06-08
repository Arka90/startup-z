// import Slide from "../../components/slider/slider.component";
import GenericCard from "../../components/generic-cards/generic_cards.component";
import { MdSearch } from "react-icons/md";
import "./home.styles.scss";
function Home() {
  return (
    <>
      <section className=" section-hero">
        <div className="hero-content">
          <div className="heading">
            <p className="bold-txt move-in-left">Discover</p>
            <p className="move-in-right">amazing startups</p>
          </div>
          <div className="sub-heading">
            <p>Find great startups curated by our experts for investing.</p>
          </div>
          <div className="search-box">
            <div className="input-wrapper">
              <p>Startup Name</p>
              <input
                className="search-input"
                placeholder="Ex: Nearbygroser, Nykaa, etc"
                type="text"
              />
            </div>
            <button className="btn btn-search">
              <MdSearch className="icons-header" /> Search
            </button>
          </div>
        </div>
      </section>

      <section className="section section-category">
        <p className="section-heading">
          Explore By <span className="bold-txt">Category</span>
        </p>
      </section>

      <section className="section">
        <p className="section-heading">
          Explore By <span className="bold-txt">Business Model</span>
        </p>
        <div className="card-container">
          <GenericCard text="B2B - Business To Business" />
          <GenericCard text="B2C - Business To Consumer" />
          <GenericCard text="B2B2C - Business To Business To Consumer" />
          <GenericCard text="C2C - Consumer To Consumer" />
          <GenericCard text="C2B - Consumer To Business" />
          <GenericCard text="B2A - Business To Administration" />
          <GenericCard text="C2A - Customer To Administration" />
          <GenericCard text="Other" />
        </div>
      </section>

      <div className="section-bg">
        <section className="section ">
          <p className="section-heading">
            Explore By <span className="bold-txt">Intrested In</span>
          </p>
          <div className="card-container">
            <GenericCard text="Incubation" />
            <GenericCard text="Acceleration" />
            <GenericCard text="Investment" />
            <GenericCard text="Tech Mentorship" />
            <GenericCard text="Marketing Membership" />

            <GenericCard text="Legal Mentorship" />
            <GenericCard text="Operations Mentorship" />
            <GenericCard text="Financials Mentorship" />
            <GenericCard text="Business Collabs: Co-founder" />
          </div>
        </section>
      </div>

      <section className="section ">
        <p className="section-heading">
          Explore By <span className="bold-txt">Stage</span>
        </p>
        <div className="card-container">
          <GenericCard text="Ideation" />
          <GenericCard text="Validation" />
          <GenericCard text="Early Traction" />
          <GenericCard text="Scaling" />
        </div>
      </section>

      <div className="section-bg">
        <section className="section ">
          <p className="section-heading">
            Explore By <span className="bold-txt">Funding Type</span>
          </p>
          <div className="card-container">
            <GenericCard text="Crowd Funded" />
            <GenericCard text="Pre-Seed Funded" />
            <GenericCard text="Seed Funded" />
            <GenericCard text="Series A" />
            <GenericCard text="Series B" />
            <GenericCard text="Series C" />
            <GenericCard text="Series D" />
            <GenericCard text="Series E" />
            <GenericCard text="Series F" />
            <GenericCard text="Series G" />
            <GenericCard text="Series H" />
          </div>
        </section>
      </div>

      <section className="section">
        <p className="section-heading">
          Explore By <span className="bold-txt">Business</span>
        </p>
        <div className="card-container">
          <GenericCard text="Service" />
          <GenericCard text="Product" />
          <GenericCard text="Both" />
        </div>
      </section>

      <div className="section-bg">
        <section className="section ">
          <p className="section-heading">
            Explore By <span className="bold-txt">Investment Nature</span>
          </p>
          <div className="card-container">
            <GenericCard text="Equity Dilution" />
            <GenericCard text="Debt Funding" />
            <GenericCard text="Convertible Debt" />
            <GenericCard text="Crowd Funding" />
            <GenericCard text="CSR" />
            <GenericCard text="All" />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
