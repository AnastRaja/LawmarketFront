import React, {useEffect, useRef, useState} from "react";
import Header from "../../Header/Header";
import XDC from "../../../assets/image/balanceXDC.png";
import brand_logo from "../../../assets/image/balanceLBT.png";
import profileImage from "../../../assets/image/person2.webp"; // Add your profile image
import TemplateSlider from "../../components/Templates";
import XIcon from "@mui/icons-material/X";
import "../LegalTemplates/style";
import { getWeb3, keys, } from "../../../core/helper/getWeb3";
import { useNavigate } from "react-router-dom";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import {
  Pen,
  Mail,
  MapPin,
  Phone,
  Share2,
  Upload,
  FileBadge,
  Wallet2,
  Twitter,
  Facebook,
  Instagram,
  MessageCircleMoreIcon,
} from "lucide-react";

function Profile() {

  const apiUrl = 'https://marketapi.lawblocks.io'
    
  useEffect(() => {
    getBalanse()
  },[])

  const [Xdc_balance, setXdc_balance] = useState(0)
  const fileInputRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [textValue, setTextValue] = React.useState("");
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const [advateDet, setadvateDet] = useState({});
  const [loginType, setloginType] = useState("client");
  const [advocateID, setadvocateID] = useState(undefined);
  const [requestOpen, setrequestOpen] = useState(false);
  const [subject, setsubject] = useState("");
  const [message, setMessage] = useState("");
  const [subjErr, setSubjErr] = useState(false);
  const [messErr, setMessErr] = useState(false);
  const [commErr, setcommErr] = useState(true);
  const [requestStatus, setrequestStatus] = useState("0");
  const [getConn, setgetConn] = useState([]);
  const [enableProf, setenableProf] = useState(false);
  const [myDoce, setMyDoc] = useState([]);
  const [showDocs, setshowDocs] = useState(true);
  const [MyCreatedDoc, setMyCreatedDoc] = useState([]);
  const [enableDocuments, setenableDocuments] = useState(false);
  const [connectionMY, setconnectionMY] = useState(false);
  const [sendloader, setsendloader] = useState(false);
  const [Xdc_address, setXdc_address] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    // setloginType(localStorage.getItem("type"));
    if (window.location.href.split("?")[1] != undefined) {
      var getID = window.location.href.split("?")[1];
      setadvocateID(getID);
      getIdByAdvocate();
      if (localStorage.getItem("decodes_advocate")) {
        if (localStorage.getItem("decodes_advocate").split("*")[0] == getID) {
          getConnections();
          setenableDocuments(true);
        }
      }
    } else {
      if (localStorage.getItem("type") == "advocate") {
        getLawerDetails();
        getConnections();
        getMyDocs();
        getMyCreated();
        setenableDocuments(true);
      }
    }
    if (localStorage.getItem("type") == "client") {
      if (
        window.location.href.split("?")[1] == undefined ||
        window.location.href.split("?")[1] == null
      ) {
        navigate("/");
      } else {
      }
    }

    getRequest();
    getBalanse()
  }, [0]);



  const getBalanse = async () => {
    var web3 =await getWeb3();
    var account = web3?.eth?.accounts?.privateKeyToAccount(keys());
    web3.eth.accounts.wallet.add(account);
   var address = web3.eth.accounts.wallet[0].address;
    setXdc_address('xdc' + String(address).slice(2))
    if (address) {
      setXdc_balance(web3.utils.fromWei(
        // Balance is in wei
        Number(await web3.eth.getBalance(address)),
        "ether"
    ));
    }
}

  const getIdByAdvocate = async () => {
    try {
      if (window.location.href.split("?")[1] != undefined) {
        var getID = window.location.href.split("?")[1];
        if (localStorage.getItem("type") == "advocate") {
          if (getID == localStorage.getItem("decodes_advocate").split("*")[0]) {
            setenableProf(true);
          } else {
            setenableProf(false);
          }
        }

        setadvocateID(getID);
        var obj = {
          id: getID,
        };
        var data = {
          apiUrl: apiService.getAdvProfileID,
          payload: obj,
        };
        var resp = await postMethod(data);
        if (resp.status == true) {
          // toast(resp.Message)
          setadvateDet(resp.Message);
        } else {
          // toast(resp.Message)
          setadvateDet({});
        }
      }
    } catch (error) {
    }
  };

  const getLawerDetails = async (e) => {
    try {
      setenableProf(true);
      var data = {
        apiUrl: apiService.getAdvProfile,
      };
      var resp = await getMethod(data);
      if (resp.status == true) {
        setadvateDet(resp.Message);
      } else {
        setadvateDet({});
      }
    } catch (error) {
    }
  };

  const request = async (e) => {
    try {
      if(requestOpen == false){
        setrequestOpen(true);
      }else{
        setrequestOpen(false);
      }
    } catch (error) {
    }
  };

  const sendMessage = async (e) => {
    try {
      if (subject == "") {
        setSubjErr(true);
      } else {
        setSubjErr(false);
      }

      if (message == "") {
        setMessErr(true);
      } else {
        setMessErr(false);
      }
      if (subject != "" && message != "") {
        var obj = {
          id: advocateID,
          message: message,
          subject: subject,
        };
        var data = {
          apiUrl: apiService.request,
          payload: obj,
        };
        setsendloader(true);
        var resp = await postMethod(data);
        setsendloader(false);
        if (resp.status) {
          toast(resp.Message);
          setrequestOpen(false);
          getRequest();
        } else {
          toast(resp.Message);
        }
      } else {
        return false;
      }
    } catch (error) {
    }
  };

  const getRequest = async (e) => {
    try {
      var obj = {
        advocateID: advocateIDRef.current,
      };
      var data = {
        apiUrl: apiService.getRequest,
        payload: obj,
      };
      var resp = await postMethod(data);
      if (resp) {
        setrequestStatus(resp.Message);
      } else {
        setrequestStatus("0");
      }
    } catch (error) {
    }
  };

  const getConnections = async (e) => {
    try {
      var data = {
        apiUrl: apiService.getConnections,
      };


      var resp = await getMethod(data);
      if (resp.status == true) {
        setgetConn(resp.Message);
      } else {
        setgetConn([]);
      }
    } catch (error) {
    }
  };

  const advocateAction = async (type, item) => {
    try {
      var obj = {
        clientId: item.clientId,
        status: type,
      };
      var data = {
        apiUrl: apiService.advocateAction,
        payload: obj,
      };
      var resp = await postMethod(data);
      if (resp.status) {
        toast(resp.Message);
        // setrequestOpen(false);
        getRequest();
        getConnections();
      } else {
        toast(resp.Message);
      }
    } catch (error) {}
  };

  const goToProfile = async (id) => {
    try {
      navigate("/clientProfilers?" + id);
    } catch (error) {
    }
  };

  const getMyDocs = async (e) => {
    try {
      var data = {
        apiUrl: apiService.getMyDocuments,
      };
      var resp = await getMethod(data);
      if (resp.status == true) {
        setMyDoc(resp.Message);
      } else {
        setMyDoc([]);
      }
    } catch (error) {
    }
  };

  const getMyCreated = async (e) => {
    try {
      var data = {
        apiUrl: apiService.getMyCreateDocs,
      };
      var resp = await getMethod(data);
      if (resp.status == true) {
        setMyCreatedDoc(resp.Message);
      } else {
        setMyCreatedDoc([]);
      }
    } catch (error) {
    }
  };

  const taber = async (type) => {
    try {
      if (type == "myDocs") {
        setshowDocs(true);
        setconnectionMY(false);
      }
      if (type == "connections") {
        setshowDocs(false);
        setconnectionMY(true);
      }
      if (type == "purchase") {
        setshowDocs(false);
        setconnectionMY(false);
      }
      // var typeOfValue = type == "myDocs" ? setshowDocs(true) :  type=="connections" ? setconnectionMY(true) : setshowDocs(false);
    } catch (error) {
    }
  };

  return (
    <>
      <Header />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Request</DialogTitle>
        <DialogContent>
          <div className="row">
            <div className="col-md-12 mt-3">
              <label className="mb-3">Subject </label>
              <TextField
                fullWidth
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                placeholder="Subject"
                className="input-styles"
              />
            </div>
            <div className="col-md-12 mt-3">
              <label className="mb-3">Message </label>
              <TextField
                fullWidth
                multiline
                rows={7}
                value={textValue}
                onChange={(e) => setTextValue(e.target.value)}
                placeholder="Message"
                className="input-styles"
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={handleClose}
            className="cancelbutton"
          >
            Cancel
          </Button>
          <Button variant="contained" className="gradientButton">
            Send
          </Button>
        </DialogActions>
      </Dialog>
      <div className="top-padding"></div>
      <div className="profile-background">
        <div className="profile_balance">
          <div className="balanceChild">
            <img src={XDC} alt="balance" />
            <p>{Number(Xdc_balance).toFixed(8)} XDC</p>
          </div>
          <div className="balanceChild">
            <img src={brand_logo} alt="balance" />
            <p>0.01064015 LBT</p>
          </div>
        </div>
      </div>
      <div className="profile_section">
        <div className="profile_image_container" onClick={handleImageClick}>
          <img src={profileImage} alt="Profile" className="profile_image" />
          <div className="pen_icon">
            <Pen size={15} />
          </div>
          <input type="file" ref={fileInputRef} style={{display: "none"}} />
        </div>
      </div>
      <div className="profile_info">
        <div className="Profile_name">
          <h3>Pavi Prakash</h3>
          <div className="dateils_flex mb-2">
            <p>
              <Mail />
              paviprakash.dev@gmail.com
            </p>
            <p>
              <MapPin />
              India, Maharashtra
            </p>
            <p>
              <Phone />
              +91 90909-090
            </p>
          </div>
          <div className="dateils_flex mb-2">
            <p>Expertise: Criminal Lawyer</p>
            <p>Experience: 8 Years</p>
          </div>
          <div className="dateils_flex mb-2">
            <p>
              <Share2 />
              Shared documents: 0
            </p>
            <p>
              <Upload />
              Uploaded documents: 3
            </p>
            <p>
              <FileBadge />
              Saved documents: 1
            </p>
          </div>
        </div>
        <div className="socila_wallwr">
          <p>
            <Wallet2 />
            Wallet Address:{" "}
            <span>xdcdaABCa195FA699B48180IbAaE485BaE0250242DF</span>
          </p>
          <div className="button_social">
            <a href="">
              <XIcon />
            </a>
            <a href="">
              <Facebook />
            </a>
            <a href="">
              <Instagram />
            </a>
            <button onClick={handleClickOpen}>
              <MessageCircleMoreIcon />
              Request
            </button>
          </div>
        </div>
      </div>{" "}
      <div className="container-custom">
        <div className="tab_card bordernon tabs_profile">
          <ul className="nav nav-tabs tab_title" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home-tab-pane"
                type="button"
                role="tab"
                aria-controls="home-tab-pane"
                aria-selected="true"
              >
                Purchased Documents
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
              >
                My Documents
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active p-0 pt-5"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
            >
              <TemplateSlider />
            </div>
            <div
              className="tab-pane fade p-0 pt-5"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex="0"
            >
              <TemplateSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
