import React from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import DeleteSale from "./DeleteSale";
import EditSale from "./EditSale";

const SaleDisplay = (props) => {
  const { sales, fetchSales } = props;

  return (
    <div className="moving1">
      <Table celled structured>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Customer</Table.HeaderCell>
            <Table.HeaderCell>Product</Table.HeaderCell>
            <Table.HeaderCell>Store</Table.HeaderCell>
            <Table.HeaderCell>DateSold</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {sales.map((s) => (
            <Table.Row key={s.id}>
              <Table.Cell>{s.customer.name}</Table.Cell>
              <Table.Cell>{s.product.name}</Table.Cell>
              <Table.Cell>{s.store.name}</Table.Cell>
              <Table.Cell>
                {new Date(s.dateSold).toLocaleDateString("en-GB")}
              </Table.Cell>
              <Table.Cell>
                <EditSale
                  sId={s.id}
                  customerName={s.customer.name}
                  productName={s.product.name}
                  storeName={s.store.name}
                  soldDate={new Date(s.dateSold).toLocaleDateString("en-GB")}
                />
              </Table.Cell>
              <Table.Cell>
                <DeleteSale sid={s.id} fetchSales={fetchSales} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default SaleDisplay;
