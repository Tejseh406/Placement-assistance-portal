import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify
import Landing from './components/landing'; // Adjust the import paths
import SignUpPage from './components/signup';
import Login from './components/login';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<Login />} />
          {/* Add other routes here */}
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
