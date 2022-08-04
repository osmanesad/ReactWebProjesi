import React, { Component } from 'react'
import {Nav, NavItem, NavLink} from 'reactstrap'

export default class navi extends Component {
  render() {
    return (
      <div>
<h4>Menüler</h4>
<Nav
>
  <NavItem>
    <NavLink
      active
      href="#"
    >
      Link
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink href="#">
      Another Link
    </NavLink>
  </NavItem>
  <NavItem>
    <NavLink
      disabled
      href="#"
    >
      Disabled Link
    </NavLink>
  </NavItem>
</Nav>
      </div>
    )
  }
}
