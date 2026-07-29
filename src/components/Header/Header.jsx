import { useEffect, useState } from "react";
import "./Header.css";

import logo from "../../assets/images/logo/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = [
        "home",
        "about",
        "services",
        "process",
        "faq",
        "contact",
      ];

      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop - 120;
          const height = element.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

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

  const handleNavClick = (id) => {
    const section = document.getElementById(id);

    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });

      setActiveSection(id);
    }

    closeMenu();
  };

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container">

          <img
            src={logo}
            alt="EVOARC Logo"
            className="logo"
          />

          {/* Desktop Menu */}

          <nav className="desktop-menu">

            <a
              onClick={() => handleNavClick("home")}
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </a>

            <a
              onClick={() => handleNavClick("about")}
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </a>

            <a
              onClick={() => handleNavClick("services")}
              className={activeSection === "services" ? "active" : ""}
            >
              Services
            </a>

            <a
              onClick={() => handleNavClick("process")}
              className={activeSection === "process" ? "active" : ""}
            >
              Process
            </a>

            <a
              onClick={() => handleNavClick("faq")}
              className={activeSection === "faq" ? "active" : ""}
            >
              FAQ
            </a>

            <a
              onClick={() => handleNavClick("contact")}
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </a>

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
      ></div>

      {/* Mobile Menu */}

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <button
          className="close-btn"
          onClick={closeMenu}
        >
          ✕
        </button>

        <a
          onClick={() => handleNavClick("home")}
          className={activeSection === "home" ? "active" : ""}
        >
          Home
        </a>

        <a
          onClick={() => handleNavClick("about")}
          className={activeSection === "about" ? "active" : ""}
        >
          About
        </a>

        <a
          onClick={() => handleNavClick("services")}
          className={activeSection === "services" ? "active" : ""}
        >
          Services
        </a>

        <a
          onClick={() => handleNavClick("process")}
          className={activeSection === "process" ? "active" : ""}
        >
          Process
        </a>

        <a
          onClick={() => handleNavClick("faq")}
          className={activeSection === "faq" ? "active" : ""}
        >
          FAQ
        </a>

        <a
          onClick={() => handleNavClick("contact")}
          className={activeSection === "contact" ? "active" : ""}
        >
          Contact
        </a>

      </div>
    </>
  );
}

export default Header;