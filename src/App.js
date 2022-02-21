import { Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from "./Components/Dashboard";
import Home from './Components/Home';
import Info from "./Components/Info";
import Prerequisite from "./Components/Prequisite";
import Register from "./Components/Register";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="prerequisite" element={<Prerequisite />} />
        <Route path="info" element={<Info />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
