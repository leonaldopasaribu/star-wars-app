import React from "react";
import { useSelector } from "react-redux";

import CardsPeople from "../Global/CardPeople";

const PeoplePage = () => {
  const people = useSelector((state) => state.people);

  return (
    <div className="film-page container">
      <h1>List People</h1>

      <div className="film-page__list-movie">
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
