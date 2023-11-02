import Button from "../../components/atoms/Button";
import Input from "../../components/atoms/Input";
import Text from "../../components/atoms/Text";
import Datatable from "../../components/molecules/Datatable";
import ProductService from "../../domain/products/services";
import { parseParams } from "../../helper/params";
import Router from "next/router";

export default class extends React.Component {
  static async getInitialProps({ req }) {
    const params = parseParams(req);

    const productService = new ProductService();
    const { data } = await productService.getProducts(params);

    return { productList: data || [], params };
  }

  render() {
    const tableColumns = [
      {
        label: "Product Name",
        key: "product_name",
      },
      {
        label: "Status Product",
        key: "product_status",
        render: () => <Text>Active</Text>,
      },
      {
        label: "Action",
        key: "action",
        render: () => (
          <div>
            <Button label="View" />
            <Button label="Edit" />
            <Button label="Delete" />
          </div>
        ),
      },
    ];

    const dataTableConfig = {
      limit: 5,
      onPageChange: (page) => {
        window.location.replace(
          "/products?" +
            Object.keys(this.props.params)
              .map((key) => {
                if (key === "_page") {
                  return `_page=${page}`;
                }
                return `${key}=${this.props.params[key]}`;
              })
              .join("&")
        );
      },
      currentPage: this.props.params._page ? this.props.params._page : 1,
    };

    return (
      <div>
        <div>
          <Text>Username</Text>
          <Text>Logout</Text>
        </div>
        <div>
          <Input type="text" placeholder="Search Product..." />
          <Button label="Add New Product" />
        </div>
        <Datatable
          data={this.props.productList ? this.props.productList : []}
          columns={tableColumns}
          config={dataTableConfig}
        />
        {/* <pre>{JSON.stringify(productList, null, 4)}</pre> */}
      </div>
    );
  }
}
