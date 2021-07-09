import React from "react"
import Layout from "../components/layout"

import "../components/services.css"

const Services = () => {
  return (
    <Layout>
      <div className="our-services-container">
        <h1 className="our-services-title">Our Services</h1>
      </div>
      <div className="our-services-services-container our-services-services-container-medium our-services-services-container-public-relations">
        <div className="our-services-paragraph-container">
          <div className="our-services-title-container">Public Relations</div>
          <div className="our-services-paragraph">
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
            objectives.
          </div>
        </div>
      </div>
      <div className="our-services-services-container our-services-services-container-alt our-services-services-container-marketing-communications">
        <div className="our-services-paragraph-container our-services-paragraph-container-alt">
          <div className="our-services-title-container">
            Marketing Communications
          </div>
          <div className="our-services-paragraph">
            Working directly with our client and specialists, we undertake
            creative jobs and ensure it is in line with the brands’ corporate
            identity guidelines.  We used findings provided by our clients to
            develop designs that resonates with their customers.
          </div>
        </div>
      </div>
      <div className="our-services-services-container our-services-services-container-alt-2 our-services-services-container-long our-services-services-container-crisis-communication">
        <div className="our-services-paragraph-container">
          <div className="our-services-title-container">
            Crisis Communication
          </div>
          <div className="our-services-paragraph">
            We work with our clients to strategise a plan that addresses the
            issues from the communications perspective, help mitigate and avoid
            bad press and help restore public confidence. In developing or
            enhancing the Crisis Communication Plan, our expertise includes
            reviewing and enhancing Business Continuity Management Programme and
            Emergency Response plan.
            <br />
            <br />
            We strategise a plan that addresses the issues from the
            communications perspective, help mitigate and avoid bad press and
            help restore public confidence. In developing or enhancing the
            Crisis Communication Plan, our expertise includes reviewing and
            enhancing Business Continuity Management Programme and Emergency
            Response plan.
          </div>
        </div>
      </div>
      <div className="our-services-services-container our-services-services-container-alt our-services-services-container-digital-pr">
        <div className="our-services-paragraph-container our-services-paragraph-container-alt">
          <div className="our-services-title-container">Digital PR</div>
          <div className="our-services-paragraph">
            We produce integrated digital campaign that generates engagement
            between our clients’ brands and their audience online. Together with
            our digital partners, we combine PR with content creation that is
            meaningful and relevant.
          </div>
        </div>
      </div>
      <div className="our-services-services-container our-services-services-container-event-management ">
        <div className="our-services-paragraph-container our-services-paragraph-container-alt-2">
          <div className="our-services-title-container">Event Management</div>
          <div className="our-services-paragraph">
            We have the experience and know-how to manage the entire range of
            corporate and private events, covering all key areas from
            pre-planning, project management to on-site supervision, execution
            and post event analysis. We work closely with our Virtual Event
            Management partners to provide clients with virtual event solutions.
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Services
