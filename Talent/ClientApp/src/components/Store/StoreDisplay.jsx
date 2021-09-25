import React from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import DeleteStore from "./DeleteStore";
import EditStore from "./EditStore";

const StoreDisplay = (props) => {
  const { Stores, fetchStores } = props;

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
          {Stores.map((s) => (
            <Table.Row key={s.id}>
              <Table.Cell>{s.name}</Table.Cell>
              <Table.Cell>{s.address}</Table.Cell>
              <Table.Cell>
                <EditStore
                  fetchStores={fetchStores}
                  sid={s.id}
                  sName={s.name}
                  sadd={s.address}
                />
              </Table.Cell>
              <Table.Cell>
                <DeleteStore fetchStores={fetchStores} sid={s.id} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default StoreDisplay;
