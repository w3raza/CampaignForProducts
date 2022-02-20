import React from "react";
import "../App.css";
import { Route, Routes } from "react-router-dom";
import ListCampaignComponent from "./ListCampaignComponent";

function Campaign() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ListCampaignComponent />} />
      </Routes>
    </div>
  );
}

export default Campaign;
