import axios from "axios";

import {
  GET_FILM_REQUEST,
  GET_FILM_SUCCESS,
  GET_FILM_ERROR,
} from "../../actionTypes";

export const getFilms = () => async (dispatch) => {
  try {
    dispatch({ type: GET_FILM_REQUEST });

    const res = await axios.get(`https://swapi.dev/api/films`);
    const data = await res.data;
    dispatch({ type: GET_FILM_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_FILM_ERROR, payload: e.message });
    console.error(e);
  }
};
