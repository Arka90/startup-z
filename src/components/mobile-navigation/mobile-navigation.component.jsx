import "./mobile-navigation.styles.scss";
import { Squash as Hamburger } from "hamburger-react";
import { MdSearch } from "react-icons/md";
import { useState } from "react";
function MobileNav() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav className="mobile-nav">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        <div className="logo">
          <img src="/assets/white-logo.png" alt="" />
        </div>

        <div className="searcch-icon">
          <MdSearch />
        </div>
      </nav>

      <div className="menu">
        <p className="menu-item">Home</p>
        <p className="menu-item">Start Up</p>
        <p className="menu-item">Investor</p>
        <p className="menu-item">About uS</p>
      </div>
    </>
  );
}

export default MobileNav;
