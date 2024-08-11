import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DropdownButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelection = (option) => {
    // Handle the navigation or action based on the selected option
    navigate('/login', { state: { loginType: option }})
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={handleDropdownToggle}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Login
      </button>
      {isDropdownOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
          <button
            onClick={() => handleSelection('member')}
            className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
          >
            Member
          </button>
          <button
            onClick={() => handleSelection('company')}
            className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
          >
            Company
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
