import React from "react";

const CardsPeople = ({ data }) => {
  const idPeople = data.url.match(/\d+/)[0];

  return (
    <div className="card">
      <div className="card-item">
        <div className="card-name">
          <h3>{data.name}</h3>
        </div>
        <div className="card-detail">
          <h3>{data.height}</h3>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = `people-detail/${idPeople}`;
          }}
        >
          Detail
        </button>
      </div>
    </div>
  );
};

export default CardsPeople;
