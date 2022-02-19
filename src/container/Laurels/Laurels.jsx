import React from "react";
import { Container, Image } from "react-bootstrap";
// import { SubHeading } from '../../components';
import { images, data } from "../../constants";
import { Carousel } from "@trendyol-js/react-carousel";
// import a from "."
import ForkRightIcon from "@mui/icons-material/ForkRight";
import ForkLeftIcon from "@mui/icons-material/ForkLeft";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import "./Laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  // <div className="app__bg app__wrapper section__padding" id="awards">
  //   <div className="app__wrapper_info">
  //     {/* <SubHeading title="Awards & recognition" /> */}
  //     <h1 className="headtext__cormorant">Our Laurels</h1>

  //     <div className="app__laurels_awards">
  //       {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
  //     </div>
  //   </div>

  //   <div className="app__wrapper_img">
  //     <img src={images.laurels} alt="laurels_img" />
  //   </div>
  // </div>
  <div
    style={{
      backgroundColor: "#fff",
      height: "30rem",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      // paddingTop: "80px",
      textAlign: "center",
    }}
  >
    <Container>
      <Carousel
        show={3.5}
        slide={3}
        swiping={true}
        responsive={true}
        useArrowKeys={true}
        rightArrow={<ArrowRightIcon style={{fontSize:'92pt',cursor:"pointer"}} />}
        leftArrow={<ArrowLeftIcon style={{fontSize:'92pt',cursor:"pointer"}}  />}
      >
        <Image src={images.a} />
        <Image src={images.b} />
        <Image src={images.c} />
        <Image src={images.d} />
      </Carousel>
    </Container>
  </div>
);

export default Laurels;
