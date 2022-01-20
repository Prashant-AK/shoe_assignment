import React, { useState } from "react";
import Card from "./Card";
import "./Style.css";
function Content() {
  const [data, setData] = useState([
    "High Speed Sneakers",
    "Yaga",
    "Sneaker",
    "Tracking",
    "Geometric Styled",
    "Massive Geometric",
  ]);
  return (
    <div className="content">
      <div className="content_head">
        <div>
          <h1>New Arrivals</h1>
        </div>
        <div className="custom-select">
          <select>
            <option>Sort by Price</option>
            <option value="B">Banana</option>
            <option value="C">Cranberry</option>
          </select>
        </div>
      </div>
      <section className="content_display">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
}

export default Content;
