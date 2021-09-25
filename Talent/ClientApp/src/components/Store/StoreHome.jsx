import axios from "axios";
import React, { Component } from "react";
import { Message, Icon } from "semantic-ui-react";
import AddStore from "./AddStore";
import StoreDisplay from "./StoreDisplay";

export class StoreHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      loading: false,
    };
  }
  componentDidMount() {
    this.fetchStores();
  }

  componentWillUnmount() {}

  fetchStores = () => {
    this.setState({
      loading: true,
    });
    axios
      .get("Stores/GetStore")
      .then(({ data }) => {
        console.log(data);
        this.setState({
          stores: data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { stores, loading } = this.state;
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
          <AddStore fetchStores={this.fetchStores} />
          <StoreDisplay
            parent="StoreHome"
            Stores={stores}
            fetchStores={this.fetchStores}
          />
        </div>
      );
    }
  }
}
