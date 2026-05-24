import React from "react";
import "../Components/Contact.css";
import i2 from "../images/2.png";

const Contact = () => {
  const openlink = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <section name="Contact" id="contact" className="contact-section">
      <div className="contact-shell">
        <div className="contact-copy">
          <span>Let's connect</span>
          <h2>Have an idea? I can help shape it into a working build.</h2>
          <p>
            Send a message for portfolio work, collaboration, internships, or
            backend projects, API integrations, deployment work, or internship
            opportunities. I usually respond quickly.
          </p>

          <div className="contact-actions">
            <button type="button" onClick={() => openlink("mailto:saini.priyanshu130503@gmail.com")}>
              <i className="fa-solid fa-paper-plane"></i>
              Email me
            </button>
            <button type="button" onClick={() => openlink("tel:+917073046263")}>
              <i className="fa-solid fa-phone"></i>
              Call
            </button>
          </div>
        </div>

        <div className="contact-card">
          <img src={i2} alt="Contact illustration" />
          <div className="detail-box">
            <div className="details-b">
              <h2>Phone number</h2>
              <h3>+91 7073046263</h3>
            </div>
            <div className="details-b">
              <h2>Email ID</h2>
              <h3>saini.priyanshu130503@gmail.com</h3>
            </div>
            <div className="icons">
              <i className="fa-brands fa-github" onClick={() => openlink("https://github.com/prayansh2")}></i>
              <i className="fa-brands fa-whatsapp" onClick={() => openlink("https://wa.me/917073046263")}></i>
              <i className="fa-brands fa-linkedin" onClick={() => openlink("https://linkedin.com/in/priyanshu-saini135")}></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
