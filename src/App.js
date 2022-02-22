import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LogInPage from "./pages/LogInpage";
import SignUpPage from "./pages/SignUpPage";
import { useDispatch } from "react-redux";
import { persistLogIn } from "../src/store/auth/actions";
import { useEffect } from "react";
import ProfilePage from "./pages/ProfilePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(persistLogIn());
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/products/details/:id" element={<DetailsPage />}></Route>
        <Route path="/login" element={<LogInPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/profile/user" element={<ProfilePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
