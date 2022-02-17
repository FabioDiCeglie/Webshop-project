import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LogInPage from "./pages/LogInpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<LogInPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
