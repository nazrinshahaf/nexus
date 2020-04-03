import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import "./header.css"

const Header = ({ siteTitle }) => {
  const [headerAtTop, setHeaderAtTop] = useState(true)

  document.addEventListener("scroll", () => {
    setHeaderAtTop(window.scrollY < 40)
  })

  console.log(headerAtTop, "HEADER AT TOP")
  return (
    <header
      style={
        headerAtTop
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "#d2d3d5" }
      }
    >
      <div className="navbar-contents">
        <Link to="/" className="navbar-logo-container">
          <div className="nexus-unique-logo-left"></div>
          <div className="nexus-unique-logo-center"></div>
          <div className="nexus-unique-logo-right"></div>
          <div
            className={
              headerAtTop
                ? "nexus-unique-logo-title"
                : "nexus-unique-logo-title-active"
            }
          >
            {siteTitle}
          </div>
        </Link>

        <div className="navbar-contents-container">
          <Link
            to="/about"
            className={
              headerAtTop ? "navbar-content-link" : "navbar-content-link-active"
            }
          >
            <div>About us</div>
          </Link>
          <Link
            className={
              headerAtTop ? "navbar-content-link" : "navbar-content-link-active"
            }
            to="/services"
          >
            <div>Our Services</div>
          </Link>
          <Link
            className={
              headerAtTop ? "navbar-content-link" : "navbar-content-link-active"
            }
            to="/brands-we-work-with"
          >
            <div>Brands We Work With</div>
          </Link>
          <Link
            className={
              headerAtTop ? "navbar-content-link" : "navbar-content-link-active"
            }
            to="/contact-us"
          >
            <div>Contact us</div>
          </Link>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
