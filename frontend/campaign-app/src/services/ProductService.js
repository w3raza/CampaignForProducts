import axios from "axios";

const Product_URL = "http://localhost:8080/product";

class ProductService {
  getProducts() {
    return axios.get(Product_URL + "/allProducts");
  }

  addProducts(Product) {
    return axios.post(Product_URL + "/addProducts", Product);
  }

  // createProduct(Product) {
  //   return axios.post(Product_URL, Product);
  // }

  getProductById(ProductId) {
    return axios.get(Product_URL + "/getProduct" + ProductId);
  }

  //   updateProduct(Product, ProductId) {
  //     return axios.put(Product_URL + "/" + ProductId, Product);
  //   }

  //   deleteProduct(ProductId) {
  //     return axios.delete(Product_URL + "/" + ProductId);
  //   }
}

export default new ProductService();
