import React from "react";
import { useSelector } from "react-redux";

import CardsPeople from "../Global/CardPeople";

const PeoplePage = () => {
  const people = useSelector((state) => state.people);

  return (
    <div className="dashboard-page">
      <h1>List Movie</h1>

      <div className="dashboard-page__list-movie">
        {Array.isArray(people.data.results) ? (
          people.data.results.map((data, i) => (
            <CardsPeople key={i} data={data} />
          ))
        ) : (
          <p>Empty</p>
        )}
      </div>
    </div>
  );
};

export default PeoplePage;
