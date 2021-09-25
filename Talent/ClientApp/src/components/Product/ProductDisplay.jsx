import React from "react";
import { Button, Icon, Menu, Table } from "semantic-ui-react";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";

const ProductDisplay = (props) => {
  const { products, fetchProducts } = props;

  return (
    <div className="moving1">
      <Table celled structured>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((p) => (
            <Table.Row key={p.id}>
              <Table.Cell>{p.name}</Table.Cell>
              <Table.Cell>${p.price}</Table.Cell>
              <Table.Cell>
                <EditProduct
                  fetchProducts={fetchProducts}
                  pid={p.id}
                  pName={p.name}
                  price={p.price}
                />
              </Table.Cell>
              <Table.Cell>
                <DeleteProduct
                  fetchProducts={fetchProducts}
                  pid={p.id}
                  pName={p.name}
                  price={p.price}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ProductDisplay;
