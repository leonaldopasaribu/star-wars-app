import React from "react";
import { useSelector } from "react-redux";

import Cards from "../Global/Card";

const FilmPage = () => {
  const film = useSelector((state) => state.film);

  return (
    <div className="dashboard-page">
      <h1>List Movie</h1>

      <div className="dashboard-page__list-movie">
        {Array.isArray(film.data.results) ? (
          film.data.results.map((data, i) => <Cards key={i} data={data} />)
        ) : (
          <p>Empty</p>
        )}
      </div>
    </div>
  );
};

export default FilmPage;
