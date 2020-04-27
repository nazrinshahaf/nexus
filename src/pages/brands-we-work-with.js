import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/brands.css"
import YYP from "../images/YYP.png"
import YYAF from "../images/YYAF.jpeg"
import UNI from "../images/UNI.png"
import UDAHB from "../images/UDAHB.png"
import SHL from "../images/SHL.png"
import MERTR from "../images/MERTR.jpeg"
import MAMSB from "../images/MAMSB.jpg"
import MEDPRI from "../images/MEDPRI.png"
import ASIAIR from "../images/ASIAIR.png"
import DGHAL from "../images/DGHAL.png"
import SAPURA from "../images/SAPURA.svg"
import HEITECH from "../images/HEITECH.png"
import ARIES from "../images/ARIES.jpg"
import DIMDATA from "../images/DIMDATA.png"
import WATAN from "../images/WATAN.jpg"
import VTELE from "../images/VTELE.jpg"
import JARING from "../images/JARING.png"
import SLMFN from "../images/SLMFN.png"

const BrandsWeWorkWith = () => (
  <Layout>
    <SEO title="Brands we work with" />
    <div className="brands-header-container">
      <h1 className="brands-header-title"> Brands We Work With</h1>
    </div>
    <div className="brands-main-content">
      <div className="brands-container-title">Foundation</div>
      <div className="brands-image-container">
        <img
          src={YYP}
          className="brands-image"
          width="180px"
          height="180px"
        ></img>
        <img
          src={YYAF}
          className="brands-image"
          width="180px"
          height="180px"
        ></img>
      </div>
    </div>
    <div className="brands-main-content">
      <div className="brands-container-title">Broadcasting</div>
      <div className="brands-image-container">
        <img
          src={MEDPRI}
          className="brands-image"
          width="200px"
          height="120px"
        ></img>
      </div>
    </div>
    <div className="brands-main-content">
      <div className="brands-container-title">Property</div>
      <div className="brands-image-container">
        <img src={UNI} className="brands-image" height="120px"></img>
        <img
          src={UDAHB}
          className="brands-image"
          height="120px"
          width="250px"
        ></img>
        <img
          src={SHL}
          className="brands-image"
          width="120px"
          height="120px"
        ></img>
      </div>
    </div>
    <div className="brands-main-content">
      <div className="brands-container-title">Money Services Business</div>
      <div className="brands-image-container">
        <img
          src={MERTR}
          className="brands-image"
          width="300px"
          height="150px"
        ></img>
        <img
          src={MAMSB}
          className="brands-image"
          height="150px"
          width="250px"
        ></img>
      </div>
    </div>
    <div className="brands-main-content">
      <div className="brands-container-title">Water Treatment</div>
      <div className="brands-image-container">
        <img
          src={ASIAIR}
          className="brands-image"
          width="360px"
          height="180px"
        ></img>
      </div>
    </div>
    <div className="brands-main-content">
      <div className="brands-container-title">ICT: B2B Portal</div>
      <div className="brands-image-container">
        <img
          src={DGHAL}
          className="brands-image"
          width="320px"
          height="140px"
          style={{ marginTop: "20px" }}
        ></img>
      </div>
    </div>
    <div className="brands-main-content">
      <div className="brands-container-title">TELCO, IT & SI</div>
      <div className="brands-image-container">
        <img src={SAPURA} className="brands-image"></img>
        <img
          src={HEITECH}
          className="brands-image"
          width="280px"
          height="280px"
        ></img>
        <img src={ARIES} className="brands-image"></img>
        <img
          src={DIMDATA}
          className="brands-image"
          width="360px"
          height="240px"
        ></img>
        <img
          src={WATAN}
          className="brands-image"
          width="480px"
          height="180px"
          style={{ marginTop: "20px" }}
        ></img>
        <img
          src={VTELE}
          className="brands-image"
          width="480px"
          height="240px"
        ></img>
        <img
          src={JARING}
          className="brands-image"
          width="360px"
          height="180px"
        ></img>
        <img
          src={SLMFN}
          className="brands-image"
          width="500px"
          height="120px"
        ></img>
      </div>
    </div>
  </Layout>
)
export default BrandsWeWorkWith
