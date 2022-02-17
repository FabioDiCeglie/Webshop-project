import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../store/auth/actions";
import { signUp } from "../store/auth/selectors";

export default function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const signedUp = useSelector(signUp);

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(signup(email, password, name));
  }
  //console.log("TODO login with:", email, password);

  return (
    <div>
      {!signedUp ? (
        <div>
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <p>
              <label>
                Name:{" "}
                <input
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </p>
            <p>
              <label>
                Email:{" "}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </p>
            <p>
              <label>
                Password:{" "}
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </p>
            <p>
              <button type="submit">Sign Up</button>
            </p>
          </form>
        </div>
      ) : (
        <div>You signed up</div>
      )}
      <Link to="/">
        <button>Homepage</button>
      </Link>
    </div>
  );
}
