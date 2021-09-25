import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import axios from "axios";

const DeleteCustomer = (props) => {
  const [open, setOpen] = useState(false);
  const { fetchCustomers, cid } = props;

  const deleteCustomer = () => {
    axios
      .delete(`Customers/DeleteCustomer/${cid}`)
      .then(({ data }) => {
        console.log(data);
        fetchCustomers();
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
      <Modal.Header>Delete customer</Modal.Header>
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
          onClick={deleteCustomer}
        />
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteCustomer;
