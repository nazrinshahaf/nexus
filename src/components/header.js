import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { globalHistory } from "@reach/router"

import "./header.css"

const Header = ({ siteTitle }) => {
  const [headerAtTop, setHeaderAtTop] = useState(true)
  const [isContactUsPage, setIsContactUsPage] = useState(false)
  const [isBlackBackground, setIsBlackBackground] = useState(false)

  const path = globalHistory.location.pathname

  useEffect(() => {
    setIsBlackBackground(path === "/services" || path === "/about")
    // console.log(path, isBlackBackground)
  }, [isBlackBackground])

  useEffect(() => {
    setIsContactUsPage(path === "/contact-us" || path === "/404")
    // console.log(path, isContactUsPage)
  }, [isContactUsPage])

  console.log(path)
  useEffect(() => {
    const handleScrollY = () => {
      setHeaderAtTop(window.scrollY < 40)
    }
    window.addEventListener("scroll", handleScrollY, { passive: true })

    return () => window.removeEventListener("scroll", handleScrollY)
  }, [headerAtTop])

  // window.addEventListener("scroll", () => {
  //   setHeaderAtTop(window.scrollY < 40)
  // })

  return (
    <header
      style={
        headerAtTop
          ? isContactUsPage
            ? { backgroundColor: "#d2d3d5" }
            : { backgroundColor: "transparent" }
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
                ? isContactUsPage || isBlackBackground
                  ? "nexus-unique-logo-title-active"
                  : "nexus-unique-logo-title"
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
              headerAtTop
                ? isContactUsPage || isBlackBackground
                  ? "navbar-content-link-active"
                  : "navbar-content-link"
                : "navbar-content-link-active"
            }
          >
            <div>About us</div>
          </Link>
          <Link
            className={
              headerAtTop
                ? isContactUsPage || isBlackBackground
                  ? "navbar-content-link-active"
                  : "navbar-content-link"
                : "navbar-content-link-active"
            }
            to="/services"
          >
            <div>Our Services</div>
          </Link>
          <Link
            className={
              headerAtTop
                ? isContactUsPage || isBlackBackground
                  ? "navbar-content-link-active"
                  : "navbar-content-link"
                : "navbar-content-link-active"
            }
            to="/brands-we-work-with"
          >
            <div>Brands We Work With</div>
          </Link>
          <Link
            className={
              headerAtTop
                ? isContactUsPage || isBlackBackground
                  ? "navbar-content-link-active"
                  : "navbar-content-link"
                : "navbar-content-link-active"
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
