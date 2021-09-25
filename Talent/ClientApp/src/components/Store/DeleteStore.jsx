import React, { useState } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import axios from "axios";

const DeleteStore = (props) => {
  const [open, setOpen] = useState(false);
  const { fetchStores, sid } = props;

  const deleteStore = (id) => {
    axios
      .delete(`Stores/DeleteStore/${sid}`)
      .then(({ data }) => {
        console.log(data);
        fetchStores();
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
      <Modal.Header>Delete Store</Modal.Header>
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
          onClick={deleteStore}
        />
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteStore;
