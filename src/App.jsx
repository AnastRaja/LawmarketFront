import {Routes, Route} from "react-router";
import {useEffect} from "react";
import Landing from "./pages/Landing";
import Contract from "./pages/Modules/Contract/Contract";
import Chat from "./pages/Modules/Aichat/Chat";
import ContractPage from "./pages/Modules/Contract/ContractPage";
import Login from "./pages/Login";
import Mediators from "./pages/Modules/mediators/Mediators";
import Arbitrators from "./pages/Modules/arbitrators/Arbitrators";
import Profile from "./pages/Modules/Profile/Profile";
import TemplateDetails from "./pages/Modules/templateDetails/templateDetails";
import CreatePage from "./pages/Modules/Create/CreatePage";

import LegalTemplates from "./pages/Modules/LegalTemplates/LegalTemplates";
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
        <Route path="/chat" element={<Chat />} />
        <Route path="/contractpage" element={<ContractPage />} />
        <Route path="/mediators" element={<Mediators />} />
        <Route path="/arbitrators" element={<Arbitrators />} />
        <Route path="/legaltemplates" element={<LegalTemplates />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/templatedetails" element={<TemplateDetails />} />
        <Route path="/create" element={<CreatePage />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
