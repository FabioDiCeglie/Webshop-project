import axios from "axios";

export function login(email, password) {
  // Return the thunk itself, i.e. a function
  return async function thunk(dispatch, getState) {
    // TODO:
    // make a POST API request to `/login`
    const requestToken = await axios.post("http://localhost:4000/auth/login", {
      email,
      password,
    });

    console.log("what is token", requestToken.data.token);

    const requestProfile = await axios.get("http://localhost:4000/auth/me");

    console.log(
      "TODO: make login request, get an access token",
      email,
      password
    );
  };
}

export const signUpAction = (data) => ({
  type: "signUpPage/signUp",
  payload: data,
});

export function signup(email, password, name) {
  // Return the thunk itself, i.e. a function
  return async function thunk(dispatch, getState) {
    const requestSignUp = await axios.post(
      "http://localhost:4000/auth/signup",
      {
        email,
        password,
        name,
      }
    );

    console.log("what is signUp", requestSignUp.data);

    dispatch(signUpAction({ email, password, name }));
  };
}
