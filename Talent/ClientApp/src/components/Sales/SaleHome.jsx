import axios from "axios";
import { data } from "jquery";
import React, { Component } from "react";
import { Message, Icon } from "semantic-ui-react";
import AddSale from "./AddSale";
import SaleDisplay from "./SaleDisplay";

export class SaleHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sales: [],
      customer: [],
      product: [],
      store: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchSales();
  }

  componentWillUnmount() {}

  getCustData = () => {
    axios
      .get("Customers/GetCustomer")
      .then(({ data }) => {
        this.setState({
          customer: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getProductData = () => {
    axios
      .get("Products/GetProduct")
      .then(({ data }) => {
        this.setState({
          product: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getStoreData = () => {
    axios
      .get("Stores/GetStore")
      .then(({ data }) => {
        this.setState({
          store: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  fetchSales = () => {
    this.setState({
      loading: true,
    });
    axios
      .get("Sales/GetSales")
      .then(({ data }) => {
        this.setState({
          sales: data,
          loading: false,
        });

        this.getCustData();
        this.getProductData();
        this.getStoreData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { sales, loading, customer, product, store } = this.state;
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
          <AddSale
            parent="SaleHome"
            customer={customer}
            product={product}
            store={store}
            fetchSales={this.fetchSales}
          />
          <SaleDisplay
            parent="SaleHome"
            sales={sales}
            fetchSales={this.fetchSales}
          />
        </div>
      );
    }
  }
}
