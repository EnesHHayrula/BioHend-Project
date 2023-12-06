import "./Shop.css";
import { Link, useParams } from "react-router-dom";
import React from "react";
import { Products } from "../products/Products";

const Shop = () => {
  // Vzimane na dannite ot favorites za stranicata, za kolichkata e syshtata operaciq
  // let favorites = localStorage.getItem("favorites") ?? [];
  // let result = [];
  // Products.forEach((product, index) => {
  //   if (favorites.indexOf(product.id) !== -1) {
  //     result.push(product);
  //   }
  // });
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

  

  // const removeFromCartHandler = (e) => {
  //   let items = JSON.parse(localStorage.getItem("shoppingCart")) ?? [];

  //   if (items.indexOf($(e.target).parents(".product").attr("data-id")) > -1) {
  //     items.splice(index, 1);
  //     localStorage.setItem("shoppingCart", JSON.stringify(items));
  //   }
  // };

  // const increaseQuantityHandler = (e) => {
  //   let items = JSON.parse(localStorage.getItem("shoppingCart"));
  //   let id = $(e.target).parents(".product").attr("data-id");

  //   items.forEach((item, index) => {
  //     if (item.id == id) {
  //       item.qty++;
  //     }
  //   });
  //   localStorage.setItem("shoppingCart", JSON.stringify(items));
  // };

  // const decreaseQuantityHandler = (e) => {
  //   let items = JSON.parse(localStorage.getItem("shoppingCart"));
  //   let id = $(e.target).parents(".product").attr("data-id");
  //   let removeIndex = 0;
  //   items.forEach((item, index) => {
  //     if (item.id == id) {
  //       item.qty--;
  //       if (item.qty == 0) {
  //         removeIndex = index;
  //       }
  //     }
  //   });

  //   if (removeIndex) {
  //     delete items[removeIndex];
  //   }
  //   localStorage.setItem("shoppingCart", JSON.stringify(items));
  // };

  // const favoriteEventHandler = (e) => {
  //   let id = $(e.target).parents(".product").attr("data-id");
  //   let items = JSON.parse(localStorage.getItem("favorites")) ?? [];
  //   let index = items.indexOf(id);

  //   if (!items.length || index == -1) {
  //     items.push(id);
  //     localStorage.setItem("favorites", JSON.stringify(items));
  //     return;
  //   }

  //   if (index > -1) {
  //     items.splice(index, 1);
  //     localStorage.setItem("favorites", JSON.stringify(items));
  //   }
  // };
const param = useParams()
console.log(param);
  return (
    <div>
      <>
        <Products />

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
