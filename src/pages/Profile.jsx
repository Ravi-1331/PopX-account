import React, { useEffect, useState } from 'react';
import { Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');

    if (!storedEmail) {
      toast.error('Please login to continue');
      navigate('/login');
    } else {
      setUserEmail(storedEmail);
    }

    const handleStorageChange = () => {
      const newEmail = localStorage.getItem('email');
      if (newEmail !== userEmail) {
        setUserEmail(newEmail || '');
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4">
      <div className="w-full max-w-sm bg-white shadow p-6">
        {/* Header */}
        <h1 className="text-xl font-semibold mb-2">Account Settings</h1>
        <hr className="border-dashed border-gray-300 mb-4" />

        {/* User Info */}
        <div className="flex items-center mb-4">
          <div className="relative">
            <img
              src="https://itbucketo.com/wp-content/uploads/2022/01/wepik-202204-214441.jpg"
              alt="User Avatar"
              className="w-16 h-16 rounded-full"
            />
            {/* Camera Icon positioned at bottom left */}
            <div className="absolute bottom-1 left-10">
              <Camera className="w-5 h-5 text-gray-600 bg-white p-0.5 rounded-full" />
            </div>
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-medium text-gray-800">Marry Doe</h2>
            <p className="text-sm text-gray-600">{userEmail}</p>
          </div>
        </div>
        <hr className="border-dashed border-gray-300 mb-4" />

        {/* Description */}
        <p className="text-gray-700 text-sm mb-4">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
          Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
        <hr className="border-dashed border-gray-300 mb-4" />
      </div>
    </div>
  );
};

export default ProfilePage;
