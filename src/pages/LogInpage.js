import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/auth/actions";
import { useSelector } from "react-redux";
import { logIn } from "../store/auth/selectors";
export default function LogInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loggedIn = useSelector(logIn);

  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    // TODO
    dispatch(login(email, password));
  }
  //console.log("TODO login with:", email, password);

  return (
    <div>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
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
            {loggedIn ? (
              <Link to="/">
                <button type="submit">Login</button>
              </Link>
            ) : (
              <button type="submit">Login</button>
            )}
          </p>
        </form>
      </div>

      <Link to="/">
        <button>Homepage</button>
      </Link>
    </div>
  );
}
