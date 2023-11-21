import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";

const Shop = () => {
  return (
    <div>
      <>
        {/* Start Shop Page  */}
        <div className="shop-box-inner">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-9 col-sm-12 col-xs-12 shop-content-right">
                <div className="right-product-box">
                  <div className="product-item-filter row">
                    <div className="col-12 col-sm-8 text-center text-sm-left">
                      <div className="toolbar-sorter-right">
                        <span>Sort by </span>
                        <select
                          id="basic"
                          className="selectpicker show-tick form-control"
                          data-placeholder="$ USD"
                        >
                          <option data-display="Select">Nothing</option>
                          <option value={1}>Popularity</option>
                          <option value={2}>High Price → High Price</option>
                          <option value={3}>Low Price → High Price</option>
                          <option value={4}>Best Selling</option>
                        </select>
                      </div>
                      <p>Showing all 4 results</p>
                    </div>
                    <div className="col-12 col-sm-4 text-center text-sm-right">
                      <ul className="nav nav-tabs ml-auto">
                        <li>
                          <a
                            className="nav-link active"
                            href="#grid-view"
                            data-toggle="tab"
                          >
                            {" "}
                            <i className="fa fa-th" />{" "}
                          </a>
                        </li>
                        <li>
                          <a
                            className="nav-link"
                            href="#list-view"
                            data-toggle="tab"
                          >
                            {" "}
                            <i className="fa fa-list-ul" />{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-categorie-box">
                    <div className="tab-content">
                      <div
                        role="tabpanel"
                        className="tab-pane fade show active"
                        id="grid-view"
                      >
                        <div className="row">
                          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="products-single fix">
                              <div className="box-img-hover">
                                <img
                                  src="/public/images/product3.jpg"
                                  className="img-fluid"
                                  alt="Image"
                                />
                                <div className="mask-icon">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="right"
                                        title="View"
                                      >
                                        <MdOutlineSearch />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="right"
                                        title="Compare"
                                      >
                                        <i className="fas fa-sync-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="right"
                                        title="Add to Wishlist"
                                      >
                                        <FaRegHeart />
                                      </a>
                                    </li>
                                  </ul>
                                  <a className="cart" href="#">
                                    Add to Cart
                                  </a>
                                </div>
                              </div>
                              <div className="why-text">
                                <h4>Worm Tea</h4>
                                <h5> $10.00</h5>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="products-single fix">
                              <div className="box-img-hover">
                                <img
                                  src="/public/images/product1.jpg"
                                  className="img-fluid"
                                  alt="Image"
                                />
                                <div className="mask-icon">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="right"
                                        title="View"
                                      >
                                        <MdOutlineSearch />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="right"
                                        title="Compare"
                                      >
                                        <i className="fas fa-sync-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="right"
                                        title="Add to Wishlist"
                                      >
                                        <FaRegHeart />
                                      </a>
                                    </li>
                                  </ul>
                                  <a className="cart" href="#">
                                    Add to Cart
                                  </a>
                                </div>
                              </div>
                              <div className="why-text">
                                <h4>Lavender Oil</h4>
                                <h5> $9.79</h5>
                              </div>
                            </div>
                          </div>

                          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                            <div className="products-single fix">
                              <div className="box-img-hover">
                                <img
                                  src="/public/images/product2.jpg"
                                  className="img-fluid"
                                  alt="Image"
                                />
                                <div className="mask-icon">
                                  <ul>
                                    <li>
                                      <a
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="right"
                                        title="View"
                                      >
                                        <MdOutlineSearch />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="right"
                                        title="Compare"
                                      >
                                        <i className="fas fa-sync-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        href="#"
                                        data-toggle="tooltip"
                                        data-placement="right"
                                        title="Add to Wishlist"
                                      >
                                        <FaRegHeart />
                                      </a>
                                    </li>
                                  </ul>
                                  <a className="cart" href="#">
                                    Add to Cart
                                  </a>
                                </div>
                              </div>
                              <div className="why-text">
                                <h4>Lavender Water</h4>
                                <h5> $4.99</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        role="tabpanel"
                        className="tab-pane fade"
                        id="list-view"
                      ></div>
                    </div>
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
