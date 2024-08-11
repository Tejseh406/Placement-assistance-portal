import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify
import Landing from './components/landing'; // Adjust the import paths
import SignUpPage from './components/signup';
import Login from './components/login';
import JobForm from './components/jobForm';
import Home from './components/home';

const App = () => {

  const navigate = useNavigate();

  return (
    <div>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/job-form" element={<JobForm/>} />
          <Route path="/home" element={<Home/>} />
          {/* Add other routes here */}
        </Routes>
        <ToastContainer />
      </div>
  );
};

export default App;
