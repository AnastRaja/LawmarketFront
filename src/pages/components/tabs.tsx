import * as React from "react";
import Box from "@mui/material/Box";
import { PhoneInput } from "react-contact-number-input";
export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const handleOnChange = (type) => {
    var number = type.countryCode + " " + type.phoneNumber;
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <div className="tab_card">
        <ul className="nav nav-tabs tab_title" id="myTab" role="tablist">
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
              Attorney
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
              User
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home-tab-pane"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabindex="0"
          >
            <div className="attorney-tab">
              <div className="lable-content mt-4">
                <div className="lable-text">
                  <label htmlFor="">First Name</label>
                  <input type="text" placeholder="Enter First Name" />
                </div>
                <div className="lable-text">
                  <label htmlFor="">Last Name</label>
                  <input type="text" placeholder="Enter Last Name" />
                </div>
              </div>
              <div className="lable-text mt-3">
                <label htmlFor="">Email </label>
                <input type="email" placeholder="Enter Your Email" />
              </div>
              <div className="lable-text mt-3">
                <label htmlFor="">Role </label>
                <input type="text" placeholder="EX: Criminal Lawyer" />
              </div>
              <div className="lable-pass mt-3">
                <div>
                  <label htmlFor="">Enter Password </label>
                </div>
                <div className="lable-text-input">
                  <div className="bg-trans">
                    {" "}
                    <input type="password" placeholder="Enter Password" />
                  </div>
                  <div>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-eye"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="lable-pass mt-3">
                <div>
                  <label htmlFor="">Enter Confirm Password</label>
                </div>
                <div className="lable-text-input">
                  <div className="bg-trans">
                    {" "}
                    <input type="password" placeholder="Enter Password" />
                  </div>
                  <div>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-eye"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="lable-content mt-3">
                <div className="lable-text">
                  <label htmlFor="" className="mb-2">
                    Mobile Number
                  </label>
                  <PhoneInput
                    class="mobileInput"
                    placeholder="Enter your phone number"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="lable-text">
                  <label htmlFor="">Started Year</label>
                  <input type="text" placeholder="Enter Started Year  " />
                </div>
              </div>
              <div>
                <button className="create-btn mt-3">Create account</button>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="profile-tab-pane"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabindex="0"
          >
            <div className="user-tab">
              <div className="lable-content mt-4">
                <div className="lable-text">
                  <label htmlFor="">First Name</label>
                  <input type="text" placeholder="Enter First Name" />
                </div>
                <div className="lable-text">
                  <label htmlFor="">Last Name</label>
                  <input type="text" placeholder="Enter Last Name" />
                </div>
              </div>
              <div className="lable-text mt-3">
                <label htmlFor="">Email </label>
                <input type="email" placeholder="Enter Your Email" />
              </div>
              <div className="lable-pass mt-3">
                <div>
                  <label htmlFor="">Enter Password </label>
                </div>
                <div className="lable-text-input">
                  <div className="bg-trans">
                    {" "}
                    <input type="password" placeholder="Enter Password" />
                  </div>
                  <div>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-eye"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="lable-pass mt-3">
                <div>
                  <label htmlFor="">Enter Confirm Password</label>
                </div>
                <div className="lable-text-input">
                  <div className="bg-trans">
                    {" "}
                    <input type="password" placeholder="Enter Password" />
                  </div>
                  <div>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-eye"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                      <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="lable-text mt-3">
                <label htmlFor="">Mobile Number</label>
                <PhoneInput
                  class="mobileInput"
                  placeholder="Enter your phone number"
                  onChange={handleOnChange}
                />
              </div>
              <div>
                <button className="create-btn mt-3">Create account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
