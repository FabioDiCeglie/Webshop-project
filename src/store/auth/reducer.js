const initialState = {
  me: null, // the logged-in user
  accessToken: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
