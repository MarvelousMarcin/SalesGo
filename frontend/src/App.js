import { Routes, Route } from "react-router-dom";
import Login from "./components/routes/Login/Login";
import Register from "./components/routes/Register/Register";
import Dashboard from "./components/routes/Dashboard/Dashboard";

import { useSelector } from "react-redux";

const App = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={isLogged ? <Dashboard /> : <div>Auth needed</div>}
        />
      </Routes>
    </div>
  );
};

export default App;
