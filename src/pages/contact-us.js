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
    <div className="contact-main-content">
      <form
        method="post"
        name="nexus-contact"
        data-netlify="true"
        // data-netlify-honeypot="bot-field"
      >
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
        {/* <div className="contact-input-row-container"></div> */}
        <button type="submit" className="contact-submit-button">
          Submit
        </button>
      </form>
    </div>
  </Layout>
)

export default Contact
