import React, { useState } from "react";
import "../styles/contact.css";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import PurplePlanet from "./PurplePlanet";
import planet from '../assets/purple_planet.glb'

const MySwal = withReactContent(Swal);

function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const templateParams = {
      from_name: formValues.name,
      to_name: "Nicholas Cortes",
      from_email: formValues.email,
      message: formValues.message,
    };
  
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_API_KEY,
      )
      .then(() => {
        MySwal.fire({
          title: "Success!",
          text: "Thank you. I will get back to you as soon as possible.",
          icon: "success",
          customClass: {
            container: "my-swal-container",
            title: "my-swal-title",
            htmlContainer: "my-swal-html-container",
            confirmButton: "my-swal-confirm-button",
            cancelButton: "my-swal-cancel-button",
          },
        });
  
        setFormValues({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact-container">
      <a id="contact"></a>
      <div className="contactme-title-div">
        <h3 className="header-intro m-0">
          Here's a few ways you can contact me
        </h3>
        <h2 className="timeline-header m-0">Contact Me</h2>
      </div>
      <div className="contact-form">
        <div className="contact-left">
          <div className="contactme-links-div">
            <h3 className="header-intro m-0">
            Send Me an Email
            </h3>
            <div className="contact-input-form">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Your Name:</label>
                  <input
                    type="text"
                    placeholder="What's your name?"
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="email">Your Email:</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="What's your email?"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="message">Your Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="What would you like to say?"
                    value={formValues.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <button className="contact-submit" type="submit">Submit</button>
              </form>
            </div>
            <div className="contact-link-title-div">
              <h3 className="contact-link-title light">
                Other Ways To Contact
              </h3>
            </div>
            <div className="contact-information">
            </div>
          </div>
        </div>
        <div className="contact-right ">
        <PurplePlanet model={planet}/>
        </div>
      </div>
    </div>
  );
}

export default Contact;
