import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="navbar-contents">
      <Link to="/" className="navbar-logo-container">
        <div className="nexus-unique-logo-left"></div>
        <div className="nexus-unique-logo-center"></div>
        <div className="nexus-unique-logo-right"></div>
        <div className="nexus-unique-logo-title">{siteTitle}</div>
      </Link>

      <div className="navbar-contents-container">
        <Link className="navbar-content-link" to="/about">
          <div>About us</div>
        </Link>
        <Link className="navbar-content-link" to="/services">
          <div>Our Services</div>
        </Link>
        <Link className="navbar-content-link" to="/brands-we-work-with">
          <div>Brands We Work With</div>
        </Link>
        <Link className="navbar-content-link" to="/contact-us">
          <div>Contact us</div>
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
