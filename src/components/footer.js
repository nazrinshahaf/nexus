import React from "react"
import { Link } from "gatsby"

import "./footer.css"
import "./header.css"

import NexusLogo from "../images/NexusLogo.png"

const Footer = () => (
  <footer>
    <div className="footer-contents">
      <div className="footer-left">
        <Link to="/">
          <img src={NexusLogo} className="nexus-logo" alt="Nexus Logo"></img>
        </Link>
        <Link to="/about" className="footer-left-link">
          <div className="footer-left-link-text">About us</div>
        </Link>
        <Link to="/services" className="footer-left-link">
          <div className="footer-left-link-text">Our Services</div>
        </Link>
        <Link to="/brands-we-work-with" className="footer-left-link">
          <div className="footer-left-link-text">Brands We Work With</div>
        </Link>
        <Link to="/contact-us" className="footer-left-link">
          <div className="footer-left-link-text">Contact Us</div>
        </Link>
      </div>
      <div className="footer-center">
        <div className="footer-contact-info">
          <div className="contact-phone">Phone</div>
          <div>Tele : +603 7733 1601</div>
          <div>Fax : +603 7726 1601</div>
        </div>
        <div className="footer-contact-info">
          <div className="contact-email">Email</div>
          <div>changelater@zulul.com</div>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-address">Address</div>
        <div className="footer-address-content">
          Nexus Unique Sdn Bhd{" "}
          <span style={{ fontSize: "16px", fontWeight: "500" }}>
            {" "}
            (680362-U){" "}
          </span>
        </div>
        <div className="footer-address-body">
          Suite 601, Block A, Lift Lobby 1 <br />
          Damansara Intan Business Centre <br />
          Jalan SS20/27, 27400 Petaling jaya <br />
          Selangor Darul Ehsan, Malaysia
        </div>
      </div>
    </div>
  </footer>
)
export default Footer
