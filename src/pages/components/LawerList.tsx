import React, { useEffect, useState } from "react";
import apiService from "../../core/service/v1";
import { postMethod } from "../../core/service/common.api";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Panel() {
  const navigate = useNavigate()
  const apiUrl = 'https://marketapi.lawblocks.io/'
  useEffect(() => {
    getsharelist();
  }, [])
  const [ArbitratorList, setArbitratorList] = useState([])
  const [loader, setloader] = useState(false)
  const getsharelist = async () => {
    // var data = {
    //   apiUrl: apiService.getadvocateList,
    // };
    // setloader(true)
    // var resp = await postMethod(data)
    setloader(false)
    var response = await axios.post(apiUrl+'users/users/getadvocateList')
    console.log(response.data, "-=-=-=-=")
    //  return
    if (response.data.status == true) {
      var arr = []
      for (let i = 0; i < response.data.Arbitrator.length; i++) {
        const element = response.data.Arbitrator[i];
        console.log(element)
        if (element.country != "India" && element.prfileIMG != "") {
          arr.push(element)
        }
      }
      for (let i = 0; i < response.data.Mediator.length; i++) {
        const element = response.data.Mediator[i];
        if (element.country != "India" && element.prfileIMG != "") {
          arr.push(element)
        }
      }
      for (let i = 0; i < response.data.Arbitrator.length; i++) {
        const element = response.data.Arbitrator[i];
        console.log(element)
        if (element.country == "India" && element.prfileIMG != "") {
          arr.push(element)
        }
      }

      for (let i = 0; i < response.data.Mediator.length; i++) {
        const element = response.data.Mediator[i];
        if (element.country == "India" && element.prfileIMG != "") {
          arr.push(element)
        }
      }
      setArbitratorList(arr)
    }
  }

  const goToProfile = async (id) => {
    try {
      navigate("/profile?" + id);
    } catch (error) {
    }
  };
  return (
    <div>
      {" "}
      < div className="container-custom" >


        <div className="row" >
          {
            ArbitratorList.map((data, i) => {
              return (
                <div className="col-lg-3" >

                  <div className="panel-card" >
                    <div>
                      <img src={data && data.prfileIMG} className="imgwidth" alt="person" />
                    </div>
                    < div >
                      <h3>{data.fullName} </h3>
                      < div className="panel-card-content" >
                        <p>
                          {" "}
                          < i className="ri-auction-fill" > </i> {data.Experience}
                        </p>
                        < p >
                          <i className="ri-map-pin-2-line" > </i> {data.country}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              );
            })
          }

        </div>
        {/* <button className="loadmorw">View All</button> */}
      </div>
    </div>
  );
}

export default Panel;
