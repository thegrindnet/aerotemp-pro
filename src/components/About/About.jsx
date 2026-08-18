import "./About.css";
import aboutImage from "../../assets/images/attic-hvac-installation.webp";
import detailImage from "../../assets/images/indoor-furnace-installation.webp";
import { business } from "../../utils/constants.js";

function About() {
  return (
    <section className="about" id="about">
      <div className="container about__layout">
        <div className="about__media">
          <img
            className="about__main-image"
            src={aboutImage}
            alt="Aerotemp Pro HVAC equipment installed in an attic"
          />
          <img
            className="about__detail-image"
            src={detailImage}
            alt="Indoor furnace and HVAC equipment installation"
          />
          <div className="about__experience">
            <strong>10+</strong>
            <span>years of hands-on HVAC experience</span>
          </div>
        </div>

        <div className="about__content">
          <p className="section-kicker">About Aerotemp Pro</p>
          <h2 className="section-title">Built around honest work, respect, and reliable service.</h2>
          <p className="section-copy">{business.story}</p>
          <div className="about__principles">
            <div>
              <span>•</span>
              <h3>Professional Service</h3>
              <p>Clear, respectful service from the first conversation through the finished job.</p>
            </div>
            <div>
              <span>•</span>
              <h3>Hands-On Experience</h3>
              <p>More than a decade of field experience across HVAC repair, maintenance, installation, and replacement.</p>
            </div>
            <div>
              <span>•</span>
              <h3>Local Focus</h3>
              <p>Serving customers throughout the El Paso and Las Cruces region.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
