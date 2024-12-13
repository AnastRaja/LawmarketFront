import * as React from "react";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box } from "@mui/material";

export default function AccordionUsage() {
  const [expandedPanel, setExpandedPanel] = useState("panel1"); // Default to "panel1"

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };

  const iconStyle = (isExpanded) => ({
    backgroundColor: isExpanded ? "#4A3AFF" : "#F7F7FF",
    borderRadius: "8px",
    color: isExpanded ? "white" : "#6F6C90",
    padding: "4px 6px",
    fontSize: "18px",
  });

  return (
    <div>
      <div className="container">
        <div className="panel-content contract-content panel-content1 ">
          <div>
            <h2> Frequently Asked Questions</h2>
            <p className="m-0 w-100 max-windh" >
            All You Need to Know About Lawblocks AI
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <Accordion
              className="accordio-box"
              expanded={expandedPanel === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={
                  <Box sx={iconStyle(expandedPanel === "panel1")}>
                    {expandedPanel === "panel1" ? <RemoveIcon /> : <AddIcon />}
                  </Box>
                }
                aria-controls="panel1-content"
                id="panel1-header"
                className="accordion-text "
              >
                What is Law Blocks AI, and how does it work?
              </AccordionSummary>
              <AccordionDetails>
                <p className="faq-content">
                  Law Blocks AI is a cutting-edge platform that combines
                  artificial intelligence and blockchain technology to offer
                  efficient legal solutions. It provides tools like AI-generated
                  legal documents, blockchain-secured document storage, AI legal
                  chat, digital signatures, and a global marketplace for legal
                  counselors. Simply sign up, explore the features, and start
                  managing your legal needs effortlessly.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="accordio-box mt-3"
              expanded={expandedPanel === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={
                  <Box sx={iconStyle(expandedPanel === "panel2")}>
                    {expandedPanel === "panel2" ? <RemoveIcon /> : <AddIcon />}
                  </Box>
                }
                aria-controls="panel2-content"
                id="panel2-header"
                className="mt-3 accordion-text"
              >
                How can I upload and store legal documents securely on Law
                Blocks AI?
              </AccordionSummary>
              <AccordionDetails>
                <p className="faq-content">
                  Uploading documents is simple with Law Blocks AI. Once logged
                  in, you can upload your legal documents to the XDC Blockchain
                  Network, ensuring data integrity, transparency, and security.
                  The blockchain's immutable nature protects your documents from
                  unauthorized access or changes.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="accordio-box mt-3"
              expanded={expandedPanel === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={
                  <Box sx={iconStyle(expandedPanel === "panel3")}>
                    {expandedPanel === "panel3" ? <RemoveIcon /> : <AddIcon />}
                  </Box>
                }
                aria-controls="panel3-content"
                id="panel3-header"
                className="mt-3 accordion-text"
              >
                Can I earn free LBT tokens on Law Blocks AI?
              </AccordionSummary>
              <AccordionDetails>
                <p className="faq-content">
                  Yes! Law Blocks AI offers free LBT tokens for new users. These
                  tokens can be used for features like purchasing ready-made
                  legal documents, uploading files to the blockchain, or
                  exploring other platform tools. It's an excellent way to get
                  started on your legal journey.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="col-lg-4 accordion-m">
            <Accordion
              className="accordio-box"
              expanded={expandedPanel === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={
                  <Box sx={iconStyle(expandedPanel === "panel4")}>
                    {expandedPanel === "panel4" ? <RemoveIcon /> : <AddIcon />}
                  </Box>
                }
                aria-controls="panel4-content"
                id="panel4-header"
                className="accordion-text"
              >
                What legal services does the AI legal chat feature provide?
              </AccordionSummary>
              <AccordionDetails>
                <p className="faq-content">
                  The AI legal chat on Law Blocks AI offers real-time assistance
                  for your legal queries. It provides guidance on creating
                  documents, understanding legal terms, and accessing relevant
                  laws based on your requirements. It's like having a legal
                  expert at your fingertips 24/7.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className="accordio-box"
              expanded={expandedPanel === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={
                  <Box sx={iconStyle(expandedPanel === "panel5")}>
                    {expandedPanel === "panel5" ? <RemoveIcon /> : <AddIcon />}
                  </Box>
                }
                aria-controls="panel5-content"
                id="panel5-header"
                className="mt-3 accordion-text"
              >
                How does Law Blocks AI facilitate dispute resolution?
              </AccordionSummary>
              <AccordionDetails>
                <p className="faq-content">
                  Law Blocks AI supports Alternative Dispute Resolution (ADR)
                  through features like Web3-based arbitration and mediation.
                  You can connect with experienced legal counselors globally to
                  resolve disputes efficiently, avoiding the hassle and expense
                  of traditional court proceedings.
                </p>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
