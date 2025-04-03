import { useEffect, useState } from 'react';
import logo from "../assets/logo.png";
import "./mainNavbar.css";
import {Link} from "react-router-dom";
import { getUserActivity  } from '../service/api';

export default function MainNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('USA');
  const [userActivity, setUserActivity]=useState()
  const countries = [
    { name: 'USA', flag: '🇺🇸' },
    { name: 'China', flag: '🇨🇳' },
    { name: 'Great Britain', flag: '🇩🇪' },
    { name: 'Italy', flag: '🇮🇹' }
  ];

  //it's for the checking whether user is logged in or not on our website.
  useEffect(() => {
    getUserActivity()
      .then(res => setUserActivity(res.data.currUser))
      .catch(() => setUserActivity(null));
  }, []);

  return (
    <nav className="fixed bg-white  z-40 dark:bg-gray-900 w-full border-b border-gray-200 dark:border-gray-600 navbar">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
       <Link to="/" className="flex items-center -ml-30 space-x-3">
       <img src={logo} className="h-8" alt="Developer Logo" />
       <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Developer Listing</span>
       </Link>

       <form class="ml-lg max-w-sm mx-auto w-full">
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <i class="fa-solid fa-magnifying-glass text-gray-500 text-lg"></i>
        </div>
        <input type="search" id="search" class="block w-full p-4 pl-12 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="New Developer..." required />
        <button type="submit" class="text-white absolute right-3 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700">Search</button>
    </div>
</form>



        <ul className="flex space-x-6 mr-10 font-medium">
          <Link to="/tools" className='text-gray-900 dark:text-white hover:text-blue-700'>All Listings</Link>
          <Link to="/tools" className='text-gray-900 dark:text-white hover:text-blue-700'>Random Listings</Link>
          <Link to="/tools/new" className='text-gray-900 dark:text-white hover:text-blue-700'>New Listinsg</Link>
          <Link to="/contact" className='text-gray-900 dark:text-white hover:text-blue-700'>Contact Us</Link>
        </ul>
          {/* if(!userActivity){ */}
          {!userActivity ?  (
          <Link to='/login' className="absolute right-2 text-white bg-blue-700 hover:bg-blue-800 px-4 py-3 rounded-lg">Get Started/Login</Link>
          ):(
          <Link to='/logout' className="absolute right-2 text-white bg-blue-500 hover:bg-blue-800 px-4 py-3 rounded-lg">Logout</Link>
)}
      </div>
    </nav>
  )
}