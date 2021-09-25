import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import axios from "axios";

const DeleteSale = (props) => {
  const { sid , fetchSales } = props;
  const [open, setOpen] = useState(false);


  const deleteSale = () => {
    axios
      .delete(`Sales/DeleteSales/${sid}`)
      .then(({ data }) => {
        console.log(data);
        fetchSales();        
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
      <Modal.Header>Delete Sale</Modal.Header>
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
          onClick={deleteSale}
        />
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteSale;
