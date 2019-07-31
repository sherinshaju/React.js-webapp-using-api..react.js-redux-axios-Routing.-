import React, { Component } from "react";
import { connect } from "react-redux";
class Cart extends Component {
  remove = (key) =>{
    this.props.dispatch({
      type: "RemoveBtn",
      id: key.id,
      product: key,
      isCart : true
    });
  }

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
                        {this.props.NewCart.map(Newproduct => (
                          <tr key={Newproduct.id}>
                            <th scope="row" className="border-0 col-md-4">
                              <div className="p-2">
                                <img
                                  src={Newproduct.image}
                                  alt="as"
                                  width="70"
                                  className="img-fluid rounded shadow-sm"
                                />
                                <div className="ml-3 d-inline-block align-middle">
                                  <h5 className="mb-0">
                                    <span className="text-dark d-inline-block align-middle">
                                      {Newproduct.name}
                                    </span>
                                  </h5>
                                  <span className="text-muted font-weight-normal font-italic d-block">
                                    Size: 6
                                  </span>
                                </div>
                              </div>
                            </th>
                            <td className="border-0 align-middle col-md-4">
                              <strong>Rs.{Newproduct.price}</strong>
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
                                onClick={() => this.remove(Newproduct)}
                              >
                                <i className="fa fa-times" aria-hidden="true" />
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <button className="button add-to-cart">Buy Now</button>
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
    NewCart: state.NewCart
  };
}

export default connect(viewCartlist)(Cart);
