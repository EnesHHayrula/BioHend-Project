import React, { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

import { FaRegHeart } from "react-icons/fa";

const addToCartHandler = (e) => {
  let items = JSON.parse(localStorage.getItem("shoppingCart")) ?? [];

  items.push({
    id: $(e.target).parents(".products").attr("data-id"),
    qty: 1,
  });
  localStorage.setItem("shoppingCart", JSON.stringify(items));
};

const Card = ({ item }) => {
  const { id, attributes } = item;
  const { title, price, image } = attributes;
  const imageUrl = `http://localhost:1337${image.data[0].attributes.formats.thumbnail.url}`;

  return (
    <div className="col-sm-6 col-md-4 col-lg-4 col-xs-12">
      <div className="products" data-id="2">
        <Link className="card-link" to={`/shop/${id}`}>
          <img src={imageUrl} className="products-image" alt={title} />
          <div className="col-xs-12 text-center">
            <h3>{title}</h3>
          </div>
        </Link>
        <div className="row">
          <div className="col-xs-12 col-md-6 products-icons">
            <p className="price">$ {price}</p>
          </div>
          <div className="col-xs-12 col-md-6 text-right products-icons">
            <span
              className="favorites"
              // onClick={favoriteEventHandler}
              data-toggle="tooltip"
              data-placement="right"
              title="Add to Wishlist"
            >
              <FaRegHeart />
            </span>
          </div>
        </div>
        <div className="col-xs-12 text-center">
          <Link className="cart" to={`/shop/${id}`}>
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
