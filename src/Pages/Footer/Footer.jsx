import React from "react";
import "./Footer.css";
import FooterLogo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-left">
            <img src={FooterLogo} alt="Beam Logo" className="footer-logo" />
          </div>

          <div className="footer-right">
            <p className="newsletter-line-1">Join us on the rhode to an effortless glow.</p>
            <p className="newsletter-line-2">
              beam your inbox with tips, tricks & exclusive content from Hailey.
            </p>

            {/* Email Form */}
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address"
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-button">
                SUBSCRIBE
              </button>
            </form>

            <p className="newsletter-privacy">
              By signing up, you agree to our <a href="#">Privacy Policy*</a>
            </p>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Link Columns */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>NAVIGATE</h4>
            <a href="#">Shop</a>
            <a href="#">Our Story</a>
            <a href="#">Beam Futures</a>
            <a href="#">Impact</a>
            <a href="#">VLOG</a>
          </div>

          <div className="footer-separator"></div>

          <div className="footer-column">
            <h4>SOCIAL</h4>
            <a href="#">Instagram</a>
            <a href="#">Youtube</a>
            <a href="#">TikTok</a>
          </div>

          <div className="footer-separator"></div>

          <div className="footer-column">
            <h4>OFFICIAL</h4>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Accessibility</a>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
            <a href="#">Events</a>
          </div>

          <div className="footer-separator"></div>

          <div className="footer-column">
            <h4>SUPPORT</h4>
            <p>We’re here M–F 9am – 5pm PST.</p>
            <p>Drop us a note anytime.</p>
            <p>info@shopworldofbeam.com</p>
            <a href="#">Do Not Sell or Share My Personal Information</a>
            <a href="#">Cookie Preferences</a>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>© beam 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
