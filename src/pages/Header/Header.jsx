import React, {useState} from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  ListItem,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link, useNavigate} from "react-router-dom";
import headerImage from "../../assets/image/logo.webp";
import Darkheader from "../../assets/image/dark-logo.webp";
import {IconBrandSuperhuman, IconBrightnessUp, IconPasswordUser, IconPhoto, IconProgress, IconUser} from "@tabler/icons-react";
import {IconMoon} from "@tabler/icons-react";
import {IconAlignJustified} from "@tabler/icons-react";
import {
  IconShoppingCart,
  IconFileTypeDoc,
  IconTrash,
} from "@tabler/icons-react";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBarItems: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  mobileMenuButton: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  drawerIcon: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  drawer: {
    width: 300,
  },
}));

const Header = () => {

  const handelModeClick = () => {
    var body = document.body;

    body.classList.add("light");
    localStorage.setItem("theme", "light");
  };
  const handelLightMode = () => {
    var body = document.body;

    body.classList.remove("light");
    localStorage.setItem("theme", "dark");
  };
  // let theme = document.body.className;
  // console.log({ theme });
  const navigate = useNavigate();
  const classes = useStyles();
  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };
  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const isLightMode = document.body.classList.contains("light");

  // Detect screen size for responsive drawer width
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const nav_page = () => {
    navigate("/register");
  };
  const handleCartDrawerOpen = () => {
    setCartDrawerOpen(true);
  };
  const handleprofile = () => {
    navigate("/profile");
  };
  const handleCartDrawerClose = () => {
    setCartDrawerOpen(false);
  };

  const navigatebar = (value) => {
    navigate(value)
  }
  return (
    <>
      <main className="law_header">
        <header className="scrolled">
          <div className="">
            <div className="header_new_mega">
              <div className={`${classes.root} `}>
                <AppBar position="static">
                  <Toolbar className="container-fluid logo_new_sectio">
                    <Typography variant="h6" className={classes.title}>
                      <div className="d-flex justify-content-between align-items-center">
                        <Link to="/" className="logo-brand">
                          <img
                            src={headerImage}
                            alt="Header"
                            style={{width: "150px"}}
                          />
                        </Link>
                        <Link to="/" className="logo-brand-dark">
                          <img
                            src={Darkheader}
                            alt="Header"
                            style={{width: "150px"}}
                          />
                        </Link>
                        <div className={`menu_new_typr ${classes.appBarItems}`}>
                          <div className="law_nav_items">
                            <Link
                              to="/contractpage"
                              color="inherit"
                              className="contact_button"
                            >
                              Create Document using AI
                            </Link>
                            {/* <Link
                              to="/contractpage"
                              color="inherit"
                              className="contact_button"
                            >
                              Upload Contracts
                            </Link>{" "} */}
                            <Link
                              to="/chat"
                              color="inherit"
                              className="contact_button"
                            >
                              AI Chat
                            </Link>{" "}
                            <Link
                              to="/legaltemplates"
                              color="inherit"
                              className="contact_button"
                            >
                              Legal Documents
                            </Link>
                            <Link
                              to="/digitalDash"
                              color="inherit"
                              className="contact_button"
                            >
                              Digital Signature
                            </Link>
                            <Link
                              to="/arbitrators"
                              color="inherit"
                              className="contact_button"
                            >
                              Arbitrators & Mediators
                            </Link>
                            {/* <Link
                              to="/mediators"
                              color="inherit"
                              className="contact_button"
                            >
                              Mediators
                            </Link> */}
                          </div>
                        </div>
                      </div>
                    </Typography>

                    <div className={`menu_new_typr ${classes.appBarItems}`}>
                      <Button className="nav-btn login-btn" onClick={nav_page}>
                        Register
                      </Button>
                    </div>
                    <IconButton
                      color="inherit"
                      onClick={handleCartDrawerOpen}
                      className="cart_button"
                    >
                      <IconShoppingCart stroke={2} />
                    </IconButton>
                    
                    <IconBrightnessUp stroke={2} onClick={handelModeClick} />
                    
                    <IconMoon stroke={2} onClick={handelLightMode} />
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      className={` ml-0 p-0 ${classes.mobileMenuButton} ${classes.drawerIcon}`}
                    >
                      {/* <MenuIcon onClick={handleMobileMenuOpen} className="" /> */}
                      <IconAlignJustified
                        stroke={2}
                        onClick={handleMobileMenuOpen}
                        className="light-menu-icon"
                      />
                      <IconAlignJustified
                        stroke={2}
                        onClick={handleMobileMenuOpen}
                        className="dark-menu-icon"
                      />
                    </IconButton>
                    <IconButton
                      color="inherit"
                      onClick={handleprofile}
                      className="cart_button"
                    >
                      <IconUser stroke={2} />
                    </IconButton>
                  </Toolbar>
                </AppBar>

                <Drawer
                  anchor="right"
                  open={cartDrawerOpen}
                  onClose={handleCartDrawerClose}
                  className={classes.drawer}
                >
                  <div
                    className={classes.mobileMenu}
                    style={{
                      width: isMobile ? "270px" : "400px",
                      padding: "16px",
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: isLightMode ? "#fff" : "#000",
                      color: isLightMode ? "#000" : "#fff",
                      height: "100vh",
                    }}
                  >
                    <Typography variant="h6">Your Cart</Typography>
                    {/* Cart items or content here */}
                    <div className="scroll_cart">
                      <div className="cart-item-container">
                        <div className="cart-item">
                          <div className="main_cart_item">
                            <div className="cart-item-image">
                              <IconFileTypeDoc stroke={1} size={26} />
                            </div>
                            <div className="cart-item-details">
                              <p>Document Name</p>
                              <span>000.1LBT</span>
                            </div>
                          </div>
                          <Button className="cart_bin">
                            <IconTrash size={20} />
                          </Button>
                        </div>
                        <div className="cart-item">
                          <div className="main_cart_item">
                            <div className="cart-item-image">
                              <IconFileTypeDoc stroke={1} size={26} />
                            </div>
                            <div className="cart-item-details">
                              <p>Document Name</p>
                              <span>000.1LBT</span>
                            </div>
                          </div>
                          <Button className="cart_bin">
                            <IconTrash size={20} />
                          </Button>
                        </div>
                      </div>
                      <div className="Cart_footer">
                        <Button className="nav-btn login-btn padding_button">
                          (2) Checkout
                        </Button>
                      </div>
                    </div>
                  </div>
                </Drawer>
                <Drawer
                  anchor="left"
                  open={mobileMenuOpen}
                  className={classes.drawer}
                  onClose={() => handleMobileMenuClose(false)}
                >
                  <div className={classes.mobileMenu}>
                    <div className="logo_new_sectio mobile_menu_icon">
                      <Link to="/" className="logo-brand">
                        <img
                          src={headerImage}
                          alt="Header"
                          style={{width: "150px"}}
                        />
                      </Link>
                      <Link to="/" className="logo-brand-dark">
                        <img
                          src={Darkheader}
                          alt="Header"
                          style={{width: "150px"}}
                        />
                      </Link>
                    </div>
                    <div className="menu_statis">
                      <ListItem button className="drawa">
                        <a href="#home">Create AI template</a>
                      </ListItem>
                      <ListItem button className="drawa">
                        <a href="#feature">Arbitration</a>
                      </ListItem>
                      <ListItem button className="drawa ">
                        <a href="#overview">Mediation</a>
                      </ListItem>

                      <ListItem button className="drawa ">
                        <a href="#tutorial">Upload Contract</a>
                      </ListItem>
                      <ListItem button className="drawa ">
                        <a href="#tutorial">Digital Sign</a>
                      </ListItem>
                      <ListItem button className="drawa ">
                        <a href="#tutorial">Legal Document</a>
                      </ListItem>

                      <ListItem button className="drawa ">
                        <Button
                          className="nav-btn login-btn"
                          onClick={() => navigate("/register")}
                        >
                          Register
                        </Button>
                      </ListItem>
                    </div>
                  </div>
                </Drawer>
              </div>
            </div>
          </div>
        </header>
      </main>
    </>
  );
};

export default Header;
