import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  USER_LOADED,
} from "../../../redux/types/userTypes";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: true,
  token: localStorage.getItem("token"),
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      return { ...state, ...payload, isAuthenticated: true, loading: false };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: payload,
      };
    case LOGIN_SUCCESS:
      return { ...state, ...payload, isAuthenticated: true, loading: false };
    default:
      return state;
  }
};
