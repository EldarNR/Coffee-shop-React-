import React from "react";
import productData from "../db/menu";
import "./mainproduct.css";

const Products = () => {
  return (
      <div className="product-body">
        {productData.map((product) => (
          <a
            href={"../pages/pageForCard"}
            key={product.id}
            className="link"
            alt="href"
          >
            <div className="card">
              <div className="background"></div>
              <img
                src={product.imageUrl}
                alt={product.productName}
                className="card-img"
              />
              <div className="card-detail">
                <h4>{product.productName}</h4>
                <h5>{product.count}</h5>
                <h5>{product.price}</h5>
              </div>
            </div>
          </a>
        ))}
      </div>
  );
};

export {Products};