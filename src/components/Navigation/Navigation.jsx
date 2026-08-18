import { useEffect, useState } from "react";
import "./Navigation.css";
import { business, navigationLinks } from "../../utils/constants.js";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navigation" aria-label="Primary navigation">
      <button
        className="navigation__toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="primary-menu"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className={`navigation__panel ${isOpen ? "navigation__panel--open" : ""}`}
        id="primary-menu"
      >
        <ul className="navigation__list">
          {navigationLinks.map((link) => (
            <li key={link.href}>
              <a className="navigation__link" href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="button button--primary navigation__mobile-call" href={business.phoneHref} onClick={closeMenu}>
          Call {business.phoneDisplay}
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
