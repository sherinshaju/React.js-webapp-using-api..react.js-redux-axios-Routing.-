import React, { Component } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Product from "./Component/Product/Product";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./Component/Cart/Cart";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Route path="/" exact component={Product} />
          <Route path="/cart" component={Cart} />
        </Router>
      </React.Fragment>
    );
  }
}
function Newdata(state) {
  return {
    products: state.products
  };
}

export default connect(Newdata)(App);
