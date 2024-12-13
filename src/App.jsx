import {Routes, Route} from "react-router";
import {useEffect} from "react";
import Landing from "./pages/Landing";
import Contract from "./pages/Modules/Contract/Contract";
import ContractPage from "./pages/Modules/Contract/ContractPage";
import Login from "./pages/Login";
import "./App.css";

function App() {
  useEffect(() => {
    function makeTheme() {
      let theme = localStorage.getItem("theme");

      if (theme === "light") {
        document.body.className = "light";
      } else if (theme === "dark") {
        document.body.className = "";
      } else {
        localStorage.setItem("theme", "dark");

        document.body.className = "";
      }
    }
    makeTheme();
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/contractpage" element={<ContractPage />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
