import {
  GET_FILM_REQUEST,
  GET_FILM_SUCCESS,
  GET_FILM_ERROR,
} from "../../actionTypes";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILM_REQUEST:
      return {
        data: [],
        isLoading: true,
        isError: false,
        errorMessage: "",
      };

    case GET_FILM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case GET_FILM_ERROR:
      return {
        ...initialState,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default filmReducer;
