import React from 'react'
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from '../container';
import { Navbar,AboutFounder } from '../components';
import {Container} from "react-bootstrap"

export default function About() {
  return (
    <div>

 <Navbar />
 <div style={{width:'100%',backgroundColor:'#FED20F',color:'white',padding:'50px'}}>
   <Container>
    <h1 style={{color:'white',fontWeight:'bolder'}}>
    ABOUT US
    </h1>
    <h5 style={{color:'white'}}>Interactive digital experiences are continually</h5>
    </Container>
 </div>

    <AboutUs />
    
    <br/>
    <br/>
    <AboutFounder />
    <br/>
    <br/>
    <br/>
    <br/>
    <Chef />
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Laurels />
    
    
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <FindUs />
    <Footer />
  </div>
  )
}
