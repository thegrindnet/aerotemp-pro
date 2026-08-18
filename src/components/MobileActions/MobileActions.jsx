import "./MobileActions.css";
import { business } from "../../utils/constants.js";

function MobileActions() {
  return (
    <nav className="mobile-actions" aria-label="Quick contact actions">
      <a href={business.phoneHref}>
        <span aria-hidden="true">☎</span>
        Call
      </a>
      <a href={business.emailHref}>
        <span aria-hidden="true">✉</span>
        Email
      </a>
      <a href={business.instagram} target="_blank" rel="noreferrer">
        <span aria-hidden="true">◎</span>
        Instagram
      </a>
    </nav>
  );
}

export default MobileActions;
