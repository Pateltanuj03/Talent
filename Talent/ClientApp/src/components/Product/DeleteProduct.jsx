import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import axios from "axios";

const DeleteProduct = (props) => {
  const [open, setOpen] = useState(false);
  const { fetchProducts, pid } = props;

  const deleteProduct = (id) => {
    axios
      .delete(`Products/DeleteProduct/${pid}`)
      .then(({ data }) => {
        console.log(data);
        fetchProducts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Modal
      className="formwidth"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button icon="trash alternate" color="red" content="Delete" />}
    >
      <Modal.Header>Delete Product</Modal.Header>
      <Form className="formmargin">
        <Form.Field>
          <label>Are you sure?</label>
        </Form.Field>
      </Form>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)} content="cancel" />

        <Button
          icon="delete"
          content="Delete"
          labelPosition="right"
          color="red"
          onClick={deleteProduct}
        />
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteProduct;
