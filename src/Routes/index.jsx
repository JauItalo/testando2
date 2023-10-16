import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../Pages/Login"
import { Register } from "../Pages/Register";
import {Home} from "../Pages/pagesMain/Home"

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};