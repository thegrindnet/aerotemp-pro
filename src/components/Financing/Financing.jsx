import "./Financing.css";
import contactCardImage from "../../assets/images/aerotemp-pro-contact-card.webp";
import { business } from "../../utils/constants.js";

function Financing() {
  return (
    <section className="financing" id="financing">
      <div className="container financing__layout">
        <div className="financing__media">
          <img
            src={contactCardImage}
            alt="Aerotemp Pro contact card for Daniel Gomez, Owner and HVAC Technician"
            loading="lazy"
          />
        </div>
        <div className="financing__content">
          <p className="section-kicker">Financing</p>
          <h2 className="section-title">Financing information is ready to be added.</h2>
          <p className="financing__notice">Financing provider, terms, and application link have not been supplied yet.</p>
          <p className="section-copy">
            This section is intentionally included so a lender or financing program can be connected later without redesigning the site. Until those details are available, customers can call Aerotemp Pro directly about their HVAC project.
          </p>
          <a className="button button--primary" href={business.phoneHref}>
            Call {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Financing;
