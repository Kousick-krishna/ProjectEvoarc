import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="section-heading">
          <span className="section-tag">ABOUT EVOARC</span>

          <h2>
            Engineering Innovation.
            <span> Powering the Future.</span>
          </h2>

          <div className="heading-line"></div>
        </div>

        <div className="about-content">
          <p>
            EVOARC is a technology-driven engineering company specializing in
            <strong> PCB Design</strong>,
            <strong> Electronic Hardware Development</strong>,
            <strong> Embedded Systems</strong>,
            <strong> Research & Development</strong>, and
            <strong> Technical Consultancy</strong>.
            We deliver innovative, reliable, and cost-effective electronic
            solutions that transform ideas into market-ready products.
          </p>

          <p>
            Our team combines technical expertise with industry-leading design
            tools to provide end-to-end engineering services—from concept
            development and schematic design to PCB layout, prototyping,
            testing, and manufacturing support. We serve industries including
            industrial automation, automotive, aerospace, medical devices,
            consumer electronics, telecommunications, and IoT.
          </p>
        </div>

        <div className="mission-vision">

          <div className="info-card">
            <h3>Our Mission</h3>

            <p>
              To empower businesses with world-class electronic engineering
              solutions by delivering innovative PCB design, hardware
              development, embedded systems, and technical consultancy that
              accelerate product development while maintaining the highest
              standards of quality, reliability, and engineering excellence.
            </p>
          </div>

          <div className="info-card">
            <h3>Our Vision</h3>

            <p>
              To become a globally recognized engineering and technology
              partner, driving innovation in electronics through advanced
              research, cutting-edge design, and sustainable engineering
              solutions that shape the future of technology.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;