import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import "./header.css"

const Header = ({ siteTitle }) => {
  const [headerAtTop, setHeaderAtTop] = useState(true)

  // window.addEventListener("scroll", () => {
  //   setHeaderAtTop(window.scrollY < 40)
  // })

  return (
    <header
    // style={

    //     // window.location.pathname !== "/contact-us"
    //     //   ? headerAtTop
    //     //     ? { backgroundColor: "transparent" }
    //     //     : { backgroundColor: "#d2d3d5" }
    //     //   : { backgroundColor: "#d2d3d5" }

    // }
    >
      <div className="navbar-contents">
        <Link to="/" className="navbar-logo-container">
          <div className="nexus-unique-logo-left"></div>
          <div className="nexus-unique-logo-center"></div>
          <div className="nexus-unique-logo-right"></div>
          <div
          // className={

          //     // window.location.pathname !== "/contact-us"
          //     //   ? headerAtTop
          //     //     ? "nexus-unique-logo-title"
          //     //     : "nexus-unique-logo-title-active"
          //     //   : "nexus-unique-logo-title-active"

          // }
          >
            {siteTitle}
          </div>
        </Link>

        <div className="navbar-contents-container">
          <Link
            to="/about"
            // className={

            //     // window.location.pathname !== "/contact-us"
            //     //   ? headerAtTop
            //     //     ? "navbar-content-link"
            //     //     : "navbar-content-link-active"
            //     //   : "navbar-content-link-active"

            // }
          >
            <div>About us</div>
          </Link>
          <Link
            // className={

            //     // window.location.pathname !== "/contact-us"
            //     //   ? headerAtTop
            //     //     ? "navbar-content-link"
            //     //     : "navbar-content-link-active"
            //     //   : "navbar-content-link-active"

            // }
            to="/services"
          >
            <div>Our Services</div>
          </Link>
          <Link
            // className={

            //     // window.location.pathname !== "/contact-us"
            //     //   ? headerAtTop
            //     //     ? "navbar-content-link"
            //     //     : "navbar-content-link-active"
            //     //   : "navbar-content-link-active"

            // }
            to="/brands-we-work-with"
          >
            <div>Brands We Work With</div>
          </Link>
          <Link
            // className={

            //     // window.location.pathname !== "/contact-us"
            //     //   ? headerAtTop
            //     //     ? "navbar-content-link"
            //     //     : "navbar-content-link-active"
            //     //   : "navbar-content-link-active"

            // }
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
