import "./Contact.css";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";


function Contact() {

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subject, setSubject] = useState("");
  const [subjectError, setsubjectError] = useState("");
  const [yourMessage, setYourMessage] = useState("");
  const [yourmessageError, setyourMessageError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileError, setFileError] = useState("");

function handleSubmit(e) {
  e.preventDefault();

  let isValid = true;

  // Name
  if (name.trim() === "") {
    setNameError("Name is required");
    isValid = false;
  } else if (!/^[A-Za-z ]+$/.test(name)) {
    setNameError("Name should contain only letters");
    isValid = false;
  }

  // Phone
  if (phoneNumber.trim() === "") {
    setPhoneNumberError("Phone Number is required");
    isValid = false;
  } else if (!/^[0-9]{10}$/.test(phoneNumber)) {
    setPhoneNumberError("Enter a valid phone number");
    isValid = false;
  }

  // Email
  if (email.trim() === "") {
    setEmailError("Email is required");
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setEmailError("Enter a valid email");
    isValid = false;
  }

  // Subject
  if (subject.trim() === "") {
    setsubjectError("Subject is required");
    isValid = false;
  } else if (subject.trim().length < 5) {
    setsubjectError("Subject should contain at least 5 characters");
    isValid = false;
  }

  // Message
  if (yourMessage.trim() === "") {
    setyourMessageError("Message is required");
    isValid = false;
  } else if (yourMessage.trim().length < 20) {
    setyourMessageError("Message should contain at least 20 characters");
    isValid = false;
  }

  if (!isValid) return;

  emailjs
  .sendForm(
    "service_74anmzd",
    "template_tjppjs5",
    e.target,
    {
      publicKey: "IeXkdERcJsevCKogY"
    }
  )
  .then(() => {
    setShowSuccess(true);

    setName("");
    setPhoneNumber("");
    setEmail("");
    setSubject("");
    setYourMessage("");
    setSelectedFile(null);

    setNameError("");
    setPhoneNumberError("");
    setEmailError("");
    setsubjectError("");
    setyourMessageError("");
  })
  .catch((error) => {
    console.log("EmailJS Error:", error);
    alert(error.text || error.message || JSON.stringify(error));
  });
}

return (
  <section className="contact">
    <div className="contact-container">
      <div className="contact-info-panel">
        <h2>
          Get in touch
          <br />
          with our team
        </h2>

        <h3>Please fill the form</h3>

        <div className="contact-line"></div>

        <p className="contact-description">
          We’re excited to hear about your project. Share your requirements
          and our team will get back to you as soon as possible.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label>
            Name <span className="required">*</span>
          </label>

          <div className="input-wrapper">
            <span className="input-icon">♙</span>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameError("");
              }}
              onBlur={() => {
                if (name.trim() === "") {
                  setNameError("Name is required");
                } else if (!/^[A-Za-z ]+$/.test(name)) {
                  setNameError("Name should contain only letters");
                }
              }}
            />
          </div>

          {nameError && <p className="error">{nameError}</p>}
        </div>

        <div className="form-group">
          <label>
            Phone Number <span className="required">*</span>
          </label>

          <div className="input-wrapper">
            <span className="input-icon">☎</span>

            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                setPhoneNumberError("");
              }}
              onBlur={() => {
                if (phoneNumber.trim() === "") {
                  setPhoneNumberError("Phone Number is required");
                } else if (!/^[0-9]{10}$/.test(phoneNumber)) {
                  setPhoneNumberError("Enter a Valid Phone Number");
                }
              }}
            />
          </div>

          {phoneNumberError && (
            <p className="error">{phoneNumberError}</p>
          )}
        </div>

        <div className="form-group">
          <label>
            Email Address <span className="required">*</span>
          </label>

          <div className="input-wrapper">
            <span className="input-icon">✉</span>

            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              onBlur={() => {
                if (email.trim() === "") {
                  setEmailError("Email is required");
                } else if (
                  !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                ) {
                  setEmailError("Enter a valid email address");
                }
              }}
            />
          </div>

          {emailError && (
            <p className="error">{emailError}</p>
          )}
        </div>

        <div className="form-group">
          <label>
            Subject <span className="required">*</span>
          </label>

          <div className="input-wrapper">
            <span className="input-icon">▤</span>

            <input
              type="text"
              name="subject"
              placeholder="Enter subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
                setsubjectError("");
              }}
              onBlur={() => {
                if (subject.trim() === "") {
                  setsubjectError("Subject is required");
                } else if (subject.trim().length < 5) {
                  setsubjectError(
                    "Subject should contain at least 5 characters"
                  );
                }
              }}
            />
          </div>

          {subjectError && (
            <p className="error">{subjectError}</p>
          )}
        </div>

        <div className="form-group">
          <label>
            Your Message <span className="required">*</span>
          </label>

          <div className="input-wrapper textarea-wrapper">
            <span className="input-icon textarea-icon">✎</span>

            <textarea
              name="message"
              rows="6"
              placeholder="Describe your project or requirement..."
              value={yourMessage}
              onChange={(e) => {
                setYourMessage(e.target.value);
                setyourMessageError("");
              }}
              onBlur={() => {
                if (yourMessage.trim() === "") {
                  setyourMessageError("Message is required");
                } else if (yourMessage.trim().length < 20) {
                  setyourMessageError(
                    "Message should contain at least 20 characters"
                  );
                }
              }}
            ></textarea>
          </div>

          {yourmessageError && (
            <p className="error">{yourmessageError}</p>
          )}
        </div>

        <div className="form-group attachment-group">
          <label>Attachment</label>

           <label className="custom-file-upload">
  <span className="upload-icon">📎</span>
  <span className="upload-text">
    {selectedFile ? selectedFile.name : "Choose a file"}
  </span>

  {selectedFile && (
    <button
      type="button"
      className="remove-file"
      onClick={() => {
        setSelectedFile(null);
      }}
    >
      ✕
    </button>
  )}

  <input
    type="file"
    name="attachment"
    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
    onChange={(e) => {
      const file = e.target.files[0];

      if (file && file.size > 50 * 1024) {
        setFileError("File size must be 50 KB or less.");
        e.target.value = "";
        setSelectedFile(null);
        return;
      }

      setSelectedFile(file || null);
    }}
  />
</label>

          <p className="attachment-hint">
  Optional • PDF only • Maximum size: 50 KB
  <span className="info-icon">
    ⓘ
    <span className="info-tooltip">
      Need to share supporting documents larger than 50 KB? Please provide them via email after submitting the form.
    </span>
  </span>
</p>
       </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>

      {showSuccess && (
        <div className="success-overlay">
          <div className="success-popup">
            <h3>Thanks for contacting us</h3>

            <p>
              Our team will get back to you shortly.
            </p>

            <button onClick={() => setShowSuccess(false)}>
              OK
            </button>
          </div>
        </div>
      )}

      {fileError && (
  <div className="success-overlay">
    <div className="success-popup">
      <h3>File Size Limit</h3>
      <p>{fileError}</p>
      <button onClick={() => setFileError("")}>
        OK
      </button>
    </div>
  </div>
)}
    </div>
  </section>
);

}

export default Contact;