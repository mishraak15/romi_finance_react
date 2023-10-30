import React from "react";
import "./HomeLCard.css";

export default function HomeLCard({ img, title, desc, value }) {
  return (
    <div className="homeLCard">
      <div className="homeLCard-img-container">
        <img src={img} alt="" />
        <span className="homeLCard-title">{title}</span>
      </div>
      <div className="homeLCard-desc">{desc}</div>
      <div className="homeLCard-value">Ethereum APR: {value}</div>
      <div className="homeLCard-btn-container">
        <button className="btn">Buy</button>
        <button className="homeLCard-btn">Read More</button>
      </div>
    </div>
  );
}
