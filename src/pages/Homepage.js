import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/auth/actions";
export default function Homepage() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Homepage</h1>
      <Link to="/login">
        <button>Log In</button>
      </Link>
      <Link to="/signup">
        <button>Sign up</button>
      </Link>
      <Link to="/">
        <button onClick={() => dispatch(logout())}>Log out</button>
      </Link>
    </div>
  );
}
