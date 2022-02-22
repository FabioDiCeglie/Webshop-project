const initialState = {
  me: null, // the logged-in user
  accessToken: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "logInPage/logIn": {
      //console.log("what is the action log in", action.payload);
      return {
        ...state,
        me: action.payload.profile,
        accessToken: action.payload.token,
      };
    }
    case "auth/logout": {
      return initialState;
    }

    case "signUpPage/signUp": {
      //console.log("what is the action sign up", action.payload);
      return {
        ...state,
        me: action.payload,
      };
    }
    case "profile/updateUser": {
      console.log("what is the action update", action.payload);
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
