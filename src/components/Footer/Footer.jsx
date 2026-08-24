import "./Footer.css";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { services as footerServices } from "../../data/services";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
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
          <Link to={link.href}>{link.label}</Link>
        </li>
      ))}
    </ul>
  </div>

  <div className="footer-col">
    <h4>Services</h4>
    <ul>
      {footerServices.map((service) => (
        <li key={service.id}>
          <Link to={`/services/${service.id}`}>{service.title}</Link>
        </li>
      ))}
    </ul>
  </div>


  <div className="footer-col">
  <h4>Contact Us</h4>

 <div className="contact-info">

  <div>
  <p><strong>Address</strong></p>

  <p className="address-text">
    Evoarc Technologies LLP<br />
    Door No : 5/7B, ST-1<br />
    Karuppe Gdr. Street<br />
    Velanthavalam Road<br />
    KG Chavady<br />
    Coimbatore<br />
    Pin Code : 641105
  </p>
</div>

  <div>

    <div className="contact-block"> 
      <p><strong>Email</strong></p> 

        <a
  href="mailto:info@evoarc.com"
>
  info@evoarc.com
</a>

<br />

<a
  href="mailto:support@evoarc.com"
>
  support@evoarc.com
</a>

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
  <a
    href="https://www.linkedin.com/company/evoarc-technologies/"
    target="_blank"
    rel="noreferrer"
    className="linkedin-link"
  >
    <FaLinkedin />
    <span>Evoarc Technologies</span>
  </a>
</div>
</div>
</div>

  <div className="footer-policy">
  <Link to="/privacy-policy">
  Privacy Policy
</Link>

  <span>|</span>

  <Link to="/terms-and-conditions">
  Terms & Conditions
</Link>
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
