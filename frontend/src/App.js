import { Routes, Route } from "react-router-dom";
import Login from "./components/routes/Login/Login";
import Register from "./components/routes/Register/Register";
import Dashboard from "./components/routes/Dashboard/Dashboard";
import OrderCategory from "./components/routes/Dashboard/OrdersWidget/OrderCategory";
import QualityPage from "./components/routes/Dashboard/QualityWidget/QualityPage";
import ReviewPage from "./components/routes/Dashboard/ReviewWidget/ReviewPage";
import { useSelector } from "react-redux";

const App = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/order/:category"
          element={isLogged ? <OrderCategory /> : <div>Auth needed</div>}
        />

        <Route
          path="/quality"
          element={isLogged ? <QualityPage /> : <div>Auth needed</div>}
        />

        <Route
          path="/reviews"
          element={isLogged ? <ReviewPage /> : <div>Auth needed</div>}
        />

        <Route
          path="/dashboard"
          element={isLogged ? <Dashboard /> : <div>Auth needed</div>}
        />
      </Routes>
    </div>
  );
};

export default App;
