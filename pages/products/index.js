import Button from "../../components/atoms/Button";
import Input from "../../components/atoms/Input";
import Text from "../../components/atoms/Text";
import Datatable from "../../components/molecules/Datatable";
import Modal from "../../components/molecules/Modal";
import ProductService from "../../domain/products/services";
import { parseParams } from "../../helper/params";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: props.productList || [],
      selectedProduct: null,
      viewMode: "",
    };
  }

  static async getInitialProps({ req }) {
    const params = parseParams(req);

    const productService = new ProductService();
    const { data } = await productService.getProducts(params);

    return { productList: data || [], params };
  }

  handleViewProduct = (product) => {
    this.setState({
      selectedProduct: product,
      viewMode: "view",
    });
  };

  handleAddProduct = () => {
    this.setState({
      selectedProduct: {
        product_name: "",
        product_status: "",
      },
      viewMode: "add",
    });
  };

  handleCloseModal = () => {
    this.setState({
      selectedProduct: null,
    });
  };

  handleOnSubmit = (product) => {};

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
        render: (data) => (
          <div>
            <Button label="View" onClick={() => this.handleViewProduct(data)} />
            <Button label="Edit" onClick={() => this.handleViewProduct(data)} />
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
          <Button label="Add New Product" onClick={this.handleAddProduct} />
        </div>
        <Datatable
          data={this.state.productList ? this.state.productList : []}
          columns={tableColumns}
          config={dataTableConfig}
        />

        {this.state.selectedProduct && (
          <Modal
            isOpen={!!this.state.selectedProduct}
            onClose={this.handleCloseModal}
          >
            <h2>Detail Product</h2>
            <div>
              <div>
                <Text>Product Name</Text>
                <Input
                  type="text"
                  value={this.state.selectedProduct.product_name}
                />
              </div>
              <div>
                <Text>Status</Text>
                <Input type="text" value={"Active"} />
              </div>
            </div>
            <br />
            <div>
              <Button label="Cancel" onClick={this.handleCloseModal} />
              <Button
                label={this.state.viewMode === "add" ? "Add" : "Update"}
                onClick={this.handleOnSubmit}
              />
            </div>
          </Modal>
        )}
      </div>
    );
  }
}
