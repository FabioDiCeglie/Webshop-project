const initialState = {
  me: null, // the logged-in user
  accessToken: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "signUpPage/signUp": {
      console.log("what is the action", action.payload);
      return {
        ...state,
        me: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
