import React, {  } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import './NavMenu.css';

const NavMenu = () => {
  return (
    <Menu pointing secondary className="App">
      <Menu.Item as={NavLink} name="React" to="/" className="App" />
      <Menu.Item as={NavLink} name="Customers" to="/Customer/CustomerHome" className="App" />
      <Menu.Item as={NavLink} name="Products" to="/Product/ProductHome" className="App"/>
      <Menu.Item as={NavLink} name="Stores" to="/Store/StoreHome" className="App"/>
      <Menu.Item as={NavLink} name="Sales" to="/Sales/SaleHome" className="App"/>
    </Menu>
    
  );
}

export default NavMenu;