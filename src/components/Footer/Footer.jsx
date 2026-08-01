import "./Footer.css";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa6";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "PCB Design",
  "Hardware Development",
  "Product Development",
  "Engineering Analysis",
  "Embedded & IoT",
  "Technical Consultancy",
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
  <img src="/logo.png" alt="EVOARC Logo" />
</div>

<div className="footer-grid">

  <div className="footer-col">
    <h4>About EVOARC</h4>
    <p>
      Engineering innovation through PCB Design, Embedded Systems,
      Product Development and Technical Consultancy.
    </p>
  </div>

  <div className="footer-col">
    <h4>Quick Links</h4>
    <ul>
      {quickLinks.map((link) => (
        <li key={link.href}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  </div>

  <div className="footer-col">
    <h4>Services</h4>
    <ul>
      {services.map((service) => (
        <li key={service}>{service}</li>
      ))}
    </ul>
  </div>

  
  <div className="footer-col">
  <h4>Address</h4>

  <p>EVOARC Technologies Pvt. Ltd.</p>
  <p>123 ABC Avenue</p>
  <p>XYZ - 11111</p>
  <p>India</p>

  <br/>

  <h4>Contact</h4>

  <p>info@evoarc.com</p>
  <p>+91 98XXX XXXX0</p>
  </div>

  <div className="footer-col">
  <h4>Follow Us</h4>


  <div className="footer-socials">
    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
      <FaLinkedin />
    </a>

    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
      <FaInstagram />
    </a>

    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
      <FaFacebook />
    </a>
  </div>
</div>
</div>

  <div className="footer-policy">
  <a href="/privacy-policy">Privacy Policy</a>

  <span>|</span>

  <a href="/terms">Terms & Conditions</a>
  </div>

  <div className="footer-bottom">
  <p>
    © {new Date().getFullYear()} <strong>EVOARC</strong>. All Rights Reserved.
  </p>
  </div>

  </div> 
  </footer>
  );
}
