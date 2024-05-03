import { Link } from "react-router-dom";
import gitHubLogo from "../../images/icon-github.svg";
import linkdinLogo from "../../images/icon-linkedin.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">@ 2024 Supersite, powered by News API</p>
      <nav className="footer__links">
        <Link to="/" className="footer__link" id="home">
          <p className="footer__home">Home</p>
        </Link>
        <Link
          to="https://www.tripleten.com"
          className="footer__link"
          target="_blank"
          id="tripleten"
        >
          <p className="footer__tripleten">TripleTen</p>
        </Link>
        <Link
          to="https://github.com/ednatrejo"
          className="footer__link"
          target="_blank"
          id="github"
        >
          <p className="footer__github">
            <img
              src={gitHubLogo}
              alt="GIThub logo"
              className="footer__github"
            />
          </p>
        </Link>
        <Link
          to="https://www.linkedin.com/in/edna-trejo/"
          className="footer__link"
          target="_blank"
          id="linkedIn"
        >
          <p className="footer__linkedIn footer__button">
            {/* <img
              src={linkdinLogo}
              className="footer__linkedIn"
              alt="LinkedIn logo"
            /> */}
          </p>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
