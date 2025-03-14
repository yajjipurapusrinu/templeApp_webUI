<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

// Import all pages
import EmailLogin from './Components/LoginComponent/EmailLogin';
import PhoneLogin from './Components/LoginComponent/PhoneLogin';
import OTPLogin from './Components/LoginComponent/otpSend';
import LoginPage from './Pages/Login';
import HomePage from './Pages/Homepage';
import AddTask from './Pages/Addtaskpage';
import AllTasks from './Pages/Alltaskspage';
import MyTasks from './Pages/Mytaskspage';
import MyBids from './Pages/MyBids';
import Fillters from './Pages/Fillters';
import Profile from './Pages/Profile';
import AppSettings from './Pages/AppSettings';
import Transactions from './Pages/Transactions';
import HelpSupport from './Pages/help&support';
import Layout from './Pages/Layout';
import Logout from './Pages/Logout';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token');
  return isAuthenticated ? children : <Navigate to="/" />;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('token', 'userToken'); // Mock token for demo purposes
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/email-login" element={<EmailLogin />} />
        <Route path="/phone-login" element={<PhoneLogin />} />
        <Route path="/otp-login" element={<OTPLogin />} />

        {/* Protected Routes with Layout */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route path="home" element={<HomePage />} />
          <Route path="add-task" element={<AddTask />} />
          <Route path="all-tasks" element={<AllTasks />} />
          <Route path="my-tasks" element={<MyTasks />} />
          <Route path="my-bids" element={<MyBids />} />
          <Route path="filters" element={<Fillters />} />
          <Route path="profile" element={<Profile />} />
          <Route path="app-settings" element={<AppSettings />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="help-support" element={<HelpSupport />} />
          <Route path="logout" element={<Logout onLogout={handleLogout} />} />
          <Route index element={<Navigate to="/home" />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Route>
      </Routes>
    </Router>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 0cd4a53 (Initialize project using Create React App)
  );
}

export default App;
