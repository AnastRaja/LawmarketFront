import Header from "./Header/Header";
import Faq from "./components/faq";
import effectImage from "../assets/image/landing-effect1.webp";
import googleImage from "../assets/image/google.webp";
import Asset1 from "../assets/image/asset1.webp";
import Assetdark1 from "../assets/image/asset1-dark.webp";
import Asset2 from "../assets/image/asset2.webp";
import Assetdark2 from "../assets/image/asset2-dark.webp";
import Asset3 from "../assets/image/asset3.webp";
import Assetdark3 from "../assets/image/asset3-dark.webp";
import Asset4 from "../assets/image/asset4.webp";
import Assetdark4 from "../assets/image/asset4-dark.webp";
import Asset5 from "../assets/image/asset5.webp";
import Assetdark5 from "../assets/image/asset5-dark.webp";
import Asset6 from "../assets/image/asset6.webp";
import Assetdark6 from "../assets/image/asset6-dark.webp";
import Asset7 from "../assets/image/asset7.webp";
import Assetdark7 from "../assets/image/asset7-dark.webp";
import Asset8 from "../assets/image/asset8.webp";
import Assetdark8 from "../assets/image/asset8-dark.webp";
import Asset9 from "../assets/image/asset9.webp";
import Assetdark9 from "../assets/image/asset9-dark.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Contract from "../assets/image/contract-asset.webp";
import DarkContract from "../assets/image/contract-asset-dark.webp";
import User1 from "../assets/image/user1.webp";
import User2 from "../assets/image/user2.webp";
import User3 from "../assets/image/user3.webp";
import Faqeffect from "../assets/image/faq-effect.webp";
import { Footer } from "./Footer/Footer";
import TemplateSlider from "../pages/components/slider";
import SliderEffect from "../assets/image/slider-effect.webp";
import Logdarkeffect from "../assets/image/log-dark-effect.webp";
import Panel from "../pages/components/panel";
import {  GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1450,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Login() {
  return (
    <div className="landing-main">
      <div>
        <Header />
      </div>
      <section className="hero-section">
        <div className="landing-effect">
          <img src={effectImage} alt="Header" />
        </div>
        <div className="container-custom">
          <div className="hero_content">
            <h1>Law Blocks AI</h1>
            <p>
              Simplified Legal Complexities, Powered by AI. Clarify and Solve
              all Your Legal Barriers with Law Blocks AI, Sigup Now
            </p>
            <div className="input-width">
              <input type="email" placeholder="Enter your email Id" />
              <button className="log-btn">Login</button>
            </div>
            <div className="logo-dark-effect">
              <img src={Logdarkeffect} alt="Header" />
            </div>
            <p className="or">OR</p>

            <button className="google-btn">
              {/* <img src={googleImage} alt="google" width={"25px"} /> */}
              <GoogleLogin
                              onSuccess={credentialResponse => {
                                console.log(credentialResponse);
                              }}
                              onError={() => {
                                console.log('Login Failed');
                              }}
                              // ux_mode="popup" // Try this for live environment issues
                            />
              {/* Sign in with Google */}
            </button>
          </div>
        </div>
      </section>
      <section className="slider-section">
        <Slider {...settings}>
          <div data-aos="fade-left" data-aos-duration="500">
            <img src={Asset1} alt="assets" className="dark-img" />
            <img src={Assetdark1} alt="assets" className="light-img" />
          </div>
          <div data-aos="fade-left" data-aos-duration="2000">
            <img src={Asset2} alt="assets" className="dark-img" />
            <img src={Assetdark2} alt="assets" className="light-img" />
          </div>
          <div data-aos="fade-left" data-aos-duration="2000">
            <img src={Asset3} alt="assets" className="dark-img" />
            <img src={Assetdark3} alt="assets" className="light-img" />
          </div>
          <div data-aos="fade-left" data-aos-duration="2000">
            <img src={Asset4} alt="assets" className="dark-img" />
            <img src={Assetdark4} alt="assets" className="light-img" />
          </div>
          <div data-aos="fade-left" data-aos-duration="2000">
            <img src={Asset5} alt="assets" className="dark-img" />
            <img src={Assetdark5} alt="assets" className="light-img" />
          </div>
          <div data-aos="fade-left" data-aos-duration="2000">
            <img src={Asset6} alt="assets" className="dark-img" />
            <img src={Assetdark6} alt="assets" className="light-img" />
          </div>
          <div data-aos="fade-left" data-aos-duration="2000">
            <img src={Asset7} alt="assets" className="dark-img" />
            <img src={Assetdark7} alt="assets" className="light-img" />
          </div>
          <div data-aos="fade-left" data-aos-duration="2000">
            <img src={Asset8} alt="assets" className="dark-img" />
            <img src={Assetdark8} alt="assets" className="light-img" />
          </div>
          <div data-aos="fade-left" data-aos-duration="2000">
            <img src={Asset9} alt="assets" className="dark-img" />
            <img src={Assetdark9} alt="assets" className="light-img" />
          </div>
        </Slider>
      </section>
      <section className="panel-section">
        <Panel />
      </section>
      <section className="template-slider-section">
        <div className="slider-effect">
          <img src={SliderEffect} alt="effect" />
        </div>
        <div className="container-custom">
          <div className="panel-content contract-content panel-bottom">
            <div>
              <h2>Legal Template</h2>
              <p>
                Law Blocks AI offers ready-made legal templates tailored to your
                needs, saving time and ensuring accuracy. Easily customize
                agreements with AI assistance for quick, professional results.
              </p>
            </div>
          </div>
          <TemplateSlider />
        </div>
      </section>
      <section className="contract-section">
        <div className="container-custom">
          <div className="panel-content contract-content">
            <div>
              <h2>How Smart Legal Contract Works</h2>
              <p>
                Law Blocks is a one window blockchain-based ecosystem for
                creating, keeping records of smart legal contracts.
              </p>
              <img
                src={Contract}
                alt="Header"
                width={"100%"}
                className="dark-img"
              />
              <img
                src={DarkContract}
                alt="Header"
                width={"100%"}
                className="light-img"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="contract-section about-us">
        <div className="container-custom">
          <div className="panel-content contract-content panel-content1">
            <div>
              <h2> Our happy Users says about us</h2>
              <p className="user-p">
                10k+ User those who already tried our services.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="about-card">
                <div className="ratings">
                  <div>
                    <img
                      src={User1}
                      alt="Header"
                      width={"80px"}
                      className="user-top"
                    />
                  </div>
                  <div>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
                <div className="about-content">
                  I had a complex dispute that needed resolution, and Law Blocks
                  AI came to the rescue. Their blockchain-powered arbitration
                  process provided a fair, transparent, and expedited
                  resolution.
                </div>
                <div className="about-name">
                  <h4>
                    Kyle Roberts DVM <br />
                    <span>Attorney</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-card">
                <div className="ratings">
                  <div>
                    <img
                      src={User2}
                      alt="Header"
                      width={"80px"}
                      className="user-top"
                    />
                  </div>
                  <div>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
                <div className="about-content">
                  Law Blocks has completely transformed how I approach dispute
                  resolution. With their seamless integration of smart contracts
                  and blockchain technology, the process has become faster, more
                  transparent, and cost-effective. Highly recommended!
                </div>
                <div className="about-name">
                  <h4>
                    Vaibhav Shashikan
                    <br />
                    <span>Attorney</span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-card">
                <div className="ratings">
                  <div>
                    <img
                      src={User3}
                      alt="Header"
                      width={"80px"}
                      className="user-top"
                    />
                  </div>
                  <div>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
                <div className="about-content">
                  I had a complex dispute that needed resolution, and Law Blocks
                  came to the rescue. Their blockchain-powered arbitration
                  process provided a fair, transparent, and expedited
                  resolution.
                </div>
                <div className="about-name">
                  <h4>
                    Stephen Brekke <br />
                    <span>Attorney</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section">
        <div>
          <img src={Faqeffect} alt="faq effect" className="faq-effect" />
        </div>
        <Faq />
      </section>
      <section className="footer-section">
        <Footer />
      </section>
    </div>
  );
}

export default Login;
