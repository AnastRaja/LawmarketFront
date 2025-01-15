import Header from "../../Header/Header";
import Grid from "@mui/material/Grid2";
import Lawdark from "../../../assets/image/lawdark-logo.webp";
import Avatar from "../../../assets/image/Avatar.webp";
import balanceLBT from "../../../assets/image/balanceLBT.png";
import {Button} from "@material-ui/core";
import "../LegalTemplates/style";

function Arbitrators() {
  return (
    <>
      <Header />
      <div className="mediators-main height_100vh">
        <div className=" container height_100">
          <Grid container spacing={3} className="height_100">
            <Grid size={{xs: 6, md: 6}}></Grid>
            <Grid size={{xs: 6, md: 6}}></Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Arbitrators;
