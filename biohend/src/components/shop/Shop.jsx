import React from "react";
import './Shop.css'
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";

const Shop = () => {
  localStorage.setItem("Name", JSON.stringify({id: 1, price: 10, title: "kor"}));
  let kor = JSON.parse(localStorage.getItem('Name'));

  return (
    <div>
      <>
        {/* Start Shop Page  */}
        <div className="shop-box-inner">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-4 col-xs-12">
                <div className="product">
                  <span className="product-image" style={{backgroundImage: 'url(/images/product3.jpg)'}}> </span>
                  <div className="col-xs-12 text-center">
                    <h3>Worm Tea</h3>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-md-6 product-icons">
                      <span>$10.00</span>
                    </div>
                    <div className="col-xs-12 col-md-6 text-right product-icons">
                      <a href="#" data-toggle="tooltip" data-placement="right" title="View">
                        <MdOutlineSearch />
                      </a>
                      <a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist">
                        <FaRegHeart />
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-12 text-center">
                    <a className="cart" href="#">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 col-xs-12">
                <div className="product">
                  <span className="product-image" style={{backgroundImage: 'url(/images/product2.jpg)'}}> </span>
                  <div className="col-xs-12 text-center">
                    <h3>Lavender Oil</h3>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-md-6 product-icons">
                      <span>$10.00</span>
                    </div>
                    <div className="col-xs-12 col-md-6 text-right product-icons">
                      <a href="#" data-toggle="tooltip" data-placement="right" title="View">
                        <MdOutlineSearch />
                      </a>
                      <a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist">
                        <FaRegHeart />
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-12 text-center">
                    <a className="cart" href="#">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4 col-xs-12">
                <div className="product">
                  <span className="product-image" style={{backgroundImage: 'url(/images/product1.jpg)'}}> </span>
                  <div className="col-xs-12 text-center">
                    <h3>Lavender Water</h3>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-md-6 product-icons">
                      <span>$10.00</span>
                    </div>
                    <div className="col-xs-12 col-md-6 text-right product-icons">
                      <a href="#" data-toggle="tooltip" data-placement="right" title="View">
                        <MdOutlineSearch />
                      </a>
                      <a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist">
                        <FaRegHeart />
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-12 text-center">
                    <a className="cart" href="#">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Shop Page */}

        <a
          href="#"
          id="back-to-top"
          title="Back to top"
          style={{ display: "none" }}
        >
          ↑
        </a>
      </>
    </div>
  );
};

export default Shop;
