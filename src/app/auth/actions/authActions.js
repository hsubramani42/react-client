import {
  REGISTER_SUCCESS,
  USER_LOADED,
  LOGIN_SUCCESS,
} from "../../../redux/types/userTypes";
import api from "../../../utils/api";
export const register = (formData) => async (dispatch) => {
  try {
    const response = await api.post("/users", formData);
    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
  } catch (err) {}
};

export const loadUser = () => async (dispatch) => {
  try {
    const response = await api.get("/auth");
    dispatch({ type: USER_LOADED, payload: response.data });
  } catch (err) {}
};

export const userLogin = (formData) => async (dispatch) => {
  try {
    const response = await api.post("/auth", formData);
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
  } catch (err) {}
};
