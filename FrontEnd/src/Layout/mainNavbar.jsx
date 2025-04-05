import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png";
import "./mainNavbar.css";

import { ToastContainer, toast } from 'react-toastify';
import Searchfeature from './searchfeature';
import {  getUserActivity, logOut } from '../service/api';
export default function MainNavbar() {
const [userActivity, setUserActivity] = useState()
  const navigate = useNavigate()
  //it's for the checking whether user is logged in or not on our website.
  useEffect(() => {
    getUserActivity()
      .then(res => setUserActivity(res.data.currUser))
      .catch(() => setUserActivity(null));
  }, []);

  const logOutClick = async (e) => {
    e.preventDefault()
    try {
      await logOut()
      // {toastSuccess}
      toastError("Succesfully logged out.")
      // toast.success('Successfully logged out!');
      setUserActivity(null);
      // useNavigate("/")
      navigate("/")
    } catch (error) {
      // toast.error("Failed to logged out")
      toastError("🦄 Failed to logged out, please try again.")
      console.error("Errro on frontend onclick functionality ", error)
    }
  }


   
  return (
    <nav className="fixed bg-white  z-40 dark:bg-gray-900 w-full border-b border-gray-200 dark:border-gray-600 navbar">
      <ToastContainer autoClose={5000} />
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
        <Link to="/" className="flex items-center -ml-30 space-x-3">
          <img src={logo} className="h-8" alt="Developer Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Developer Listing</span>
        </Link>
    <Searchfeature/>
        <ul className="flex space-x-6 mr-10 font-medium">
          <Link to="/tools" className='text-gray-900 dark:text-white hover:text-blue-700'>All Listings</Link>
          <Link to="/tools" className='text-gray-900 dark:text-white hover:text-blue-700'>Random Listings</Link>
          <Link to="/tools/new" className='text-gray-900 dark:text-white hover:text-blue-700'>New Listinsg</Link>
          <Link to="/contact" className='text-gray-900 dark:text-white hover:text-blue-700'>Contact Us</Link>
        </ul>
        {/* if(!userActivity){ */}
        {userActivity ? (
          // <Link to='/logout' className="absolute right-2 text-white bg-blue-700 hover:bg-blue-800 px-4 py-3 rounded-lg">Logout</Link>
          <a onClick={logOutClick} className="absolute right-2 text-white bg-blue-700 hover:bg-blue-800 px-4 py-3 rounded-lg cursor-pointer">Logout</a>
        ) : (
          <Link to='/login' className="absolute right-2 text-white bg-blue-500 hover:bg-blue-800 px-4 py-3 rounded-lg">Get Started/Login</Link>
        )}
      </div>
    </nav>
  )
}