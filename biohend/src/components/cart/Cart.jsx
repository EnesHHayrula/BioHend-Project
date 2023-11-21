import React from "react";
import { CiSquareRemove } from "react-icons/ci";
import "./Cart.css";

const Cart = () => {
  return (
    <>
      <div className="cart-box-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="table-main table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Images</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="thumbnail-img">
                        <a href="#">
                          <img
                            className="img-fluid"
                            src="/public/images/product2.jpg"
                          />
                        </a>
                      </td>
                      <td className="name-pr">
                        <a href="#">Lavender Oil</a>
                      </td>
                      <td className="price-pr">
                        <p>$ 10.0</p>
                      </td>
                      <td className="quantity-box">
                        <input
                          type="number"
                          size={4}
                          defaultValue={1}
                          min={0}
                          step={1}
                          className="c-input-text qty text"
                        />
                      </td>
                      <td className="total-pr">
                        <p>$ 10.0</p>
                      </td>
                      <td className="remove-pr">
                        <a href="#">
                          <CiSquareRemove />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="thumbnail-img">
                        <a href="#">
                          <img
                            className="img-fluid"
                            src="images/product1.jpg"
                            alt=""
                          />
                        </a>
                      </td>
                      <td className="name-pr">
                        <a href="#">Lorem ipsum dolor sit amet</a>
                      </td>
                      <td className="price-pr">
                        <p>$ 60.0</p>
                      </td>
                      <td className="quantity-box">
                        <input
                          type="number"
                          size={4}
                          defaultValue={1}
                          min={0}
                          step={1}
                          className="c-input-text qty text"
                        />
                      </td>
                      <td className="total-pr">
                        <p>$ 80.0</p>
                      </td>
                      <td className="remove-pr">
                        <a href="#">
                          <CiSquareRemove />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="thumbnail-img">
                        <a href="#">
                          <img
                            className="img-fluid"
                            src="images/img-pro-03.jpg"
                            alt=""
                          />
                        </a>
                      </td>
                      <td className="name-pr">
                        <a href="#">Lorem ipsum dolor sit amet</a>
                      </td>
                      <td className="price-pr">
                        <p>$ 30.0</p>
                      </td>
                      <td className="quantity-box">
                        <input
                          type="number"
                          size={4}
                          defaultValue={1}
                          min={0}
                          step={1}
                          className="c-input-text qty text"
                        />
                      </td>
                      <td className="total-pr">
                        <p>$ 80.0</p>
                      </td>
                      <td className="remove-pr">
                        <a href="#">
                          <CiSquareRemove />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-6 col-sm-6"></div>
            <div className="col-lg-6 col-sm-6">
              <div className="update-box">
                <input defaultValue="Update Cart" type="submit" />
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-8 col-sm-12" />
            <div className="col-lg-4 col-sm-12">
              <div className="order-box">
                <h3>Order summary</h3>
                <div className="d-flex">
                  <h4>Sub Total</h4>
                  <div className="ml-auto font-weight-bold"> $ 130 </div>
                </div>
                <hr className="my-1" />
                <div className="d-flex">
                  <h4>Shipping Cost</h4>
                  <div className="ml-auto font-weight-bold"> Free </div>
                </div>
                <hr />
                <div className="d-flex gr-total">
                  <h5>Grand Total</h5>
                  <div className="ml-auto h5"> $ 388 </div>
                </div>
                <hr />{" "}
              </div>
            </div>
            <div className="col-12 d-flex shopping-box">
              <a href="checkout.html" className="ml-auto btn hvr-hover">
                Checkout
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
