import React, { useEffect, useState } from "react";
import useStateRef from "react-usestateref";

function DesktopSidebar() {
  const [value, setvalue, valueref] = useStateRef(1)

  const onChange = (e) => {
    if (Number(localStorage.getItem("pageNumer")) < e.target.value) {
      setvalue(localStorage.getItem("pageNumer"))
    }else{
    setvalue(e.target.value)
    }
    localStorage.setItem('currpage', valueref.current == null ? 1 : valueref.current)
  }
  return (
    <aside className="width_60 dark:bg-jacarta-700 fixed left-0 top-0 h-full flex flex-col py-8 px-4 space-y-8">
      <h2 className="mb-6 text-left font-display text-2xl font-medium text-jacarta-700 dark:text-white mb-8">
        Choose Sign Options
      </h2>
      <div className="flex flex-col space-y-6">
        <button
          className="flex items-center space-x-2 text-white hover:text-accent transition nav-link relative flex items-center whitespace-nowrap py-3 px-0 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white tab_hover"
          data-bs-toggle="modal"
          data-bs-target="#TextSign"
        >
          <i className="ri-text text-2xl"></i>
          <span className="text-lg">Text</span>
        </button>
        <button
          className="flex items-center space-x-2 text-white hover:text-accent transition nav-link relative flex items-center whitespace-nowrap py-3 px-0 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white tab_hover"
          data-bs-toggle="modal"
          data-bs-target="#Draw"
        >
          <i className="ri-pencil-line text-2xl"></i>
          <span className="text-lg">Draw</span>
        </button>
        <button
          className="flex items-center space-x-2 text-white hover:text-accent transition nav-link relative flex items-center whitespace-nowrap py-3 px-0 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white tab_hover"
          data-bs-toggle="modal"
          data-bs-target="#upload"
        >
          <i className="ri-upload-cloud-line text-2xl"></i>
          <span className="text-lg">Upload</span>
        </button>
        <input type="number" onChange={onChange} value={valueref.current} min={1} placeholder="Enter page number" />
      </div>
    </aside>
  );
}

export default DesktopSidebar;
