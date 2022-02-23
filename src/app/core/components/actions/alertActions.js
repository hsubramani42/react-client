import { v4 as uuid } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "../../../../redux/types/alertTypes";
export const setAlert =
  (message, alertype, timeout = 5000) =>
  (dispatch) => {
    const id = uuid();
    dispatch({ type: SET_ALERT, payload: { message, alertype, id } });
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT, payload: id });
    }, timeout);
  };
