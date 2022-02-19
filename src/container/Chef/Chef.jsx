import React,{useState,render} from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import CountUp from "react-countup";
import "./Chef.css";
import BackupTableIcon from '@mui/icons-material/BackupTable';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ScienceIcon from '@mui/icons-material/Science';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import {Dropdown,FormControl} from "react-bootstrap"
import { Select } from 'antd';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const { Option } = Select;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}






// const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
//   <a
//     href=""
//     ref={ref}
//     onClick={(e) => {
//       e.preventDefault();
//       onClick(e);
//     }}
//   >
//     {children}
//     &#x25bc;
//   </a>
// ));

// const CustomMenu = React.forwardRef(
//   ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
//     const [value, setValue] = useState('');

//     return (
//       <div
//         ref={ref}
//         style={style}
//         className={className}
//         aria-labelledby={labeledBy}
//       >
//         <FormControl
//           autoFocus
//           className="mx-3 my-2 w-auto"
//           placeholder="Type to filter..."
//           onChange={(e) => setValue(e.target.value)}
//           value={value}
//         />
//         <ul className="list-unstyled">
//           {React.Children.toArray(children).filter(
//             (child) =>
//               !value || child.props.children.toLowerCase().startsWith(value),
//           )}
//         </ul>
//       </div>
//     );
//   },
// );

// render(
//   <Dropdown>
//     <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
//       Filter
//     </Dropdown.Toggle>

//     <Dropdown.Menu as={CustomMenu}>
//       <Dropdown.Item eventKey="1">Red</Dropdown.Item>
//       <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
//       <Dropdown.Item eventKey="3" active>
//         Orange
//       </Dropdown.Item>
//       <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
//     </Dropdown.Menu>
//   </Dropdown>,
// );

function ButtonAppBar() {
  
const menu = (
  <Menu style={{width:'35em'}}>
    <Menu.Item key="0">
        <Select
      mode="multiple"
      allowClear
      style={{ width: '100%' }}
      placeholder="Please select"
      defaultValue={['a10', 'c12']}
      onChange={handleChange}
    >
      {children}
    </Select>
    </Menu.Item>
    <Menu.Divider />
  </Menu>
);


  return (
    <Box sx={{ flexGrow: 1 }} position="static" >
      <AppBar position="static" color="transparent" style={{boxShadow:'none'}}> 
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography  sx={{ flexGrow: 1 ,display:{xs:'none',md:'block'}}} style={{color:'#00784D',fontSize:'34pt',fontWeight:900,textDecoration:'none'}}>
            Highlights
          </Typography>
          <Typography  sx={{ flexGrow: 1 ,display:{xs:'block',md:'none'}}} style={{color:'#00784D',fontSize:'18pt',fontWeight:900,textDecoration:'none'}}>
            Highlights
          </Typography>
          {/* <Button color="inherit">Filter: All</Button> */}
          <>

    <br />
     <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{fontSize:'18pt',color:'#000',fontWeight:900}}>
      Filter <DownOutlined />
    </a>
  </Dropdown>
  </>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


const Chef = () => (
  
  // <div
  //   style={{
  //     backgroundColor: "#eeee",
  //     // height: "40rem",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     // margin: "auto",
  //     // paddingTop: "80px",
  //     textAlign: "center",
  //   }}
  // >
  //   <Container>
  //   <div
  //     style={{
  //       padding: "0px",
  //       justifyContent: "center",
  //       alignItems: "center",
  //     }}
  //   >
  //     <Row>
  //       <Col>
  //         <Card
  //           style={{
  //             width: "15rem",
  //             height: "15rem",
  //             paddingTop:'10px'
  //           }}
  //           className="cardui"
  //         >
  //           <BackupTableIcon
  //             color="#FED20F"
  //             style={{ marginLeft: "auto", marginRight: "auto",fontSize:'48pt' }}
  //           />
  //           <br />
  //           <h2 className="c">
  //             {" "}
  //             <CountUp delay={2} end={358} />
  //           </h2>
  //           <h4 className="c">Projects Completed</h4>
  //         </Card>
  //       </Col>
  //       <Col>
  //         <Card
  //           style={{
  //             width: "15rem",
  //             height: "15rem",
  //           }}
  //           className="cardui"
  //         >
  //              <ConnectWithoutContactIcon
  //             color="#FED20F"
  //             style={{ marginLeft: "auto", marginRight: "auto",fontSize:'48pt' }}
  //           />
  //           <br />
  //           <h2 className="c">
  //             <CountUp delay={2} end={269} />
  //           </h2>
  //           <h4 className="c">Concept Created</h4>
  //         </Card>
  //       </Col>
  //       <Col>
  //         <Card
  //           style={{
  //             width: "15rem",
  //             height: "15rem",
  //           }}
  //           className="cardui"
  //         >
  //         <ScreenSearchDesktopIcon
  //             color="#FED20F"
  //             style={{ marginLeft: "auto", marginRight: "auto",fontSize:'48pt' }}
  //           />
  //           <br />
  //           <h2 className="c">
  //             <CountUp delay={2} end={157} />
  //           </h2>
  //           <h4 className="c">Happy Clients</h4>
  //         </Card>
  //       </Col>
  //       <Col>
  //         <Card
  //           style={{
  //             // backgroundColor: '#FED20F',
  //             width: "15rem",
  //             height: "15rem",
  //           }}
  //           className="cardui"
  //         >
  //         <ScienceIcon
  //             color="#FED20F"
  //             style={{ marginLeft: "auto", marginRight: "auto",fontSize:'48pt' }}
  //           />
  //           <br />
  //           <h2 className="c">
  //             <CountUp delay={2} end={23} />
  //           </h2>
  //           <h4 className="c">Awards Winning</h4>
  //         </Card>
  //       </Col>
  //     </Row>
  //   </div>
  //   </Container>
  // </div>
  <div>
<ButtonAppBar/>
<br/>
<Container>
<Row>
<Col>
            <Card style={{ width: "34rem" }}>
              <Card.Img
                variant="top"
                src="https://themezinho.net/sreative/images/image2.jpg"
              />
              <Card.Body>
                <Card.Title>
                  <h3>Market Crashed</h3>
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
                src="https://themezinho.net/sreative/images/image2.jpg"
              />
              <Card.Body>
                <Card.Title>
                  <h3>Market Crashed</h3>
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
                src="https://themezinho.net/sreative/images/image2.jpg"
              />
              <Card.Body>
                <Card.Title>
                <h3>Market Crashed</h3>
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

export default Chef;
