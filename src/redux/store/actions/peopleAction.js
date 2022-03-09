import axios from "axios";

import {
  GET_PEOPLE_REQUEST,
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_ERROR,
  GET_PEOPLE_DETAIL_REQUEST,
  GET_PEOPLE_DETAIL_SUCCESS,
  GET_PEOPLE_DETAIL_ERROR,
} from "../../actionTypes";

export const getPeoples = () => async (dispatch) => {
  try {
    dispatch({ type: GET_PEOPLE_REQUEST });

    const res = await axios.get(`https://swapi.dev/api/people`);
    const data = await res.data;
    dispatch({ type: GET_PEOPLE_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_PEOPLE_ERROR, payload: e.message });
    console.error(e);
  }
};

export const getPeopleDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PEOPLE_DETAIL_REQUEST });

    const res = await axios.get(`https://swapi.dev/api/people/${id}`);
    const data = await res.data;
    dispatch({ type: GET_PEOPLE_DETAIL_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_PEOPLE_DETAIL_ERROR, payload: e.message });
    console.error(e);
  }
};
