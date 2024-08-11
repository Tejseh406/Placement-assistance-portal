import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout logic here
    localStorage.setItem('email','');
    navigate('/landing');
    console.log("Logout");
  };

  const handleCreateJob = () => {
    navigate('/job-form'); // Adjust the path based on your routing setup
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Your Company Name</div>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </header>
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to Your Company Portal</h1>
          <p className="text-lg mb-6">
            At Your Company, we provide a comprehensive job portal to help you find the best candidates for your company. 
            Create job postings, manage applications, and connect with top talent easily.
          </p>
          <button
            onClick={handleCreateJob}
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
          >
            Create Job
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
    