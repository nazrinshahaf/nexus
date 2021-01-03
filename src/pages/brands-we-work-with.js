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
import ANTAH from "../images/ANTAH.jpg"
import GREENACRES from "../images/GREENACRES.png"
import UEMSUNRISE from "../images/UEMSUNRISE.png"

const BrandsWeWorkWith = () => (
  <Layout>
    <SEO title="Brands we work with" />
    <div className="brands-header-container">
      <h1 className="brands-header-title"> Brands We Work With</h1>
    </div>
    {/* <div className="brands-main-content">
      <div className="brands-container-title">Foundation</div>
      <div className="brands-image-container">
        <img
          src={YYP}
          alt="Yayasan Peneraju Pendidikan Bumiputera"
          className="YYP"
          width="180px"
          height="180px"
        ></img>
        <img
          src={YYAF}
          alt="Yayasan Albukhary Foundation"
          className="YYAF"
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
          alt="Media Prima"
          className="MEDPRI"
          width="200px"
          height="120px"
        ></img>
      </div>
    </div>
    <div className="brands-main-content">
      <div className="brands-container-title">Property</div>
      <div className="brands-image-container">
        <img
          src={UNI}
          alt="Union Investment"
          className="UNI"
          height="120px"
        ></img>
        <img
          src={UDAHB}
          alt="UDA Holdings Berhad"
          className="UDAHB"
          height="120px"
          width="250px"
        ></img>
        <img
          src={SHL}
          alt="SHL"
          className="SHL"
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
          alt="Merchantrade"
          className="MERTR"
          width="300px"
          height="150px"
        ></img>
        <img
          src={MAMSB}
          alt="MAMSB"
          className="MAMSB"
          height="150px"
          width="150px"
        ></img>
      </div>
    </div>
    <div className="brands-main-content">
      <div className="brands-container-title">Water Treatment</div>
      <div className="brands-image-container">
        <img
          src={ASIAIR}
          alt="ASI Air Simpanan SDN BHD"
          className="ASIAIR"
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
          alt="Dagang Halal"
          className="DGHAL"
          width="320px"
          height="140px"
        ></img>
      </div>
    </div>
    <div className="brands-main-content">
      <div className="brands-container-title">TELCO, IT & SI</div>
      <div className="brands-image-container">
        <img src={SAPURA} alt="Sapura" className="SAPURA"></img>
        <img
          src={HEITECH}
          alt="Heitech"
          className="HEITECH"
          width="280px"
          height="280px"
        ></img>
        <img
          src={ARIES}
          alt="Aries Telecoms"
          className="ARIES"
          width="190px"
          height="190px"
        ></img>
        <img
          src={DIMDATA}
          alt="Dimenstion Data"
          className="DIMDATA"
          width="360px"
          height="240px"
        ></img>
        <img
          src={WATAN}
          alt="Wataniya"
          className="WATAN"
          width="480px"
          height="180px"
        ></img>
        <img
          src={VTELE}
          alt="V Telecoms Malaysia"
          className="VTELE"
          width="480px"
          height="240px"
        ></img>
        <img
          src={JARING}
          alt="Jaring"
          className="JARING"
          width="360px"
          height="180px"
        ></img>
        <img
          src={SLMFN}
          alt="Salamfone"
          className="SLMFN"
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
        <img
          src={ISLIM}
          alt="Islamic Liquidity Management"
          className="ISLIM"
          width="360px"
        ></img>
        <img
          src={SCHIN}
          alt="Schindler"
          className="SCHIN"
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
          alt="Spanco"
          className="SPANCO"
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
          alt="New Paradigm"
          className="NEWPAR"
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
          alt="New Paradigm"
          className="NEWPAR"
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
        <img src={MPOC} alt="MPOC" className="MPOC"></img>
      </div>
    </div>
    <div className="brands-main-content">
      <div className="brands-container-title ">GLCS & Goverment agencies</div>
      <div className="brands-image-container">
        <img
          src={UEM}
          alt="UEM"
          className="UEM"
          width="205px"
          height="115px"
        ></img>
        <img
          src={MATRADE}
          alt="MATRADE"
          className="MATRADE"
          width="250px"
          height="125px"
        ></img>
        <img
          src={UDAHB}
          alt="UDA HOLDINGS BERHAD"
          className="UDAHB"
          width="250px"
          height="120px"
        ></img>
        <img
          src={MOE}
          alt="Ministry of Education Malaysia"
          className="MOE"
          width="200px"
          height="125px"
        ></img>
        <img
          src={SELANG}
          alt="Selangor"
          className="SELANG"
          width="180px"
          height="220px"
        ></img>
        <img
          src={CGC}
          alt="CGC"
          className="CGC"
          width="200px"
          height="120px"
        ></img>
        <img
          src={INVSELANG}
          alt="Invest Selangor"
          className="INVSELANG"
          width="220px"
          height="120px"
        ></img>
        <img
          src={MBI}
          alt="Menteri Besar Incorperated"
          className="MBI"
          width="220px"
          height="120px"
        ></img>
        <img
          src={MTDC}
          alt="MTDC"
          className="MTDC"
          width="250px"
          height="120px"
        ></img>
      </div>
    </div> */}

    <div className="brands-main-content-alt">
      <img
        src={ARIES}
        alt="Aries Telecoms"
        className="ARIES"
        width="230px"
        height="180px"
      ></img>
      <img
        src={ANTAH}
        alt="Antah Schindler"
        className="ANTAH"
        width="350px"
        height="160px"
      ></img>
      <img
        src={ASIAIR}
        alt="ASI Air Simpanan SDN BHD"
        className="ASIAIR"
        width="360px"
        height="180px"
      ></img>
      <img
        src={DGHAL}
        alt="Dagang Halal"
        className="DGHAL"
        width="320px"
        height="140px"
      ></img>
      <img
        src={DIMDATA}
        alt="Dimenstion Data"
        className="DIMDATA"
        width="360px"
        height="240px"
      ></img>
      <img
        src={GREENACRES}
        alt="Green Acres"
        className="GREENACRES"
        width="350px"
        height="150px"
      ></img>
      <img
        src={HEITECH}
        alt="Heitech"
        className="HEITECH"
        width="150px"
        height="150px"
      ></img>
      <img
        src={INVSELANG}
        alt="Invest Selangor"
        className="INVSELANG"
        width="320px"
        height="170px"
      ></img>
      <img
        src={ISLIM}
        alt="Islamic Liquidity Management"
        className="ISLIM"
        width="360px"
      ></img>
      <img
        src={JARING}
        alt="Jaring"
        className="JARING"
        width="360px"
        height="150px"
      ></img>
      <img
        src={MAMSB}
        alt="MAMSB"
        className="MAMSB"
        height="180px"
        width="160px"
      ></img>
      <img
        src={MATRADE}
        alt="MATRADE"
        className="MATRADE"
        width="250px"
        height="125px"
      ></img>
      <img
        src={MEDPRI}
        alt="Media Prima"
        className="MEDPRI"
        width="240px"
        height="140px"
      ></img>
      <img
        src={MERTR}
        alt="Merchantrade"
        className="MERTR"
        width="300px"
        height="150px"
      ></img>
      <img src={MPOC} alt="MPOC" className="MPOC" width="200px"></img>
      <img
        src={MTDC}
        alt="MTDC"
        className="MTDC"
        width="250px"
        height="120px"
      ></img>
      <img
        src={NEWPAR}
        alt="New Paradigm"
        className="NEWPAR"
        width="400px"
        height="110px"
      ></img>
      <img src={SAPURA} alt="Sapura" className="SAPURA" width="270px"></img>
      <img
        src={SHL}
        alt="SHL"
        className="SHL"
        width="140px"
        height="140px"
      ></img>
      <img
        src={SPANCO}
        alt="Spanco"
        className="SPANCO"
        width="400px"
        height="110px"
      ></img>
      <img
        src={UDAHB}
        alt="UDA Holdings Berhad"
        className="UDAHB"
        height="120px"
        width="280px"
      ></img>
      <img
        src={UEM}
        alt="UEM"
        className="UEM"
        width="205px"
        height="115px"
      ></img>
      <img
        src={UEMSUNRISE}
        alt="UEMSUNRISE"
        className="UEM Sunrise"
        width="259px"
      ></img>
      <img src={UNI} alt="Union Investment" className="UNI" width="400px"></img>
      <img
        src={VTELE}
        alt="V Telecoms Malaysia"
        className="VTELE"
        width="380px"
      ></img>
      <img
        src={YYAF}
        alt="Yayasan Albukhary Foundation"
        className="YYAF"
        width="180px"
        height="180px"
      ></img>
      <img
        src={YYP}
        alt="Yayasan Peneraju Pendidikan Bumiputera"
        className="YYP"
        width="180px"
        height="180px"
      ></img>
    </div>
  </Layout>
)
export default BrandsWeWorkWith
