import React, { useState, useEffect } from "react";
import { Form, Button, Modal, Select, Input } from "semantic-ui-react";
import axios from "axios";
import { DateTimeInput } from "semantic-ui-calendar-react";

const AddSale = (props) => {
  const { customer, product, store, fetchSales } = props;
  const [open, setOpen] = React.useState(false);
  const [soldDate, setDate] = useState("");
  const [CId, setCId] = useState();
  const [PId, setPId] = useState();
  const [SId, setSId] = useState();
  const [disBtn, setdisBtn] = useState(true);

  const udateSoldDate = (value) => {
    setDate(value);
    if (value.length > 6) {
      setdisBtn(false);
    } else {
      setdisBtn(true);
    }
  };

  const createSale = () => {
    axios
      .post("Sales/PostSales", {
        ProductId: PId,
        CustomerId: CId,
        StoreId: SId,
        DateSold: soldDate,
      })
      .then(({ data }) => {
        fetchSales();
      })
      .catch((err) => {});
  };

  useEffect(() => {}, [soldDate, CId, PId, SId]);

  return (
    <Modal
      className="formwidth"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button primary className="divpad">
          New Sales
        </Button>
      }
    >
      <Modal.Header>Create Sales</Modal.Header>
      <Form className="formmargin" onSubmit={createSale}>
        <Form.Field label="Sold Date" required />
        <Input
          value={soldDate}
          onChange={(e) => {
            udateSoldDate(e.target.value);
          }}
        />
        <Form.Field
          label="Customer"
          control="select"
          onChange={(e) => setCId(e.target.value)}
          required
        >
          <option key="0" value="">
            -select customer-
          </option>
          {customer.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </Form.Field>
        <Form.Field
          label="Product"
          control="select"
          onChange={(e) => setPId(e.target.value)}
          required
        >
          <option key="0" value="">
            -select Product-
          </option>
          {product.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </Form.Field>
        <Form.Field
          label="Store"
          control="select"
          onChange={(e) => setSId(e.target.value)}
          required
        >
          <option key="0" value="">
            -select Store-
          </option>
          {store.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </Form.Field>
        <br />
        <hr />
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

export default AddSale;
