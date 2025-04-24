import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import ProfilePage from './pages/Profile'
import Login from './pages/Login'
import Signup from './pages/Signup'
import LandingScreen from './pages/LandingScreen'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const location = useLocation();

  // Clear form input data when navigating to login or signup
  useEffect(() => {
    // When navigating to login or signup pages, we want to 
    // tell the browser not to autofill by triggering a page reload
    // This is a workaround for persistent autofill issues
    if (location.pathname === '/login' || location.pathname === '/signup') {
      // Add a random timestamp to session storage - this won't affect the app
      // but will make the browser think the form is "new" each time
      sessionStorage.setItem('formTimestamp', Date.now().toString());
    }
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingScreen />} />
        <Route path='/login' element={<Login key={location.pathname === '/login' ? Date.now() : 'login'} />} />
        <Route path='/signup' element={<Signup key={location.pathname === '/signup' ? Date.now() : 'signup'} />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
