import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  state = {
    cart: false
  };

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
                    <span className="badge ml-1">{this.props.NewCart}</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
function Navexport(state) {
  return {
    count: state.count,
    NewCart: state.NewCart.length
  };
}
export default connect(Navexport)(Navbar);
