import { Link } from "react-router-dom";
import { MdAccountCircle, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./navigation.styles.scss";

function Navigation() {
  const navigate = useNavigate();

  return (
    <div className="nav-container">
      <div className="logo">
        <img src="assets/white-logo.png" alt="logo" />
      </div>
      <div className="nav-links_and_btns">
        <div className="nav-links">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="startup">
            Start Up
          </Link>
          <Link className="link" to="investor">
            Investor
          </Link>
          <Link className="link" to="about">
            About Us
          </Link>
        </div>

        <div className="auth_add">
          <Link className="link " to="auth">
            <MdAccountCircle className="icons-header" /> Log in
          </Link>
          <button className="btn btn-nav">
            Add Listing <MdOutlineKeyboardArrowRight className="icons-header" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
