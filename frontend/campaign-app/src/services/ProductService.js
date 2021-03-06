import axios from "axios";

const Product_URL = "http://localhost:8080/product";

class ProductService {
  getProducts() {
    return axios.get(Product_URL + "/allProducts");
  }

  addProducts(Product) {
    return axios.post(Product_URL + "/addProducts", Product);
  }

  // getProductById(ProductId) {
  //   return axios.get(Product_URL + "/getProduct" + ProductId);
  // }

  updateProduct(Product, ProductId) {
    return axios.put(
      Product_URL + "/updateProducts?index=" + ProductId,
      Product
    );
  }

  deleteProduct(ProductId) {
    return axios.delete(Product_URL + "/deleteProducts?index=" + ProductId);
  }

  addCampaignToProduct(id, campaign) {
    return axios.post(
      Product_URL + "/addCampaignToProduct?index=" + id,
      campaign
    );
  }
}

export default new ProductService();
