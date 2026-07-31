import { useState } from "react";
import { Link } from "react-router-dom";
import { faqs } from "../../data/faq";
import "./FAQ.css";

function FAQ() {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="faq-page">
      <div className="faq-container">

        {/* Header */}

        <div className="faq-header">

          <span className="section-tag">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h1>
            Everything You Need
            <span> To Know</span>
          </h1>

          <p>
            Find answers to the most commonly asked questions
            about our engineering services, PCB design,
            hardware development, embedded systems,
            manufacturing support, and product development.
          </p>

        </div>

        {/* FAQ Accordion */}

        <div className="faq-list">

          {faqs.map((faq) => (

            <div
              key={faq.id}
              className={`faq-item ${openId === faq.id ? "active" : ""}`}
            >

              <button
                className="faq-question"
                onClick={() => toggleFAQ(faq.id)}
              >

                <div className="faq-question-content">

                  <span className="faq-category">
                    {faq.category}
                  </span>

                  <h3>{faq.question}</h3>

                </div>

                <span className="icon">
                  {openId === faq.id ? "−" : "+"}
                </span>

              </button>

              <div
                className={`faq-answer ${
                  openId === faq.id ? "show" : ""
                }`}
              >

                <p>{faq.answer}</p>

                {faq.list && (

                  <ul>

                    {faq.list.map((item, index) => (

                      <li key={index}>
                        {item}
                      </li>

                    ))}

                  </ul>

                )}

              </div>

            </div>

          ))}

        </div>

        {/* CTA */}

        <div className="faq-cta">

          <h2>
            Still Have Questions?
          </h2>

          <p>
            Our engineering experts are ready to discuss your
            project requirements and help you choose the right
            solution for your business.
          </p>

          <Link
            to="/contact"
            className="faq-btn"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </section>
  );
}

export default FAQ;