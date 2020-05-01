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
          <div className="footer-contact-details">
            Mobi : <a href="tel:+6019 3380 900">+6019 3380 900</a>
          </div>
          <div className="footer-contact-details">
            Mobi : <a href="tel:+6019 2200 500">+6019 2200 500</a>
          </div>
          <div className="footer-contact-details">
            Tele : <a href="tel:+603 7733 1601">+603 7733 1601</a>
          </div>
          <div className="footer-contact-details">
            Fax : <a href="tel:+603 7726 1601">+603 7726 1601</a>
          </div>
        </div>
        <div className="footer-contact-info">
          <div className="contact-email">Email</div>
          <div className="footer-contact-details">
            <a href="mailto:info.nexusunique@gmail.com">
              info.nexusunique@gmail.com
            </a>
          </div>
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
          <a
            href="https://www.google.com/maps/place/Nexus+Unique/@3.1300159,101.6271844,17z/data=!3m1!4b1!4m5!3m4!1s0x31cc4947ab42df71:0x8fb1aaf9473056c0!8m2!3d3.1300159!4d101.6293731"
            target="_blank"
          >
            Suite 601, Block A, Lift Lobby 1 <br />
            Damansara Intan Business Centre <br />
            Jalan SS20/27, 27400 Petaling Jaya <br />
            Selangor Darul Ehsan, Malaysia
          </a>
        </div>
      </div>
    </div>
  </footer>
)
export default Footer
