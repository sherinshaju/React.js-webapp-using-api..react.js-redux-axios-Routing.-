import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Navbar extends Component {
    cartval = localStorage.getItem("onCart")

  state = {
    cart: false,
  };

  // mouseEnter = () => {
  //   console.log("click");
  //   this.setState({
  //     cart: true
  //   });
  // };

  // mouseLeave = () => {
  //   console.log("click");
  //   this.setState({
  //     cart: false
  //   });
  // };

  render() {
    return (
      <React.Fragment>
        <nav>
          <div className="container">
            <ul className="navbar-left">
              <li>
              <Link to="/"> Home </Link>
              </li>
            </ul>

            <ul className="navbar-right">
              <li onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                <Link to="/cart">
                <span id="cart">
                  <i className="fa fa-shopping-cart" /> Cart
                  <span className="badge ml-1">{this.props.count}</span>
                </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* {this.state.cart === true ? (
          <div className="container">
            <div className="shopping-cart">
              <div className="shopping-cart-header">
                <i className="fa fa-shopping-cart cart-icon" />
                <span className="badge">3</span>
                <div className="shopping-cart-total">
                  <span className="lighter-text">Total:</span>
                  <span className="main-color-text">$2,229.97</span>
                </div>
              </div>

              <ul className="shopping-cart-items">
                <li className="clearfix">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg"
                    alt="item1"
                  />
                  <span className="item-name">Sony DSC-RX100M III</span>
                  <span className="item-price">$849.99</span>
                  <span className="item-quantity">Quantity: 01</span>
                </li>

                <li className="clearfix">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg"
                    alt="item1"
                  />
                  <span className="item-name">KS Automatic Mechanic...</span>
                  <span className="item-price">$1,249.99</span>
                  <span className="item-quantity">Quantity: 01</span>
                </li>

                <li className="clearfix">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg"
                    alt="item1"
                  />
                  <span className="item-name">Kindle, 6" Glare-Free To...</span>
                  <span className="item-price">$129.99</span>
                  <span className="item-quantity">Quantity: 01</span>
                </li>
              </ul>

              <span href="#" className="button">
                Checkout
              </span>
            </div>
          </div>
        ) : null} */}
      </React.Fragment>
    );
  }
}
function Navexport(state){
  return{
      count : state.count
  }
}
export default connect(Navexport)(Navbar);
