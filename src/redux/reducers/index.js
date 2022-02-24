import { combineReducers } from "redux";
import alerts from "../../app/core/components/reducers/alertReducer";
import auth from "../../app/auth/reducers/authReducers";
import profile from "../../app/profile/reducers/profileReducer";
export default combineReducers({
  auth,
  alerts,
  profile,
});
