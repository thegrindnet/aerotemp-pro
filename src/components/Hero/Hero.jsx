import "./Hero.css";
import heroImage from "../../assets/images/outdoor-condenser.webp";
import { business } from "../../utils/constants.js";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">{business.tagline}</p>
          <h1 className="hero__title">
            Comfort that works <span>as hard as you do.</span>
          </h1>
          <p className="hero__copy">
            HVAC repair, installation, maintenance, and system replacement backed by more than 10 years of hands-on experience.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href={business.phoneHref}>
              Call {business.phoneDisplay}
            </a>
            <a className="button button--ghost hero__services-link" href="#services">
              Explore Services
            </a>
          </div>
          <div className="hero__trust" aria-label="Aerotemp Pro highlights">
            <div>
              <strong>10+</strong>
              <span>Years of hands-on HVAC experience</span>
            </div>
            <div>
              <strong>LOCAL</strong>
              <span>Focused on the El Paso & Las Cruces region</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__image-frame">
            <img
              className="hero__image"
              src={heroImage}
              alt="Aerotemp Pro HVAC condenser installation beside a home"
            />
          </div>
          <div className="hero__service-badge">
            <span>Residential</span>
            <span>Commercial</span>
          </div>
        </div>
      </div>
      <div className="hero__ticker" aria-label="Primary HVAC services">
        <div className="hero__ticker-track">
          <span>Installation</span>
          <i />
          <span>Repair</span>
          <i />
          <span>Maintenance</span>
          <i />
          <span>Replacement</span>
          <i />
          <span>Air Quality</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
