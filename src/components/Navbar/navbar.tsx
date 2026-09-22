import { useState } from "react";
import Button from "../Button/button";
import { BagIcon, ChevronDownIcon, HeartIcon, SearchIcon } from "../Icons/Icons";
import "./navbar.css";

interface NavLinkItem {
  label: string;
  hasDropdown?: boolean;
  active?: boolean;
}

const navLinks: NavLinkItem[] = [
  { label: "Home", active: true },
  { label: "Shop", hasDropdown: true },
  { label: "About", hasDropdown: true },
  { label: "Contact", hasDropdown: true },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__topbar">
        <div className="container navbar__topbar-inner">
          <p>
            Free shipping on orders over $50 &nbsp;|&nbsp; 30-day return
            policy &nbsp;|&nbsp; Support
          </p>
        </div>
      </div>

      <div className="navbar__main">
        <div className="container navbar__main-inner">
          <a href="#top" className="navbar__logo">
            le Maison
          </a>

          <button
            className={`navbar__burger ${menuOpen ? "is-open" : ""}`}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`navbar__links ${menuOpen ? "is-open" : ""}`}>
            <ul>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href="#top"
                    className={`navbar__link ${link.active ? "is-active" : ""}`}
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDownIcon />}
                  </a>
                </li>
              ))}
            </ul>

            <div className="navbar__actions navbar__actions--mobile">
              <button className="navbar__icon-btn" aria-label="Search">
                <SearchIcon />
              </button>
              <button className="navbar__icon-btn" aria-label="Wishlist">
                <HeartIcon />
              </button>
              <button className="navbar__icon-btn" aria-label="Cart">
                <BagIcon />
              </button>
              <span className="navbar__cta-wrap">
                <Button variant="primary">Get in touch</Button>
              </span>
            </div>
          </nav>

          <div className="navbar__actions">
            <button className="navbar__icon-btn" aria-label="Search">
              <SearchIcon />
            </button>
            <button className="navbar__icon-btn" aria-label="Wishlist">
              <HeartIcon />
            </button>
            <button className="navbar__icon-btn" aria-label="Cart">
              <BagIcon />
            </button>
            <span className="navbar__cta-wrap">
              <Button variant="primary">Get in touch</Button>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;