
import { Link } from "react-router-dom";
import "../styles/Footer.css"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 footer-column">
            <h5 className="footer-heading">ProFolio.AI</h5>
            <p className="small">
              Empowering educators and learners through innovative technology.
              Improve your productivity automatically.
            </p>
          </div>


          <div className="col-lg-2 col-md-3 col-6 mb-4 mb-lg-0 footer-column">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="footer-link">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="footer-link">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="footer-link">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources/Legal */}
          <div className="col-lg-3 col-md-3 col-6 mb-4 mb-lg-0 footer-column">
            <h5 className="footer-heading">Resources</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="footer-link">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="footer-link">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media / Contact */}
          <div className="col-lg-3 col-md-12 footer-column text-lg-start text-center">
            {" "}
            {/* Align text based on screen size */}
            <h5 className="footer-heading">Connect With Us</h5>
            <div className="social-icons mb-3">
              <a
                href="https://facebook.com/eduforge"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-icon"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://twitter.com/eduforge"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="social-icon"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://linkedin.com/company/eduforge"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://instagram.com/eduforge"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </div>
            <p className="small">contact@eduforge.com</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center pt-4 mt-4 border-top copyright-text">
            <p>© {currentYear} EduForge. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
