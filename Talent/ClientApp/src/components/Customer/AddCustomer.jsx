import React, { useState, useEffect } from "react";
import { Form, Button, Modal } from "semantic-ui-react";
import axios from "axios";

const AddCustomer = (props) => {
  const [open, setOpen] = React.useState(false);
  const { fetchCustomers } = props;
  const [customername, setCustomerName] = useState("");
  const [custAdd, setCustomerAdd] = useState("");
  const [disBtn, setdisBtn] = useState(true);

  const addCustomer = () => {
    axios
      .post("Customers/PostCustomer", {
        name: customername,
        address: custAdd,
      })
      .then(({ data }) => {
        fetchCustomers();
        console.log("add" + props.open);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    return () => {};
  }, [customername, custAdd]);

  const updateCustomerName = (value) => {
    setCustomerName(value);
    if (value.length > 1) {
      setdisBtn(false);
    } else {
      setdisBtn(true);
    }
  };

  const updateCustomerAdd = (value) => {
    setCustomerAdd(value);
      };

  return (
    <Modal
      className="formwidth"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button primary className="divpad">
          New Customer
        </Button>
      }
    >
      <Modal.Header>Create Customer</Modal.Header>
      <Form className="formmargin" onSubmit={addCustomer}>
        <Form.Field
          label="Name"
          control="input"
          required
          type="text"
          autoFocus={true}
          placeholder="Please enter customer Name"
          onChange={(e) => updateCustomerName(e.target.value)}
        />
        <Form.Field
          required={true}
          label="Address"
          control="input"
          type="text"
          placeholder="Please enter your address"
          onChange={(e) => updateCustomerAdd(e.target.value)}
        />
        <br/><hr />
        <Modal.Actions className="addbtn">
          <Button
            color="black"
            onClick={() => setOpen(false)}
            content="cancel"
          />
          <Button
            disabled={disBtn}
            type="submit"
            icon="check"
            content="create"
            labelPosition="right"
            color="green"
          />
        </Modal.Actions>
      </Form>
    </Modal>
  );
};

export default AddCustomer;
