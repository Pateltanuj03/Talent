import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import axios from "axios";

const AddProduct = (props) => {
  const [open, setOpen] = React.useState(false);
  const { fetchProducts } = props;
  const [Productname, setProductName] = useState("");
  const [Pprice, SetPrice] = useState("");
  const [disBtn, setdisBtn] = useState(true);

  const addProduct = () => {
    axios
      .post("Products/PostProduct", {
        name: Productname,
        price: Pprice,
      })
      .then(({ data }) => {
        fetchProducts();
        console.log("add" + props.open);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    return () => {};
  }, [Productname, Pprice]);

  const updateProductName = (value) => {
    setProductName(value);
    if (value.length > 1) {
      setdisBtn(false);
    } else {
      setdisBtn(true);
    }
  };

  const updateProductPrice = (value) => {
    SetPrice(value);
     };

  return (
    <Modal
      className="formwidth"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button primary className="divpad">
          New Product
        </Button>
      }
    >
      <Modal.Header>Create Product</Modal.Header>
      <Form className="formmargin" onSubmit={addProduct}>
        <Form.Field
          label="Name"
          control="input"
          required
          type="text"
          autoFocus={true}
          placeholder="Please enter product Name"
          onChange={(e) => updateProductName(e.target.value)}
        />
        <Form.Field
          label="Price"
          control="input"
          required
          type="text"
          placeholder="Please enter product price"
          onChange={(e) => updateProductPrice(e.target.value)}
        />
        <br /><hr/>
        <Modal.Actions className="addbtn">
          <Button
            color="black"
            onClick={() => setOpen(false)}
            content="cancel"
          />

          <Button
            id="btn1"
            disabled={disBtn}
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

export default AddProduct;
