import React, { useState } from "react"
import Layout from "../components/layout"

import "../components/services.css"

const Services = () => {
  return (
    <Layout>
      <div className="our-services-container">
        <h1 className="our-services-title">Our Services</h1>
      </div>

      <div className="our-services-main-content">
        <div className="our-services-header-container">
          <div className="our-services-line"></div>
          <h2 className="our-services-header">Public Relations</h2>
          <div className="our-services-line"></div>
        </div>
        <div className="our-services-main-content-paragraph">
          We examine where the organisation stands in the current landscape;
          identify and analyse the immediate and long-term goals.  Hence, it
          enables us to propose a comprehensive campaign that is effective and
          relevant to the clients’ businesses and their target audiences.
          <br />
          <br />
          We integrate various components of communications such as branding,
          advertising, publicity, digital media to support our clients’
          visibility and reach.
          <br />
          <br />
          We adopt various methodologies to achieve our clients’ communication
          objectives :
        </div>
      </div>
    </Layout>
  )
}

export default Services
