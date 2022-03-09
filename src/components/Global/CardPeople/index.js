import React from "react";

const CardsPeople = ({ data }) => {
  return (
    <div className="card">
      <div className="card-item">
        <div className="card-name">
          <h3>{data.name}</h3>
        </div>
        <div className="card-detail">
          <h3>{data.height}</h3>
        </div>
      </div>
    </div>
  );
};

export default CardsPeople;
