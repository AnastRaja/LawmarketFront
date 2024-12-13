import React from "react";
import Header from "./Header/Header";
import Tabs from "./components/tabs";
import effectImage from "../assets/image/effect.webp";

function Login() {
  return (
    <div className="login-main">
      <div>
        <Header />
      </div>
      <div className="container">
        <div className="paddings">
          <div className="login_content">
            <h2>Create account</h2>
            <p>
              Register to connect with trusted attorneys or find legal support.
              Choose your role to get started—whether you're seeking legal
              assistance or offering your expertise.
            </p>
            <div className="effect">
              <img src={effectImage} alt="Header" style={{ width: "100%" }} />
            </div>
          </div>

          <div className="d-flex justify-content-center row">
            <div className="w-full col-sm-12 col-md-12 col-lg-6 col-xl-5">
              <Tabs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
