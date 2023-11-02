import axios from "axios";

export default class ProductService {
  getProducts(params) {
    return axios.get(`http://femaledaily-products.loca.lt/products`, {
      params,
    });
  }
}
