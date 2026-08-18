import "./Contact.css";
import instagramImage from "../../assets/images/instagram-profile.webp";
import { business } from "../../utils/constants.js";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact__layout">
        <div className="contact__content">
          <p className="section-kicker">Contact Aerotemp Pro</p>
          <h2 className="section-title">Need HVAC service? Start with a call.</h2>
          <p className="section-copy">
            For repairs, installations, maintenance, replacements, diagnostics, or questions about a system, contact Aerotemp Pro directly.
          </p>
          <a className="contact__phone" href={business.phoneHref}>{business.phoneDisplay}</a>
          <div className="contact__links">
            <a href={business.emailHref}>
              <span>Email</span>
              <strong>{business.email}</strong>
            </a>
            <a href={business.directionsUrl} target="_blank" rel="noreferrer">
              <span>Address</span>
              <strong>{business.address}</strong>
            </a>
            <div>
              <span>Hours</span>
              <strong>{business.hours}</strong>
            </div>
            <div>
              <span>Service Area</span>
              <strong>{business.serviceArea}</strong>
            </div>
          </div>
        </div>

        <a className="contact__instagram" href={business.instagram} target="_blank" rel="noreferrer">
          <div className="contact__instagram-copy">
            <span>Follow the work</span>
            <strong>@aerotemp.pro</strong>
            <p>See more Aerotemp Pro updates and project photos on Instagram.</p>
            <b>Open Instagram ↗</b>
          </div>
          <img src={instagramImage} alt="Preview of the Aerotemp Pro Instagram profile" loading="lazy" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
