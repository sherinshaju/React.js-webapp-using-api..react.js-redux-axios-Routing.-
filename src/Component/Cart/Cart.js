import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import swal from "sweetalert";
class Cart extends Component {
  displayCount = () => {
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
          NewCount: localStorage.getItem("onCart")
        });
      })
      .catch(error => {
        // console.log("kkk");
      });
  };
  remove = key => {
    let token = localStorage.getItem("token");
    axios
      .delete(
        `https://cors-anywhere.herokuapp.com/http://13.126.132.56/api/v2/cart/retrivedelete/${key}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      .then(res => {
        this.displayCount();
        swal({
          title: "Removed from your cart",
          text: "Have a nice shopping",
          icon: "success",
          button: "Ok"
        });
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="pb-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" className="border-0 bg-red">
                            <div className="p-2 px-3 text-uppercase">
                              Product
                            </div>
                          </th>
                          <th scope="col" className="border-0 bg-red">
                            <div className="py-2 text-uppercase">Price</div>
                          </th>
                          <th scope="col" className="border-0 bg-red">
                            <div className="py-2 text-uppercase">Quantity</div>
                          </th>
                          <th scope="col" className="border-0 bg-red">
                            <div className="py-2 text-uppercase">Remove</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.cart.map(Newproduct => (
                          <tr key={Newproduct.id}>
                            <th scope="row" className="border-0 col-md-4">
                              <div className="p-2">
                                {Newproduct.product.productimages.map(
                                  (image, index) => (
                                    <img
                                      key={index}
                                      src={image.image_1}
                                      alt="as"
                                      width="70"
                                      className="img-fluid rounded shadow-sm"
                                    />
                                  )
                                )}
                                <div className="ml-3 d-inline-block align-middle">
                                  <h5 className="mb-0">
                                    <span className="text-dark d-inline-block align-middle">
                                      {Newproduct.product.name}
                                    </span>
                                  </h5>
                                  <span className="text-muted font-weight-normal font-italic d-block">
                                    Size: 6
                                  </span>
                                </div>
                              </div>
                            </th>
                            <td className="border-0 align-middle col-md-4">
                              <strong>Rs.{Newproduct.product.price}</strong>
                            </td>
                            <td className="border-0 align-middle remove col-md-4">
                              <i
                                className="fa fa-minus-circle"
                                aria-hidden="true"
                              />
                              <strong className="mx-2">1</strong>
                              <i
                                className="fa fa-plus-circle"
                                aria-hidden="true"
                              />
                            </td>
                            <td className="border-0 align-middle col-md-4">
                              <span
                                className="text-dark remove"
                                onClick={() => this.remove(Newproduct.id)}
                              >
                                <i className="fa fa-times" aria-hidden="true" />
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <button
                      className="button add-to-cart"
                    >Buy Now 
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function viewCartlist(state) {
  return {
    cart: state.cart
  };
}

export default connect(viewCartlist)(Cart);
