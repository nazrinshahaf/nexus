import React, { useState } from "react"
import Layout from "../components/layout"

import "../components/services.css"

const Services = () => {
  // STYLE 2

  // const [overtPR, setOvertPR] = useState(true)
  // const [covertPR, setCovertPR] = useState(false)
  // const [digitalPR, setDigitalPR] = useState(false)

  // const setCardOvertPR = () => {
  //   setOvertPR(true)
  //   setCovertPR(false)
  //   setDigitalPR(false)
  // }
  // const setCardCovertPR = () => {
  //   setOvertPR(false)
  //   setCovertPR(true)
  //   setDigitalPR(false)
  // }
  // const setCardDigitalPR = () => {
  //   setOvertPR(false)
  //   setCovertPR(false)
  //   setDigitalPR(true)
  // }

  // STYLE 3

  const [overtPR, setOvertPR] = useState(true)
  console.log(overtPR, "OVERPT")
  const overtPRHover = () => {
    setOvertPR(!overtPR)
    console.log("HOVERED")
  }
  return (
    <Layout>
      <div className="our-services-container">
        <h1 className="our-services-title">Our Services</h1>
        <p className="our-services-header">
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. */}
        </p>
      </div>
      <div className="our-services-main-content">
        <h2 className="our-services-h2">STRATEGIC PUBLIC RELATIONS</h2>
        <p className="our-services-paragraph">
          <span style={{ color: "purple", fontSize: "45px" }}>W</span>e examine
          where the organisation stands in the current landscape; and we
          identify and analyse the immediate and long term goals. With this, it
          enables us to propose a comprehensive campaign that is effective and
          relevant to the clients’ businesses and their target audiences.
          <br />
          <br />
          We integrate various components of communications such as branding,
          advertising, publicity, digital media that can support our clients’
          visibility and reach.
          <br />
          <br />
          We adopt various methodologies to achieve our clients’ communication
          objectives:
        </p>
      </div>
      {/* STYLE 1 */}
      {/* <div className="our-services-card-container">
      <div className="our-services-card">
        <div className="our-services-card-title">
          OVERT PR
          <br />
          “THE SEEN”
          <br />
          From the Horses’ Mouth
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div className="our-services-card">
        <div className="our-services-card-title">
          COVERT PR
          <br />
          “THE UNSEEN”
          <br />
          Ghost Writers, Spin Doctors
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
      <div className="our-services-card">
        <div className="our-services-card-title">
          DIGITAL PR
          <br />
          “THE NAKED”
          <br />
          Bloggers, Influencers
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div> */}
      {/* STYLE 2 */}
      {/* <div className="our-services-card-container">
        <div className="our-services-card-title-container">
          <div
            className="our-services-card-title"
            onClick={setCardOvertPR}
            style={overtPR ? { color: "black" } : { color: "gray" }}
          >
            Overt PR
          </div>
          <div
            className="our-services-card-title"
            onClick={setCardCovertPR}
            style={covertPR ? { color: "black" } : { color: "gray" }}
          >
            Covert PR
          </div>
          <div
            className="our-services-card-title"
            onClick={setCardDigitalPR}
            style={digitalPR ? { color: "black" } : { color: "gray" }}
          >
            Digital PR
          </div>
        </div>
        <div className="our-services-card-content-container">
          <h3 className="our-services-card-content-title">
            {overtPR ? '"THE SEEN"' : covertPR ? '"THE UNSEEN"' : '"THE NAKED"'}
          </h3>
          <ul className="our-services-card-content-paragraph">
            {overtPR ? (
              <>
                <li>Media Briefings</li>
                <li>Press Conferences</li>
                <li>Manufactured News</li>
                <li>Releases</li>
                <li>Exclusive Interviews with: </li>
                <ul>
                  <li>radio</li>
                  <li>TV stations </li>
                  <li>print</li>
                  <li>magazine</li>
                </ul>
                <li>Media Relationship</li>
                <li>Thought Leadership</li>
                <li>Speaking Engagements</li>
              </>
            ) : covertPR ? (
              <>
                <li>Industry Feature Articles</li>
                <li>Commentaries</li>
                <li>Opinion Pieces</li>
                <li>Round table forum/dialogue</li>
                <li>Third party endorsement</li>
              </>
            ) : (
              <>
                <li>Video Press Release</li>
                <li>Media portals: </li>
                <ul>
                  <li>facebook</li>
                  <li>twitter</li>
                  <li>Instagram </li>
                  <li>linkedin</li>
                  <li>youtube</li>
                </ul>
              </>
            )}
          </ul>
        </div>
      </div> */}
      {/* STYLE 3 */}
      <div className="our-services-card-container">
        <div
          className="our-services-card our-services-card-purple"
          onMouseOver={overtPRHover}
          onMouseLeave={overtPRHover}
        >
          {overtPR ? (
            <div className="our-services-card-active">
              <div style={{ marginBottom: "30px" }}>OVERT PR</div>
              <div>"THE SEEN"</div>
            </div>
          ) : (
            <ul
              style={{ listStyle: "none" }}
              className="our-services-card-list"
            >
              <li>Media Briefings,</li>
              <li>Press Conferences,</li>
              <li>Manufactured News,</li>
              <li>Releases,</li>
              <li>Exclusive Interviews with:</li>
              {/* <ul style={{ listStyle: "none" }}>
                <li> radio</li>
                <li> TV stations</li>
                <li> prints </li>
                <li> and </li>
                <li> magazines</li>
              </ul> */}
              <li>Media Relationship,</li>
              <li>Thought Leadership,</li>
              <li>Speaking Engagements,</li>
            </ul>
          )}
        </div>
        <div className="our-services-card our-services-card-orange">
          <div style={{ marginBottom: "30px" }}>COVERT PR</div>
          <div>"THE UNSEEN"</div>
        </div>
        <div className="our-services-card our-services-card-white">
          <div style={{ marginBottom: "30px" }}>DIGITAL PR</div>
          <div>"THE NAKED"</div>
        </div>
      </div>
    </Layout>
  )
}

export default Services
