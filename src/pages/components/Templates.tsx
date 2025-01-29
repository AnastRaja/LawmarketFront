import React, { useEffect, useState } from "react";
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
import axios from "axios";

export default function TemplateSlider() {

  const apiUrl = 'https://marketapi.lawblocks.io/'
  useEffect(() => {
    getTemplates();
  }, [])

  const [templates, settemplates] = useState([])

  const getTemplates = async () => {
    var response = await axios.get(apiUrl + 'advocate/advocate/templateDetails')
    console.log(response.data.Message, "=-=-=-=-=-=-")
    settemplates(response.data.Message)
  }
  return (
    <div className="row">
      {templates.map((data, i) => {
        return (

          <div className="col-lg-3 mb-4">
            <div className="employ-agreement-card">
              <div className="card">
                <div className="card-head">
                  <img src={Lawdark} alt="Header" style={{ width: "150px" }} />
                  <h3>{data.name}</h3>
                  <p>
                    {data.description}
                  </p>
                  <div className="attorney-name">
                    <p>Name</p>
                    <h4>{data.user_id.fullName}</h4>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title card-agreement">
                    {data.name}
                  </h5>
                  <div>
                    <div className="employe-img">
                      <img src={data.user_id.prfileIMG} alt="Header" style={{ width: "25px" }} />
                      <p>{data.user_id.fullName}</p>
                    </div>
                    <div className="price-lbt">
                      <div className="price-content">
                        <p>Price</p>
                        <h4>{data.amount} LBT</h4>
                      </div>
                      <div className="price-content">
                        <p className="text-align-end">Location</p>
                        <h4>{data.city}, {data.state}</h4>
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
        );
      })}

    </div>

  );
}
