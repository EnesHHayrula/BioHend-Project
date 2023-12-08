import React, { useEffect, useState } from "react";
import Products from "../products/Products";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const addToCartHandler = (e) => {
    let items = JSON.parse(localStorage.getItem("shoppingCart")) ?? [];

    items.push({
      id: $(e.target).parents(".products").attr("data-id"),
      qty: 1,
    });
    localStorage.setItem("shoppingCart", JSON.stringify(items));
  };
  const [quantity, setQuantity] = useState([]);

  const { id } = useParams(); // Get the product ID from the URL params
  const url = `http://localhost:1337/api/products/${id}?populate=*`;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setProduct(data.data);
        } else {
          throw new Error("Product details not found");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  const { attributes } = product;
  const imageUrl = `http://localhost:1337${attributes.image.data[0].attributes.formats.thumbnail.url}`;

  return (
    <div className="product">
      <div className="left">
        <div className="mainImage">
          <img src={imageUrl} alt={attributes.title} />
        </div>
      </div>
      <div className="right">
        <h1>{attributes.title}</h1>
        <span className="price">$ {attributes.price}</span>
        <p>{attributes.description}</p>
        <div className="quantity"></div>
        <button
          className="quantity-button"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          +
        </button>
        {quantity}
        <button
          className="quantity-button"
          onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
        >
          -
        </button>
        <button className="add" onClick={addToCartHandler}>
          <IoCartOutline />
          ADD TO CART
        </button>

        <div className="favorites">
          <FaRegHeart />
          ADD TO FAVORITES
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
