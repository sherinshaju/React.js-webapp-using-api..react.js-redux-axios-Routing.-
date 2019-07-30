import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import swal from "sweetalert";

class Product extends Component {
  token = localStorage.getItem("token");
  state = {
    addCart: true
  };
  displayCount = () => {
    axios(
      `https://cors-anywhere.herokuapp.com/http://13.126.132.56/api/v2/cart/list/`,
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Access-Control-Allow-Origin": "*"
        }
      }
    )
      .then(response => {
        localStorage.setItem("onCart", response.data.count);
        this.props.dispatch({
          type: "cartProduct",
          payload: response.data.results,
          NewCount : localStorage.getItem("onCart")
        });
      })
      .catch(error => {});
  };

  addCart = key => {
    let newData = {
      product: key,
      quantity: 1
    };
    axios(
      `https://cors-anywhere.herokuapp.com/http://13.126.132.56/api/v2/cart/create/`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.token}`,
          "Content-Type": `application/json`
        },
        data: newData
      }
    )
      .then(res => {
        this.displayCount();
        swal({
          title: "Product Add to Cart",
          text: "Check Your Cart",
          icon: "success",
          button: "Aww yiss!"
        });
      })
      .catch(err => {
        if (err) {
          swal("Oh noes!", "Login to add to cart", "error");
        } else {
          swal.stopLoading();
          swal.close();
        }
        this.props.dispatch({
          type: "loading",
          payload: false
        });
      });
  };
  fav = () =>{
    document.body.style.backgroundColor = "red";
  }
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h3 className="h3 text-center my-5"> Product </h3>
          <div className="row">
            {this.props.product.map(product => (
              <div className="col-md-3 col-sm-6 mb-3" key={product.id}>
                <div className="product-grid4">
                  <div className="product-image4">
                    {product.productimages.map((productNew, index) => (
                      <span key={index}>
                        <img
                          className="pic-1"
                          src={productNew.image_1}
                          alt="qq"
                        />
                        <img
                          className="pic-2"
                          src={productNew.image_2}
                          alt="qq"
                        />
                      </span>
                    ))}
                    <ul className="social">
                      <li>
                        <a data-tip="Add to Cart" onChange={this.fav}  onClick={() => this.addCart(product.id)}>
                          <i className="fa fa-heart" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="product-content px-2">
                    <h3 className="title text-left">
                      <span>{product.name}</span>
                    </h3>
                    <div className="price text-left">Rs.{product.price}</div>

                    <span
                      className="add-to-cart"
                      onClick={() => this.addCart(product.id)}
                    >
                      ADD TO CART
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function getProduct(state) {
  return {
    product: state.product,
    cart: state.cart
  };
}

export default connect(getProduct)(Product);
