import React, { useState } from 'react';
import { Carousel, Row,Col } from 'react-bootstrap';
import { images } from '../../constants';
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"

// const SubHeading = ({ title }) => (
//   <div style={{ marginBottom: '1rem' }}>
//     <p className="p__cormorant">{title}</p>
//     <img src={images.spoon} alt="spoon_image" className="spoon__img" />
//   </div>
// );
export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    // console.log(e);
  };

  return (
    // <Carousel activeIndex={index} onSelect={handleSelect}>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={images.slid1}
    //       alt="First slide"
    //     />
    //     <Carousel.Caption>
    //       <h3>The Digital World</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={images.slid2}
    //       alt="Second slide"
    //     />
    //     <Carousel.Caption>
    //       {/* <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
    <div style={{background:'#fff',height:500,justifyContent:'center'}}>
    <Container sx={{ display: { xs: "none", md: "block" } }}>
    <br/>
    <br/>
    <Row>
    <Col>
    <Typography style={{fontSize:'34pt',fontWeight:'bold',textDecoration:'underline',color:'#00784D'}}>
    HELLO
    </Typography>
    <Typography style={{fontSize:'32pt',fontWeight:'bold',color:'#00784D'}}>
    We are the Digital Agency.
    </Typography>
    <Typography style={{fontSize:'14pt',fontWeight:'bold',color:'#00784D'}}>
    We are the team working since 2017 from Pakistan.
    <br/>
    We are the experts in different fields and earned experience from different platform like Fiverr and Upwork e.t.c. We decided to put our energy into the company which will be working for different brands, and organization. We wanted to work for your brand to make sure that you had a great time in the future.
    </Typography>
    </Col>
    <Col> 
    </Col> 
    </Row>
    </Container>
    <Container sx={{ display: { xs: "block", md: "none" } }}>
    <br/>
    <br/>
    <Row>
    <Col>
    <Typography style={{fontSize:'30pt',fontWeight:'bold',textDecoration:'underline',color:'#00784D'}}>
    HELLO
    </Typography>
    <Typography style={{fontSize:'28pt',fontWeight:'bold',color:'#00784D'}}>
    We are the Digital Agency.
    </Typography>
    <Typography style={{fontSize:'12pt',fontWeight:'bold',color:'#00784D'}}>
    We are the team working since 2017 from Pakistan.
    <br/>
    We are the experts in different fields and earned experience from different platform like Fiverr and Upwork e.t.c. We decided to put our energy into the company which will be working for different brands, and organization. We wanted to work for your brand to make sure that you had a great time in the future.
    </Typography>
    </Col>
    </Row>
    </Container>
    </div>
  );
}
