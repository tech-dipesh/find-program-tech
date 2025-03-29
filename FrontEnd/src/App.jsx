import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainFooter from './Layout/mainNavbar.jsx'
import Home from './content/allHomepage.jsx'
import Login from './Register/login.jsx'
import "./App.css";
import Signup from './Register/signup.jsx'
import Show from './Listing/show.jsx'
import Showindividual from './Listing/showIndividual.jsx'
import Newlisting from './Listing/newListing.jsx'
import ContactForm from './Miscellaneous/contactForm.jsx'
import Axios from "axios"
import Error from './Miscellaneous/Error.jsx';

function App() {
  return (
    <>
      <div className="App">
        {/* <MainFooter /> */}
        {/* <Home /> */}
        {/* <Login/> */}
        <Signup/>
        {/* <Show /> */}
        {/* <Showindividual/> */}
        {/* <Newlisting /> */}
        {/* <Error/> */}
        {/* <ContactForm/> */}
        {/* <Link to="/Contact-us">Contact Form</Link> */}
      </div>
    </>
  )
}

export default App
