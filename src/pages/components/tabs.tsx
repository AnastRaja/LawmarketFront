import * as React from "react";
import Box from "@mui/material/Box";
import { PhoneInput } from "react-contact-number-input";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import apiService from "../../core/service/v1/index";
import { postMethod } from "../../core/service/common.api";
import axios from "axios";
// import ethers from 'ethers'
// import JsonRpcProvider from 'ethers'


const userSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email address"),
  role: z.string().min(1, "Role is required"), // Only for Attorney tab
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
  confirmPassword: z.string().min(1, "Please confirm your password"),
  startedYear: z.string().min(1, "Started year is required"),
  // startedYear: z.string().optional(), // Only for Attorney tab
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"],
});

export default function LabTabs() {

  const apiUrl = 'https://marketapi.lawblocks.io/'
  const [activeTab, setActiveTab] = React.useState("attorney");
  const [numberErr, setnumberErr] = React.useState("");
  const [mobileInput, setmobileInput] = React.useState("");
  const methods = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      startedYear: "",
    },
  });

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    methods.reset();
  };

  const handleOnChange = (type) => {
    var number = type.countryCode + " " + type.phoneNumber;
    setmobileInput(number);
    setnumberErr(type.message);
  };
  const [buttonLoader, setbuttonLoader] = React.useState(false)
  const onSubmit = async (value: any) => {
    console.log(value, "value")
    if (value.role == undefined) {
      //client
    } else {
      const rpcUrl = "https://erpc.xdcrpc.com";
      // Initialize ethers provider using the RPC URL
      // const provider = new JsonRpcProvider(rpcUrl);
      // // Generate a new wallet
      // const wallet = ethers.Wallet.createRandom(provider);
      value["phoneNumber"] = mobileInput;
      // value["address"] = wallet.address;
      // value["chainCode"] = wallet.chainCode;
      // value["privateKey"] = wallet.signingKey.privateKey;
      // value["publicKey"] = wallet.publicKey;
      // value["fingerprint"] = wallet.fingerprint;
      console.log(value,"=-=-=value")

      var response = await axios.post(apiUrl+'users/users/advacatesignup', value)
      return
      var data = {
        apiUrl: apiService.advacateregister,
        // payload: value,
      };
      setbuttonLoader(true);
      var resp = await (data);
      setbuttonLoader(false);
    }

    console.log("Form submitted: ", value);
    alert("Form submitted successfully!");
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <div className="tab_card">
        <ul className="nav nav-tabs tab_title" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "attorney" ? "active" : ""}`}
              type="button"
              onClick={() => handleTabChange("attorney")}
            >
              Attorney
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${activeTab === "user" ? "active" : ""}`}
              type="button"
              onClick={() => handleTabChange("user")}
            >
              User
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div
                className={`tab-pane fade ${activeTab === "attorney" ? "show active" : ""
                  }`}
              >
                {activeTab === "attorney" && (
                  <div className="attorney-tab">
                    <div className="lable-content mt-4">
                      <div className="lable-text">
                        <label>First Name</label>
                        <input
                          {...methods.register("firstName")}
                          type="text"
                          placeholder="Enter First Name"
                        />
                        <p className="color">{methods.formState.errors.firstName?.message}</p>
                      </div>
                      <div className="lable-text">
                        <label>Last Name</label>
                        <input
                          {...methods.register("lastName")}
                          type="text"
                          placeholder="Enter Last Name"
                        />
                        <p className="color">{methods.formState.errors.lastName?.message}</p>
                      </div>
                    </div>
                    <div className="lable-text mt-3">
                      <label>Email</label>
                      <input
                        {...methods.register("email")}
                        type="email"
                        placeholder="Enter Your Email"
                      />
                      <p className="color">{methods.formState.errors.email?.message}</p>
                    </div>
                    <div className="lable-text mt-3">
                      <label>Role</label>
                      <input
                        {...methods.register("role")}
                        type="text"
                        placeholder="EX: Criminal Lawyer"
                      />
                      <p className="color">{methods.formState.errors.role?.message}</p>
                    </div>
                    <PasswordFields methods={methods} />
                    <div className="lable-content mt-3">
                      <div className="lable-text">
                        <label>Mobile Number</label>
                        <PhoneInput
                          className="mobileInput"
                          {...methods.register("phoneNumber")}
                          placeholder="Enter your phone number"
                          onChange={handleOnChange}
                        />
                        <p className="color">{methods.formState.errors.phoneNumber?.message}</p>
                      </div>
                      <div className="lable-text">
                        <label>Started Year</label>
                        <input
                          {...methods.register("startedYear")}
                          type="number"
                          placeholder="Enter Started Year"
                          min={0}
                        />
                        <p className="color">{methods.formState.errors.startedYear?.message}</p>
                      </div>
                    </div>
                    <div>
                      <button type="submit" className="create-btn mt-3">
                        Create account
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div
                className={`tab-pane fade ${activeTab === "user" ? "show active" : ""
                  }`}
              >
                {activeTab === "user" && (
                  <div className="user-tab">
                    <div className="lable-content mt-4">
                      <div className="lable-text">
                        <label>First Name</label>
                        <input
                          {...methods.register("firstName")}
                          type="text"
                          placeholder="Enter First Name"
                        />
                        <p className="color">{methods.formState.errors.firstName?.message}</p>
                      </div>
                      <div className="lable-text">
                        <label>Last Name</label>
                        <input
                          {...methods.register("lastName")}
                          type="text"
                          placeholder="Enter Last Name"
                        />
                        <p className="color">{methods.formState.errors.lastName?.message}</p>
                      </div>
                    </div>
                    <div className="lable-text mt-3">
                      <label>Email</label>
                      <input
                        {...methods.register("email")}
                        type="email"
                        placeholder="Enter Your Email"
                      />
                      <p className="color">{methods.formState.errors.email?.message}</p>
                    </div>
                    <PasswordFields methods={methods} />
                    <div className="lable-text mt-3">
                      <label>Mobile Number</label>
                      <PhoneInput
                        className="mobileInput"
                        {...methods.register("phoneNumber")}
                        placeholder="Enter your phone number"
                      // onChange={(value) =>
                      //   methods.setValue("phoneNumber", value)
                      // }
                      />
                      <p className="color">{numberErr}</p>
                    </div>
                    <div>
                      <button type="submit" className="create-btn mt-3">
                        Create account
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </Box>
  );
}

const PasswordFields = ({ methods }: any) => (
  <>
    {/* <div className="user-tab"> */}
    <div className="lable-text mt-3">
      <label>Password</label>
      <input
        {...methods.register("password")}
        type="password"
        placeholder="Enter Password"
      />
      <p className="color">{methods.formState.errors.password?.message}</p>
    </div>
    <div className="lable-text mt-3">
      <label>Confirm Password</label>
      <input
        {...methods.register("confirmPassword")}
        type="password"
        placeholder="Enter Confirm Password"
      />
      <p className="color">{methods.formState.errors.confirmPassword?.message}</p>
    </div>
    {/* </div> */}

  </>
);
