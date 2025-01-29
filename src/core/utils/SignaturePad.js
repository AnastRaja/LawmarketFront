// src/components/SignaturePad.js
import React, { useRef } from 'react';
// import SignatureCanvas from 'react-signature-canvas';

const SignaturePad = ({ onSave }) => {
  const sigCanvas = useRef(null);

  const saveSignature = () => {
    const signatureData = sigCanvas.current.toDataURL('image/png');
    onSave(signatureData);
  };

  const clearSignature = () => {
    sigCanvas.current.clear();
  };

  return (
    <div>
      {/* <SignatureCanvas ref={sigCanvas} canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }} /> */}
      <button onClick={saveSignature}>Save Signature</button>
      <button onClick={clearSignature}>Clear</button>
    </div>
  );
};

export default SignaturePad;
