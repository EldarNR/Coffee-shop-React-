import React, { useState, useEffect } from "react";
import productData from "../db/menu";
import "./mainproduct.css";
import { Tools, FilterButtons } from "./Tools";

function Mainproduct() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [filteredCoffeeData, setFilteredCoffeeData] = useState(productData);

  const handleFilter = (country) => {
    setSelectedCountry(country);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (selectedCountry === "All") {
      setFilteredCoffeeData(productData);
    } else {
      setFilteredCoffeeData(
        productData.filter((item) => item.count === selectedCountry)
      );
    }
  }, [selectedCountry]);

  const filteredProducts = filteredCoffeeData.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div>
      <div className="input-filter">
        <div className="input">
          <Tools
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Start typing here..."
          />
        </div>
        <div className="filter">
          <FilterButtons onFilter={handleFilter} />
        </div>
      </div>

      <div className="product-body">
        {filteredProducts.map((product) => (
          <a href={"../pages/pageForCard"} key={product.id} className="link" alt="href">
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
    </div>
  );
}

export default Mainproduct;
