import React, { Component } from "react";
import { connect } from "react-redux";

class Product extends Component {
  AddCart = key => {
    console.log(key.id);
    this.props.dispatch({
      type: "AddCart",
      id: key.id,
      product: key,
      isCart : false
    });
  };

  removeBtn= (key) =>{
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
          <h3 className="h3 text-center my-5"> Product </h3>
          <div className="row">
            {this.props.NewProduct.map((product, key) => (
              <div className="col-md-3 col-sm-6 mb-3" key={product.id}>
                <div className="product-grid4">
                  <div className="product-image4">
                    <span>
                      <img className="pic-1" src={product.image} alt="qq" />
                      <img className="pic-2" src={product.image2} alt="qq" />
                    </span>

                    <ul className="social">
                      <li>
                        {product.fav === true ? (
                          <a data-tip="Add to Cart text-danger">
                            <i className="fa fa-heart text-danger" />
                          </a>
                        ) : (
                          <a data-tip="Add to Cart">
                            <i className="fa fa-heart" />
                          </a>
                        )}
                      </li>
                    </ul>
                  </div>
                  <div className="product-content px-2">
                    <h3 className="title text-left">
                      <span>{product.name}</span>
                    </h3>
                    <div className="price text-left">Rs.{product.price}</div>

                    {product.isCart === true ? (
                      <span
                        className="add-to-cart"
                        onClick={() => this.AddCart(product)}
                      >
                        ADD TO CART
                      </span>
                    ) : (
                      <span className="add-to-cart" onClick={() =>this.removeBtn(product)}>REMOVE</span>
                    )}
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
    NewProduct: state.fullproduct
  };
}

export default connect(getProduct)(Product);
