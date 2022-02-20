import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import Campaign from "./components/Campaign";
import Nav from "./components/Nav";
import FooterComponent from "./components/FooterComponent";
import CreateProductComponent from "./components/CreateProductComponent";
import UpdateProductComponent from "./components/UpdateProductComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product/*" element={<Product />} />
          <Route
            path="/product/addProduct"
            element={<CreateProductComponent />}
          />
          <Route
            path="/product/updateProduct/:id"
            element={<UpdateProductComponent />}
          />
          <Route path="/campaign" element={<Campaign />} />
        </Routes>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
