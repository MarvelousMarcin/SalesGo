import { Routes, Route } from "react-router-dom";
import Login from "./components/routes/Login/Login";
import Register from "./components/routes/Register/Register";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
