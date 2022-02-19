import React, { useState, useEffect } from "react";
import { Drawer, message, Image } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";
import {
  Row,
  Col,
  NavDropdown,
  Navbar,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { Dropdown } from "antd";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import TypeAnimation from "react-type-animation";
import Modal from "@mui/material/Modal";
import { Input } from "antd";
import { Collapse } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";

const { Panel } = Collapse;

const { Search } = Input;

// const HamMenu = () => {
//   const [visible, setVisible] = useState(false);

//   const showDrawer = () => {
//     setVisible(true);
//   };

//   const onClose = () => {
//     setVisible(false);
//   };

//   return (
//     <>
//       {/* <Button type="primary" > */}
//       <MenuIcon
//         color="white"
//         style={{ color: "#fff", fontSize: "26pt", cursor: "pointer" }}
//         onClick={showDrawer}
//       />
//       {/* </Button> */}
//       <Drawer
//         title="Basic Drawer"
//         placement="right"
//         onClose={onClose}
//         visible={visible}
//       >
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//       </Drawer>
//     </>
//   );
// };

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function SearchModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <SearchIcon
        onClick={handleOpen}
        style={{
          color: "#fff",
          fontSize: "22pt",
          fontWeight: "bolder",
        }}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Search
          </Typography>
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            loading
          />
        </Box>
      </Modal>
    </div>
  );
}

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item key="1">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" disabled>
      3rd menu item（disabled）
    </Menu.Item>
  </Menu>
);

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  // const menu = (
  //   <Menu
  //     onClick={onClick}
  //     style={{
  //       padding: "20px",
  //       fontSize: "14pt",
  //       borderRaduis: "15%",
  //       fontWeight: "bolder",
  //     }}
  //   >
  //     <Menu.Item key="1">BRAND IDENTITY</Menu.Item>
  //     <br />
  //     <Menu.Item key="2">DIGITAL MARKETING</Menu.Item>
  //     <br />
  //     <Menu.Item key="3">SOCIAL MEDIA MARKETING</Menu.Item>
  //     <br />
  //     <Menu.Item key="4">DESIGNING</Menu.Item>
  //     <br />
  //     <Menu.Item key="5">WEB DEVELOPMENT</Menu.Item>
  //     <br />
  //     <Menu.Item key="6">WEB AND MOBILE APPLICATION</Menu.Item>
  //     <br />
  //     <Menu.Item key="7">SEARCH ENGINE OPTIMIZATION</Menu.Item>
  //     <br />
  //     <Menu.Item key="8">3D MODELING AND INTERIOR DESIGNING</Menu.Item>
  //     <br />
  //   </Menu>
  // );

  function callback(key) {
    console.log(key);
  }

  const text = (
    <>
      <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Search
        </Typography>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          loading
        />
      </Box>
    </>
  );
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  const [showS, setShowS] = useState(false);
  const showDropdownS = (e) => {
    setShowS(!showS);
  };
  const hideDropdownS = (e) => {
    setShowS(false);
  };
  return (
    <AppBar
      position="fixed"
      style={{ backgroundColor: "#017A50", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <img
              src={images.blacklogo}
              alt="app__logo"
              style={{ width: 190, height: 70, marginLeft: "6.6em" }}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              // keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                color: "green",
                marginTop: "20px",
              }}
            >
              <Paper sx={{ width: 445, maxWidth: "100%" }}>
                {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
                <MenuItem>
                  <Link style={{ color: "#017A50", fontSize: "16pt" }} to="/">
                    HOME
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    style={{ color: "#017A50", fontSize: "16pt" }}
                    to="/Services"
                  >
                    WHAT WE DO
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    style={{ color: "#017A50", fontSize: "16pt" }}
                    to="/Blog"
                  >
                    BLOGS
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    style={{ color: "#017A50", fontSize: "16pt" }}
                    to="/About"
                  >
                    WHO WE ARE
                  </Link>
                </MenuItem>
                <MenuItem>
                  {/* <SearchIcon style={{ color: "#333" }} /> */}
                  <Collapse onChange={callback}>
                    <Panel
                      header={
                        <SearchIcon
                          style={{ color: "#017A50", fontSize: "18pt" }}
                        />
                      }
                      key="2"
                    >
                      <p>{text}</p>
                    </Panel>
                  </Collapse>
                </MenuItem>
              </Paper>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Image
              src={images.blacklogo}
              alt="app__logo"
              style={{ width: 170, height: 70 }}
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: "16em",
            }}
          >
            <MenuItem>
              <Link
                style={{
                  color: "#fff",
                  fontSize: "12pt",
                  fontWeight: "bolder",
                }}
                to="/"
              >
                HOME
              </Link>
            </MenuItem>
            <MenuItem>
              {/* <Link style={{ color: "#fff" }} to="/Services">SERVICES </Link> <ArrowDropDownIcon/> */}
              {/* <span style={{ color: "#fff" }}  > */}
              <Link
                style={{
                  color: "#fff",
                  fontSize: "12pt",
                  fontWeight: "bolder",
                }}
                to="/Services"
              >
                WHAT WE DO
              </Link>
              {/* <Dropdown overlay={menu}> */}
              {/* <ArrowDropDownIcon style={{ fontSize: "22pt" }}  */}
              {/* // className="ant-dropdown-link" onClick={e => e.preventDefault()}
                //  /> */}
              {/* </Dropdown> */}
              {/* </span> */}
              <NavDropdown
                id="nav-dropdown-dark-example"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                title={
                  <ArrowDropDownIcon
                    style={{ fontSize: "22pt", color: "#fff" }}
                  />
                }
              >
                <div style={{ marginLeft: "-15em", backgroundColor: "#fff" }}>
                  <br />
                  <NavDropdown.Item style={{ fontSize: "10pt" }}>
                    BRAND IDENTITY
                  </NavDropdown.Item>
                  <br />
                  <br />
                  <NavDropdown.Item style={{ fontSize: "10pt" }}>
                    DIGITAL MARKETING
                  </NavDropdown.Item>
                  <br />
                  <br />
                  <NavDropdown.Item style={{ fontSize: "10pt" }}>
                    SOCIAL MEDIA MARKETING
                  </NavDropdown.Item>
                  <br />
                  <br />
                  <NavDropdown.Item style={{ fontSize: "10pt" }}>
                    DESIGNING
                  </NavDropdown.Item>
                  <br />
                  <br />
                  <NavDropdown.Item style={{ fontSize: "10pt" }}>
                    3D MODELING AND INTERIOR DESIGNING
                  </NavDropdown.Item>
                  <br />
                  <br />
                  <NavDropdown.Item style={{ fontSize: "10pt" }}>
                    WEB DEVELOPMENT
                  </NavDropdown.Item>
                  <br />
                  <br />
                  <NavDropdown.Item style={{ fontSize: "10pt" }}>
                    WEB AND MOBILE APPLICATION
                  </NavDropdown.Item>
                  <br />
                  <br />
                </div>
              </NavDropdown>
            </MenuItem>
            {/* <MenuItem>
                  <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Hover me <ArrowDropDownIcon />
    </a>
  </Dropdown>
            </MenuItem> */}
            <MenuItem>
              <Link
                style={{
                  color: "#fff",
                  fontSize: "12pt",
                  fontWeight: "bolder",
                }}
                to="/Blog"
              >
                BLOGS
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                style={{
                  color: "#fff",
                  fontSize: "12pt",
                  fontWeight: "bolder",
                }}
                to="/About"
              >
                WHO WE ARE
              </Link>
            </MenuItem>
            <MenuItem>
              <NavDropdown
                id="dropdown-menu-align-responsive-1"
                className="d-inline mx-2"
                autoClose="outside"
                //               show={showS}
                //  onMouseEnter={showDropdownS}
                //  onMouseLeave={hideDropdownS}
                title={
                  <SearchIcon
                    style={{
                      color: "#fff",
                      fontSize: "22pt",
                      fontWeight: "bolder",
                    }}
                  />
                }
              >
                <div>
                  <NavDropdown.Item
                    style={{
                      width: "300px",
                      backgroundColor: "#fff",
                      marginLeft: "-10em",
                      height: "70px",
                    }}
                  >
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Search
                    </Typography>
                    <Search
                      placeholder="input search text"
                      enterButton="Search"
                      size="large"
                      loading
                    />
                  </NavDropdown.Item>
                </div>
              </NavDropdown>

              {/* <SearchModal /> */}
            </MenuItem>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}> */}
            <div style={{ display: "inline" }}>
              <Button
                style={{
                  color: "#fff",
                  fontSize: "12pt",
                  fontWeight: 600,
                }}
              >
                SIGN IN
              </Button>{" "}
              <Button
                style={{
                  width: "60px",
                  height: "30px",
                  color: "#017A50",
                  background: "#eee",
                  fontSize: "14pt",
                  fontWeight: 800,
                }}
              >
                JOIN
              </Button>
            </div>
            {/* </IconButton>
            </Tooltip> */}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const TheNavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  function callback(key) {
    console.log(key);
  }

  const text = (
    <>
      <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Search
        </Typography>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          loading
        />
      </Box>
    </>
  );
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <header className="header">
      <a href className="logo">
        {" "}
        <Image
          src={images.blacklogo}
          alt="app__logo"
          style={{ width: 170, height: 70 }}
        />
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon" />
      </label>
      <ul className="menu">
        <li>
        <Link
                style={{
                  // color: "#fff",
                  fontSize: "12pt",
                  fontWeight: "bolder",
                }}
                to="/"
              >
                HOME
              </Link>
        </li>
        <li>
        <Link
                style={{
                  // color: "#fff",
                  fontSize: "12pt",
                  fontWeight: "bolder",
                }}
                to="/Services"
              >
                WHAT WE DO
              </Link>
              {/* <NavDropdown
                id="nav-dropdown-dark-example"
                title={
                  <ArrowDropDownIcon
                    style={{ fontSize: "22pt", color: "#fff" }}
                  />
                }
              >
                <div style={{ marginLeft: "-15em", backgroundColor: "#fff" }}>
                  <br />
                  <NavDropdown.Item style={{ fontSize: "10pt" }}>
                    BRAND IDENTITY
                  </NavDropdown.Item>
                  <br />
                  <br />
                  <NavDropdown.Item style={{ fontSize: "10pt" }}>
                    DIGITAL MARKETING
                  </NavDropdown.Item>
                  <br />
                  <br />
                  <NavDropdown.Item style={{ fontSize: "10pt" }}>
                    SOCIAL MEDIA MARKETING
                  </NavDropdown.Item>
                  <br />
                  <br />
                  <NavDropdown.Item style={{ fontSize: "10pt" }}>
                    DESIGNING
                  </NavDropdown.Item>
                  <br />
                  <br />
                  <NavDropdown.Item style={{ fontSize: "10pt" }}>
                    3D MODELING AND INTERIOR DESIGNING
                  </NavDropdown.Item>
                  <br />
                  <br />
                  <NavDropdown.Item style={{ fontSize: "10pt" }}>
                    WEB DEVELOPMENT
                  </NavDropdown.Item>
                  <br />
                  <br />
                  <NavDropdown.Item style={{ fontSize: "10pt" }}>
                    WEB AND MOBILE APPLICATION
                  </NavDropdown.Item>
                  <br />
                  <br />
                </div>
              </NavDropdown> */}
        </li>
        <li>
        <Link
                style={{
                  // color: "#fff",
                  fontSize: "12pt",
                  fontWeight: "bolder",
                }}
                to="/Blog"
              >
                BLOGS
              </Link>
        </li>
        <li>
        <Link
                style={{
                  // color: "#fff",
                  fontSize: "12pt",
                  fontWeight: "bolder",
                }}
                to="/About"
              >
                WHO WE ARE
              </Link>
        </li>
        <li>
        <Collapse onChange={callback}>
                    <Panel
                      header={
                        <SearchIcon
                          style={{ color: "#017A50", fontSize: "18pt" }}
                        />
                      }
                      key="2"
                    >
                      <p>{text}</p>
                    </Panel>
                  </Collapse>
        </li>
        <li>
        <div style={{ display: "inline" }}>
              <Button
                style={{
                  color: "#017A50",
                  fontSize: "12pt",
                  fontWeight: 600,
                }}
              >
                SIGN IN
              </Button>{" "}
              <Button
                style={{
                  width: "60px",
                  height: "30px",
                  color: "#017A50",
                  background: "#eee",
                  fontSize: "14pt",
                  fontWeight: 800,
                }}
              >
                JOIN
              </Button>
            </div>
        </li>
      </ul>
    </header>
  );
};

const AppNavbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  const menu = (
    <Menu
      onClick={onClick}
      style={{
        padding: "20px",
        fontSize: "14pt",
        borderRaduis: "15%",
        fontWeight: "bolder",
      }}
    >
      <Menu.Item key="1">BRAND IDENTITY</Menu.Item>
      <br />
      <Menu.Item key="2">DIGITAL MARKETING</Menu.Item>
      <br />
      <Menu.Item key="3">SOCIAL MEDIA MARKETING</Menu.Item>
      <br />
      <Menu.Item key="4">DESIGNING</Menu.Item>
      <br />
      <Menu.Item key="5">WEB DEVELOPMENT</Menu.Item>
      <br />
      <Menu.Item key="6">WEB AND MOBILE APPLICATION</Menu.Item>
      <br />
      <Menu.Item key="7">SEARCH ENGINE OPTIMIZATION</Menu.Item>
      <br />
      <Menu.Item key="8">3D MODELING AND INTERIOR DESIGNING</Menu.Item>
      <br />
    </Menu>
  );
  // const [navbar, setNavbar] = useState(false);

  // const changeBackground = () => {
  //   console.log(window.scrollY);
  //   if (window.scrollY >= 66) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };

  // useEffect(() => {
  //   changeBackground();
  //   window.addEventListener('scroll', changeBackground);
  // });
  return (
    //   <nav className="app__navbar">
    //     <div className="app__navbar-logo">
    //       <img src={images.blacklogo} alt="app__logo" />
    //     </div>
    //     <div className="app__navbar-login">
    //       <ul className="app__navbar-links" style={{ marginTop: "16px" }}>
    //         <li className="p__opensans" style={{ color: "#fff" }}>
    //           {" "}
    //           <Link style={{ color: "#fff" }} to="/">
    //             HOME
    //           </Link>{" "}
    //         </li>
    //         <li className="p__opensans" style={{ color: "#fff" }}>
    //           <Link style={{ color: "#fff" }} to="/About">
    //             ABOUT US
    //           </Link>
    //         </li>
    //         <li className="p__opensans" style={{ color: "#fff" }}>
    //             <Dropdown overlay={menu}>
    //           <span style={{ color: "#fff" }}  className="ant-dropdown-link" onClick={e => e.preventDefault()}>
    //             <Link style={{ color: "#fff" }} to="/Services">SERVICES </Link> <ArrowDropDownIcon/>
    //           </span>
    // </Dropdown>
    //         </li>
    //         <li className="p__opensans" style={{ color: "#fff" }}>
    //           <a style={{ color: "#fff" }} href="#awards">
    //             WORKS
    //           </a>
    //         </li>
    //         <li className="p__opensans" style={{ color: "#fff" }}>
    //          <Link style={{ color: "#fff" }} to="/Blog">
    //             BLOGS
    //          </Link>
    //         </li>
    //         <li className="p__opensans" style={{ color: "#fff" }}>
    //           <a style={{ color: "#fff" }} href="#contact">
    //             CONTACT
    //           </a>
    //         </li>
    //       </ul>
    //       <div />

    //       {/* <HamMenu /> */}
    //     </div>
    //     <div className="app__navbar-smallscreen">
    //       <GiHamburgerMenu
    //         color="#fff"
    //         fontSize={27}
    //         onClick={() => setToggleMenu(true)}
    //       />
    //       {toggleMenu && (
    //         <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
    //           <MdOutlineRestaurantMenu
    //             fontSize={27}
    //             className="overlay__close"
    //             onClick={() => setToggleMenu(false)}
    //           />
    //           <ul className="app__navbar-smallscreen_links">
    //             <li>
    //               <a href="#home" onClick={() => setToggleMenu(false)}>
    //                 HOME
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#about" onClick={() => setToggleMenu(false)}>
    //                 ABOUT US
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#menu" onClick={() => setToggleMenu(false)}>
    //                 SERVICES
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#awards" onClick={() => setToggleMenu(false)}>
    //                 WORKS
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#contact" onClick={() => setToggleMenu(false)}>
    //                 BLOGS
    //               </a>
    //             </li>
    //             <li>
    //               <a href="#contact" onClick={() => setToggleMenu(false)}>
    //                 CONTACT
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       )}
    //     </div>
    //   </nav>

    //  <Container  sx={{ display: { xs: "block", md: "none" }}}>
    //       <Row>
    //         <Col>
    //           <Typography
    //             style={{ fontSize: "28pt", fontWeight: "bolder", color: "#fff" }}
    //           >
    //             Want more{" "}
    //             <TypeAnimation
    //               cursor={true}
    //               sequence={[500, "Sales?", 4000, "Growth", 4000, "Connection"]}
    //               wrapper="span"
    //               repeat={Infinity}
    //             />
    //           </Typography>
    //           <Typography
    //             style={{ fontSize: "22pt", fontWeight: "bold", color: "#fff" }}
    //           >
    //             Let us help you..
    //           </Typography>
    //           <Typography
    //             style={{ fontSize: "12pt", fontWeight: "500", color: "#fff" }}
    //           >
    //             <br/>
    //             <br/>
    //             We are the team working since 2017 from Pakistan, and we have a
    //             passionate individuals who are always excited about helping small
    //             to medium sized businesses create impact with thier customers.{" "}
    //           </Typography>
    //         </Col>
    //       </Row>
    //     </Container>

    <>
      <Container
        style={{
          background: `url(${images.topbg})`,
          height: 699,
          backgroundSize: "cover",
          weight: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundOrigin: "content-box",
          // maxHeight:1200
        }}
        maxWidth="xl"
        disableGutters={true}
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <ResponsiveAppBar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <Container>
          <Row>
            <Col>
              <Typography
                style={{
                  fontSize: "36pt",
                  fontWeight: "bolder",
                  color: "#fff",
                }}
              >
                Want more{" "}
                <TypeAnimation
                  cursor={true}
                  sequence={[500, "Sales?", 4000, "Growth", 4000, "Connection"]}
                  wrapper="span"
                  repeat={Infinity}
                />
              </Typography>
              <Typography
                style={{ fontSize: "28pt", fontWeight: "bold", color: "#fff" }}
              >
                Let us help you..
              </Typography>
              <Typography
                style={{ fontSize: "14pt", fontWeight: "500", color: "#fff" }}
              >
                We are the team working since 2017 from Pakistan, and we have a
                passionate individuals who are always excited about helping
                small to medium sized businesses create impact with thier
                customers.{" "}
              </Typography>
            </Col>
            <Col> </Col>
          </Row>
        </Container>
      </Container>
      <Container
        style={{
          // background: `url(${images.lap})`,
          backgroundColor: "#017A50",
          height: 579,
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "left",
          overflow: "hidden",
        }}
        maxWidth="xl"
        disableGutters={true}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <TheNavBar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* <Container> */}
        <Row>
          <Col>
            <Typography
              style={{ fontSize: "15pt", fontWeight: "bolder", color: "#fff" }}
            >
              Want more{" "}
              <TypeAnimation
                cursor={true}
                sequence={[500, "Sales?", 4000, "Growth", 4000, "Connection"]}
                wrapper="span"
                repeat={Infinity}
              />
            </Typography>
            <Typography
              style={{ fontSize: "12pt", fontWeight: "bold", color: "#fff" }}
            >
              Let us help you..
            </Typography>
            <br />
            <br />
            <Typography
              style={{ fontSize: "10pt", fontWeight: "500", color: "#fff" }}
            >
              We are the team working since 2017 from Pakistan, and we have a
              passionate individuals who are always excited about helping small
              to medium sized businesses create impact with thier customers.{" "}
            </Typography>
          </Col>
          <Col>
            <img src={images.lap} />{" "}
          </Col>
        </Row>
      </Container>

      {/* </Container> */}
    </>
  );
};

export default AppNavbar;
