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
import ISLIM from "../images/ISLIM.png"
import SCHIN from "../images/SCHIN.png"
import SPANCO from "../images/SPANCO.png"
import NEWPAR from "../images/NEWPAR.jpeg"
import MPOC from "../images/MPOC.png"
import UEM from "../images/UEM.png"
import MATRADE from "../images/MATRADE.png"
import MOE from "../images/MOE.png"
import SELANG from "../images/SELANG.png"
import CGC from "../images/CGC.png"
import INVSELANG from "../images/INVSELANG.png"
import MBI from "../images/MBI.jpg"
import MTDC from "../images/MTDC.png"

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
      <div className="brands-container-title  brands-container-title-alt">
        Broadcasting
      </div>
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
      <div className="brands-container-title  brands-container-title-alt">
        Money Services Business
      </div>
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
      <div className="brands-container-title  brands-container-title-alt">
        ICT: B2B Portal
      </div>
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
    <div className="brands-main-content">
      <div className="brands-container-title brands-container-title-alt">
        MNCs
      </div>
      <div className="brands-image-container">
        <img src={ISLIM} className="brands-image" width="360px"></img>
        <img
          src={SCHIN}
          className="brands-image"
          width="165px"
          height="130px"
        ></img>
      </div>
    </div>
    <div className="brands-main-content">
      <div className="brands-container-title">Fleet Management</div>
      <div className="brands-image-container">
        <img
          src={SPANCO}
          className="brands-image"
          width="400px"
          height="110px"
        ></img>
      </div>
    </div>
    <div className="brands-main-content">
      <div className="brands-container-title brands-container-title-alt">
        Capital Market
      </div>
      <div className="brands-image-container">
        <img
          src={NEWPAR}
          className="brands-image"
          width="400px"
          height="110px"
        ></img>
      </div>
    </div>
    <div className="brands-main-content">
      <div className="brands-container-title ">Secretariat</div>
      <div className="brands-image-container">
        <img
          src={NEWPAR}
          className="brands-image"
          width="400px"
          height="110px"
        ></img>
      </div>
    </div>
    <div className="brands-main-content">
      <div className="brands-container-title brands-container-title-alt">
        Council
      </div>
      <div className="brands-image-container">
        <img src={MPOC} className="brands-image"></img>
      </div>
    </div>
    <div className="brands-main-content">
      <div className="brands-container-title ">GLCS & Goverment agencies</div>
      <div className="brands-image-container">
        <img
          src={UEM}
          className="brands-image"
          width="205px"
          height="115px"
        ></img>
        <img
          src={MATRADE}
          className="brands-image"
          width="250px"
          height="125px"
        ></img>
        <img
          src={UDAHB}
          className="brands-image"
          width="250px"
          height="120px"
        ></img>
        <img
          src={MOE}
          className="brands-image"
          width="200px"
          height="125px"
        ></img>
        <img
          src={SELANG}
          className="brands-image"
          width="180px"
          height="220px"
        ></img>
        <img
          src={CGC}
          className="brands-image"
          width="200px"
          height="120px"
          style={{ margin: "50px 0 0 0" }}
        ></img>
        <img
          src={INVSELANG}
          className="brands-image"
          width="220px"
          height="120px"
          style={{ margin: "50px 0 0 0" }}
        ></img>
        <img
          src={MBI}
          className="brands-image"
          width="220px"
          height="120px"
          style={{ margin: "50px 0 0 0" }}
        ></img>
        <img
          src={MTDC}
          className="brands-image"
          width="250px"
          height="120px"
        ></img>
      </div>
    </div>
  </Layout>
)
export default BrandsWeWorkWith
