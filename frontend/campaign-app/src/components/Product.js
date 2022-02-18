import React from "react";
import "../App.css";
import { Route, Routes } from "react-router-dom";
import ListProductComponent from "./ListProductComponent";

function Product() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ListProductComponent />} />
      </Routes>
    </div>
  );
}

export default Product;
