import { Link } from "react-router-dom";
import {
  about,
  whyChoose,
  industries,
  developmentProcess,
  testimonials,
  downloads
} from "../../data/homeData";

import heroImage from "../../assets/images/logo/hero.jpeg";
import aboutImage from "../../assets/images/logo/logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./Home.css";

function Home() {
  const [selectedWhy, setSelectedWhy] = useState(whyChoose[0]);
  const SelectedIcon = selectedWhy.icon;
  return (
    <main className="home">

      {/* ===========================
            HERO SECTION
      =========================== */}

      <section className="hero">

    <img
        src={heroImage}
        alt="Hero Background"
        className="hero-bg"
    />

    <div className="hero-overlay">

        <span className="hero-tag">
            ENGINEERING EXCELLENCE
        </span>

        <h1>
            Engineering the
            <span> Future of Electronics</span>
        </h1>

        <p>
            Delivering innovative PCB Design,
            Embedded Systems,
            Hardware Development,
            and End-to-End Product Engineering
            solutions with precision,
            quality and reliability.
        </p>

        <div className="hero-buttons">

            <Link
                to="/contact"
                className="primary-btn"
            >
                Get Started
            </Link>

            <Link
                to="/services"
                className="secondary-btn"
            >
                Explore Services
            </Link>

        </div>

    </div>

</section>
      {/* ===========================
            ABOUT SECTION
      =========================== */}

      <section className="about-home">

        <div className="about-home-image">

          <img
            src={aboutImage}
            alt="About EVOARC"
          />

        </div>

        <div className="about-home-content">

          <span className="section-tag">
            ABOUT EVOARC
          </span>

          <h2>{about.title}</h2>

          <p>
            {about.description1}
          </p>

          <p>
            {about.description2}
          </p>

          <Link
            to="/about"
            className="primary-btn"
          >
            Learn More
          </Link>

        </div>

      </section>

      {/* ===========================
          WHY CHOOSE EVOARC
      =========================== */}

      <section className="why-home">

  <div className="section-heading">
    <span className="section-tag">
      WHY CHOOSE US
    </span>

    <h2>
      Why Choose EVOARC
    </h2>

    <p>
      Delivering innovation, quality, and engineering excellence through every project.
    </p>
  </div>

  {/* ===========================
      DESKTOP VIEW
  =========================== */}

  <div className="why-desktop">

    <div className="why-grid">

      {whyChoose.map((item) => (

        <div
          className="why-card"
          key={item.id}
        >

          <div className="why-number">
            {item.id}
          </div>

          <h3>{item.title}</h3>

          <p>{item.description}</p>

        </div>

      ))}

    </div>

  </div>

  {/* ===========================
      MOBILE VIEW
  =========================== */}

  <div className="why-mobile">

    <div className="why-selector">

      {whyChoose.map((item) => {

        const Icon = item.icon;

        return (

          <button
            key={item.id}
            className={`why-chip ${
              selectedWhy.id === item.id ? "active" : ""
            }`}
            onClick={() => setSelectedWhy(item)}
          >

            <Icon />

            <span>{item.short}</span>

          </button>

        );

      })}

    </div>

    <div className="why-display">

      <div className="why-display-icon">
        <SelectedIcon />
      </div>

      <h3>
        {selectedWhy.title}
      </h3>

      <p>
        {selectedWhy.description}
      </p>

    </div>

  </div>

</section>

            {/* ===========================
            INDUSTRIES
      =========================== */}

      <section className="industries-home">

        <div className="section-heading">

          <span className="section-tag">
            INDUSTRIES WE SERVE
          </span>

          <h2>
            Engineering Solutions Across Multiple Industries
          </h2>

          <p>
            EVOARC provides innovative electronics engineering solutions
            across a wide range of industries, delivering reliable,
            scalable, and high-performance products tailored to diverse
            application requirements.
          </p>

        </div>

        <div className="industries-desktop">

  <div className="industries-grid">

    {industries.map((industry) => (

      <div
        className="industry-card"
        key={industry.id}
      >

        <div className="industry-number">
          {String(industry.id).padStart(2, "0")}
        </div>

        <h3>{industry.title}</h3>

      </div>

    ))}

  </div>

</div>

<div className="industries-mobile">

  <Swiper
    modules={[Pagination]}
    slidesPerView={1.15}
    spaceBetween={20}
    pagination={{ clickable: true }}
  >

    {industries.map((industry) => (

      <SwiperSlide key={industry.id}>

        <div className="industry-card">

          <div className="industry-number">
            {String(industry.id).padStart(2, "0")}
          </div>

          <h3>{industry.title}</h3>

        </div>

      </SwiperSlide>

    ))}

  </Swiper>

</div>

      </section>


            {/* ===========================
            TESTIMONIALS
      =========================== */}

      <section className="testimonials-home">

        <div className="section-heading">

          <span className="section-tag">
            TESTIMONIALS
          </span>

          <h2>
            What Our Clients Say
          </h2>

          <p>
            We are proud to build long-term relationships by delivering
            reliable engineering solutions, quality workmanship, and
            outstanding customer support.
          </p>

        </div>

        <div className="testimonial-desktop">

  <div className="testimonial-grid">

    {testimonials.map((testimonial) => (

      <div
        className="testimonial-card"
        key={testimonial.id}
      >

        <div className="testimonial-stars">
          ★★★★★
        </div>

        <p className="testimonial-feedback">
          "{testimonial.feedback}"
        </p>

        <div className="testimonial-user">

          <h4>{testimonial.name}</h4>

          <span>{testimonial.company}</span>

        </div>

      </div>

    ))}

  </div>

</div>

<div className="testimonial-mobile">

  <Swiper
  modules={[Pagination, Autoplay]}
  slidesPerView={1.05}
  spaceBetween={20}
  pagination={{ clickable: true }}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  speed={800}
  loop={true}
>

    {testimonials.map((testimonial) => (

      <SwiperSlide key={testimonial.id}>

        <div className="testimonial-card">

          <div className="testimonial-stars">
            ★★★★★
          </div>

          <p className="testimonial-feedback">
            "{testimonial.feedback}"
          </p>

          <div className="testimonial-user">

            <h4>{testimonial.name}</h4>

            <span>{testimonial.company}</span>

          </div>

        </div>

      </SwiperSlide>

    ))}

  </Swiper>

</div>

      </section>

            {/* ===========================
            DOWNLOAD CENTRE
      =========================== */}

      <section className="downloads-home">

        <div className="section-heading">

          <span className="section-tag">
            DOWNLOAD CENTRE
          </span>

          <h2>
            Resources & Documents
          </h2>

          <p>
            Download our company documents to learn more about
            EVOARC's engineering capabilities, services,
            and product development expertise.
          </p>

        </div>

        <div className="downloads-grid">

          {downloads.map((item) => (

            <div
              className="download-card"
              key={item.id}
            >

              <div className="download-icon">

                📄

              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.type}
              </p>

              <a
                href={item.file}
                className="download-btn"
                download
              >
                Download
              </a>

            </div>

          ))}

        </div>

      </section>

            {/* ===========================
            CTA
      =========================== */}

      <section className="home-cta">

        <div className="cta-content">

          <span className="section-tag light">

            LET'S WORK TOGETHER

          </span>

          <h2>

            Ready to Build Your Next Electronic Product?

          </h2>

          <p>

            Whether you're developing a new product,
            improving an existing design, or looking
            for a trusted engineering partner,
            EVOARC is ready to help transform your
            ideas into reliable, production-ready
            electronic solutions.

          </p>

          <div className="cta-buttons">

            <Link
              to="/contact"
              className="primary-btn"
            >
              Contact Us
            </Link>

            <Link
              to="/services"
              className="secondary-btn light-btn"
            >
              Explore Services
            </Link>

          </div>

        </div>

      </section>



    </main>
  );
}

export default Home;