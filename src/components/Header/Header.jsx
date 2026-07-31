import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

import logo from "../../assets/images/logo/logo.png";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/process", label: "Process" },
  { path: "/faq", label: "FAQ" },
  { path: "/contact", label: "Contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-container">

          {/* Logo */}

          <NavLink to="/" onClick={closeMenu}>
            <img
              src={logo}
              alt="EVOARC Logo"
              className="logo"
            />
          </NavLink>

          {/* Desktop Menu */}

          <nav className="desktop-menu">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Hamburger */}

          <button
            className="hamburger"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>

        </div>
      </header>

      {/* Overlay */}

      <div
        className={`overlay ${menuOpen ? "show-overlay" : ""}`}
        onClick={closeMenu}
      />

      {/* Mobile Menu */}

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <button
          className="close-btn"
          onClick={closeMenu}
        >
          ✕
        </button>

        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {item.label}
          </NavLink>
        ))}

      </div>
    </>
  );
}

export default Header;