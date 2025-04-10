import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import HomePage from "./Pages/Homepage";
import AboutPage from "./Pages/Aboutpage";
import ContactPage from "./Pages/Contactpage";
import RegisterPage from "./Pages/Registerpage";
import LoginPage from "./Pages/Login";
import DonetePage from "./Pages/Donete";
import Profile from "./Pages/Profile"; // <-- Make sure this is imported

import Navbar from "./Pages/Navbar"; // This is now a layout with <Outlet>

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("token", "userToken");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  return (
    <Router>
      <Routes>
        {/* Layout route with Navbar and nested children */}
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="donete" element={<DonetePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;
