import { Satellite } from "@material-ui/icons";

const initState = {
  auth: {
    id: null,
    token: null,
    name: null,
    role: null,
  },
  compare: [],
};

const rootReducer = (state = initState, action) => {
  // The reducer normally looks at the action type field to decide what happens
  // care about this specific action, return the existing state unchanged
  switch (action.type) {
    // Do something here based on the different types of actions
    case "UPDATE_USER":
      return {
        ...state,
        auth: {
          ...state.auth,
          name: action.payload.name,
          id: action.payload.id,
          role: action.payload.role,
          // email: action.payload.email
        },
      };
    case "LOGOUT_USER":
      return initState;
    case "UPDATE_COMPARE":
      return {
        ...state,
        compare: [...state.compare, action.payload.userid],
      };
    case "RESET_COMPARE":
      return {
        ...state,
        compare: [],
      };
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      return state;
  }
};

export default rootReducer;
