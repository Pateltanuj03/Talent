import axios from "axios";
import React, { Component } from "react";
import { Message, Icon } from "semantic-ui-react";
import AddProduct from "./AddProduct";
import ProductDisplay from "./ProductDisplay";

export class ProductHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: false,
    };
  }
  componentDidMount() {
    this.fetchProducts();
  }

  componentWillUnmount() {}

  fetchProducts = () => {
    this.setState({
      loading: true,
    });
    axios
      .get("Products/GetProduct")
      .then(({ data }) => {
        console.log(data);
        this.setState({
          products: data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { products, loading } = this.state;
    if (loading) {
      return (
        <div>
          <Message icon>
            <Icon name="circle notched" loading />
            <Message.Content>
              <Message.Header>Just one second</Message.Header>
              We are fetching that content for you.
            </Message.Content>
          </Message>
        </div>
      );
    } else {
      return (
        <div>
          <AddProduct fetchProducts={this.fetchProducts} />
          <ProductDisplay
            parent="ProductHome"
            products={products}
            fetchProducts={this.fetchProducts}
          />
        </div>
      );
    }
  }
}
