import { Link, useParams } from "react-router-dom";
import { services } from "../../data/services";
import "./ServiceDetails.css";

function ServiceDetails() {
  const { serviceId } = useParams();

  const service = services.find(
    (item) => item.id === serviceId
  );

  if (!service) {
    return (
      <section className="service-not-found">
        <h1>Service Not Found</h1>

        <p>
          The service you're looking for doesn't exist.
        </p>

        <Link to="/services" className="back-btn">
          ← Back to Services
        </Link>
      </section>
    );
  }

  return (
    <section className="service-details">

      {/* Hero */}

      <div className="service-hero">

        <div className="service-overlay"></div>

        <img
          src={service.image}
          alt={service.title}
        />

        <div className="hero-content">

          <span>OUR SERVICES</span>

          <h1>{service.title}</h1>

        </div>

      </div>

      {/* Content */}

      <div className="service-container">

        {/* Overview */}

        <div className="overview-section">

          <div className="left">

            <img
              src={service.image}
              alt={service.title}
            />

          </div>

          <div className="right">

            <h2>Overview</h2>

            <p>
              {service.overview}
            </p>

          </div>

        </div>

        {/* Features */}

        <div className="features-section">

          <h2>Our Expertise</h2>

          <div className="features-grid">

            {service.features.map((feature, index) => (

              <div
                className="feature-card"
                key={index}
              >
                <span>✓</span>

                <p>{feature}</p>

              </div>

            ))}

          </div>

        </div>

        {/* CTA */}

        <div className="cta-box">

          <h2>
            Looking for expert engineering solutions?
          </h2>

          <p>
            Our experienced engineers are ready to
            transform your ideas into reliable,
            high-performance products.
          </p>

          <Link
            to="/contact"
            className="contact-btn"
          >
            Contact Us
          </Link>

        </div>

      </div>

    </section>
  );
}

export default ServiceDetails;