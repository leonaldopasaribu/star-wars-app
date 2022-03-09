import {
  GET_PEOPLE_REQUEST,
  GET_PEOPLE_SUCCESS,
  GET_PEOPLE_ERROR,
  GET_PEOPLE_DETAIL_REQUEST,
  GET_PEOPLE_DETAIL_SUCCESS,
  GET_PEOPLE_DETAIL_ERROR,
} from "../../actionTypes";

const initialState = {
  data: [],
  peopleDetail: {},
  isLoading: false,
  isError: false,
  errorMessage: "",
};

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PEOPLE_REQUEST:
      return {
        data: [],
        peopleDetail: {},
        isLoading: true,
        isError: false,
        errorMessage: "",
      };

    case GET_PEOPLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };

    case GET_PEOPLE_ERROR:
      return {
        ...initialState,
        isError: true,
        errorMessage: action.payload,
      };

    case GET_PEOPLE_DETAIL_REQUEST:
      return {
        data: [],
        peopleDetail: {},
        isLoading: true,
        isError: false,
        errorMessage: "",
      };

    case GET_PEOPLE_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        peopleDetail: action.payload,
      };

    case GET_PEOPLE_DETAIL_ERROR:
      return {
        ...initialState,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default peopleReducer;
