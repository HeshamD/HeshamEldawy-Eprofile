import "./footerStyling.css";
import {
  faTwitter,
  faYoutube,
  faMedium,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterContent = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        {/* <a href="https://twitter.com/HeshamEldawy__" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a> */}
        {/* <a href="https://www.youtube.com/your-youtube-profile" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} />
                </a> */}
        <a
          href="https://medium.com/@heshameldawy__"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faMedium} />
        </a>
        <a
          href="https://github.com/HeshamD"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/hesham-eldawy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <p className="footer__text">&copy; Hesham Eldawy. All rights reserved.</p>
    </footer>
  );
};

export default FooterContent;
