import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: []
  };

  /* App.js içine taşındı
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };
*/

componentDidMount(){
  this.getCategories();
}

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json()) // =>> şuarada response.json sonuna () eklemedim diye hata aldım. saçmalık!
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((category) => ( // map bir array function
            <ListGroupItem
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    );
  }
}