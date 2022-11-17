import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import React, { Component } from "react";

export default class App extends Component {

state={currentCategory:"", products: []}

componentDidMount(){
  this.getProducts();
}

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };


  getProducts = () => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json()) // =>> şuarada response.json sonuna () eklemedim diye hata aldım. saçmalık!
      .then((data) => this.setState({ products: data }));
  };

  render() {
    let productInfo = { title: "Ürünler" };
    let categoryInfo = { title: "Kategoriler" };

    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>

            <Col xs="9">
              <ProductList
              products ={this.state.products}
              currentCategory={this.state.currentCategory}
              info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
