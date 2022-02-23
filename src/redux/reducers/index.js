import { combineReducers } from "redux";
import alerts from "../../app/core/components/reducers/alertReducer";
import auth from "../../app/auth/reducers/authReducers";
export default combineReducers({
  auth,
  alerts,
});
