import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Homepage from "./components/HomePage/Homepage";
import PublicNavbar from "./components/Navbar/PublicNavbar"; // Importing PublicNavbar
import SignUp from "./components/SignUp/signUp";
import LoginPage from "./components/login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route element={<SignUp />} path="/sign-up" />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<Dashboard />} path="/dashboard" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
