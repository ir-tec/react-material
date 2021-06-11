import * as actionTypes from "./actionTypes";

const initialState = { allUsers: [], newUser: {}, currentUser: {} };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_USER:
      return {
        ...state,
        newUser: action.payload,
      };
    case actionTypes.All_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    case actionTypes.CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
