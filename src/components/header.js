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
        <div>
          <Link to="/about">About us</Link>
        </div>
        <div>
          <Link to="/services">Our Services</Link>
        </div>
        <div>
          <Link to="/brands-we-work-with">Brands We Work With</Link>
        </div>
        <div>
          <Link to="/contact-us">Contact us</Link>
        </div>
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
