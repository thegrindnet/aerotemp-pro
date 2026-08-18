import { useState } from "react";
import "./Services.css";
import { business, serviceGroups } from "../../utils/constants.js";

function Services() {
  const [activeGroup, setActiveGroup] = useState(serviceGroups[0].id);
  const selectedGroup = serviceGroups.find((group) => group.id === activeGroup) ?? serviceGroups[0];

  const handleKeyDown = (event, index) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();

    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % serviceGroups.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + serviceGroups.length) % serviceGroups.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = serviceGroups.length - 1;

    setActiveGroup(serviceGroups[nextIndex].id);
    document.getElementById(`service-tab-${serviceGroups[nextIndex].id}`)?.focus();
  };

  return (
    <section className="services" id="services">
      <div className="container services__layout">
        <div className="services__intro">
          <p className="section-kicker">Complete HVAC Services</p>
          <h2 className="section-title">One call for the systems that keep your space comfortable.</h2>
          <p className="section-copy">
            Aerotemp Pro handles repair, installation, maintenance, diagnostics, air quality, ductwork, and system replacement for residential and commercial customers.
          </p>
          <a className="button button--dark" href={business.phoneHref}>
            Call for Service
          </a>
        </div>

        <div className="services__explorer">
          <div className="services__tabs" role="tablist" aria-label="HVAC service categories">
            {serviceGroups.map((group, index) => (
              <button
                key={group.id}
                id={`service-tab-${group.id}`}
                className={`services__tab ${activeGroup === group.id ? "services__tab--active" : ""}`}
                type="button"
                role="tab"
                aria-selected={activeGroup === group.id}
                aria-controls={`service-panel-${group.id}`}
                tabIndex={activeGroup === group.id ? 0 : -1}
                onClick={() => setActiveGroup(group.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                {group.label}
              </button>
            ))}
          </div>

          <div
            className="services__panel"
            id={`service-panel-${selectedGroup.id}`}
            role="tabpanel"
            aria-labelledby={`service-tab-${selectedGroup.id}`}
          >
            <div className="services__panel-copy">
              <p>{selectedGroup.eyebrow}</p>
              <h3>{selectedGroup.title}</h3>
              <span>{selectedGroup.description}</span>
            </div>
            <ul className="services__list">
              {selectedGroup.services.map((service) => (
                <li key={service}>
                  <span aria-hidden="true">↗</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
