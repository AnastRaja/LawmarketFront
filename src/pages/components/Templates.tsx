import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import Lawdark from "../../assets/image/lawdark-logo.webp";
import Avatar from "../../assets/image/Avatar.webp";
import Avatar2 from "../../assets/image/Avatar2.webp";
import Avatar3 from "../../assets/image/Avatar3.webp";
import { IconShoppingCartPlus } from "@tabler/icons-react";

export default function TemplateSlider() {
  return (
    <div className="row">
      <div className="col-lg-3 mb-4">
      <div className="employ-agreement-card">
            <div className="card">
              <div className="card-head">
                <img src={Lawdark} alt="Header" style={{ width: "150px" }} />
                <h3>Employee Agreement</h3>
                <p>
                  The following Agreement is for employers with new joining
                  employees.
                </p>
                <div className="attorney-name">
                  <p>Name</p>
                  <h4>Ravindra Deshmukh</h4>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title card-agreement">
                  Employee Agreement
                </h5>
                <div>
                  <div className="employe-img">
                    <img src={Avatar} alt="Header" style={{ width: "25px" }} />
                    <p> Ravindra Deshmukh</p>
                  </div>
                  <div className="price-lbt">
                    <div className="price-content">
                      <p>Price</p>
                      <h4>0.000001 LBT</h4>
                    </div>
                    <div className="price-content">
                      <p className="text-align-end">Location</p>
                      <h4>California, United States</h4>
                    </div>
                  </div>
                </div>
                <div className="buy-shop-content">
                  <IconShoppingCartPlus stroke={2} className="shop-card" />
                  <button className="log-btn buy-btn">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="col-lg-3 mb-4"><div className="employ-agreement-card">
            <div className="card">
              <div className="card-head">
                <img src={Lawdark} alt="Header" style={{ width: "150px" }} />
                <h3>Employee Agreement</h3>
                <p>
                  The following Agreement is for employers with new joining
                  employees.
                </p>
                <div className="attorney-name">
                  <p>Name</p>
                  <h4>Kierra Dias</h4>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title card-agreement">
                  Employee Agreement
                </h5>
                <div>
                  <div className="employe-img">
                    <img src={Avatar2} alt="Header" style={{ width: "25px" }} />
                    <p>Kierra Dias</p>
                  </div>
                  <div className="price-lbt">
                    <div className="price-content">
                      <p>Price</p>
                      <h4>0.000001 LBT</h4>
                    </div>
                    <div className="price-content">
                      <p className="text-align-end">Location</p>
                      <h4>Bavaria, Germany</h4>
                    </div>
                  </div>
                </div>
                <div className="buy-shop-content">
                  <IconShoppingCartPlus stroke={2} className="shop-card" />
                  <button className="log-btn buy-btn">Buy Now</button>
                </div>
              </div>
            </div>
          </div></div>
      <div className="col-lg-3 mb-4"><div className="employ-agreement-card">
            <div className="card">
              <div className="card-head">
                <img src={Lawdark} alt="Header" style={{ width: "150px" }} />
                <h3>Employee Agreement</h3>
                <p>
                  The following Agreement is for employers with new joining
                  employees.
                </p>
                <div className="attorney-name">
                  <p>Name</p>
                  <h4>Kaylynn Botosh</h4>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title card-agreement">
                  Employee Agreement
                </h5>
                <div>
                  <div className="employe-img">
                    <img src={Avatar3} alt="Header" style={{ width: "25px" }} />
                    <p>Kaylynn Botosh</p>
                  </div>
                  <div className="price-lbt">
                    <div className="price-content">
                      <p>Price</p>
                      <h4>0.000001 LBT</h4>
                    </div>
                    <div className="price-content">
                      <p className="text-align-end">Location</p>
                      <h4>Quebec, Canada</h4>
                    </div>
                  </div>
                </div>
                <div className="buy-shop-content">
                  <IconShoppingCartPlus stroke={2} className="shop-card" />
                  <button className="log-btn buy-btn">Buy Now</button>
                </div>
              </div>
            </div>
          </div></div>

      <div className="col-lg-3 mb-4"><div className="employ-agreement-card">
            <div className="card">
              <div className="card-head">
                <img src={Lawdark} alt="Header" style={{ width: "150px" }} />
                <h3>Employee Agreement</h3>
                <p>
                  The following Agreement is for employers with new joining
                  employees.
                </p>
                <div className="attorney-name">
                  <p>Name</p>
                  <h4>Ravindra Deshmukh</h4>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title card-agreement">
                  Employee Agreement
                </h5>
                <div>
                  <div className="employe-img">
                    <img src={Avatar} alt="Header" style={{ width: "25px" }} />
                    <p>Ravindra Deshmukh</p>
                  </div>
                  <div className="price-lbt">
                    <div className="price-content">
                      <p>Price</p>
                      <h4>0.000001 LBT</h4>
                    </div>
                    <div className="price-content">
                      <p className="text-align-end">Location</p>
                      <h4>Victoria, Australia</h4>
                    </div>
                  </div>
                </div>
                <div className="buy-shop-content">
                  <IconShoppingCartPlus stroke={2} className="shop-card" />
                  <button className="log-btn buy-btn">Buy Now</button>
                </div>
              </div>
            </div>
          </div></div>

      <div className="col-lg-3 mb-4"><div className="employ-agreement-card">
            <div className="card">
              <div className="card-head">
                <img src={Lawdark} alt="Header" style={{ width: "150px" }} />
                <h3>Employee Agreement</h3>
                <p>
                  The following Agreement is for employers with new joining
                  employees.
                </p>
                <div className="attorney-name">
                  <p>Name</p>
                  <h4>Kierra Dias</h4>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title card-agreement">
                  Employee Agreement
                </h5>
                <div>
                  <div className="employe-img">
                    <img src={Avatar2} alt="Header" style={{ width: "25px" }} />
                    <p>Kierra Dias</p>
                  </div>
                  <div className="price-lbt">
                    <div className="price-content">
                      <p>Price</p>
                      <h4>0.000001 LBT</h4>
                    </div>
                    <div className="price-content">
                      <p className="text-align-end">Location</p>
                      <h4>Auckland, New Zealand</h4>
                    </div>
                  </div>
                </div>
                <div className="buy-shop-content">
                  <IconShoppingCartPlus stroke={2} className="shop-card" />
                  <button className="log-btn buy-btn">Buy Now</button>
                </div>
              </div>
            </div>
          </div></div>

      <div className="col-lg-3 mb-4"> <div className="employ-agreement-card">
            <div className="card">
              <div className="card-head">
                <img src={Lawdark} alt="Header" style={{ width: "150px" }} />
                <h3>Employee Agreement</h3>
                <p>
                  The following Agreement is for employers with new joining
                  employees.
                </p>
                <div className="attorney-name">
                  <p>Name</p>
                  <h4>Kaylynn Botosh</h4>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title card-agreement">
                  Employee Agreement
                </h5>
                <div>
                  <div className="employe-img">
                    <img src={Avatar3} alt="Header" style={{ width: "25px" }} />
                    <p>Kaylynn Botosh</p>
                  </div>
                  <div className="price-lbt">
                    <div className="price-content">
                      <p>Price</p>
                      <h4>0.000001 LBT</h4>
                    </div>
                    <div className="price-content">
                      <p className="text-align-end">Location</p>
                      <h4>Kyoto, Japan</h4>
                    </div>
                  </div>
                </div>
                <div className="buy-shop-content">
                  <IconShoppingCartPlus stroke={2} className="shop-card" />
                  <button className="log-btn buy-btn">Buy Now</button>
                </div>
              </div>
            </div>
          </div></div>

      <div className="col-lg-3 mb-4"> <div className="employ-agreement-card">
            <div className="card">
              <div className="card-head">
                <img src={Lawdark} alt="Header" style={{ width: "150px" }} />
                <h3>Employee Agreement</h3>
                <p>
                  The following Agreement is for employers with new joining
                  employees.
                </p>
                <div className="attorney-name">
                  <p>Name</p>
                  <h4>Ravindra Deshmukh</h4>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title card-agreement">
                  Employee Agreement
                </h5>
                <div>
                  <div className="employe-img">
                    <img src={Avatar} alt="Header" style={{ width: "25px" }} />
                    <p>Ravindra Deshmukh</p>
                  </div>
                  <div className="price-lbt">
                    <div className="price-content">
                      <p>Price</p>
                      <h4>0.000001 LBT</h4>
                    </div>
                    <div className="price-content">
                      <p className="text-align-end">Location</p>
                      <h4>Andalusia, Spain</h4>
                    </div>
                  </div>
                </div>
                <div className="buy-shop-content">
                  <IconShoppingCartPlus stroke={2} className="shop-card" />
                  <button className="log-btn buy-btn">Buy Now</button>
                </div>
              </div>
            </div>
          </div></div>

      
    </div>
   
  );
}
