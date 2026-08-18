import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";
import logoImage from "../../assets/images/aerotemp-pro-logo.webp";
import { business } from "../../utils/constants.js";

function Header() {
  return (
    <header className="header">
      <div className="header__utility">
        <div className="container header__utility-inner">
          <p>{business.serviceArea}</p>
          <p>{business.hours}</p>
        </div>
      </div>
      <div className="container header__main">
        <a className="header__brand" href="#home" aria-label="Aerotemp Pro home">
          <img className="header__logo" src={logoImage} alt="Aerotemp Pro logo" />
        </a>
        <Navigation />
        <a className="button button--primary header__call" href={business.phoneHref}>
          Call {business.phoneDisplay}
        </a>
      </div>
    </header>
  );
}

export default Header;
