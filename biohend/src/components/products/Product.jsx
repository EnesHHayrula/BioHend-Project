import React from "react";
import { PRODUCTS } from "./Products";
import * as productService from "../../services/productService";
import h from "../products/h";

export default function Product({ id, title, price, image }) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-4 col-xs-12">
      <div className="product" data-id={id}>
        <img
          src={image}
          className="product-image"
          style={{ backgroundImage: "url(/images/product3.jpg)" }}
        />
        <div className="col-xs-12 text-center">
          <h3>{title}</h3>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6 product-icons">
            <span>${price}</span>
          </div>
          <div className="col-xs-12 col-md-6 text-right product-icons">
            <Link
              href="#"
              data-toggle="tooltip"
              data-placement="right"
              title="View"
            >
              <MdOutlineSearch />
            </Link>
            <Link
              href="#"
              onClick={favoriteEventHandler}
              data-toggle="tooltip"
              data-placement="right"
              title="Add to Wishlist"
            >
              <FaRegHeart />
            </Link>
          </div>
        </div>
        <div className="col-xs-12 text-center">
          <Link className="cart" href="#">
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
}
