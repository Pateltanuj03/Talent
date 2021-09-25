import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Input, Dropdown } from "semantic-ui-react";
import axios from "axios";

const EditSale = (props) => {
  const [open, setOpen] = useState(false);
  const { fetchSales, sId, customerName, productName, storeName, soldDate } =
    props;
  const [disBtn, setdisBtn] = useState(false);
  const [dateSold, setdateSold] = useState(props.soldDate);
  const [cName, setcName] = useState(props.customerName);
  const [pName, setpName] = useState(props.productName);
  const [sName, setsName] = useState(props.storeName);
  const [cid, setcid] = useState("");
  const [pid, setpid] = useState("");
  const [sid, setsid] = useState("");
  const [cust, setcust] = useState([]);
  const [prod, setprod] = useState([]);
  const [store, setstore] = useState([]);

  const storeData = () => {
    axios
      .get("Stores/GetStore")
      .then(({ data }) => {
        setstore(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const prodData = () => {
    axios
      .get("Products/GetProduct")
      .then(({ data }) => {
        setprod(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const custData = () => {
    axios
      .get("Customers/GetCustomer")
      .then(({ data }) => {
        setcust(data);
        prodData();
        storeData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openeditSale = () => {
    axios
      .put(`Sales/PutSale/${sId}`, {
        sid: sId,
      })
      .then(({ data }) => {
        fetchSales();
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updatesoldDate = (value) => {
    setdateSold(value);
    if (value.length > 7) {
      setdisBtn(false);
    } else {
      setdisBtn(true);
    }
    console.log(dateSold);
  };

  const custChange = (e, id) => {
    setcName(e);
    setcid(id);
  };
  const prodChange = (e, id) => {
    setpName(e);
    setpid(id);
  };
  const storeChange = (e, id) => {
    setsName(e);
    setsid(id);
  };
  const chkcust = (e, id) => {
    if (e === cName) {
      return e;
    }
  };
  const chkprod = (e, id) => {
    if (e === pName) {
      return e;
    }
  };

  const chkstore = (e, id) => {
    if (e === sName) {
      return e;
    }
  };
  return (
    <Modal
      className="formwidth"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button content="Edit" icon="edit" color="yellow" onClick={custData} />
      }
    >
      <Modal.Header>Edit Sale</Modal.Header>
      <Form className="formmargin" onSubmit={openeditSale}>
        <Form.Field label="Sold Date" required />
        <Input
          value={dateSold}
          onChange={(e) => {
            updatesoldDate(e.target.value);
          }}
        />

        <Form.Field label="Customer" control="select">
          {cust.map((c) => (
            <option
              key={c.id}
              selected={chkcust(c.name, c.id)}
              onChange={(e) => {
                custChange(e.target.value, c.id);
              }}
            >
              {c.name}
            </option>
          ))}
        </Form.Field>
        <Form.Field label="Product" control="select" required>
          {prod.map((p) => (
            <option
              key={p.id}
              selected={chkprod(p.name, p.id)}
              onChange={(e) => {
                prodChange(e.target.value, p.id);
              }}
            >
              {p.name}
            </option>
          ))}
        </Form.Field>
        <Form.Field label="Store" control="select" required>
          {store.map((s) => (
            <option
              key={s.id}
              selected={chkstore(s.name, s.id)}
              onChange={(e) => {
                storeChange(e.target.value, s.id);
              }}
            >
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

export default EditSale;
