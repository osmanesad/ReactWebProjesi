import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";

export default class navi extends Component {
  render() {
    return (
      <div>
        <h4>Menüler</h4>
        <Nav>
          <NavItem>
            <NavLink active href="#">
              Ana Sayfa
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Tüm Ürünler</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Kitaplar</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Dergi
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Kahve
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
