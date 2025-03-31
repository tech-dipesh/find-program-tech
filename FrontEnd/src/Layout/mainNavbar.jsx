import { useState } from 'react';
import logo from "../assets/logo.png";
import "./mainNavbar.css";
import {Link} from "react-router-dom";

export default function MainNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('USA');

  const countries = [
    { name: 'USA', flag: '🇺🇸' },
    { name: 'China', flag: '🇨🇳' },
    { name: 'Great Britain', flag: '🇩🇪' },
    { name: 'Italy', flag: '🇮🇹' }
  ];

  return (
    <nav className="fixed bg-white  z-40 dark:bg-gray-900 w-full border-b border-gray-200 dark:border-gray-600 navbar">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
       <Link to="/" className="flex items-center -ml-30 space-x-3">
       <img src={logo} className="h-8" alt="Developer Logo" />
       <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Developer Listing</span>
       </Link>

        <div className="flex items-center space-x-4 ml-30">
          <div className="flex relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center py-2.5 px-4 text-sm bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200"
            >
              <span className="mr-2">{countries.find(c => c.name === selectedCountry)?.flag}</span>
              {selectedCountry}
              <svg className="w-2.5 h-2.5 ml-2" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 z-50 mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <div className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {countries.map((country) => (
                    <button
                      key={country.name}
                      onClick={() => {
                        setSelectedCountry(country.name);
                        setIsDropdownOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <span className="mr-2">{country.flag}</span>
                      {country.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="relative">
              <input type="search" className="p-2.5 w-64 text-sm bg-gray-50 border border-gray-300" placeholder="Search a Tool!" />
              <button className="absolute right-0 top-0 h-full px-4 bg-blue-700 rounded-e-lg hover:bg-blue-800">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <ul className="flex space-x-6 mr-10 font-medium">
          <Link to="/tools" className='text-gray-900 dark:text-white hover:text-blue-700'>All Listings</Link>
          <Link to="/tools" className='text-gray-900 dark:text-white hover:text-blue-700'>Random Listings</Link>
          <Link to="/tools/new" className='text-gray-900 dark:text-white hover:text-blue-700'>New Listinsg</Link>
          <Link to="/contact" className='text-gray-900 dark:text-white hover:text-blue-700'>Contact Us</Link>
        </ul>

          <Link to='/login' className="absolute right-2 text-white bg-blue-700 hover:bg-blue-800 px-4 py-3 rounded-lg">Get Started/Login</Link>
      </div>
    </nav>
  )
}