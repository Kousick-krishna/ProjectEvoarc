import { Link } from "react-router-dom";
import { processSteps } from "../../data/process";

import "./Process.css";

function Process() {
  return (
    <section className="process-page">

      <div className="process-container">

        {/* ========================= */}
        {/* Header */}
        {/* ========================= */}

        <div className="process-header">

          <span className="section-tag">
            DEVELOPMENT PROCESS
          </span>

          <h1>
            Engineering Design Flow
          </h1>

          <p>
            At EVOARC, every successful product follows a
            structured engineering workflow. From initial
            requirement gathering to manufacturing support,
            our proven development process ensures
            reliability, quality, and faster time-to-market.
          </p>

        </div>

        {/* ========================= */}
        {/* Timeline */}
        {/* ========================= */}

        <div className="timeline">

          {processSteps.map((step, index) => (

            <div
              className="timeline-item"
              key={step.id}
            >

              {/* Left */}

              <div className="timeline-left">

                <div className="timeline-circle">

                  {step.id}

                </div>

                {index !== processSteps.length - 1 && (

                  <div className="timeline-line"></div>

                )}

              </div>

              {/* Right */}

              <div className="timeline-content">

                <h2>

                  {step.title}

                </h2>

                <p>

                  {step.description}

                </p>

              </div>

            </div>

          ))}

        </div>

        {/* ========================= */}
        {/* CTA */}
        {/* ========================= */}

        <div className="process-cta">

          <h2>

            Ready to Start Your Project?

          </h2>

          <p>

            Whether you're designing a new PCB,
            developing embedded hardware, or bringing
            an innovative electronic product to life,
            EVOARC is ready to support your journey.

          </p>

          <Link
            to="/contact"
            className="process-btn"
          >
            Contact Our Team
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Process;