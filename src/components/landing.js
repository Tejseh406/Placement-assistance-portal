import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    };
  return (
    <div
      style={{ backgroundImage: 'url(/landing-bg.png)' }}
      className="min-h-screen bg-cover bg-no-repeat flex flex-col"
    >
      <div className="relative flex min-h-screen">
        {/* Button */}
        <button onClick={navigateLogin} className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Login
        </button>

        {/* Text Area */}
        <div className="w-2/5  pt-10 ps-10">
          <div>
          <h1 className="text-5xl font-extrabold text-indigo-600 mb-4">
            Welcome to Our Placement Assistance Portal
          </h1>
          <p className="text-lg text-sky-700">
            We provide you with the best placement services to help you succeed in your career.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
