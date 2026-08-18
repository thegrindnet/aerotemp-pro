import "./Footer.css";
import logoImage from "../../assets/images/aerotemp-pro-logo.png";
import instagramIcon from "../../assets/images/instagram.png";
import tiktokIcon from "../../assets/images/tik-tok.png"
import { business, navigationLinks } from "../../utils/constants.js";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <img src={logoImage} alt="Aerotemp Pro logo" />
          <p>{business.tagline}</p>
        </div>
        <div className="footer__links">
          <h2>Quick Links</h2>
          <ul>
            {navigationLinks.map((link) => (
              <li key={link.href}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer__contact">
          <h2>Contact</h2>
          <a href={business.phoneHref}>{business.phoneDisplay}</a>
          <a href={business.emailHref}>{business.email}</a>
          <a href={business.directionsUrl} target="_blank" rel="noreferrer">{business.address}</a>
          <a href={business.instagram} target="_blank" rel="noreferrer"><span ><img className="footer__icon" src={instagramIcon} alt="instagram icon"/></span>Aerotemp Pro</a>
          <a href={business.tiktok} target="_blank" rel="noreferrer"><span ><img className="footer__icon" src={tiktokIcon} alt="tiktok icon"/></span>Aerotemp Pro</a>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Aerotemp Pro. All rights reserved.</p>
        <p>{business.serviceArea}</p>
      </div>
    </footer>
  );
}

export default Footer;
