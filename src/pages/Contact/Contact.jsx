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

  const templateParams = {
    name: name,
    phone: phoneNumber,
    email: email,
    subject: subject,
    message: yourMessage,
  };

  emailjs
    .send(
      "service_dma5uni",
      "template_tjppjs5",
      templateParams,
      "IeXkdERcJsevCKogY"
    )
    .then(() => {
      alert("Message sent successfully!");

      setName("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setYourMessage("");

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

        <div className="contact-title">
          <h2>Contact Us</h2>
          <p>
            Tell us about your requirements and our team will get back to you.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>
              Name <span className="required"> * </span>
            </label>
            <input type="text" placeholder="Enter your full name" value={name} onChange={(e) =>{ setName(e.target.value); 
              setNameError("");} }
              onBlur={()=>{
                if(name.trim()==""){
                  setNameError("Name is required");
                }
                 else if (!/^[A-Za-z ]+$/.test(name)) {
                  setNameError("Name should contain only letters");
                }

              }}
              />
              {nameError && (<p className="error">{nameError}</p>)}
          </div>

          <div className="form-group">
            <label>
              Phone Number<span className="required"> * </span>
            </label>
            <input type="tel" placeholder="Enter your phone number" value={phoneNumber} onChange={(e) =>{ setPhoneNumber(e.target.value); 
              setPhoneNumberError("");} }
              onBlur={()=>{
                if(phoneNumber.trim()==""){
                  setPhoneNumberError("Phone Number is required");
                }
                 else if (!/^[0-9]{10}$/.test(phoneNumber)) {
                  setPhoneNumberError("Enter a Valid Phone Number");
                }
              }}
              />
              {phoneNumberError && (<p className="error">{phoneNumberError}</p>)}
          </div>

          <div className="form-group">
            <label>
              Email Address <span className="required"> * </span>
            </label>
            <input type="email" placeholder="Enter your email address"value={email} onChange={(e) =>{ setEmail(e.target.value); 
              setEmailError("");} }
              onBlur={()=>{
                if(email.trim()==""){
                  setEmailError("Email is required");
                }
                 else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                  setEmailError("Enter a valid email address");
                }
              }}
              />
              {emailError && (<p className="error">{emailError}</p>)}
          </div>

          <div className="form-group">
            <label>
              Subject <span className="required"> * </span>
            </label>
            <input type="text" placeholder="Enter subject" value={subject} onChange={(e) =>{ setSubject(e.target.value); 
              setsubjectError("");} }
              onBlur={()=>{
                if(subject.trim()==""){
                  setsubjectError("Subject is required");
                }
                  else if (subject.trim().length < 5) {
                    setsubjectError("Subject should contain at least 5 characters");
                  }
              }}
              />
              {subjectError && (<p className="error">{subjectError}</p>)}
          </div>

          <div className="form-group">
            <label>
              Your Message <span className="required"> * </span>
            </label>
            <textarea
             rows="6"
             placeholder="Describe your project or requirement..." value={yourMessage} onChange={(e) => {setYourMessage(e.target.value);
               setyourMessageError("");}}
               onBlur={() => {
                if (yourMessage.trim() === "") {
                  setyourMessageError("Message is required");
                }
                 else if (yourMessage.trim().length < 20) {
                  setyourMessageError("Message should contain at least 20 characters");
                }
                }}
                ></textarea>

               {yourmessageError && (<p className="error">{yourmessageError}</p>)}
          </div>

          <div className="form-group">
            <label>Attachment</label>
            <input type="file" />
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;