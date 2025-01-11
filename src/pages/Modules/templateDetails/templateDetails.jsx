import Header from "../../Header/Header";
import Grid from "@mui/material/Grid2";
import {IconShoppingCartPlus} from "@tabler/icons-react";
import Lawdark from "../../../assets/image/lawdark-logo.webp";
import Avatar from "../../../assets/image/Avatar.webp";
import balanceLBT from "../../../assets/image/balanceLBT.png";
import {Button} from "@material-ui/core";

function Arbitrators() {
  return (
    <>
      <Header />
      <div className="mediators-main height_100vh">
        <div className=" container height_100">
          <Grid container spacing={3} className="height_100">
            <Grid size={{xs: 6, md: 6}}>
              <div className="detaiuls_main height_100 padding_card_tob">
                <div className="employ-agreement-card height_100">
                  <div className="card">
                    <div className="card-head height_100">
                      <img
                        src={Lawdark}
                        alt="Header"
                        style={{width: "150px"}}
                      />
                      <h3>Employee Agreement</h3>
                      <p>
                        The following Agreement outlines the terms and
                        conditions of employment for new employees. It is
                        legally binding and must be adhered to during the course
                        of employment.
                      </p>
                      <div className="attorney-name">
                        <p>Name</p>
                        <h4>Ravindra Deshmukh</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid size={{xs: 6, md: 6}}>
              <div className=" details_content height_100 padding_card_tob padding_development">
                <h3 className="Titel">Employee Agreement</h3>
                <ul className="tags">
                  <li>Employment</li>
                </ul>
                <p className="Description">
                  The following Agreement outlines the terms and conditions of
                  employment for new employees. It is legally binding and must
                  be adhered to during the course of employment.
                </p>
                <div>
                  <label>Created By :</label>
                  <div className="attorney-name">
                    <img src={Avatar} alt="Avatar" />
                    <div>
                      <p>Name</p>
                      <h4>Ravindra Deshmukh</h4>
                    </div>
                  </div>
                </div>

                <div className="buy_content">
                  <div>
                    <label>Price</label>
                    <div className="attorney-name">
                      <img src={balanceLBT} alt="Avatar" />
                      <div>
                        <p>0.01064015 LBT</p>
                      </div>
                    </div>
                  </div>
                  <Button className="nav-btn login-btn padding_button">
                    Buy
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Arbitrators;
