import {
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
} from "../../../redux/types/userTypes";

import api from "../../../utils/api";
import { setAlert } from "../../core/components/actions/alertActions";
export const register = (formData) => async (dispatch) => {
  try {
    const response = await api.post("/users", formData);
    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    dispatch(setAlert("User created successfully", "success"));
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
    const response = await api.get("/auth");
    const token = response.data.token;
    dispatch({ type: USER_LOADED, payload: response.data });
  } catch (err) {}
};

export const userLogin = (formData) => async (dispatch) => {
  try {
    const response = await api.post("/auth", formData);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    dispatch(loadUser());
  } catch (err) {}
};
