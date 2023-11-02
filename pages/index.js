import React from "react";
import ProductService from "../domain/products/services";

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    const productService = new ProductService();
    const data = await productService.getProducts();
    console.log(data);
    return { userAgent };
  }

  render() {
    return <div>Hello World {this.props.userAgent}</div>;
  }
}
