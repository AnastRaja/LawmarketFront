// import './Contract.css';
import * as React from "react";
import {FileText, NotebookTabs, ChevronLeft} from "lucide-react";
import Header from "../../Header/Header";
import CustomTable from "./Components/CustomTable";
import {useNavigate} from "react-router";
import "./style";
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  Typography,
} from "@mui/material";
const Contract = () => {
  const [selectedValue, setSelectedValue] = React.useState("");
  const [textValue, setTextValue] = React.useState("");
  const [currentStep, setCurrentStep] = React.useState(1);
  const totalSteps = 3;
  const navigate = useNavigate();
  // Simple next function
  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const tableData = Array.from({length: 25}, (_, index) => ({
    id: index + 1,
    draftName: `Draft Template ${index + 1}`,
    owner: `Owner ${index + 1}`,
  }));

  // Action handlers
  const handleView = (row) => {
    console.log("View", row);
    navigate("/contract", {state: {rowData: row}});
  };

  const handleEdit = (row) => {
    console.log("Edit", row);
  };

  const handleShare = (row) => {
    console.log("Share", row);
  };

  const handleDelete = (row) => {
    console.log("Delete", row);
  };
  // Simple back function
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <>
      <Header />
      <div className="container-wrapper">
        <div className="child-container position-relative scroll_autin">
          <div className="upload_border">
            {/* <CloudUploadIcon sx={{ fontSize: 40, color: '#fff' }} /> */}
            <FileText size={40} color="#fff" className="icon_color" />
            <Typography className="icon_color">
              Generate template to see preview
            </Typography>
          </div>
          <div className="mt-3 clolor_footer_form p-3 ">
            <div className="d-flex justify-content-end gap-4">
              <Button
                variant="contained"
                onClick={handleBack}
                className="cancelbutton"
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={handleNext}
                className="gradientButton"
              >
                Upload to contract
              </Button>
            </div>
          </div>
        </div>
        <div className="child-container formcolor">
          <div className="contract-content_form">
            <div
              className="step-1"
              style={{display: currentStep === 1 ? "block" : "none"}}
            >
              <div>
                <h2>Create AI Template</h2>
                <p>
                  Design and customize AI-driven templates tailored for legal
                  use cases. This tool allows you to generate and configure
                  templates by entering specific legal fields, ensuring
                  compliance and adaptability for various legal processes. Fill
                  in the required fields to create your AI template
                  effortlessly.
                </p>
              </div>
              <div className="row">
                <div className="col-md-6">
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
                <div className="col-md-6">
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
                        Select your State
                      </MenuItem>
                      <MenuItem value="option1">Option 1</MenuItem>
                      <MenuItem value="option2">Option 2</MenuItem>
                      <MenuItem value="option3">Option 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="col-md-12 mt-3">
                  <label className="mb-2">Describe your document type </label>
                  <TextField
                    fullWidth
                    multiline
                    rows={7}
                    value={textValue}
                    onChange={(e) => setTextValue(e.target.value)}
                    placeholder="EX: Criminal Lawyer"
                    className="input-styles"
                  />
                </div>
                <div className="col-md-12 mt-3">
                  <Button variant="contained" className="gradientButton w-100">
                    Create Template
                  </Button>
                </div>
              </div>
            </div>
            <div
              className="step-2"
              style={{display: currentStep === 2 ? "block" : "none"}}
            >
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center gap-2">
                  <Button onClick={handleBack} className="circleButton">
                    <ChevronLeft size={24} />
                  </Button>
                  <h6 className="text-white mb-0 text-black_light">
                    See all contract
                  </h6>
                </div>
                <Button onClick={handleNext} className="gradientButton">
                  <NotebookTabs />
                  My contracts
                </Button>
              </div>
              <div>
                <h2>Create AI Template</h2>
                <p>
                  Design and customize AI-driven templates tailored for legal
                  use cases. This tool allows you to generate and configure
                  templates by entering specific legal fields, ensuring
                  compliance and adaptability for various legal processes. Fill
                  in the required fields to create your AI template
                  effortlessly.
                </p>
              </div>
              <div className="d-flex align-items-center gap-2 mb-3">
                <Button className="circleButtonWithGradient">
                  {" "}
                  <FileText color="#000" />
                </Button>
                <p className="m-0">File Name : legal.doc</p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label className="mb-2">Origin of Document</label>
                  <FormControl fullWidth className="formControl w-100">
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
                        Origin of Document*
                      </MenuItem>
                      <MenuItem value="option1">Option 1</MenuItem>
                      <MenuItem value="option2">Option 2</MenuItem>
                      <MenuItem value="option3">Option 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="col-md-6 d-flex justify-content-end align-items-end">
                  <div className="d-flex justify-content-end gap-4">
                    <Button variant="contained" className="cancelbutton">
                      Save as draft
                    </Button>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      className="gradientButton"
                    >
                      Upload contract
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="step-3"
              style={{display: currentStep === 3 ? "block" : "none"}}
            >
              <div className="tab_card bordernon">
                <ul
                  className="nav nav-tabs tab_title"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="home-tab-pane"
                      aria-selected="true"
                    >
                      Saved ( 1 )
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="profile-tab-pane"
                      aria-selected="false"
                    >
                      Uploaded Contract ( 3 )
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#sharedcontract"
                      type="button"
                      role="tab"
                      aria-controls="sharedcontract"
                      aria-selected="false"
                    >
                      Shared Contract
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active p-0"
                    id="home-tab-pane"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                    tabindex="0"
                  >
                    <CustomTable
                      data={tableData}
                      onView={handleView}
                      onEdit={handleEdit}
                      onShare={handleShare}
                      onDelete={handleDelete}
                    />
                  </div>
                  <div
                    className="tab-pane fade p-0"
                    id="profile-tab-pane"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabindex="0"
                  >
                    <CustomTable
                      data={tableData}
                      onView={handleView}
                      onEdit={handleEdit}
                      onShare={handleShare}
                      onDelete={handleDelete}
                    />
                  </div>
                  <div
                    className="tab-pane fade p-0"
                    id="sharedcontract"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                    tabindex="0"
                  >
                    <CustomTable
                      data={tableData}
                      onView={handleView}
                      onEdit={handleEdit}
                      onShare={handleShare}
                      onDelete={handleDelete}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contract;
