import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import axios from "axios";

const EditProduct = (props) => {
  const [open, setOpen] = useState(false);
  const { fetchProducts, pid, pName, price } = props;
  const [ProductName, setProductName] = useState(props.pName);
  const [Pricep, setPricep] = useState(props.price);
  const [disBtn, setdisBtn] = useState(false);

  const openeditProduct = () => {
    axios
      .put(`Products/PutProduct/${pid}`, {
        id: pid,
        name: ProductName,
        price: Pricep,
      })
      .then(({ data }) => {
        fetchProducts();
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateProductName = (value) => {
    setProductName(value);
    if (value.length > 1) {
      setdisBtn(false);
    } else {
      setdisBtn(true);
    }
  };

  useEffect(() => {
    return () => {};
  }, [ProductName, Pricep]);

  return (
    <Modal
      className="formwidth"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button content="Edit" icon="edit" color="yellow" />}
    >
      <Modal.Header>Edit Product</Modal.Header>
      <Form className="formmargin" onSubmit={openeditProduct}>
        <Form.Field
          label="Name"
          control="input"
          required
          type="text"
          autoFocus={true}
          defaultValue={pName}
          onChange={(e) => updateProductName(e.target.value)}
        />

        <Form.Field
          label="Price"
          control="input"
          required
          type="text"
          defaultValue={price}
          onChange={(e) => setPricep(e.target.value)}
        />

        <br />
        <hr />
        <Modal.Actions className="addbtn">
          <Button
            color="black"
            onClick={() => setOpen(false)}
            content="cancel"
          />

          <Button
            id="btnp"
            disabled={disBtn}
            type="submit"
            icon="check"
            content="edit"
            labelPosition="right"
            color="green"
          />
        </Modal.Actions>
      </Form>
    </Modal>
  );
};

export default EditProduct;
