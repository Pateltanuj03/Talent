import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import axios from "axios";

const AddStore = (props) => {
  const [open, setOpen] = React.useState(false);
  const { fetchStores } = props;
  const [Storename, setStoreName] = useState("");
  const [storeAdd, setStoreAdd] = useState("");
  const [disBtn, setdisBtn] = useState(true);

  const addStore = () => {
    axios
      .post("Stores/PostStore", {
        name: Storename,
        address: storeAdd,
      })
      .then(({ data }) => {
        fetchStores();
        console.log("add" + props.open);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    return () => {};
  }, [Storename, storeAdd]);

  const updateStoreName = (value) => {
    setStoreName(value);
    if (value.length > 1) {
      setdisBtn(false);
    } else {
      setdisBtn(true);
    }
  };

  const updateStoreAdd = (value) => {
    setStoreAdd(value);
  };

  return (
    <Modal
      className="formwidth"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button primary className="divpad">
          New Store
        </Button>
      }
    >
      <Modal.Header>Create Store</Modal.Header>
      <Form className="formmargin" onSubmit={addStore}>
        <Form.Field
          label="Name"
          control="input"
          required
          type="text"
          autoFocus={true}
          placeholder="Please enter store Name"
          onChange={(e) => updateStoreName(e.target.value)}
        />
        <Form.Field
          label="Address"
          control="input"
          required
          type="text"
          placeholder="Please enter store address"
          onChange={(e) => updateStoreAdd(e.target.value)}
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

export default AddStore;
