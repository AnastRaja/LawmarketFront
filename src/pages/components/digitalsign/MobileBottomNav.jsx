import React from "react";

function MobileBottomNav() {
  return (
    <nav className="dark:bg-jacarta-700 fixed bottom-0 left-0 w-full bg-[#0D0B35] flex justify-around py-4 space_around_section">
      <button
        className="flex flex-col items-center text-white hover:text-accent"
        data-bs-toggle="modal"
        data-bs-target="#TextSign"
      >
        <i className="ri-text text-2xl"></i>
        <span className="text-sm">Text</span>
      </button>
      <button
        className="flex flex-col items-center text-white hover:text-accent"
        data-bs-toggle="modal"
        data-bs-target="#Draw"
      >
        <i className="ri-pencil-line text-2xl"></i>
        <span className="text-sm">Draw</span>
      </button>
      <button
        className="flex flex-col items-center text-white hover:text-accent"
        data-bs-toggle="modal"
        data-bs-target="#upload"
      >
        <i className="ri-upload-cloud-line text-2xl"></i>
        <span className="text-sm">Upload</span>
      </button>
    </nav>
  );
}

export default MobileBottomNav;
