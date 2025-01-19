import React, { useEffect, useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Headers from "../../Header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toast } from "react-toastify";
import effectImage from "../../../assets/image//landing-effect1.webp";
function Home() {
  const navigate = useNavigate();
  // const apiurl = "http://localhost:5001/";
  const apiurl = "https://marketapi.lawblocks.io/"
  const [signedPdfs, setSignedPdfs] = useState([]);
  const [sharedPdf, setsharedPdf] = useState([]);
  const [completed, setcompleted] = useState([]);
  const [userDetails, setuserDetails] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signatureData, setSignatureData] = useState(null);
  const [isSignatureSaved, setIsSignatureSaved] = useState(false); // Track signature save status
  const signatureRef = useRef({});

  useEffect(() => {
    fetchSignedPdfs();
    getSharedpdf();
    getuser();
  }, []);

  const getuser = async () => {
    const response = await axios.get(apiurl + "api/getuser");

    setuserDetails(response.data.status ? response.data.data : {});
    if (userDetails.signature != ""&&userDetails.signature != undefined) {
      setIsSignatureSaved(true)
    }
    console.log(response.data.status ? response.data.data : {})
  };

  const fetchSignedPdfs = async () => {
    try {
      const response = await axios.get(apiurl + "api/signed-pdfs");
      const arr = [];
      const arr1 = [];
      response.data.data.forEach((element) => {
        if (element.status === 1) arr.push(element);
        else arr1.push(element);
      });
      setSignedPdfs(arr1);
      setcompleted(arr);
    } catch (error) {
      console.error("Error fetching signed PDFs:", error);
    }
  };

  const getSharedpdf = async () => {
    try {
      const response = await axios.get(apiurl + "api/getsharedPdf");
      const arr1 = response.data.data.filter((element) => element.status !== 1);
      setsharedPdf(arr1);
    } catch (error) {
      console.error("Error fetching shared PDFs:", error);
    }
  };

  const handleSaveSignature = async () => {
    const signature = signatureRef.current.getTrimmedCanvas().toDataURL("image/png");
    setSignatureData(signature);
    setIsSignatureSaved(true); // Mark signature as saved
    setIsModalOpen(false);
    console.log("Saved Signature:", signature);
    const response = await axios.post(apiurl + "api/addSignature", { signature: signature });
    toast(response.data.Message)
    getuser()
  };

  const handleClearSignature = () => {
    signatureRef.current.clear();
  };

  const Navigate = (value) => {
    navigate(value);
  };

  return (
    <>
      <Headers />
      <section className="relative overflow-hidden">
        <picture className="pointer-events-none absolute inset-0 -z-10 h-20 lightmode_call">
          <img
            src={effectImage}
            alt="gradient"
            className="w-full"
          />
        </picture>
        <div className="container pt-20">
          <section className="relative pt-16 pb-8">
            <div className="container">
              <div className="flex flex-wrap row">
                <div className=" lg:w-1/3 flex flex-col justify-end col-lg-4">
                  <h1 className="ttext_color_FF">
                    Welcome
                  </h1>
                  <div className="profile-container mt-4 flex items-center">
                    <div className="profile-avatar bg-gray-300 rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold">
                      UN
                    </div>
                    <div className="profile-details ml-4">
                      <div className="name text-lg font-medium text-jacarta-700 dark:text-white">
                       Username
                      </div>
                      <div className="text-sm dark:text-jacarta-300">
                       user@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="profile-container mt-4">
                    {isSignatureSaved ? (
                      <img
                        src={userDetails.signature == undefined ? signatureData : userDetails.signature}
                        alt="Signature"
                        className="w-40 h-20 border"
                      />
                    ) : (
                      <div className="button_radous">
                        <button onClick={() => setIsModalOpen(true)}>
                          Save your Signature
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className=" lg:w-2/3 col-lg-8">
                  <div className="border_color_count">
                    <button
                      onClick={() => Navigate("/Digitaldetails")}
                      className="block text-center"
                    >
                      <h1 className="mb-1 mt-2 font-display text-5xl lg:text-6xl text-jacarta-700 dark:text-white text-left">
                        {sharedPdf.length}
                      </h1>
                      <p className="text-md leading-normal text-jacarta-700 dark:text-white text-left">
                        Action Required
                      </p>
                    </button>
                    <button
                      onClick={() => Navigate("/Digitaldetails")}
                      className="block text-center"
                    >
                      <h1 className="mb-1 mt-2 font-display text-5xl lg:text-6xl text-jacarta-700 dark:text-white text-left">
                        {signedPdfs.length}
                      </h1>
                      <p className="text-md leading-normal text-jacarta-700 dark:text-white text-left">
                        Waiting For Others
                      </p>
                    </button>
                    <button
                      onClick={() => Navigate("/Digitaldetails")}
                      className="block text-center"
                    >
                      <h1 className="mb-1 mt-2 font-display text-5xl lg:text-6xl text-jacarta-700 dark:text-white text-left">
                        {completed.length}
                      </h1>
                      <p className="text-md leading-normal text-jacarta-700 dark:text-white text-left">
                        Completed
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="py-10">
        <div className="container">
          <h2 className="text-left text-white text-3xl font-semibold mb-8 text_light">
            Get Started
          </h2>
          <div className="main-container">
  <div className="card-box">
    <div className="card-content">
      <h3 className="card-title text_light">Sign Your Document</h3>
      <button onClick={() => Navigate("/digital_sign")} className="action-button">
        Start Now
      </button>
    </div>
  </div>
</div>

        </div>
      </section>

      {/* Modal for Signature Pad */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-blue p-8 rounded-lg w-full max-w-lg">
            <h2 className="text-2xl font-semibold mb-4">Sign Here</h2>
            <SignatureCanvas
              ref={signatureRef}
              penColor="black"
              style={{ backgroundColor: "block" }}
              canvasProps={{ className: "sigCanvas w-full h-48 border" }}
            />
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                onClick={handleClearSignature}
              >
                Clear
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={handleSaveSignature}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
