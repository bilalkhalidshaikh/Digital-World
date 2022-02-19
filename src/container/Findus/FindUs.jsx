import React from "react";
import { Container } from "react-bootstrap";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  // <div className="app__bg app__wrapper section__padding" id="contact">
  //   <div className="app__wrapper_info">
  //     <SubHeading title="Contact" />
  //     <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
  //     <div className="app__wrapper-content">
  //       <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
  //       <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
  //       <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
  //       <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
  //     </div>
  //     <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
  //   </div>

  //   <div className="app__wrapper_img">
  //     <img src={images.findus} alt="finus_img" />
  //   </div>
  // </div>
  <div
    style={{
      background: `url(${images.cbg})`,
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      height: "40rem",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "auto",
      marginRight: "auto",
      backgroundSize: "cover",
      textAlign: "center",
      padding: "180px",
      color:'white'
    }}
  >
    <h3 style={{color:"#fff",fontWeight:'bolder'}}>DO YOU LIKE WHAT YOU SEE ?</h3>
    <br />
    <h5 style={{color:"#fff"}}>
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem seqi
      nesciunt. Neque poro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit.
    </h5>
    <br />
    <br />
    <button style={{padding:'20px 30px',background:'#FDBD0F',color:'#fff',outline:'none',border:'none'}}>LEARN MORE</button>
  </div>
);

export default FindUs;
