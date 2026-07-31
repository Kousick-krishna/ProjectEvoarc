import { Link } from "react-router-dom";
import { services } from "../../data/services";
import "./Services.css";

function Services() {
  return (
    <section className="services-page">
      <div className="services-container">

        <div className="services-header">
          <span className="section-tag">OUR SERVICES</span>

          <h1>
            Engineering Solutions That Drive
            <span> Innovation</span>
          </h1>

          <p>
            At EVOARC, we provide end-to-end engineering solutions ranging
            from PCB design and hardware development to embedded systems,
            IoT solutions, engineering analysis, and technical consultancy.
            Our team delivers innovative, reliable, and manufacturing-ready
            solutions tailored to your business requirements.
          </p>
        </div>

        <div className="services-grid">

          {services.map((service) => (

            <div className="service-card" key={service.id}>

              <div className="service-image">

                <img
                  src={service.image}
                  alt={service.title}
                />

              </div>

              <div className="service-content">

                <h2>{service.title}</h2>

                <p>{service.shortDescription}</p>

                <Link
                  to={`/services/${service.id}`}
                  className="learn-more-btn"
                >
                  Learn More →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;