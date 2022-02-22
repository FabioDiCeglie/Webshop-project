import { useSelector } from "react-redux";
import { signUp } from "../store/auth/selectors";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateSpecificUser } from "../store/auth/actions";

export default function ProfilePage() {
  const userLoggedIn = useSelector(signUp);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  //console.log("what is user", userLoggedIn);

  function handleSubmit() {
    dispatch(updateSpecificUser(name, email, userLoggedIn.id));
    setName("");
    setEmail("");
  }

  return (
    <div>
      {!userLoggedIn ? (
        "Loading"
      ) : (
        <div>
          <h1>Profile Page:</h1>
          <p>Email: {userLoggedIn.email}</p>
          <p>Name: {userLoggedIn.name}</p>
        </div>
      )}
      <Link to="/">
        <button>Homepage</button>
      </Link>
      <h1>Update your data: </h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Name:{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Email:{" "}
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </p>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
