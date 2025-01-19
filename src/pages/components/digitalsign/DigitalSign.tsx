import React, { useEffect, useRef, useState } from "react";
import DesktopSidebar from "./DesktopSidebar";
import MobileBottomNav from "./MobileBottomNav";
import useWindowSize from "./useWindowSize";
import Headers from "../../Header/Header";
import SignatureCanvas from "react-signature-canvas";
import { toast } from "react-toastify";
import axios from "axios";
import useStateRef from "react-usestateref";
import { useNavigate, Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
// import { fabric } from "fabric";

function NewLayout() {
  // const apiurl = "http://localhost:5001/";
  const apiurl = "https://marketapi.lawblocks.io/";
  const { width } = useWindowSize();

  const fonts = [
    "Arial",
    "Courier New",
    "Georgia",
    "Times New Roman",
    "Verdana",
  ];

  const [selectedFont, setSelectedFont] = useState(fonts[0]);

  const handleFontChange = (event) => {
    setSelectedFont(event.target.value);
  };

  const scrollRef = useRef(null);

  const cancel = async (value) => {
    setfile(false);
    const pdfViewerElement = pdfViewerRef.current;
    const canvas = await html2canvas(pdfViewerElement);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "pt", "a4");

    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (imgWidth * 841) / 595;
    pdf.addImage(value.file, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save(`sign_${value.fileName}`);
  };

  const fileInputRef = useRef(null);

  const [typedSignature, setTypedSignature] = useState("");

  // ==============================file Upload===========================/

  const navigate = useNavigate();
  const [File, setFile, Fileref] = useStateRef("");
  const [name, setname] = useState("");
  const [Email, setEmail] = useState("");
  const [checked, setchecked, checkedref] = useStateRef(false);

  const [userDetails1, setuserDetails1] = useState({});
  const [status, setstatus] = useState(0);
  const [_id, set_id] = useState("");

  function uint8ArrayToBase64(uint8Array) {
    const CHUNK_SIZE = 0x8000; // Process in chunks to avoid stack overflow
    let base64String = "";
    for (let i = 0; i < uint8Array.length; i += CHUNK_SIZE) {
      const chunk = uint8Array.subarray(i, i + CHUNK_SIZE);
      base64String += String.fromCharCode.apply(null, chunk);
    }
    return btoa(base64String);
  }

  // Helper function: Convert Base64 to Uint8Array
  function base64ToUint8Array(base64) {
    const binaryString = atob(base64);
    const length = binaryString.length;
    const uint8Array = new Uint8Array(length);
    for (let i = 0; i < length; i++) {
      uint8Array[i] = binaryString.charCodeAt(i);
    }
    return uint8Array;
  }

  // Function to render the PDF from a string
  const renderPdfFromString = (base64String) => {
    // Convert the base64 string to Uint8Array
    const pdfData = base64ToUint8Array(base64String);
    console.log(pdfData, "==-=-base64String");

    if (pdfData) {
      // Check if pdfData was successfully created
      // Use the PDFAnnotate library to render the PDF
      // const pdf = new PDFAnnotate('pdf-container', "https://ipfs.io/ipfs/bafkreick5gy3d7rtnrl3iuzdx5v324fpsmftb2efi4tyvlkln2mmamvkuu", {
      //   onPageUpdated(page, oldData, newData) {
      //     console.log(page, oldData, newData);
      //   },
      //   ready(canvases) {
      //     canvases.forEach((canvas, index) => {
      //       canvas.render();
      //     });
      //   },
      //   scale: 1.5,
      //   pageImageCompression: 'MEDIUM',
      // });

      // setPdfInstance(pdf);
      setfile(true); // Store the PDF instance for further use (e.g., signatures)
    } else {
      console.error("Invalid PDF data, unable to render.");
    }
  };
  const [fileNamenew, setfileNamenew] = useState("");
  const [backsign, setbacksign] = useState("");

  useEffect(() => {
    var url = window.location.href.split("?")[1];
    if (url != undefined) {
      set_id(url)
    }
    if (url != undefined) {
      const getpdf = async () => {
        try {
          const response = await axios.post(apiurl + "api/getuser", {
            id: url,
          });
          if (response.data.status == true) {
            const storedBase64 = response.data.data.pdfData;
            setbacksign(response.data.data.signature)
            setfileNamenew(response.data.data.filename)
            setstatus(response.data.data.status)
            if (storedBase64) {
              const byteArray = base64ToUint8Array(storedBase64);
              var sign = response.data.data.signatures.values()
              for (const value of sign) {
                sign = value
              }
              // console.log(response.data.data.signatures.)

              const pdf = new PDFAnnotate("pdf-container", byteArray, {
                onPageUpdated(page, oldData, newData) {
                  console.log(page, oldData, newData);
                },
                ready(canvases) {
                  let jsonData = JSON.parse(sign);
                  localStorage.setItem("pageNumer", canvases.length)
                  jsonData.pages.forEach((pageEl, pageIndex) => {
                    console.log({ pageEl, pageIndex });

                    pageEl?.objects?.forEach((objEl, objIndex) => {
                      console.log({ objEl, objIndex });

                      // if (objEl.type === "image") {
                      //   fabric.Image.fromObject(
                      //     { ...objEl, selectable: false },
                      //     function (fabricImage) {
                      //       canvases[pageIndex].add(fabricImage); // Add the loaded image to the canvas
                      //       // modifiedImage = fabricImage; // Store the image in the variable
                      //       canvases[pageIndex].renderAll();
                      //     }
                      //   );
                      // }
                    });
                  });
                },
                scale: 1.5,
                pageImageCompression: "MEDIUM",
              });

              setPdfInstance(pdf);
              setfile(true);
            }
          }
        } catch (error) {
          console.log(error);
        }
      };
      getpdf();
    }

    const getuser = async () => {
      const response = await axios.get(apiurl + "api/getuser");
      if (response.data.status == true) {
        setuserDetails1(response.data.data);
        setbacksign(response.data.data.signature)
      } else {
        setuserDetails1(response.data.data);
      }
    };
    getuser();

  }, [0]);

  const checkbox = (e) => {
    setchecked(e.target.checked);
  };

  const [isSigning, setIsSigning] = useState(false);
  const [loader, setloader] = useState(false);
  const [uploadedSignature, setUploadedSignature] = useState(null);
  const [file, setfile] = useState(false);
  const [pdfAddateData, setpdfAddateData] = useState("");
  const signatureRef = useRef({});
  const pdfViewerRef = useRef();
  const [pdfInstance, setPdfInstance] = useState(null);
  const [fileName, setfileName] = useState(null);

  const handleFileChange = async (e) => {
    try {
      const pdfFile = e.target.files[0];
      setFile(pdfFile);
      setfileName(e.target.files[0].name);
    } catch (error) {
      console.log(error);
    }
  };


  const saveSignature = () => {
    const signatureDataUrl = signatureRef.current
      .getTrimmedCanvas()
      .toDataURL("image/png");

    const img = new fabric.Image.fromURL(signatureDataUrl, (img) => {
      img.set({
        left: 100,
        top: 100,
        scaleX: 0.5,
        scaleY: 0.5,
      });
      // pdfInstance.fabricObjects[localStorage.getItem("currpage") == undefined ? 0 : localStorage.getItem("currpage")].add(img);
      // pdfInstance.fabricObjects[localStorage.getItem("currpage") == undefined ? 0 : localStorage.getItem("currpage")].requestRenderAll();
    });

  };

  const clearSignature = () => {
    signatureRef.current.clear();
  };

  const saveUploadedSignature = () => {
    if (!uploadedSignature) {
      console.error("Uploaded signature URL is missing");
      return;
    }

    // fabric.Image.fromURL(uploadedSignature, (img) => {
    //   if (!img) {
    //     console.error("Failed to load uploaded signature");
    //     return;
    //   }

    //   img.set({
    //     left: 100,
    //     top: 100,
    //     scaleX: 0.5,
    //     scaleY: 0.5,
    //   });
    //   pdfInstance.fabricObjects[localStorage.getItem("currpage") == undefined ? 0 : localStorage.getItem("currpage")].add(img);
    //   pdfInstance.fabricObjects[localStorage.getItem("currpage") == undefined ? 0 : localStorage.getItem("currpage")].requestRenderAll();
    // });
  };


  const addText = () => {
    if (!typedSignature) {
      console.error("Typed signature URL is missing");
      return;
    }
    var imgurl = textToImageUrl(typedSignature)

    // fabric.Image.fromURL(imgurl, (img) => {
    //   if (!img) {
    //     console.error("Failed to load typed signature");
    //     return;
    //   }

    //   img.set({
    //     left: 100,
    //     top: 100,
    //     scaleX: 0.5,
    //     scaleY: 0.5,
    //   });
    //   pdfInstance.fabricObjects[localStorage.getItem("currpage") == undefined ? 0 : localStorage.getItem("currpage")].add(img);
    //   pdfInstance.fabricObjects[localStorage.getItem("currpage") == undefined ? 0 : localStorage.getItem("currpage")].requestRenderAll();
    // });
  };


  function textToImageUrl(text, options = {}) {
    const {
      font = "30px Arial",
      color = "black",
      backgroundColor = "white",
      width = 300,
      height = 100
    } = options;

    // Create a canvas element
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    // Fill background color
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set text properties and draw text
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    // Convert canvas to a data URL
    return canvas.toDataURL("image/png");
  }

  const [signImg, setsignImg] = useState(false)
  const handleUploadSignature = (e) => {
    const file = e.target.files[0];
    setsignImg(true)
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedSignature(event.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      toast.error("Please upload an image file.");
    }
  };

  const undosign = () => {
    // pdfInstance.fabricObjects[localStorage.getItem("currpage") == undefined ? 0 : localStorage.getItem("currpage")].clear();
    setTypedSignature(null)
    setUploadedSignature(null)
  }

  const nextAction = async () => {
    localStorage.removeItem("currpage")
    if (checkedref.current == false && Fileref.current) {
      if (Email != "" && name != "") {
        if (Fileref.current) {
          var fileReader = new FileReader();
          fileReader.onload = function () {
            var typedarray = new Uint8Array(this.result);
            console.log(typedarray, "=-=-typedarray");

            // Convert typedarray to Base64 safely
            const base64String = uint8ArrayToBase64(typedarray);

            // Store in LocalStorage
            setpdfAddateData(base64String);
            // Retrieve and decode Base64 data 
            const storedBase64 = localStorage.getItem("pdfData");
            if (storedBase64) {
              const byteArray = base64ToUint8Array(storedBase64);

              const pdf = new PDFAnnotate("pdf-container", byteArray, {
                onPageUpdated(page, oldData, newData) {
                  console.log(page, oldData, newData);
                },
                ready(canvases) {
                  console.log(canvases.length, "=-=--")
                  canvases?.forEach((canvas) => {
                    canvas.on("mouse:up", (e) => {
                      console.log("mouse clicked", e);
                    });
                  });
                },
                scale: 1.5,
                pageImageCompression: "MEDIUM",
              });

              setPdfInstance(pdf);
              setfile(true);
              toast.success("Signer add successfully ")
            }
          };
          fileReader.readAsArrayBuffer(Fileref.current);
        } else {
          toast.error("Please select file");
        }
      } else {
        toast.error("All field required");
      }
    } else {
      if (Fileref.current) {
        var fileReader = new FileReader();
        fileReader.onload = function () {
          var typedarray = new Uint8Array(this.result);
          console.log(typedarray, "=-=-typedarray");
          // Convert typedarray to Base64 safely
          const base64String = uint8ArrayToBase64(typedarray);

          // Store in LocalStorage
          setpdfAddateData(base64String);
          localStorage.setItem("pdfData", base64String);
          console.log("Data stored in localStorage");

          // Retrieve and decode Base64 data
          const storedBase64 = localStorage.getItem("pdfData");
          if (storedBase64) {
            const byteArray = base64ToUint8Array(storedBase64);

            const pdf = new PDFAnnotate("pdf-container", byteArray, {
              onPageUpdated(page, oldData, newData) {
                console.log(page, oldData, newData);
              },
              ready(canvases) {
                canvases?.forEach((canvas) => {
                  canvas.on("mouse:up", (e) => {
                    console.log("mouse clicked", e);
                  });
                });
              },
              scale: 1.5,
              pageImageCompression: "MEDIUM",
            });

            setPdfInstance(pdf);
            setfile(true);
          }
        };
        fileReader.readAsArrayBuffer(Fileref.current);

      } else {
        toast.error("Please select file");
      }
    }
  };


  const downloadPdf = () => {
    pdfInstance.savePdf(fileNamenew)
  }
  const saveToPDF = async () => {
    try {
      pdfInstance.serializePdf(async function (string) {
        console.log(string);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        formData.append("id", _id);
        formData.append("pdfbase64", pdfAddateData);
        formData.append("signature", string);
        formData.append("status", _id === "" ? 0 : 1);
        formData.append("email", Email === "" ? userDetails1.email : Email);
        formData.append("name", name === "" ? userDetails1.fullName : name);
        setloader(true);
        const response = await axios.post(
          apiurl + "api/save-signed-pdf",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        setloader(false);

        // Handle response
        if (response.data.status === true) {
          navigate("/digitalDash");
          toast.success(response.data.Message);
        } else {
          toast.error(response.data.Message);
        }
      });
    } catch (error) {
      console.error("Error generating or uploading PDF:", error);
      setloader(false); // Stop loader on error
      toast.error("There was an issue generating the PDF.");
    }
  };
  const clickSign = () => {
    console.log(backsign,"=-=-backsign")
   if(backsign == "done"){

   }else{
    // const img = new fabric.Image.fromURL(backsign, (img) => {
    //   img.set({
    //     left: 100,
    //     top: 100,
    //     scaleX: 0.5,
    //     scaleY: 0.5,
    //   });
    //   pdfInstance.fabricObjects[localStorage.getItem("currpage") == undefined ? 0 : localStorage.getItem("currpage")].add(img);
    //   pdfInstance.fabricObjects[localStorage.getItem("currpage") == undefined ? 0 : localStorage.getItem("currpage")].requestRenderAll();
    // });
    setbacksign("done")
   }
  }
  return (
    <>
      <Headers />
      <div onClick={clickSign} className="card pdf_cls_pdf" id="pdf-container"></div>

      {file == false ? (
        <>
          <section className="py-10 pt-20 comtaimer_he100vh">
            <div className="container">
              <div className="flex flex-wrap row">
                <div className="col-lg-6 p-4">
                  <div className="bg-[#0D0B35] min-h-screen flex items-start justify-center w-full flex-col justify-start items-start">
                    <h2 className="text-left text-white text-3xl font-semibold mb-8 text_light">
                      Add Documents
                    </h2>
                    <div className="page-container">
  <label
    htmlFor="file-upload"
    className="upload-container"
  >
    {Fileref.current === "" ? (
      <>
        <i className="ri-upload-cloud-line text-white text-4xl mb-4 text_light"></i>
        <span className="upload-text text_light">Upload Document</span>
      </>
    ) : (
      <>
        <i className="file-icon"></i>
        <span className="file-text text_light">File selected successfully</span>
      </>
    )}
    <input
      id="file-upload"
      type="file"
      className="file-input"
      onChange={handleFileChange}
    />
  </label>
</div>

                  </div>
                </div>
                <div className="col-lg-6  p-4">
                  <h2 className="text-left text-white text-3xl font-semibold mb-8 text_light">
                    Add Recipients
                  </h2>
                  <div className="min-h-screen flex items-center justify-center card_padding_s">
                    <div className="dark:bg-jacarta-700 w-full rounded-xl p-8  space-y-6">
                      <div className="flex items-center space-x-3 flex_gap">
                        <input
                          type="checkbox"
                          id="only-signer"
                          onChange={checkbox}
                          className="h-5 w-5 text-[#6c41d6] bg-transparent border-2 border-[#6c41d6] rounded focus:ring-0"
                        />
                        <label
                          htmlFor="only-signer"
                          className="text-white text-lg font-medium text_light"
                        >
                          I am the only signer
                        </label>
                      </div>
                      {checkedref.current == false ? (
                        <>
                          <div className="mb-6">
                            <label
                              htmlFor="item-name"
                              className="mb-2 block font-display text-jacarta-700 dark:text-white text-left"
                            >
                              Name<span className="text-red">*</span>
                            </label>
                            <input
                              type="text"
                              id="item-name"
                              name="name"
                              value={name}
                              onChange={(e) => setname(e.target.value)}
                              className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                              placeholder="Enter Name"
                              required
                            />
                          </div>
                          <div className="mb-6">
                            <label
                              htmlFor="item-email"
                              className="mb-2 block font-display text-jacarta-700 dark:text-white text-left"
                            >
                              Email<span className="text-red">*</span>
                            </label>
                            <input
                              type="email"
                              id="item-email"
                              name="email"
                              value={Email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                              placeholder="Enter Email"
                              required
                            />
                          </div>
                          <div className="form_betwine flex justify-end pt-2">
                            <Link
                              className="inline-block rounded bg-accent py-2 px-5 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                              onClick={nextAction}
                            >
                              <i className="ri-user-add-line text-lg"></i>
                              <span>Add recipients</span>
                            </Link>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="fixed bottom-0 left-0 w-full dark:bg-jacarta-700 p-4 fixedFooter">
            {checkedref.current == true ? (
              <div className="container-lg mx-auto flex justify-end gap_cls">
                <button
                  className="inline-block rounded bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                  onClick={() => nextAction("/digitalDash")}
                >
                  Back
                </button>
                <button
                  className="inline-block rounded bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                  onClick={nextAction}
                >
                  Next
                </button>
              </div>
            ) : (
              ""
            )}
          </footer>
        </>
      ) : (
        <>
          <div className="flex min-h-screen bg-[#0D0B35] header_cls">
            {width >= 768 ? <DesktopSidebar /> : <MobileBottomNav />}

            <main className="ml-64 w-full bg-[#0D0B35] p-8 side_content">
              <div
                className="container mx-auto h-[100vh] overflow-y-auto bg-[#10153D] rounded-lg p-6 relative"
                ref={pdfViewerRef}
              >
              </div>
            </main>
            <footer className="fixed bottom-0 left-0 w-full dark:bg-jacarta-700 p-4 footer_respon fixedFooter">
              <div className="container-lg mx-auto flex justify-end gap_cls">
                
                <button
                  onClick={cancel}
                  className="inline-block rounded bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                >
                  Cancel
                </button>
                {loader == true ? (
                  <button className="inline-block rounded bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                    Loading...
                  </button>
                ) : (
                  status == 1 ? <button
                    onClick={downloadPdf}
                    className="inline-block rounded bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                  >
                    Download
                  </button> :
                    <button
                      onClick={saveToPDF}
                      className="inline-block rounded bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                    >
                      Done
                    </button>
                )}
              </div>
            </footer>

            {/* Upload Modal */}
            <div
              className="modal fade"
              id="upload"
              tabIndex="-1"
              aria-labelledby="walletModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered max-w-lg justify-center">
                <div className="modal-content max-w-lg width_modlew_60">
                  <div className="modal-header model_padding">
                    <h5 className="modal-title" id="walletModalLabel">
                      Upload Your Sign
                    </h5>
                    <button
                      type="button"
                      className="btn-close flex_close_button"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="h-6 w-6 fill-jacarta-700 dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                      </svg>
                    </button>
                  </div>

                  <div className="modal-body p-6 text-center">

                  <div className="page-container">
  {signImg === false ? (
    <label htmlFor="file-upload" className="upload-container">
      <i className="upload-icon"></i>
      <span
        className="upload-text"
        onClick={() => fileInputRef.current.click()}
      >
        Upload Signature
      </span>
      <input
        id="file-upload"
        onChange={handleUploadSignature}
        type="file"
        className="file-input"
      />
    </label>
  ) : (
    <label htmlFor="file-upload" className="upload-container">
      <span className="success-text">Sign uploaded successfully</span>
    </label>
  )}
</div>

                  </div>

                  <div className="modal-footer flex items-end justify-end  model_padding">
                    <div className="flex items-end justify-end space-x-4 flex_end_sner">
                      <button
                        onClick={saveUploadedSignature}
                        className="rounded bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        Sign
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Draw Signature Modal */}
            <div
              className="modal fade"
              id="Draw"
              tabIndex="-1"
              aria-labelledby="DrawSignLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered max-w-lg justify-center">
                <div className="modal-content max-w-lg width_modlew_60">
                  <div className="modal-header model_padding">
                    <h5 className="modal-title" id="DrawSignLabel">
                      Draw Your Sign
                    </h5>
                    <button
                      type="button"
                      className="btn-close flex_close_button"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="h-6 w-6 fill-jacarta-700 dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                      </svg>
                    </button>
                  </div>
                  <div className="modal-body p-6 text-center">
                    <SignatureCanvas
                      penColor="black"
                      ref={signatureRef}
                      canvasProps={{
                        width: 400,
                        height: 200,
                        className: "sigCanvas",
                      }}
                    />
                  </div>
                  <div className="modal-footer flex items-end justify-end  model_padding">
                    <div className="flex items-end justify-end space-x-4 flex_end_sner">
                      <button
                        onClick={clearSignature}
                        className="rounded bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        Clear
                      </button>
                      <button
                        onClick={saveSignature}
                        className="rounded bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        Sign
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Type Signature Modal */}
            <div
              className="modal fade"
              id="TextSign"
              tabIndex="-1"
              aria-labelledby="TextSignLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered max-w-lg justify-center">
                <div className="modal-content max-w-lg width_modlew_60">
                  <div className="modal-header model_padding">
                    <h5 className="modal-title" id="TextSignLabel">
                      Type Your Sign
                    </h5>
                    <button
                      type="button"
                      className="btn-close flex_close_button"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="h-6 w-6 fill-jacarta-700 dark:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                      </svg>
                    </button>
                  </div>
                  <div className="modal-body p-6 text-center">
                    <div className="text-white">
                      <input
                        type="text"
                        value={typedSignature}
                        placeholder="Type your signature"
                        onChange={(e) => setTypedSignature(e.target.value)}
                        className="w-full rounded-lg border-jacarta-100 py-3 hover:ring-2 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white dark:placeholder:text-jacarta-300"
                      />
                    </div>
                    <div className="mt-4">
                      <select
                        onChange={handleFontChange}
                        value={selectedFont}
                        className="dropdown-toggle flex items-center justify-between rounded-lg border border-jacarta-100 bg-white py-3 px-3 dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-jacarta-300 max_width_100"
                      >
                        {fonts.map((font, index) => (
                          <option
                            className="scrollbar-custom flex max-h-48 flex-col overflow-y-auto"
                            key={index}
                            value={font}
                          >
                            {font}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="modal-footer flex items-end justify-end model_padding">
                    <div className="flex items-end justify-end space-x-4 flex_end_sner">
                      <button
                        onClick={addText}
                        className="rounded bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        Sign
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default NewLayout;
