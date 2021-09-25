import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import axios from "axios";

const EditStore = (props) => {
  const [open, setOpen] = useState(false);
  const { fetchStores, sid, sName, sadd } = props;
  const [storeName, setStoreName] = useState(props.sName);
  const [sAdd, setStoreAdd] = useState(props.sadd);
  const [disBtn, setdisBtn] = useState(false);

  const openeditStore = () => {
    axios
      .put(`Stores/PutStore/${sid}`, {
        id: sid,
        name: storeName,
        address: sAdd,
      })
      .then(({ data }) => {
        fetchStores();
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateStoreName = (value) => {
    setStoreName(value);
    if (value.length > 1) {
      setdisBtn(false);     
    } else {
      setdisBtn(true);
    }
   
  };

  useEffect(() => {
    return () => {};
  }, [storeName, sAdd]);

  return (
    <Modal
      className="formwidth"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button content="Edit" icon="edit" color="yellow" />}
    >
      <Modal.Header>Edit Store</Modal.Header>
      <Form className="formmargin" onSubmit={openeditStore}>
        <Form.Field
          label="Name"
          control="input"
          required
          type="text"
          autoFocus={true}
          defaultValue={sName}
          onChange={(e) => updateStoreName(e.target.value)}
        />

        <Form.Field
          label="Address"
          control="input"
          required
          type="text"
          defaultValue={sadd}
          onChange={(e) => setStoreAdd(e.target.value)}
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
            id="btnc"
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

export default EditStore;
