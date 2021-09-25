import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import axios from "axios";

const EditCustomer = (props) => {
  const [open, setOpen] = useState(false);
  const { fetchCustomers, cid, cName, cAdd } = props;
  const [customerName, setCustomerName] = useState(props.cName);
  const [custAdd, setCustomerAdd] = useState(props.cAdd);
  const [disBtn, setdisBtn] = useState(false);

  const openeditCustomer = () => {
    axios
      .put(`Customers/PutCustomer/${cid}`, {
        id: cid,
        name: customerName,
        address: custAdd,
      })
      .then(({ data }) => {
        fetchCustomers();
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateCustomerName = (value) => {
    setCustomerName(value);
    if (value.length > 1) {
      setdisBtn(false);
    } else {
      setdisBtn(true);
    }
  };

  useEffect(() => {
    return () => {};
  }, [customerName, custAdd]);

  return (
    <Modal
      className="formwidth"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button content="Edit" icon="edit" color="yellow" />}
    >
      <Modal.Header>Edit customer</Modal.Header>
      <Form className="formmargin" onSubmit={openeditCustomer}>
        <Form.Field
          label="Name"
          control="input"
          required
          type="text"
          autoFocus={true}
          defaultValue={cName}
          onChange={(e) => updateCustomerName(e.target.value)}
        />

        <Form.Field
          label="Address"
          control="input"
          required
          type="text"
          defaultValue={cAdd}
          onChange={(e) => setCustomerAdd(e.target.value)}
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

export default EditCustomer;
