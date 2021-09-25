import axios from "axios";
import React, { Component } from "react";
import { Message, Icon } from "semantic-ui-react";
import AddCustomer from "./AddCustomer";
import CustomerDisplay from "./CustomerDisplay";

export class CustomerHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      loading: false,
    };
  }
  componentDidMount() {
    this.fetchCustomers();
  }

  componentWillUnmount() {}

  fetchCustomers = () => {
    this.setState({
      loading: true,
    });
    axios
      .get("Customers/GetCustomer")
      .then(({ data }) => {
        console.log(data);
        this.setState({
          customers: data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { customers, loading } = this.state;
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
          <AddCustomer fetchCustomers={this.fetchCustomers} />
          <CustomerDisplay
            parent="CustomerHome"
            customers={customers}
            fetchCustomers={this.fetchCustomers}
          />
        </div>
      );
    }
  }
}
