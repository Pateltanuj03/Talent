import React from "react";
import { Dropdown, Menu, Table, Pagination } from "semantic-ui-react";
import DeleteCustomer from "./DeleteCustomer";
import EditCustomer from "./EditCustomer";

const CustomerDisplay = (props) => {
  const { customers, fetchCustomers } = props;
  return (
    <div className="moving1">
      <Table celled structured>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Address</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {customers.map((c) => (
            <Table.Row key={c.id}>
              <Table.Cell>{c.name}</Table.Cell>
              <Table.Cell>{c.address}</Table.Cell>
              <Table.Cell>
                <EditCustomer
                  fetchCustomers={fetchCustomers}
                  cid={c.id}
                  cName={c.name}
                  cAdd={c.address}
                />
              </Table.Cell>
              <Table.Cell>
                <DeleteCustomer fetchCustomers={fetchCustomers} cid={c.id} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default CustomerDisplay;
