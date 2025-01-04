import * as React from "react";
import Header from '../../Header/Header'
import TemplateSlider from '../../components/Templates'
import './style';
import { Search  } from 'lucide-react';

// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  Typography,
} from "@mui/material";
function LegalTemplates() {
    const [selectedValue, setSelectedValue] = React.useState("");
  return (
    <>
<Header/>
<div className='mediators-main'>
   <div className='container pt-4'>
   <div className='brand_name align-items-start pl-0'>
    <h2 className='text-left'>Legal Templates</h2>
   </div>
   <div className='mediators-content'>
   <div className="row mb-4">
   <div className="col-md-3">
                  <label className="mb-2">Search template</label>
                  <FormControl
                    fullWidth
                    className="formControl"
                  >
                   <div className="inputwithicon">
                       <input type="text" placeholder="Search" />
                       <Search /> 
                   </div>
                  </FormControl>
                </div>
                <div className="col-md-3">
                  <label className="mb-2">Country</label>
                  <FormControl
                    fullWidth
                    className="formControl"
                  >
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
                        country
                      </MenuItem>
                      <MenuItem value="option1">Option 1</MenuItem>
                      <MenuItem value="option2">Option 2</MenuItem>
                      <MenuItem value="option3">Option 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="col-md-3" style={{display: 'flex',
alignItems: 'end'}}>
                <Button
                    variant="contained"
                    className="gradientButton"
                  >
                   Search
                  </Button>
                </div>
                </div>
   <TemplateSlider/>
   </div>
   </div>
</div>
    </>
  )
}

export default LegalTemplates