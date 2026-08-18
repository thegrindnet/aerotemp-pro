import "./ServiceArea.css";
import { business } from "../../utils/constants.js";

function ServiceArea() {
  return (
    <section className="service-area" id="service-area">
      <div className="container service-area__heading">
        <div>
          <p className="section-kicker">Service Area</p>
          <h2 className="section-title">Serving the El Paso and Las Cruces region.</h2>
        </div>
        <p className="section-copy">
          Aerotemp Pro is based in Chaparral, New Mexico and serves customers throughout the regional market identified by the business.
        </p>
      </div>

      <div className="container service-area__map-shell">
        <iframe
          className="service-area__map"
          src={business.mapEmbedUrl}
          title="Map showing Aerotemp Pro at 520 State Line Dr, Chaparral, New Mexico"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <div className="service-area__address-card">
          <span>Aerotemp Pro</span>
          <strong>{business.address}</strong>
          <a href={business.directionsUrl} target="_blank" rel="noreferrer">
            Get Directions ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default ServiceArea;
