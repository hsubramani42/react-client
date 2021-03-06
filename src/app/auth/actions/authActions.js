import {
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
  LOGOUT,
} from "../../../redux/types/userTypes";

import api from "../../../utils/api";
import { setAlert } from "../../core/components/actions/alertActions";
export const register = (formData) => async (dispatch) => {
  try {
    const response = await api().post("/users", formData);
    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    dispatch(setAlert("User created successfully", "success"));
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({ type: REGISTER_FAIL });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    const response = await api().get("/auth");
    dispatch({ type: USER_LOADED, payload: response.data });
  } catch (err) {}
};

export const userLogin = (formData) => async (dispatch) => {
  try {
    const response = await api().post("/auth", formData);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    dispatch(loadUser());
  } catch (err) {}
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({
    type: LOGOUT,
    payload: {},
  });
};
