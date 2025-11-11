import React, { useState } from "react";
import "../styles/contact.css";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import PurplePlanet from "./PurplePlanet";
import planet from "../assets/purple_planet_low.glb";

const MySwal = withReactContent(Swal);

function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
    company: "", // honeypot
  });
  const [sending, setSending] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot: if bots filled this, bail silently
    if (formValues.company) return;

    const userId = process.env.REACT_APP_API_KEY;
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

    if (!userId || !serviceId || !templateId) {
      console.error("Missing EmailJS env vars.");
      MySwal.fire({
        title: "Whoops!",
        text: "Email service is not configured right now.",
        icon: "error",
        customClass: {
          confirmButton: "my-swal-confirm-button",
          htmlContainer: "my-swal-html-container",
        },
      });
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formValues.name,
          to_name: "Nicholas Cortes",
          from_email: formValues.email,
          message: formValues.message,
        },
        userId
      );

      MySwal.fire({
        title: "Success!",
        text: "Thanks—I'll get back to you ASAP.",
        icon: "success",
        customClass: {
          confirmButton: "my-swal-confirm-button",
          htmlContainer: "my-swal-html-container",
        },
      });

      setFormValues({ name: "", email: "", message: "", company: "" });
    } catch (error) {
      console.error("Failed to send message: ", error);
      MySwal.fire({
        title: "Oops!",
        text: "Could not send your message. Try again in a moment.",
        icon: "error",
        customClass: {
          confirmButton: "my-swal-confirm-button",
          htmlContainer: "my-swal-html-container",
        },
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="contact-container"
      aria-labelledby="contact-title"
    >
      <div className="contactme-title-div">
        <h3 className="header-intro m-0">
          Here are a few ways you can contact me
        </h3>
        <h2 id="contact-title" className="timeline-header m-0 contactme-title">
          Contact Me
        </h2>
        <p className="contactme-description">
          Have a project in mind or want feedback on an idea? Drop a note—I'll
          reply within 24 hours.
        </p>
      </div>

      <div className="contact-form">
        {/* Left: Form card */}
        <div className="contact-left">
          <div
            className="contactme-links-div contact-input-form"
            role="form"
            aria-label="Send me an email"
          >
            <p className="contact-link-title">Send a message</p>

            <form onSubmit={handleSubmit} noValidate>
              {/* Honeypot (hidden from humans) */}
              <div
                style={{
                  position: "absolute",
                  left: "-9999px",
                  visibility: "hidden",
                }}
              >
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  value={formValues.company}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="What's your name?"
                  value={formValues.name}
                  onChange={handleInputChange}
                  autoComplete="name"
                  minLength={2}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="What's your email?"
                  value={formValues.email}
                  onChange={handleInputChange}
                  autoComplete="email"
                  inputMode="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="What would you like to say?"
                  value={formValues.message}
                  onChange={handleInputChange}
                  minLength={10}
                  required
                />
              </div>

              <button
                className="contact-submit"
                type="submit"
                disabled={sending}
                aria-busy={sending}
              >
                {sending ? "Sending…" : "Send"}
              </button>
            </form>
          </div>
        </div>

        {/* Right: Planet visual */}
        <div className="contact-right" aria-hidden="true">
          <div className="planet-container">
            <PurplePlanet model={planet} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
