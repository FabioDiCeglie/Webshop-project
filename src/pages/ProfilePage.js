import { useSelector } from "react-redux";
import { signUp } from "../store/auth/selectors";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const userLoggedIn = useSelector(signUp);

  console.log("what is user", userLoggedIn);

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
    </div>
  );
}
