import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/about.css"

const About = () => (
  <Layout>
    <SEO title="About Us" />
    <div className="about-us-container">
      <h1 className="about-us-title">Nexus Unique :</h1>
      <div className="about-us-header">
        <div>Where ideas interconnect...</div>
      </div>
    </div>
    <div className="about-us-main-content">
      <div>
        <h2 className="about-us-our-story">Our Story</h2>
        <div className="about-us-main-content-paragraph">
          Nexus Unique Sdn Bhd was inspired by two like-minded partners, Izjulia
          Izhak & Tunku Nafishah, who collectively possess over six decades of
          experience in the communications industry, especially in offering a
          personal touch to help organisations meet their communications
          objectives.
        </div>
        <div className="about-us-main-content-paragraph">
          Since its establishment in 2005, Nexus Unique has advised various
          industries, locally and abroad, in creating strategic public
          relations, brand building and image enhancing programmes, hence
          reaping stronger brand loyalty and distinct market positioning for all
          its valued clients.
        </div>
        <div className="about-us-quote">
          "We have worked with some of the largest and most respected
          organisatoins, international Public Relations firms, event management
          companies, advertising agencies and other leading brands prior to the
          formation of Nexus Unique."
          <br />
          <br />
          Izjulia Ishak, Chief Strategic Officer
        </div>
        <div className="about-us-main-content-paragraph">
          We have worked for leading Malaysian conglomerates and understand,
          form the first-hand experience, the demands and complexities of
          running a succesful business entity. This understanding allows us to
          architect and execute communication plans that would shape and
          transform public perception without compromising on their business
          objectives.
        </div>
        <div className="about-us-quote">
          "This dedication infuses throughout our team and is visible in every
          aspect of our business. We recognise the distinctive needs and
          aspirations of diffrent clients and work towards metting these
          diffrent expectations. At Nexus Unique, we strive to deliver, not just
          produce."
          <br />
          <br />
          Tunku Nafishah, Chief Executive Officer
        </div>
      </div>
    </div>
  </Layout>
)

export default About
