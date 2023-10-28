import React from "react";

function Tools({ value, onChange, placeholder }) {
  return (
    <div className="input-filter">
      <div className="input-text">
        <div className="text">Looking for</div>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
function FilterButtons({ onFilter }) {
  return (
    <div className="filter">
      Or filter
      <button onClick={() => onFilter("Brazil")}>Brazil</button>
      <button onClick={() => onFilter("Kenya")}>Kenya</button>
      <button onClick={() => onFilter("Columbia")}>Columbia</button>
      <button onClick={() => onFilter("All")}>All</button>
    </div>
  );
}

export { Tools, FilterButtons };
