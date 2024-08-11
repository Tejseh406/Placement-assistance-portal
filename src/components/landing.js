import React from 'react';
import DropdownButton from './loginDropdown';

const Landing = () => {


  return (
    <div
      style={{ backgroundImage: 'url(/landing-bg.png)' }}
      className="min-h-screen bg-cover bg-no-repeat flex flex-col"
    >
      <div className="relative flex flex-col min-h-screen">
        {/* Button */}
        <div className="absolute top-4 right-4">
          <DropdownButton />
        </div>

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
