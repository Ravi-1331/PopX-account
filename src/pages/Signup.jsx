import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isAgency, setIsAgency] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setFullName('');
    setPhoneNumber('');
    setEmail('');
    setPassword('');
    setCompanyName('');
    setIsAgency(null);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem('email');
    if (email && storedEmail === email) {
      toast.error('Email already exists');
      return;
    }

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('phoneNumber', phoneNumber);
    localStorage.setItem('companyName', companyName);
    localStorage.setItem('isAgency', isAgency);

    toast.success('Account created successfully!');

    navigate('/profile');
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white w-full max-w-sm rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Create your <br /> PopX account
        </h1>

        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="relative mb-7">
            <label
              htmlFor="fullName"
              className="absolute left-6 -top-2 text-sm text-[#6a5bc1] bg-white px-3"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="full-name"
              autoComplete="off"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-purple-600"
            />
          </div>

          <div className="relative mb-7">
            <label
              htmlFor="phoneNumber"
              className="absolute left-6 -top-2 text-sm text-[#6a5bc1] bg-white px-3"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phone"
              autoComplete="off"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-purple-600"
            />
          </div>

          <div className="relative mb-7">
            <label
              htmlFor="email"
              className="absolute left-6 -top-2 text-sm text-[#6a5bc1] bg-white px-3"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-purple-600"
            />
          </div>

          <div className="relative mb-7">
            <label
              htmlFor="password"
              className="absolute left-6 -top-2 text-sm text-[#6a5bc1] bg-white px-3"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="new-password"
              autoComplete="new-password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-purple-600"
            />
          </div>

          <div className="relative mb-7">
            <label
              htmlFor="companyName"
              className="absolute left-6 -top-2 text-sm text-[#6a5bc1] bg-white px-3"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="company"
              autoComplete="off"
              placeholder="Marry Doe"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-purple-600"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Are you an Agency? <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-6">
              <label className="inline-flex items-center text-sm text-gray-700">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={isAgency === 'yes'}
                  onChange={(e) => setIsAgency(e.target.value)}
                  required
                  className="form-radio text-purple-600 mr-2"
                />
                Yes
              </label>
              <label className="inline-flex items-center text-sm text-gray-700">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={isAgency === 'no'}
                  onChange={(e) => setIsAgency(e.target.value)}
                  required
                  className="form-radio text-purple-600 mr-2"
                />
                No
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
