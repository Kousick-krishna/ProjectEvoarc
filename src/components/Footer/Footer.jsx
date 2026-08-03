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


<div className="footer-grid">

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
  <h4>Contact Us</h4>

 <div className="contact-info">

  <div>
    <p><strong>Address</strong></p>
    <p>123 ABC Avenue</p>
    <p>XYZ - 11111</p>
    <p>India</p>
  </div>

  <div>

    <div className="contact-block">
      <p><strong>Email</strong></p>
      <p>info@evoarc.com</p>
    </div>

    <div className="contact-block">
      <p><strong>Phone</strong></p>
      <p>+91 98XXX XXXXX0</p>
    </div>

  </div>

</div>
</div>

  <div className="footer-col footer-map">
  <h4>Find Us Here</h4>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125324.23056822275!2d76.96017485!3d11.00992365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1785680364938!5m2!1sen!2sin"
    width="100%"
    height="220"
    style={{ border: 0, borderRadius: "10px" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
  ></iframe>
</div>

  <div className="footer-col footer-social">
  <h4>Follow Us</h4>
  <div className="footer-socials">
    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
      <FaLinkedin />
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
