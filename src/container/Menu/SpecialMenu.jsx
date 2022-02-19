import React from "react";
import { Card, CardGroup } from "react-bootstrap";
// import { SubHeading, MenuItem } from '../../components';
import { data, images } from "../../constants";
import Container from "@mui/material/Container";
import "./SpecialMenu.css";
import Typography from "@mui/material/Typography";
import { Image } from "antd";
import { Carousel } from "@trendyol-js/react-carousel";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const SpecialMenu = () => (
  // <div className="app__specialMenu flex__center section__padding" id="menu">
  //   <div className="app__specialMenu-title">
  //     <SubHeading title="Menu that fits your palatte" />
  //     <h1 className="headtext__cormorant">Today&apos;s Special</h1>
  //   </div>

  //   <div className="app__specialMenu-menu">
  //     <div className="app__specialMenu-menu_wine  flex__center">
  //       <p className="app__specialMenu-menu_heading">Wine & Beer</p>
  //       <div className="app__specialMenu_menu_items">
  //         {data.wines.map((wine, index) => (
  //           <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
  //         ))}
  //       </div>
  //     </div>

  //     <div className="app__specialMenu-menu_img">
  //       <img src={images.menu} alt="menu__img" />
  //     </div>

  //     <div className="app__specialMenu-menu_cocktails  flex__center">
  //       <p className="app__specialMenu-menu_heading">Cocktails</p>
  //       <div className="app__specialMenu_menu_items">
  //         {data.cocktails.map((cocktail, index) => (
  //           <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
  //         ))}
  //       </div>
  //     </div>
  //   </div>

  //   <div style={{ marginTop: 15 }}>
  //     <button type="button" className="custom__button">View More</button>
  //   </div>
  // </div>
  // <div>
  //   <br />
  //   <br />
  //   <br />
  //   <br />
  //   <br />
  //   <br />
  //   <Container style={{ color: 'white', height: '35rem' }}>
  //     <CardGroup>
  //       <Card style={{ height: '22rem', backgroundColor: '#FED20F', padding: '10px' }} className="cards">
  //         <Card.Img variant="top" src="https://themezinho.net/sreative/images/icon1.png" style={{ width: '80px', height: '80px' }} />
  //         <Card.Body>
  //           <Card.Title>BRAND IDENDITY</Card.Title>
  //           <Card.Text>
  //             This is a wider card with supporting text below as a natural
  //             lead-in to additional content. This content is a little bit
  //             longer.
  //           </Card.Text>
  //         </Card.Body>
  //         <Card.Footer>
  //           <small className="text-muted">Last updated 3 mins ago</small>
  //         </Card.Footer>
  //       </Card>
  //       <Card style={{ height: '22rem', backgroundColor: '#FED20F', padding: '10px' }} className="cards">
  //         <Card.Img variant="top" src="https://themezinho.net/sreative/images/icon2.png" style={{ width: '80px', height: '80px' }} />
  //         <Card.Body>
  //           <Card.Title>WEB DEVELOPMENT</Card.Title>
  //           <Card.Text>
  //             This card has supporting text below as a natural lead-in to
  //             additional content.
  //           </Card.Text>
  //         </Card.Body>
  //         <Card.Footer>
  //           <small className="text-muted">Last updated 3 mins ago</small>
  //         </Card.Footer>
  //       </Card>
  //       <Card style={{ height: '22rem', backgroundColor: '#FED20F', padding: '10px' }} className="cards">
  //         <Card.Img variant="top" src="https://themezinho.net/sreative/images/icon3.png" style={{ width: '80px', height: '80px' }} />
  //         <Card.Body>
  //           <Card.Title>MOBILE APPLICATIONS</Card.Title>
  //           <Card.Text>
  //             This is a wider card with supporting text below as a natural
  //             lead-in to additional content. This card has even longer content
  //             than the first to show that equal height action.
  //           </Card.Text>
  //         </Card.Body>
  //         <Card.Footer>
  //           <small className="text-muted">Last updated 3 mins ago</small>
  //         </Card.Footer>
  //       </Card>
  //       <Card style={{ height: '22rem', backgroundColor: '#FED20F', padding: '10px' }} className="cards">
  //         <Card.Img variant="top" src="https://themezinho.net/sreative/images/icon4.png" style={{ width: '80px', height: '80px' }} />
  //         <Card.Body>
  //           <Card.Title>VIDEO PRODUCTION</Card.Title>
  //           <Card.Text>
  //             This is a wider card with supporting text below as a natural
  //             lead-in to additional content. This card has even longer content
  //             than the first to show that equal height action.
  //           </Card.Text>
  //         </Card.Body>
  //         <Card.Footer>
  //           <small className="text-muted">Last updated 3 mins ago</small>
  //         </Card.Footer>
  //       </Card>
  //     </CardGroup>
  //   </Container>
  // </div>
  <div>
    <Typography
      style={{
        fontSize: "26pt",
        fontWeight: "bolder",
        color: "#00784D",
        textAlign: "center",
        fontWeight: 900,
      }}
    >
      What We Do Best
    </Typography>
    <Typography
      style={{
        fontSize: "26pt",
        fontWeight: "bolder",
        color: "#000",
        textAlign: "center",
        fontWeight: 800,
      }}
    >
      Our Digital Marketing Services
    </Typography>
    <br />
    <div
      style={{
        background: `url('${images.grr}')`,
        height: 260,
        backgroundAttachment: "fixed",
      }}
    >
      {/* <br />
    <br /> */}
      {/* <Container>
       <Carousel
        show={3.5}
        slide={3}
        swiping={true}
        responsive={true}
        useArrowKeys={true}
        rightArrow={<ArrowRightIcon style={{fontSize:'92pt',cursor:"pointer"}} />}
        leftArrow={<ArrowLeftIcon style={{fontSize:'92pt',cursor:"pointer"}}  />}
      >
        <div>
        <Typography style={{fontSize:'24pt',fontWeight:'bolder',color:'#fff',textAlign:'center',fontWeight:800}}>
    Brand Idendity
    </Typography>
             <Typography style={{fontSize:'14pt',fontWeight:'bold',color:'#fff',textAlign:'center'}}>
    We are the team working since 2017 from Pakistan.
    <br/>
    We are the experts in different fields and earned experience from different platform like Fiverr and Upwork e.t.c. We decided to put our energy into the company which will be working for different brands, and organization. We wanted to work for your brand to make sure that you had a great time in the future.
    </Typography>
        </div>
        <div>
        <Typography style={{fontSize:'24pt',fontWeight:'bolder',color:'#fff',textAlign:'center',fontWeight:800}}>
    Web Development
    </Typography>
             <Typography style={{fontSize:'14pt',fontWeight:'bold',color:'#fff',textAlign:'center'}}>
    We are the team working since 2017 from Pakistan.
    <br/>
    We are the experts in different fields and earned experience from different platform like Fiverr and Upwork e.t.c. We decided to put our energy into the company which will be working for different brands, and organization. We wanted to work for your brand to make sure that you had a great time in the future.
    </Typography>
        </div>
        <div>
        <Typography style={{fontSize:'24pt',fontWeight:'bolder',color:'#fff',textAlign:'center',fontWeight:800}}>
    SEO
    </Typography>
             <Typography style={{fontSize:'14pt',fontWeight:'bold',color:'#fff',textAlign:'center'}}>
    We are the team working since 2017 from Pakistan.
    <br/>
    We are the experts in different fields and earned experience from different platform like Fiverr and Upwork e.t.c. We decided to put our energy into the company which will be working for different brands, and organization. We wanted to work for your brand to make sure that you had a great time in the future.
    </Typography>
        </div>
      </Carousel>
    </Container> */}

      <Carousel
        show={1}
        // slide={1}
        swiping={true}
        responsive={true}
        useArrowKeys={true}
        rightArrow={
          <>
          <Container style={{ marginTop: "5em" }}    sx={{ display: { xs: "none", md: "block" } }}>
            <img src={images.right} />
          </Container>
          <Container style={{ marginTop: "5em" }}    sx={{ display: { xs: "block", md: "none" } }}>
            <img src={images.right} style={{width:'50px',height:'50px'}} />
          </Container>
          </>
        }
        leftArrow={
          <>
          <Container style={{ marginTop: "5em" }}    sx={{ display: { xs: "none", md: "block" } }}>
            <img src={images.left} />
          </Container>
          <Container style={{ marginTop: "5em" }}    sx={{ display: { xs: "block", md: "none" } }} >
            <img src={images.left}  style={{width:'50px',height:'50px'}} />
          </Container>
          </>
        }
      >
        {/* <Container style={{ maxWidth: 800 }}>
          <Typography
            style={{
              fontSize: "24pt",
              fontWeight: "bolder",
              color: "#fff",
              textAlign: "center",
              fontWeight: 800,
            }}
          >
            SEO
          </Typography>
          <Typography
            style={{
              fontSize: "14pt",
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
              lineHeight: 1,
              letterSpacing: '5px',
            }}
          >
            We are the team working since 2017 from Pakistan.
            <br />
            <br />
            We are the experts in different fields and earned experience from
            different platform like Fiverr and Upwork e.t.c. We decided to put
            our energy into the company which will be working for different
            brands, and organization. We wanted to work for your brand to make
            sure that you had a great time in the future.
          </Typography>
        </Container> */}

        {/* PC */}
        <Container
          style={{ width: 1200, marginLeft: "auto", marginRight: "auto" }}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Typography
            style={{
              fontSize: "24pt",
              fontWeight: "bolder",
              color: "#fff",
              textAlign: "center",
              fontWeight: 800,
              // marginTop:'-10px'
            }}
          >
            Web Development
          </Typography>
          <br />
          <Typography
            style={{
              fontSize: "14pt",
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
              // lineHeight: 1,
              // letterSpacing: "5px",
            }}
          >
            We are the team working since 2017 from Pakistan.
            <br />
            We are the experts in different fields and earned experience from
            different platform like Fiverr and Upwork e.t.c. We decided to put
            our energy into the company which will be working for different
            brands, and organization. We wanted to work for your brand to make
            sure that you had a great time in the future.
            <br />
            <br />
            <FiberManualRecordIcon style={{ color: "yellow" }} />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
          </Typography>
        </Container>
        <Container
          style={{ width: 1200, marginLeft: "auto", marginRight: "auto" }}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Typography
            style={{
              fontSize: "24pt",
              fontWeight: "bolder",
              color: "#fff",
              textAlign: "center",
              fontWeight: 800,
            }}
          >
            Brand Idendity
          </Typography>
          <br />
          <Typography
            style={{
              fontSize: "14pt",
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
              // lineHeight: 1,
              // letterSpacing: "5px",
            }}
          >
            We are the team working since 2017 from Pakistan.
            <br />
            We are the experts in different fields and earned experience from
            different platform like Fiverr and Upwork e.t.c. We decided to put
            our energy into the company which will be working for different
            brands, and organization. We wanted to work for your brand to make
            sure that you had a great time in the future.
            <br />
            <br />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon style={{ color: "yellow" }} />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
          </Typography>
        </Container>
        <Container
          style={{ width: 1200, marginLeft: "auto", marginRight: "auto" }}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Typography
            style={{
              fontSize: "24pt",
              fontWeight: "bolder",
              color: "#fff",
              textAlign: "center",
              fontWeight: 800,
            }}
          >
            SEO
          </Typography>
          <br />
          <Typography
            style={{
              fontSize: "14pt",
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
              // lineHeight: 1,
              // letterSpacing: "5px",
            }}
          >
            We are the team working since 2017 from Pakistan.
            <br />
            We are the experts in different fields and earned experience from
            different platform like Fiverr and Upwork e.t.c. We decided to put
            our energy into the company which will be working for different
            brands, and organization. We wanted to work for your brand to make
            sure that you had a great time in the future.
            <br />
            <br />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon style={{ color: "yellow" }} />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
          </Typography>
        </Container>
        {/* PC */}

        {/* Mobile */}
        <Container
          style={{
            width: 300,
            marginLeft: "auto",
            marginRight: "auto",
            alignItems: "center",
            justifyConent: "center",
          }}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <Typography
            style={{
              fontSize: "8pt",
              fontWeight: "bolder",
              color: "#fff",
              textAlign: "center",
              fontWeight: 800,
              // marginTop:'-10px'
            }}
          >
            Web Development
          </Typography>
          <br />
          <Typography
            style={{
              fontSize: "4pt",
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
              // lineHeight: 1,
              // letterSpacing: "5px",
            }}
          >
            We are the team working since 2017 from Pakistan.
            <br />
            We are the experts in different fields and earned experience from
            different platform like Fiverr and Upwork e.t.c. We decided to put
            our energy into the company which will be working for different
            brands, and organization. We wanted to work for your brand to make
            sure that you had a great time in the future.
            <br />
            <br />
            <FiberManualRecordIcon style={{ color: "yellow" }} />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
          </Typography>
        </Container>
        <Container
          style={{
            width: 300,
            marginLeft: "auto",
            marginRight: "auto",
            alignItems: "center",
            justifyConent: "center",
          }}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <Typography
            style={{
              fontSize: "8pt",
              fontWeight: "bolder",
              color: "#fff",
              textAlign: "center",
              fontWeight: 800,
              // marginTop:'-10px'
            }}
          >
            SEO
          </Typography>
          <br />
          <Typography
            style={{
              fontSize: "4pt",
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
              // lineHeight: 1,
              // letterSpacing: "5px",
            }}
          >
            We are the team working since 2017 from Pakistan.
            <br />
            We are the experts in different fields and earned experience from
            different platform like Fiverr and Upwork e.t.c. We decided to put
            our energy into the company which will be working for different
            brands, and organization. We wanted to work for your brand to make
            sure that you had a great time in the future.
            <br />
            <br />
            <FiberManualRecordIcon style={{ color: "yellow" }} />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
          </Typography>
        </Container>
        <Container
          style={{
            width: 300,
            marginLeft: "auto",
            marginRight: "auto",
            alignItems: "center",
            justifyConent: "center",
          }}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <Typography
            style={{
              fontSize: "8pt",
              fontWeight: "bolder",
              color: "#fff",
              textAlign: "center",
              fontWeight: 800,
              // marginTop:'-10px'
            }}
          >
            GD
          </Typography>
          <br />
          <Typography
            style={{
              fontSize: "4pt",
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
              // lineHeight: 1,
              // letterSpacing: "5px",
            }}
          >
            We are the team working since 2017 from Pakistan.
            <br />
            We are the experts in different fields and earned experience from
            different platform like Fiverr and Upwork e.t.c. We decided to put
            our energy into the company which will be working for different
            brands, and organization. We wanted to work for your brand to make
            sure that you had a great time in the future.
            <br />
            <br />
            <FiberManualRecordIcon style={{ color: "yellow" }} />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
            <FiberManualRecordIcon />
          </Typography>
        </Container>
        {/* <Container style={{ width: 400 ,marginLeft:'auto',marginRight:'auto',alignItems:'center',justifyConent:'center'}}  sx={{ display: { xs: "block", md: "none" } }}>
          <Typography
            style={{
              fontSize: "14pt",
              fontWeight: "bolder",
              color: "#fff",
              textAlign: "center",
              fontWeight: 800,
            }}
          >
            Brand Idendity
          </Typography>
          <br/>
          <Typography
            style={{
              fontSize: "8pt",
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
            }}
          >
            We are the team working since 2017 from Pakistan.
            <br />
            We are the experts in different fields and earned experience from
            different platform like Fiverr and Upwork e.t.c. We decided to put
            our energy into the company which will be working for different
            brands, and organization. We wanted to work for your brand to make
            sure that you had a great time in the future.
            <br />
            <br />
            <FiberManualRecordIcon/>
            <FiberManualRecordIcon style={{color:'yellow'}} />
            <FiberManualRecordIcon/>
            <FiberManualRecordIcon/>
            <FiberManualRecordIcon/>
          </Typography>
        </Container>
        <Container style={{ width: 400 ,marginLeft:'auto',marginRight:'auto' ,alignItems:'center',justifyConent:'center'}}  sx={{ display: { xs: "block", md: "none" } }}>
          <Typography
            style={{
              fontSize: "14pt",
              fontWeight: "bolder",
              color: "#fff",
              textAlign: "center",
              fontWeight: 800,
            }}
          >
            SEO
          </Typography>
          <br/>
          <Typography
            style={{
              fontSize: "8pt",
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
            }}
          >
            We are the team working since 2017 from Pakistan.
            <br />
            We are the experts in different fields and earned experience from
            different platform like Fiverr and Upwork e.t.c. We decided to put
            our energy into the company which will be working for different
            brands, and organization. We wanted to work for your brand to make
            sure that you had a great time in the future.
            <br />
            <br />
            <FiberManualRecordIcon/>
            <FiberManualRecordIcon/>
            <FiberManualRecordIcon style={{color:'yellow'}} />
            <FiberManualRecordIcon/>
            <FiberManualRecordIcon/>
          </Typography>
        </Container> */}
        {/* Mobile */}
      </Carousel>
    </div>
  </div>
);

export default SpecialMenu;
