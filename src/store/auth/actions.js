import axios from "axios";

export const logInAction = (data) => ({
  type: "logInPage/logIn",
  payload: data,
});

export function login(email, password) {
  return async function thunk(dispatch, getState) {
    const requestToken = await axios.post("http://localhost:4000/auth/login", {
      email,
      password,
    });

    //console.log("what is token", requestToken.data.token);

    const token = requestToken.data.token;

    const requestProfile = await axios.get("http://localhost:4000/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    //console.log("what is data", requestProfile.data.auth_user);

    const profile = requestProfile.data.auth_user;

    dispatch(logInAction({ profile, token }));
    localStorage.setItem("token", token);
  };
}

export function persistLogIn() {
  return async function thunk(dispatch, getState) {
    const token = localStorage.getItem("token");
    //console.log("check token", token);
    if (!token) return;

    const requestProfile = await axios.get("http://localhost:4000/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const profile = requestProfile.data.auth_user;
    console.log("me", profile);

    dispatch(logInAction({ token, profile }));
  };
}
export function logout() {
  return function thunk(dispatch, getState) {
    dispatch({ type: "auth/logout" });
    localStorage.removeItem("token");
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

export const updateUser = (data) => ({
  type: "profile/updateUser",
  payload: data,
});

export function updateSpecificUser(email, name, id) {
  return async function thunk(dispatch, getState) {
    try {
      const token = localStorage.getItem("token");
      //console.log("check token", token);
      if (!token) return;
      const requestUpdateUser = await axios.put(
        `http://localhost:4000/auth/users/${id}`,
        {
          name,
          email,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("what is updateUser", requestUpdateUser.data);
      dispatch(requestUpdateUser.data);
    } catch (error) {
      console.log(error);
    }
  };
}
