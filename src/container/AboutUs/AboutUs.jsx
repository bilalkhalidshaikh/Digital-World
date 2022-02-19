import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import { images } from "../../constants";
import Typography from "@mui/material/Typography";
import './AboutUs.css';

const AboutUs = () => (
  // <div className="app__aboutus app__bg flex__center section__padding" id="about">
  //   <div className="app__aboutus-overlay flex__center">
  //     <img src={images.G} alt="G_overlay" />
  //   </div>

  //   <div className="app__aboutus-content flex__center">
  //     <div className="app__aboutus-content_about">
  //       <h1 className="headtext__cormorant">About Us</h1>
  //       <img src={images.spoon} alt="about_spoon" className="spoon__img" />
  //       <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
  //       <button type="button" className="custom__button">Know More</button>
  //     </div>

  //     <div className="app__aboutus-content_knife flex__center">
  //       <img src={images.knife} alt="about_knife" />
  //     </div>

  //     <div className="app__aboutus-content_history">
  //       <h1 className="headtext__cormorant">Our History</h1>
  //       <img src={images.spoon} alt="about_spoon" className="spoon__img" />
  //       <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
  //       <button type="button" className="custom__button">Know More</button>
  //     </div>
  //   </div>
  // </div>
  // <div>
  //   <Container>
  //   <p>Hello</p>
  //   <br/>

  //     <Row>
  //       <Col>
  //      <Container
  //           style={{ margin: '10px', paddingTop: '100px', textAlign: 'left' }}
  //         >
  //           <h1 style={{ color: '#000',fontSize:'56pt' }}>
  //              <span style={{ fontWeight: 'bolder' }}>We Are Wilderness</span>
  //           </h1>
  //           <br />
  //           <h3 style={{ fontSize: '12pt' }}>
  //             Interactive digital experiences are continually becoming more
  //             amazing and more complex to produce. Our team is specially
  //             designed to create successful, custom, innovative digital products
  //             from the initial concept through full product launch.
  //           </h3>
  //           <br />
  //           <h3 style={{ fontSize: '12pt' }}>
  //             Strategists, researchers, product managers, UX/UI designers,
  //             technologists, web and mobile developers all working together,
  //             dedicated to your brand and your product. Talk To Our Team.
  //           </h3>
  //           <br />
  //           <a href="https://google.com" style={{ color: '#FEBD0F', textDecoration: 'underline', fontWeight: 'bold' }}>READ MORE</a>
  //         </Container>
  //       </Col>
  //       <Col>

  //       </Col>
  //     </Row>
  //   </Container>
  // </div>
  <div
    style={{
      background: `url(${images.abbg})`,
      // height: 1200,
      backgroundSize: "cover",
      backgroundAttachment: "scroll",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#00784D",
      backgroundBlendMode: "darken",
    }}
    className="main"
  >
    <Container>
      <br/>
      <br/> 
      <Typography
        style={{
          fontSize: "26pt",
          fontWeight: "bold",
          color: "#fff",
          textAlign: "center",
        }}
      >
        Why Choose Us As Your Digital Marketing Agency?
        <br />
        Our core values are why:
      </Typography>
      <br />
      <Row>
        <Col>
          <Typography
            style={{
              fontSize: "26pt",
              fontWeight: "bold",
              color: "#fff",
              textAlign: "left",
              fontWeight: "bolder",
            }}
          >
            Transparent
          </Typography>
          <Typography
            style={{ fontSize: "12pt", fontWeight: "bold", color: "#ccc" }}
          >
            We are the team working since 2017 from Pakistan.
            <br />
            We are the experts in different fields and earned experience from
            different platform like Fiverr and Upwork e.t.c. We decided to put
            our energy into the company which will be working for different
            brands, and organization. We wanted to work for your brand to make
            sure that you had a great time in the future.
          </Typography>
        </Col>
        <Col>
          <Typography
            style={{
              fontSize: "26pt",
              fontWeight: "bold",
              color: "#fff",
              textAlign: "left",
              fontWeight: "bolder",
            }}
          >
            Proactive
          </Typography>
          <Typography
            style={{ fontSize: "12pt", fontWeight: "bold", color: "#ccc" }}
          >
            We are the team working since 2017 from Pakistan.
            <br />
            We are the experts in different fields and earned experience from
            different platform like Fiverr and Upwork e.t.c. We decided to put
            our energy into the company which will be working for different
            brands, and organization. We wanted to work for your brand to make
            sure that you had a great time in the future.
          </Typography>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Typography
            style={{
              fontSize: "26pt",
              fontWeight: "bold",
              color: "#fff",
              textAlign: "left",
              fontWeight: "bolder",
            }}
          >
            Affordable
          </Typography>
          <Typography
            style={{ fontSize: "12pt", fontWeight: "bold", color: "#ccc" }}
          >
            We are the team working since 2017 from Pakistan.
            <br />
            We are the experts in different fields and earned experience from
            different platform like Fiverr and Upwork e.t.c. We decided to put
            our energy into the company which will be working for different
            brands, and organization. We wanted to work for your brand to make
            sure that you had a great time in the future.
          </Typography>
        </Col>
        <Col>
          <Typography
            style={{
              fontSize: "26pt",
              fontWeight: "bold",
              color: "#fff",
              textAlign: "left",
              fontWeight: "bolder",
            }}
          >
            Flexibility
          </Typography>
          <Typography
            style={{ fontSize: "12pt", fontWeight: "bold", color: "#ccc" }}
          >
            We are the team working since 2017 from Pakistan.
            <br />
            We are the experts in different fields and earned experience from
            different platform like Fiverr and Upwork e.t.c. We decided to put
            our energy into the company which will be working for different
            brands, and organization. We wanted to work for your brand to make
            sure that you had a great time in the future.
          </Typography>
        </Col>
      </Row>
      <br/>
      <br/>
    </Container>
  </div>
);

export default AboutUs;
