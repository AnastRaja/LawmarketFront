import React from "react";
import copy from "../../assets/image/copy-icon.webp";
import Person1 from "../../assets/image/person.webp";
import Person2 from "../../assets/image/person2.webp";
import Person3 from "../../assets/image/person3.webp";
import Person4 from "../../assets/image/person4.webp";
import Person5 from "../../assets/image/person5.webp";
import Person6 from "../../assets/image/person6.webp";
import Person7 from "../../assets/image/person7.webp";
import Person8 from "../../assets/image/person8.webp";
import Inputeffect from "../../assets/image/input-effect.webp";


function Panel() {
  return (
    <div>
      {" "}
      <div className="container-custom">
        <div className="address-content">
          <h2>LBT Smart Contract Address</h2>
          <div className="address-input">
            <input
              type="text"
              placeholder="xdc05940b2df33d6371201e7ae099ced4c363855dfe"
              readOnly
            />
            <div className="copy-icons">
              {" "}
              <img src={copy} alt="icon" />
            </div>
          </div>
          <div className="input-effect">
            <img src={Inputeffect} alt="effect" />
          </div>
        </div>
        <div className="panel-content panel-content1">
          <div className="panel-w">
            <h2>Legal panel</h2>
            <p>
            Explore our team of experienced attorneys with expertise in various legal domains. We  connect you with trusted professionals to provide reliable advice and effective solutions tailored to your needs.
            </p>
          </div>
          <div>
            {" "}
            <button className="google-btn">View more</button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="panel-card">
              <div>
                <img src={Person1} alt="person" />
              </div>
              <div>
                <h3>Vipin Dubey</h3>
                <div className="panel-card-content">
                  <p>
                    {" "}
                    <i className="ri-auction-fill"></i> 10 Years
                  </p>
                  <p>
                    <i className="ri-map-pin-2-line"></i> United States
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="panel-card">
              <div>
                <img src={Person2} alt="person" />
              </div>
              <div>
                <h3>Martin Schleifer</h3>
                <div className="panel-card-content">
                  <p>
                    {" "}
                    <i className="ri-auction-fill"></i> 10 Years
                  </p>
                  <p>
                    <i className="ri-map-pin-2-line"></i> Canada
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="panel-card">
              <div>
                <img src={Person3} alt="person" />
              </div>
              <div>
                <h3>Justin Press</h3>
                <div className="panel-card-content">
                  <p>
                    {" "}
                    <i className="ri-auction-fill"></i> 10 Years
                  </p>
                  <p>
                    <i className="ri-map-pin-2-line"></i> Germany
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="panel-card">
              <div>
                <img src={Person4} alt="person" />
              </div>
              <div>
                <h3>Randy Gouse</h3>
                <div className="panel-card-content">
                  <p>
                    {" "}
                    <i className="ri-auction-fill"></i> 10 Years
                  </p>
                  <p>
                    <i className="ri-map-pin-2-line"></i> France
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="panel-card top-margin-card">
              <div>
                <img src={Person5} alt="person" />
              </div>
              <div>
                <h3>Terry Lipshutz</h3>
                <div className="panel-card-content">
                  <p>
                    {" "}
                    <i className="ri-auction-fill"></i> 10 Years
                  </p>
                  <p>
                    <i className="ri-map-pin-2-line"></i> Australia
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="panel-card top-margin-card">
              <div>
                <img src={Person6} alt="person" />
              </div>
              <div>
                <h3>Martin Rhiel Madsen</h3>
                <div className="panel-card-content">
                  <p>
                    {" "}
                    <i className="ri-auction-fill"></i> 10 Years
                  </p>
                  <p>
                    <i className="ri-map-pin-2-line"></i> Brazil
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="panel-card top-margin-card">
              <div>
                <img src={Person7} alt="person" />
              </div>
              <div>
                <h3>Corey Aminoff</h3>
                <div className="panel-card-content">
                  <p>
                    {" "}
                    <i className="ri-auction-fill"></i> 10 Years
                  </p>
                  <p>
                    <i className="ri-map-pin-2-line"></i> Italy
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="panel-card top-margin-card">
              <div>
                <img src={Person8} alt="person" />
              </div>
              <div>
                <h3>Charlie Botosh</h3>
                <div className="panel-card-content">
                  <p>
                    {" "}
                    <i className="ri-auction-fill"></i> 10 Years
                  </p>
                  <p>
                    <i className="ri-map-pin-2-line"></i> India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panel;
