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
                    <i className="ri-map-pin-2-line"></i> Germany
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
                    <i className="ri-map-pin-2-line"></i> New Zealand
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
                    <i className="ri-map-pin-2-line"></i> Spain
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
                    <i className="ri-map-pin-2-line"></i> Italy
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
                    <i className="ri-map-pin-2-line"></i> India
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
                    <i className="ri-map-pin-2-line"></i> South Africa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="loadmorw">View All</button>
      </div>
    </div>
  );
}

export default Panel;
