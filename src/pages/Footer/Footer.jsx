import React from "react";
import headerImage from "../../assets/image/logo.webp";
import {Link} from "react-router-dom";
import {IconBrandTwitterFilled} from "@tabler/icons-react";
import {IconBrandLinkedinFilled} from "@tabler/icons-react";
import {IconBrandTelegram} from "@tabler/icons-react";
import {IconBrandYoutubeFilled} from "@tabler/icons-react";
import {IconBrandGmail} from "@tabler/icons-react";
import {IconBrandGithubFilled} from "@tabler/icons-react";
import {IconBrandReddit} from "@tabler/icons-react";
import {IconBrandDiscord} from "@tabler/icons-react";
import XIcon from "@mui/icons-material/X";

export const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="col-lg-8">
            <div className="footer-content">
              <img src={headerImage} alt="Header" style={{width: "180px"}} />
              <p>
                Take the stress out of handling legal challenges with Law Blocks
                AI. Our platform combines the power of blockchain and AI to make
                your legal processes secure, clear, and easy. Built for experts
                like you, we're here to help you navigate the future of law with
                confidence.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="footer-step">
            <h4>STEP BY STEP GUIDES</h4>
            <ul>
              <li>
                {" "}
                <Link to="" className="step-text">
                  Login
                </Link>
              </li>
              <li>
                <Link to="" className="step-text">
                  Create Template with AI
                </Link>
              </li>
              <li>
                <Link to="" className="step-text">
                  Upload Contract
                </Link>
              </li>
              <li>
                {" "}
                <Link to="" className="step-text">
                  AI Chat
                </Link>
              </li>
              <li>
                {" "}
                <Link to="" className="step-text">
                  Legal Documents
                </Link>
              </li>
              <li>
                <Link to="" className="step-text">
                  Digital Signature
                </Link>
              </li>
              <li>
                {" "}
                <Link to="" className="step-text">
                  Arbitration & Mediation
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="footer-step">
            <h4>VIRTUAL ARBITRATION HEARING</h4>
            <ul>
              <li>
                {" "}
                <Link to="" className="step-text">
                  VAH FAQ's
                </Link>
              </li>
            </ul>
            <h4 className="mt-4">CONTACT US:</h4>
            <ul>
              <li>
                <Link to="" className="step-text">
                  Email : info@lawblocks.io
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="media-links">
        <ul>
          <li>
            {" "}
            <Link to="" className="step-text">
              <XIcon />
            </Link>
          </li>
          <li>
            <Link to="" className="step-text">
              <IconBrandLinkedinFilled />
            </Link>
          </li>
          <li>
            <Link to="" className="step-text">
              <IconBrandTelegram stroke={2} />
            </Link>
          </li>
          <li>
            {" "}
            <Link to="" className="step-text">
              <IconBrandYoutubeFilled />
            </Link>
          </li>
          <li>
            {" "}
            <Link to="" className="step-text">
              <IconBrandGmail stroke={2} />
            </Link>
          </li>
          <li>
            <Link to="" className="step-text">
              <IconBrandGithubFilled />
            </Link>
          </li>
          <li>
            {" "}
            <Link to="" className="step-text">
              <IconBrandReddit stroke={2} />
            </Link>
          </li>
          <li>
            <Link to="" className="step-text">
              <IconBrandDiscord stroke={2} />
            </Link>
          </li>
        </ul>
      </div>
      <div className="terms">
        <p>Terms and conditions </p>
        <p>Privacy policy</p>
      </div>
    </div>
  );
};
