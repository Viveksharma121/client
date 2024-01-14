// App.js

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EmailIcon from "@mui/icons-material/Email";
import ForumIcon from "@mui/icons-material/Forum";
import HistoryIcon from "@mui/icons-material/History";
import IosShareIcon from "@mui/icons-material/IosShare";
import PersonIcon from "@mui/icons-material/Person";
import SendIcon from "@mui/icons-material/Send";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import React, { useEffect, useState } from "react";
import logo from "../Assets/logo.png";
import "./Main.css";

const Main = () => {
  const user = localStorage.getItem("aiuser");
  const department = localStorage.getItem("aidept");
  const [text, settext] = useState("");
  useEffect(() => {
    if (department === "marketing") {
      let marketingText =
        "Marketing is a multifaceted business function encompassing the conception, promotion, and sale of products or services. It involves understanding customer needs, conducting market research, and strategically positioning offerings to create a distinctive brand identity. Through various channels like advertising, digital marketing, and sales, marketing aims to reach and engage target audiences, fostering brand awareness and loyalty. Effective marketing strategies adapt to market dynamics, utilizing metrics and analytics to assess performance and inform future decisions, ultimately driving business growth and customer satisfaction.";
      settext(marketingText);
    } else {
      let salesText =
        "Sales is the lifeblood of any business, representing the dynamic exchange of products or services between a seller and a buyer. It is a multifaceted process that involves understanding customer needs, building relationships, and effectively communicating the value proposition of a product or service. Successful sales professionals possess a combination of interpersonal skills, product knowledge, and a keen understanding of market trends. The art of selling extends beyond closing deals; it encompasses the ability to identify opportunities, overcome objections, and cultivate long-term customer satisfaction. In today's competitive business landscape, adaptability and a customer-centric approach are crucial for navigating the intricacies of the sales journey, ultimately driving revenue growth and fostering business success.";
      settext(salesText);
    }
  }, [department]);

  return (
    <div className="app">
      {/* Top Header */}
      <div className="top-header">
        <div
          className="logo"
          style={{
            marginLeft: "1rem",
            color: "black",
          }}
        >
          <img src={logo} alt="Logo" height={"40rem"} />
        </div>
        <div className="department">
          <span
            style={{
              backgroundColor: "white",
              height: "1.5rem",
              width: "10rem",
              display: "flex",
              padding: "4px",
              borderRadius: "10px",
              fontSize: "12px",
              fontWeight: "bold",
              justifyContent: "center",
              alignItems: "center",
              color: "#333",
              border: "1px solid #333",
            }}
          >
            Department: {department}
          </span>

          <AccountCircleIcon style={{ marginLeft: "1rem", color: "white" }} />
          <span
            className="department-icon"
            style={{ marginRight: "2rem", color: "white" }}
          >
            {user}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Sidebar */}
        <div className="left-sidebar">
          <div className="options">+New Chat</div>
          <div className="text-history">
            <HistoryIcon style={{ margin: "5px" }} />
            History
          </div>
          <div className="options-container">
            <div className="option">
              <div className="option-left">
                <span className="icon">📬</span>
                New Chat
              </div>
              <div className="option-right">
                <span className="icon">
                  <EditIcon style={{ fontSize: "medium" }} />
                </span>
                <span className="icon">
                  <DeleteIcon fontSize="medium" />
                </span>
              </div>
            </div>
            <div className="option">
              <div className="option-left">
                <span className="icon">📬</span>
                What is Marketing
              </div>
              <div className="option-right">
                <span className="icon">
                  <EditIcon style={{ fontSize: "medium" }} />
                </span>
                <span className="icon">
                  <DeleteIcon fontSize="medium" />
                </span>
              </div>
            </div>
            <div className="option">
              <div className="option-left">
                <span className="icon">📬</span>
                Give me a list of Marketing agencies
              </div>
              <div className="option-right">
                <span className="icon">
                  <EditIcon style={{ fontSize: "medium" }} />
                </span>
                <span className="icon">
                  <DeleteIcon fontSize="medium" />
                </span>
              </div>
            </div>
          </div>

          {/* options at the bottom */}
          <div className="bottom-options">
            <div className="bottom-option">
              <span className="icon">
                <PersonIcon fontSize="medium" />
              </span>
              Upgrade to Plus
            </div>
            <div className="bottom-option">
              <span className="icon">
                <IosShareIcon fontSize="medium" />
              </span>
              Updates and FAQ
            </div>
            <div className="bottom-option">
              <span className="icon">📄</span>
              Terms and Conditions
            </div>
            <div className="bottom-option">
              <span className="icon">📃</span>
              Privacy Page
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="right-content">
          <div className="introduction">
            <h3 className="text1">Introduce yourself to AIWorkSquad</h3>
            <div className="user-caption">
              <p className="text2">
                I am Nithin, CEO of an IT startup company in India
              </p>
              <span className="icon">
                <EditIcon
                  style={{ fontSize: "medium", paddingBottom: "1.2rem" }}
                />
              </span>
            </div>
          </div>
          <div className="chat-message user-message">
            <div className="message-text-user">
              What is {department}?{" "}
              <ContactSupportIcon style={{ fontSize: "medium" }} />
            </div>
          </div>
          <br />
          <br />
          <br />
          {/* Bot reply */}
          <div className="chat-message bot-message">
            <div
              className="message-text"
              style={{ border: "1px solid #12a9bcff" }}
            >
              <ForumIcon style={{ fontSize: "medium", color: "#12a9bcff" }} />

              <div
                style={{
                  marginLeft: "18px",
                  marginTop: "-1rem",
                }}
              >
                <span className="marketing-text" style={{ color: "#12a9bcff" }}>
                  {text}
                </span>
                <div style={{ float: "right", marginTop: "7px" }}>
                  <ContentCopyIcon
                    style={{ fontSize: "medium", color: "black" }}
                  />
                  <IosShareIcon
                    style={{ fontSize: "medium", color: "black" }}
                  />
                  <SimCardDownloadIcon
                    style={{ fontSize: "medium", color: "black" }}
                  />
                  <EmailIcon style={{ fontSize: "medium", color: "black" }} />
                </div>
              </div>
            </div>
          </div>
          <br />
          <div
            className="chat-message user-message"
            style={{ marginTop: "1rem" }}
          >
            <div className="message-text-user">
              Give me a list of top 5 digital {department} agencies near me who
              offers services like social media {department},content{" "}
              {department} and influsencer {department}{" "}
              <ContactSupportIcon style={{ fontSize: "medium" }} />
            </div>
          </div>
          {/* chat input */}
          <div className="chat-input" style={{ border: "1px solid #BCC1CAFF" }}>
            <span className="icon">
              <ContactSupportIcon
                style={{ color: "#12a9bc", marginLeft: "1rem" }}
              />
            </span>
            {department === "marketing" ? (
              <input
                type="text"
                placeholder="Enter your marketing query here..."
                style={{
                  height: "2rem",
                  marginBottom: "0.5rem",
                  border: "0px",
                  outline: "none",
                  color: "#12a9bc",
                }}
              />
            ) : (
              <input
                type="text"
                placeholder="Enter your sales query here..."
                style={{
                  height: "2rem",
                  marginBottom: "0.5rem",
                  border: "0px",
                  outline: "none",
                  color: "#12a9bc",
                }}
              />
            )}{" "}
            <span className="icon">
              <SendIcon style={{ color: "#12a9bc" }} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
