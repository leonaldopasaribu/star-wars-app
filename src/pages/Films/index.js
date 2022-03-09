import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "../../components/Global/Header";
import FilmPage from "../../components/FilmPage";

import { getFilms } from "../../redux/store/actions/filmActions";

export default function Films() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilms());
  }, []);
  return (
    <div>
      <Header />
      <FilmPage />
    </div>
  );
}
