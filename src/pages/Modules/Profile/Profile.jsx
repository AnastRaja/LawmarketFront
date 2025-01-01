import React, {useRef} from "react";
import Header from "../../Header/Header";
import XDC from "../../../assets/image/balanceXDC.png";
import brand_logo from "../../../assets/image/balanceLBT.png";
import profileImage from "../../../assets/image/person2.webp"; // Add your profile image
import TemplateSlider from "../../components/Templates";
import XIcon from "@mui/icons-material/X";

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
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <Header />
      <div className="top-padding"></div>
      <div className="profile-background">
        <div className="profile_balance">
          <div className="balanceChild">
            <img src={XDC} alt="balance" />
            <p>0.01064015 XDC</p>
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
          <h3>pavi prakash</h3>
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
            <p>Expertise: 15</p>
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
            <button>
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
