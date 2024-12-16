import React, {useState} from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  ListItem,
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link, useNavigate} from "react-router-dom";
import headerImage from "../../assets/image/logo.webp";
import Darkheader from "../../assets/image/dark-logo.webp";
import {IconBrightnessUp} from "@tabler/icons-react";
import {IconMoon} from "@tabler/icons-react";
import {IconAlignJustified} from "@tabler/icons-react";

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
    marginRight: theme.spacing(2),
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
  const nav_page = () => {
    navigate("/login");
  };

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
                            <a
                              href="#template"
                              color="inherit"
                              className="contact_button"
                            >
                              Create Document using AI
                            </a>
                            <a
                              href="/contractpage"
                              color="inherit"
                              className="contact_button"
                            >
                              Upload Contracts
                            </a>{" "}
                            <a
                              href="/chat"
                              color="inherit"
                              className="contact_button"
                            >
                              AI Chat
                            </a>{" "}
                            <a
                              href="#tutorial"
                              color="inherit"
                              className="contact_button"
                            >
                              Legal Documents
                            </a>
                            <a
                              href="#tutorial"
                              color="inherit"
                              className="contact_button"
                            >
                              Digital Signature
                            </a>
                            <a
                              href="#tutorial"
                              color="inherit"
                              className="contact_button"
                            >
                              Arbitrators
                            </a>
                            <a
                              href="#tutorial"
                              color="inherit"
                              className="contact_button"
                            >
                              Mediators
                            </a>
                          </div>
                        </div>
                      </div>
                    </Typography>

                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      className={` m-0 p-0 ${classes.mobileMenuButton} ${classes.drawerIcon}`}
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
                    <div className={`menu_new_typr ${classes.appBarItems}`}>
                      <Button className="nav-btn login-btn" onClick={nav_page}>
                        Login
                      </Button>
                    </div>
                    <IconBrightnessUp stroke={2} onClick={handelModeClick} />
                    <IconMoon stroke={2} onClick={handelLightMode} />
                  </Toolbar>
                </AppBar>
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
                          onClick={() => navigate("/login")}
                        >
                          Login
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
