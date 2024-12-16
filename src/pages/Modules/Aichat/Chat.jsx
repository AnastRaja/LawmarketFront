import * as React from "react";
import "../Contract/style"
import BrandDark from "../../../assets/image/brand_logo.png"
import Header from "../../Header/Header"
import { SendHorizontal, User  } from 'lucide-react';
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  Button,
  Typography,
} from "@mui/material";
function Chat() {
const [selectedValue, setSelectedValue] = React.useState("");

  return (
    <>
<Header/>
        <div className="ai-chat-main">
<div className="ai-chat">
  <div className="intro_chat">
      <div className="container">
      <div className="brand_name">
      <img src={BrandDark} alt="Header" />
      <h2>Law Blocks AI</h2>
      <p>Hello, I am an AI-powered bot that can answer your legal queries related <br/> to Indian Laws and give you answers relevant to your questions.</p>
      </div>
      <div className="qastion_buttons">
         <div className="qastion_button_outline">Someone's pet dog bit me, what can I do?</div>
         <div className="qastion_button_outline">Someone is repeatedly calling me and harassing me, what can I do?</div>

         <div className="qastion_button_outline">How do I file a case against a person who has not returned my money after I lent it to them?</div>
         <div className="qastion_button_outline">What are the steps I can take towards filing for bankruptcy?</div>
         <div className="qastion_button_outline">I got into a fight with someone and he hit me, what can I do?</div>
         <div className="qastion_button_outline">Someone hit my car, what can I do?</div>

      </div>
      <div className="chat_history">
      <div className="user_message">
      <div className="usermessage">How do I make a will?</div>
        <div className="userimage">
          <User/>
        </div>
      </div>
      <div className="ai_message">
      <div className="aiimage">
          <img src={BrandDark} alt="Header" />
        </div>
        <div className="ai_message_text">
          <p>Yes, you can make a will by filling out a will form, signing it, and submitting it to the appropriate registrar. The registrar will then review the will and issue it to you.</p>
      </div>
      </div>
  </div>
      </div>
      
  </div>

</div>
<div className="ai-chat-input">
<div className="boredr_glow">
</div>
  <div className="container relative">
  <div className="BG_input_section ">
  <textarea placeholder="Type your message here..." className="ai-textarea w-100" rows={4}></textarea>
<div className="ai-input-flex w-100">
<FormControl
                    
                    className="formControl"
                    sx={{width: '200px'}}
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
                        Select your country
                      </MenuItem>
                      <MenuItem value="option1">Option 1</MenuItem>
                      <MenuItem value="option2">Option 2</MenuItem>
                      <MenuItem value="option3">Option 3</MenuItem>
                    </Select>
                  </FormControl>
                  <Button   className="gradientButton"><SendHorizontal/></Button>
</div>
  </div>
  </div>
</div>
        </div>

    </>
  )
}

export default Chat