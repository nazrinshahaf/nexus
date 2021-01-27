import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/about.css"

import Izjulia_Izhak from "../images/Julia-Izhak.jpeg"
import Tunku_Nafishah from "../images/Tunku-Nafishah.jpeg"
import Azizul_Khair from "../images/Azizul_Khair.jpeg"

const About = () => (
  <Layout>
    <SEO title="About Us" />
    <div className="about-us-container">
      <h1 className="about-us-title">Where ideas interconnect...</h1>
    </div>
    <div className="about-us-main-content">
      <div>
        <div className="about-us-title-container">
          <div className="about-us-title-line about-us-our-team-line"></div>
          <h2 className="about-us-our-story">Our team</h2>
          <div className="about-us-title-line about-us-our-team-line"></div>
        </div>
        <div className="about-us-main-content-paragraph">
          Our team has extensive experience in the areas of communications
          including marketing communications, digital marketing, crisis
          communications and training. We also work with high-profile
          individuals to help us achieve our clients’ strategic Public Relations
          and marketing objectives across a broad range of interests.
        </div>
        <div className="about-us-main-content-paragraph">
          The agency is further supported by a comprehensive network of
          talents from diverse backgrounds, experts with proven capabilities in
          delivering successes in their specific discipline and specialisation.
          This allows us to offer our services, fine-tuned to the specific
          requirements of different industries and businesses. 
        </div>
      </div>
    </div>
    <div className="about-us-our-team-container">
      <div className="about-us-our-team-image-container">
        <img src={Izjulia_Izhak} alt="Izjuilia Izhak"></img>
      </div>
      <h3 className="about-us-our-team-names">Izjulia Ishak</h3>
      <div className="about-us-our-team-occupation">
        Chief Strategic Officer
      </div>
      <div className="about-us-main-content-paragraph our-team-main-description">
        Over 30 years veteran in Public Relations, Corporate Communications and
        Branding, Izjulia has over the years developed a wide range of
        communications strategy and campaign for high profile organisations; and
        has delivered PR results that are in sync with business objectives. Her
        strength lies in developing Strategic PR plans and translating them into
        actionable programmes. 
      </div>
      <div className="about-us-main-content-paragraph our-team-main-description">
        Prior to setting up Nexus Unique, she has served public listed
        organisations and was also a Consultant to International PR Agencies
        such as Ogilvy & Mather Public Relations and Leo Burnett Public
        Relations. 
      </div>
      <div className="about-us-main-content-paragraph our-team-main-description">
        A Strategist in developing PR campaigns, her clientele includes a Global
        IT Systems and Technology Services provider, a corporate finance
        advisory firm licensed by the SC Malaysia, a flagship company for
        township & property development, among others.  Nexus Unique was chosen
        to manage a media event witnessed by the U.S. Secretary of State Hillary
        Clinton in Putrajaya; in 2010.  
      </div>
      <div className="about-us-main-content-paragraph our-team-main-description">
        Izjulia has a Bachelor’s Degree in Public Relations from Universiti
        Teknologi MARA and an MBA in Euro-Asian Management from University Aix,
        Marseilles, France. 
      </div>
    </div>
    <div className="about-us-our-team-container about-us-our-team-container-alt">
      <div className="about-us-our-team-image-container about-us-our-team-image-container-alt">
        <img src={Tunku_Nafishah} alt="Tunku Nafishah"></img>
      </div>
      <h3 className="about-us-our-team-names">
        Tunku Nafishah Tunku Muinuddin
      </h3>
      <div className="about-us-our-team-occupation">
        Chief Executive Officer
      </div>
      <div className="about-us-main-content-paragraph our-team-main-description">
        A veteran in the industry but young at heart, she has an envious
        clientele list under her belt - telecommunications companies,
        German-based real estate company and companies listed on the Kuala
        Lumpur Stock Exchange. 
      </div>
      <div className="about-us-main-content-paragraph our-team-main-description">
        Her conquest in advertising, promotion and event management span across
        continent - from Malaysia to Singapore to Qatar to Geneva. Her vibrant
        personality and charm combined with her wealth in experience and sound
        knowledge in creativity and her passion for perfection has contributed
        to the success of several high profile brands.
      </div>
      <div className="about-us-main-content-paragraph our-team-main-description">
        She is also a shareholder of The English Studio in Cyberjaya with a
        vision to produce learners who are confident, competent, and credible by
        elevating their English proficiency. 
      </div>
      <div className="about-us-main-content-paragraph our-team-main-description">
        She is a graduate of Art and Design from Universiti Technology MARA.
      </div>
    </div>
    <div className="about-us-our-team-container">
      <div className="about-us-our-team-image-container about-us-our-team-image-container-alt2 ">
        <img src={Azizul_Khair} alt="Azizul Khair"></img>
      </div>
      <h3 className="about-us-our-team-names">Azizul Khair Mohd Ibrahim</h3>
      <div className="about-us-our-team-occupation">Associate PR Director</div>
      <div className="about-us-main-content-paragraph our-team-main-description">
        Armed with a degree in Public Relations from UiTM, Azizul Khair has
        accumulated a wealth of in-depth knowledge of various industries --
        having been in the communications industry for 30 years. 
      </div>
      <div className="about-us-main-content-paragraph our-team-main-description">
        Throughout his involvement in the local PR industry, he has been
        involved in advising and charting PR strategy & communications agenda
        for several local and multinational clients in key industries covering
        aerospace,  automobile, financial, construction, IT and e-business
        solution providers, fashion and retail, construction, digital imaging
        and even select clients which need ad hoc projects from time to time.
      </div>
      <div className="about-us-main-content-paragraph our-team-main-description">
        His experience in advising international and local conferences include
        the World Halal Forum, Langkawi International Dialogue, Selangor
        International Business Summits, Syarahan Perdana, etc.
      </div>
      <div className="about-us-main-content-paragraph our-team-main-description">
        Some clients he had advised include the Prime Minister’s Office, the
        State of Selangor, Ministry of Agriculture & Agro-based Industries,
        Audi, Volkswagen, Subaru, Caltex, Affin Investment Bank, SME Bank,
        Kuwait Finance House, PNB, Scomi, HP Services, Caltex, Arianespace,
        Sapura Holdings, Mayo Clinic, UEM Group, UEM Builders, SKALI, FedEx,
        Central Sugars Refinery, Aries Telecoms, UDA, Yayasan Inovasi and many
        more. He also played a key role in advising the Halal International
        Development Corporation (HDC) during its infancy stage.
      </div>
      <div className="about-us-main-content-paragraph our-team-main-description">
        He was the Managing Director of Asia PR Consultants and then set-up his
        own outfit, Azizul Communications Sdn Bhd, prior to joining Nexus Unique
        Sdn Bhd. 
      </div>
    </div>
  </Layout>
)

export default About
