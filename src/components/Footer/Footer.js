import React from "react";
import logo from "../../assets/images/logo.svg";
import FBLogo from "./../../assets/images/icon-facebook.svg";
import TwitterLogo from "./../../assets/images/icon-twitter.svg";
import PinterestLogo from "./../../assets/images/icon-pinterest.svg";
import IGLogo from "./../../assets/images/icon-instagram.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <img className="logo" src={logo} alt="Shortly logo" />

      <div className="list features">
        <h4>Features</h4>
        <a href="/link-shorten" className="link">
          Link Shortening
        </a>
        <a href="/brand" className="link">
          Branded Links
        </a>
        <a href="/analytics" className="link">
          Analytics
        </a>
      </div>

      <div className="list resources">
        <h4>Resources</h4>
        <a href="/blog" className="link">
          Blog
        </a>
        <a href="/devs" className="link">
          Developers
        </a>
        <a href="/support" className="link">
          Support
        </a>
      </div>

      <div className="list company">
        <h4>Company</h4>
        <a href="/about" className="link">
          About
        </a>
        <a href="/team" className="link">
          Our Team
        </a>
        <a href="/careers" className="link">
          Careers
        </a>
        <a href="/contact" className="link">
          Contact
        </a>
      </div>

      <div className="social-list">
        <a href="https://facebook.com" className="social">
          <img src={FBLogo} alt="" className="" />
        </a>
        <a href="https://twitter.com" className="social">
          <img src={TwitterLogo} alt="" className="" />
        </a>
        <a href="https://pinterest.com" className="social">
          <img src={PinterestLogo} alt="" className="" />
        </a>
        <a href="https://instagram.com" className="social">
          <img src={IGLogo} alt="" className="" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
