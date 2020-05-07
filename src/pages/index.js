import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/home.css"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="home-container">
        <h1 className="home-title">???</h1>
      </div>
      <div className="home-main-content">
        <div className="home-title-container">
          <div className="home-title-line"></div>
          <h2 className="home-our-story">Our Story</h2>
          <div className="home-title-line"></div>
        </div>
        <div className="home-main-content-paragraph">
          Nexus Unique Sdn Bhd was inspired by two like-minded partners, Izjulia
          Izhak & Tunku Nafishah, who collectively possess over six decades of
          experience in the communications industry, especially in offering a
          personal touch to help organisations meet their communications
          objectives.
          <br />
          <br />
          Since its establishment in 2005, Nexus Unique has advised various
          industries, locally and abroad, in creating strategic public
          relations, brand building and image enhancing programmes, hence
          reaping stronger brand loyalty and distinct market positioning for all
          its valued clients.
          <div className="home-quote">
            "We have worked with some of the largest and most respected
            organisatoins, international Public Relations firms, event
            management companies, advertising agencies and other leading brands
            prior to the formation of Nexus Unique."
            <br />
            <br />
            Izjulia Ishak, Chief Strategic Officer
          </div>
          We have worked for leading Malaysian conglomerates and understand,
          form the first-hand experience, the demands and complexities of
          running a succesful business entity. This understanding allows us to
          architect and execute communication plans that would shape and
          transform public perception without compromising on their business
          objectives.
          <div className="home-quote home-quote-alt">
            "This dedication infuses throughout our team and is visible in every
            aspect of our business. We recognise the distinctive needs and
            aspirations of diffrent clients and work towards metting these
            diffrent expectations. At Nexus Unique, we strive to deliver, not
            just produce."
            <br />
            <br />
            Tunku Nafishah, Chief Executive Officer
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
