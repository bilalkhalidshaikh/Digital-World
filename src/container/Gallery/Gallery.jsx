import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import {
  Row,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Card,
  Button,
} from "react-bootstrap";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    // <div className="app__gallery flex__center">
    //   <div className="app__gallery-content">
    //     <SubHeading title="Instagram" />
    //     <h1 className="headtext__cormorant">Photo Gallery</h1>
    //     <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
    //     <button type="button" className="custom__button">View More</button>
    //   </div>
    //   <div className="app__gallery-images">
    //     <div className="app__gallery-images_container" ref={scrollRef}>
    //       {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
    //         <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
    //           <img src={image} alt="gallery_image" />
    //           <BsInstagram className="gallery__image-icon" />
    //         </div>
    //       ))}
    //     </div>
    //     <div className="app__gallery-images_arrows">
    //       <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
    //       <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
    //     </div>
    //   </div>
    // </div>
    <div
      style={{
        backgroundColor: "#eee",
        height: "62rem",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
        // paddingTop: "80px",

      }}
    >
      <Container>
      <br/>
      <h1 style={{color:'#FED20F',textAlign:'center'}}>LATEST <span style={{fontWeight:'bolder'}}>NEWS</span></h1>
      <br/>
        <Row>
          <Col>
            <Card style={{ width: "34rem" }}>
              <Card.Img
                variant="top"
                src="https://themezinho.net/sreative/images/image2.jpg"
              />
              <Card.Body>
                <Card.Title>
                  <h3>How to Choose the Right Digital Camera for You!</h3>
                </Card.Title>
                <p>Photography, Design, Tutorials</p>
                <Card.Text>
                  <h5 style={{color:'#666'}}>

                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem seqi nesciunt. Neque poro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit.
                  </h5>
                </Card.Text>
              </Card.Body>
              <Card.Body>
                  <Button style={{ padding: "10px 20px", backgroundColor: "#FEBD0F",fontWeight:'bolder',color:'#fff',outline:'none',border:'none' }}>
                    Read More
                  </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "34rem" }}>
              <Card.Img
                variant="top"
                src="https://themezinho.net/sreative/images/image3.jpg"
              />
             <Card.Body>
                <Card.Title>
                  <h3>How to Choose the Right Digital Camera for You!</h3>
                </Card.Title>
                <p>Photography, Design, Tutorials</p>
                <Card.Text>
                  <h5 style={{color:'#666'}}>

                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem seqi nesciunt. Neque poro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit.
                  </h5>
                </Card.Text>
              </Card.Body>
              <Card.Body>
                  <Button style={{ padding: "10px 20px", backgroundColor: "#FEBD0F",fontWeight:'bolder',color:'#fff',outline:'none',border:'none' }}>
                    Read More
                  </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
