import * as React from "react";

import Header from "../../Header/Header";
import Grid from "@mui/material/Grid2";
import Lawdark from "../../../assets/image/lawdark-logo.webp";
import Avatar from "../../../assets/image/Avatar.webp";
import balanceLBT from "../../../assets/image/balanceLBT.png";
import {Button} from "@material-ui/core";
import "../LegalTemplates/style";
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import {FileText, NotebookTabs, ChevronLeft} from "lucide-react";
function Arbitrators() {
  const [textValue, setTextValue] = React.useState("");
  const [selectedValue, setSelectedValue] = React.useState("");

  return (
    <>
      <Header />
      <div className="mediators-main ">
        <div className=" container height_100">
          <Grid
            container
            spacing={3}
            className="height_100 justify-content-center"
          >
            <Grid size={{xs: 6, md: 9}}>
              <div className="contract-content_form bg-transparant">
                <h2 className="mb-4">Create Template</h2>

                <lable className="lable_upload_file">
                  Upload your template <span className="important">*</span>
                </lable>
                <p className="value_note">Drag or choose your file to upload</p>
                <div className="upload_border uploadbox">
                  {/* <CloudUploadIcon sx={{ fontSize: 40, color: '#fff' }} /> */}
                  <FileText size={40} color="#fff" className="icon_color" />
                  <Typography className="icon_color">
                    Supported File types are DOC, DOCX size: 100 MB
                  </Typography>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12 mt-3">
                    <label className="mb-2">Template Name </label>
                    <TextField
                      fullWidth
                      value={textValue}
                      onChange={(e) => setTextValue(e.target.value)}
                      placeholder="Template Name"
                      className="input-styles"
                    />
                  </div>
                  <div className="col-md-12 mt-3">
                    <label className="mb-2">Describe your document type </label>
                    <p className="value_note">
                      Note: Only allowed 300 characters
                    </p>
                    <TextField
                      fullWidth
                      multiline
                      rows={7}
                      value={textValue}
                      onChange={(e) => setTextValue(e.target.value)}
                      placeholder="Document type"
                      className="input-styles"
                    />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <div className="contract-content_form bg-transparant">
            <Grid
              container
              spacing={3}
              className="height_100 height_100 justify-content-center"
            >
              <Grid size={{xs: 6, md: 3}}>
                <div className="">
                  <label className="mb-2">Country</label>
                  <FormControl fullWidth className="formControl">
                    <Select
                      value={selectedValue}
                      onChange={(e) => setSelectedValue(e.target.value)}
                      displayEmpty
                      sx={{
                        "& .MuiSelect-select": {
                          padding: "10px 15px",
                        },
                      }}
                    >
                      <MenuItem value="" disabled>
                        Select your country
                      </MenuItem>
                      <MenuItem value="option1">Option 1</MenuItem>
                      <MenuItem value="option2">Option 2</MenuItem>
                      <MenuItem value="option3">Option 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Grid>
              <Grid size={{xs: 6, md: 3}}>
                <div className="">
                  <label className="mb-2">State</label>
                  <FormControl fullWidth className="formControl">
                    <Select
                      value={selectedValue}
                      onChange={(e) => setSelectedValue(e.target.value)}
                      displayEmpty
                      sx={{
                        "& .MuiSelect-select": {
                          padding: "10px 15px",
                        },
                      }}
                    >
                      <MenuItem value="" disabled>
                        Select your state
                      </MenuItem>
                      <MenuItem value="option1">Option 1</MenuItem>
                      <MenuItem value="option2">Option 2</MenuItem>
                      <MenuItem value="option3">Option 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Grid>
              <Grid size={{xs: 6, md: 3}}>
                <div className="">
                  <label className="mb-2">City</label>
                  <FormControl fullWidth className="formControl">
                    <Select
                      value={selectedValue}
                      onChange={(e) => setSelectedValue(e.target.value)}
                      displayEmpty
                      sx={{
                        "& .MuiSelect-select": {
                          padding: "10px 15px",
                        },
                      }}
                    >
                      <MenuItem value="" disabled>
                        Select your city
                      </MenuItem>
                      <MenuItem value="option1">Option 1</MenuItem>
                      <MenuItem value="option2">Option 2</MenuItem>
                      <MenuItem value="option3">Option 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Grid>
              <Grid size={{xs: 6, md: 9}}>
                <div className="">
                  <label className="mb-2">Document Category</label>
                  <FormControl fullWidth className="formControl">
                    <Select
                      value={selectedValue}
                      onChange={(e) => setSelectedValue(e.target.value)}
                      displayEmpty
                      sx={{
                        "& .MuiSelect-select": {
                          padding: "10px 15px",
                        },
                      }}
                    >
                      <MenuItem value="" disabled>
                        Document Category
                      </MenuItem>
                      <MenuItem value="option1">Option 1</MenuItem>
                      <MenuItem value="option2">Option 2</MenuItem>
                      <MenuItem value="option3">Option 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </Grid>
              <Grid size={{xs: 6, md: 9}}>
                <div className="">
                  <label className="mb-2">Enter Amount</label>
                  <TextField
                    fullWidth
                    value={textValue}
                    onChange={(e) => setTextValue(e.target.value)}
                    placeholder="0.00001"
                    className="input-styles"
                  />
                </div>
              </Grid>
              <Grid size={{xs: 6, md: 9}}>
                <div className="d-flex justify-content-end gap-4">
                  <Button
                    variant="contained"
                    className="gradientButton spacing"
                  >
                    Create
                  </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}

export default Arbitrators;
