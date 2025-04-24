import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f5f5f5] p-5">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-[400px] w-full flex flex-col">
        <div className="pt-[400px]">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Welcome to PopX
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit.
          </p>

          <button
            onClick={() => navigate('/signup')}
            className="w-full py-3 mb-4 bg-[#6a5bc1] text-white rounded-md text-base font-medium cursor-pointer transition-colors duration-300 hover:bg-[#5a4ba1]"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate('/login')}
            className="w-full py-3 bg-[#d8d0ff] text-[#6a5bc1] rounded-md text-base font-medium cursor-pointer transition-colors duration-300 hover:bg-[#c8c0ef]"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
