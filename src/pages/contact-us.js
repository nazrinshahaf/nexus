import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/contact.css"

const Contact = () => (
  <Layout>
    <SEO title="Contact Us" />
    <div className="contact-header-container">
      <div className="contact-line"></div>
      <h1 className="contact-header-title">Contact Us</h1>
      <div className="contact-line"></div>
    </div>
    <div className="contact-main-content contact-main-content-alt">
      <div className="contact-information">
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
      <div className="contact-information contact-information-alt">
        Mail :{" "}
        <a href="mailto:info.nexusunique@gmail.com">
          info.nexusunique@gmail.com
        </a>
        <br />
        Mobi :<a href="tel:+6019 3380 900">+6019 3380 900</a> /{" "}
        <a href="tel:+6019 2200 500">+6019 2200 500</a>
        <br />
        Tele :<a href="tel:+603 7733 1601">+603 7733 1601</a>
        <br />
        Fax : <a href="+603 7726 1601">+603 7726 1601</a>
      </div>
    </div>
    <form
      name="contact"
      method="post"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="contact-main-content">
        <div className="contact-input-row-container">
          <div className="contact-input-row-flex-box">
            <label className="contact-label" for="name_input">
              Name
            </label>
            <input
              className="contact-input-box contact-input-box-long"
              id="name_input"
              name="name_input"
              type="text"
            ></input>
          </div>
        </div>
        <div className="contact-input-row-container">
          <div className="contact-input-row-flex-box">
            <label className="contact-label" for="email_input">
              Email
            </label>
            <input
              className="contact-input-box"
              id="email_input"
              name="email_input"
              type="email"
            ></input>
          </div>
          <div className="contact-input-row-flex-box contact-input-row-flex-box-alt">
            <label className="contact-label" for="phone_input">
              Phone Number
            </label>
            <input
              className="contact-input-box"
              id="phone_input"
              name="phone_input"
              type="tel"
            ></input>
          </div>
        </div>
        <div className="contact-input-row-container">
          <div className="contact-input-row-flex-box">
            <label className="contact-label" for="message_input">
              Message
            </label>
            <textarea
              className="contact-input-box contact-input-box-long"
              id="message_input"
              name="message_input"
              type="text"
            ></textarea>
          </div>
        </div>
        <div className="contact-input-row-container">
          <button type="submit" className="contact-submit-button">
            Submit
          </button>
        </div>
      </div>
    </form>
  </Layout>
)

export default Contact
