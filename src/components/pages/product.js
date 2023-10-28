import React from "react";
import productData from "../db/db"; // Импортируем данные из db.js
import "./product.css";

function Product() {
  return (
    <div>
      {productData.map((product) => (
        <div key={product.id} className="card">
          <a href="./pages/pageForCard">
            <div className="background"></div>
            <img
              src={product.imageUrl}
              alt={product.productName}
              className="card-img"
            />
            <div className="card-detail">
              <h4>{product.productName}</h4>
              <h5>{product.price}</h5>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Product;
