import React, { Component } from "react";
import {ListGroup, ListGroupItem} from 'reactstrap'

export default class CategoryList extends Component {



  render() {
    return (

      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          <ListGroupItem>Roman</ListGroupItem>
          <ListGroupItem>Yabancı Kitaplar</ListGroupItem>
          <ListGroupItem>Kişisel Gelişim</ListGroupItem>
          <ListGroupItem>Kahve</ListGroupItem>
          <ListGroupItem>Dergi</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
