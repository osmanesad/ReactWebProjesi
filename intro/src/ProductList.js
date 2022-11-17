import React, { Component } from "react";
import {Table} from "reactstrap";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Ürün Adı</th>
              <th>Fiyat</th>
              <th>Stok</th>
            </tr>
          </thead>
          <tbody>
          {this.props.products.map((product) => ( // map bir array function
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.productName}</td>
              <td>{product.unitPrice}</td>
              <td>{product.unitsInStock}</td>
              
            </tr>
          ))}
          
          </tbody>
        </Table>
      </div>

    );
  }
}
