import React, { Component } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Product from "./Component/Product/Product";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./Component/Cart/Cart";
import axios from "axios";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    axios(
      "https://cors-anywhere.herokuapp.com/http://13.126.132.56/api/v2/list/products"
    ).then(res => {
      // console.log(res);
      this.props.dispatch({
        type: "Product",
        payload: res.data.results
      });
    });

    axios
      .post(
        "https://cors-anywhere.herokuapp.com/http://13.126.132.56/api/token/",
        {
          username: "test",
          password: "test"
        }
      )
      .then(res => {
        // console.log(res.data);
        localStorage.setItem("token", res.data.access);
      })
      .catch(err => {
        console.log(err);
      });

    let token = localStorage.getItem("token");
    axios(
      `https://cors-anywhere.herokuapp.com/http://13.126.132.56/api/v2/cart/list/`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*"
        }
      }
    )
      .then(response => {
        // console.log(response);
        localStorage.setItem("onCart", response.data.count);
        this.props.dispatch({
          type: "cartProduct",
          payload: response.data.results,
          NewCount : localStorage.getItem("onCart")
        });
      })
      .catch(error => {
        // console.log("kkk");
      });
  }

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
