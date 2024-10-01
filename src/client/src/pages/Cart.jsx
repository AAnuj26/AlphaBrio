import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../../public/images/watch.jpg";
import { RiDeleteBinLine } from "react-icons/ri";

const Cart = () => {
  return (
    <React.Fragment>
      <Meta title={"Cart"} />
      <BreadCrumb title={"Cart"} />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className=" cart-header  py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className=" cart-data  py-3 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img src={watch} className="img-fluid" alt="watch" />
                  </div>

                  <div className="w-75">
                    <p>dsadsads</p>
                    <p>Size: ds</p>
                    <p>Color: dss</p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">₹ 1000</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      id=""
                    />
                  </div>
                  <div>
                    <RiDeleteBinLine />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">₹1000</h5>
                </div>
              </div>
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/store" className="button">
                  Continue Shopping
                </Link>
                <div className="d-flex flex-column align-items-end">
                  <h4>SubTotal: ₹ 1000</h4>
                  <p>Taxes and shipping calculated at checkout</p>
                  <Link to="checkout" className="button">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Cart;
