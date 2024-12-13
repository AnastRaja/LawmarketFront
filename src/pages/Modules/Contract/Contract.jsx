import {Button, Typography} from "@mui/material";
import * as React from "react";

import Header from "../../Header/Header";
import User1 from "../../../assets/image/text-editor.png";
import {useNavigate} from "react-router";

function Contract() {
  const navigate = useNavigate();

  const handleNext = () => {
    console.log("Navigating to Contract page...");
    // Perform navigation to the "/contract" route
    navigate("/contractpage", {
      state: {from: "Home Page", additionalData: "Example data"},
    });
  };

  return (
    <>
      <Header />

      <div className="container-wrapper">
        <div className="child-container position-relative scroll_autin mx-auto pb-5">
          <div
            style={{
              borderRadius: "10px",

              cursor: "pointer",
              transition: "border-color 0.3s ease",
              "&:hover": {
                borderColor: "#fff",
              },
            }}
          >
            <img src={User1} className="img-fluid" />
          </div>
          <div className="mt-3 clolor_footer_form p-3 w-100">
            <div className="d-flex justify-content-end gap-4">
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{
                  background: "transparent",
                  border: "1px solid #8462FF",
                  width: "fit-content",
                  color: "#fff",
                  borderRadius: "6px",

                  height: "48px",
                  padding: "0 30px",
                  textTransform: "none",
                  "&:hover": {
                    // background: 'linear-gradient(45deg, #FE8B8B 30%, #FF9E53 90%)',
                  },
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{
                  background: "transparent",
                  border: "1px solid #8462FF",
                  width: "fit-content",
                  color: "#fff",
                  borderRadius: "6px",

                  height: "48px",
                  padding: "0 30px",
                  textTransform: "none",
                  "&:hover": {
                    // background: 'linear-gradient(45deg, #FE8B8B 30%, #FF9E53 90%)',
                  },
                }}
              >
                Save
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{
                  background: "linear-gradient(180deg,#fff,#999)",
                  border: 0,
                  width: "fit-content",
                  color: "black",
                  borderRadius: "3px",
                  height: "48px",
                  padding: "0 30px",
                  textTransform: "none",
                  "&:hover": {
                    // background: 'linear-gradient(45deg, #FE8B8B 30%, #FF9E53 90%)',
                  },
                }}
              >
                Upload to contract
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contract;
