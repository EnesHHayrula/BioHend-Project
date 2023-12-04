import "./Shop.css";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import React from "react";
import { PRODUCTS } from "../products/Products";

const Shop = () => {
  // Vzimane na dannite ot favorites za stranicata, za kolichkata e syshtata operaciq
  let favorites = localStorage.getItem("favorites") ?? [];
  let result = [];
  PRODUCTS.forEach((product, index) => {
    if (favorites.indexOf(product.id) !== -1) {
      result.push(product);
    }
  });
  console.log(result);
  // Pokazvane na dannite primer kak da gi vzemesh
  // {result.map((item, index) => {
  //   return (
  //     <div key={index}>
  //       <h2>name: {item.title}</h2>
  //       <h2>country: {item.country}</h2>

  //       <hr />
  //     </div>
  //   );
  // })}

  const addToCartHandler = (e) => {
    let items = JSON.parse(localStorage.getItem("shoppingCart")) ?? [];

    items.push({
      id: $(e.target).parents(".product").attr("data-id"),
      qty: 1,
    });
    localStorage.setItem("shoppingCart", JSON.stringify(items));
  };

  const removeFromCartHandler = (e) => {
    let items = JSON.parse(localStorage.getItem("shoppingCart")) ?? [];

    if (items.indexOf($(e.target).parents(".product").attr("data-id")) > -1) {
      items.splice(index, 1);
      localStorage.setItem("shoppingCart", JSON.stringify(items));
    }
  };

  const increaseQuantityHandler = (e) => {
    let items = JSON.parse(localStorage.getItem("shoppingCart"));
    let id = $(e.target).parents(".product").attr("data-id");

    items.forEach((item, index) => {
      if (item.id == id) {
        item.qty++;
      }
    });
    localStorage.setItem("shoppingCart", JSON.stringify(items));
  };

  const decreaseQuantityHandler = (e) => {
    let items = JSON.parse(localStorage.getItem("shoppingCart"));
    let id = $(e.target).parents(".product").attr("data-id");
    let removeIndex = 0;
    items.forEach((item, index) => {
      if (item.id == id) {
        item.qty--;
        if (item.qty == 0) {
          removeIndex = index;
        }
      }
    });

    if (removeIndex) {
      delete items[removeIndex];
    }
    localStorage.setItem("shoppingCart", JSON.stringify(items));
  };

  const favoriteEventHandler = (e) => {
    let id = $(e.target).parents(".product").attr("data-id");
    let items = JSON.parse(localStorage.getItem("favorites")) ?? [];
    let index = items.indexOf(id);

    if (!items.length || index == -1) {
      items.push(id);
      localStorage.setItem("favorites", JSON.stringify(items));
      return;
    }

    if (index > -1) {
      items.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(items));
    }
  };

  return (
    <div>
      <>
        {/* Start Shop Page  */}
        <div className="shop-box-inner">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-4 col-xs-12">
                <div className="product" data-id="1">
                  <span
                    className="product-image"
                    style={{ backgroundImage: "url(/images/product3.jpg)" }}
                  >
                    {" "}
                  </span>
                  <div className="col-xs-12 text-center">
                    <h3>Worm Tea</h3>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-md-6 product-icons">
                      <span>$10.00</span>
                    </div>
                    <div className="col-xs-12 col-md-6 text-right product-icons">
                      <a
                        href="#"
                        onClick={favoriteEventHandler}
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Add to Wishlist"
                      >
                        <FaRegHeart />
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-12 text-center">
                    <a className="cart" href="#" onClick={addToCartHandler}>
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 col-xs-12">
                <div className="product" data-id="2">
                  <span
                    className="product-image"
                    style={{ backgroundImage: "url(/images/product2.jpg)" }}
                  >
                    {" "}
                  </span>
                  <div className="col-xs-12 text-center">
                    <h3>Lavender Oil</h3>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-md-6 product-icons">
                      <span>$10.00</span>
                    </div>
                    <div className="col-xs-12 col-md-6 text-right product-icons">
                      <a
                        href="#"
                        onClick={favoriteEventHandler}
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Add to Wishlist"
                      >
                        <FaRegHeart />
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-12 text-center">
                    <a className="cart" href="#" onClick={addToCartHandler}>
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 col-xs-12">
                <div className="product" data-id="3">
                  <span
                    className="product-image"
                    style={{ backgroundImage: "url(/images/product1.jpg)" }}
                  >
                    {" "}
                  </span>
                  <div className="col-xs-12 text-center">
                    <h3>Lavender Water</h3>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-md-6 product-icons">
                      <span>$10.00</span>
                    </div>
                    <div className="col-xs-12 col-md-6 text-right product-icons">
                      <a
                        href="#"
                        onClick={favoriteEventHandler}
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Add to Wishlist"
                      >
                        <FaRegHeart />
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-12 text-center">
                    <a className="cart" href="#" onClick={addToCartHandler}>
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Shop Page */}

        <Link
          href="#"
          id="back-to-top"
          title="Back to top"
          style={{ display: "none" }}
        >
          ↑
        </Link>
      </>
    </div>
  );
};

export default Shop;
