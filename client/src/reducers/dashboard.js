import { DASHBOARD_GET_DATA } from "../actions/types";

const DEFAULT_STATE = {
  secret: ""
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case DASHBOARD_GET_DATA:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
