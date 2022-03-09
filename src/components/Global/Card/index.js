import React from "react";

const Cards = ({ data }) => {
  return (
    <div className="card">
      <div className="card-item">
        <div className="card-name">
          <h3>{data.title}</h3>
        </div>
        <div className="card-detail">
          <h3>{data.release_date}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cards;
