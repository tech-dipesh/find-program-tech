import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainFooter from './navbar/mainNavbar.jsx'
import Home from './content/allHomepage.jsx'
import Login from './Register/login.jsx'
import "./App.css";
import Signup from './Register/signup.jsx'
import Show from './Listing/show.jsx'
import Showindividual from './Listing/showIndividual.jsx'
import Newlisting from './Listing/newListing.jsx'
import ContactForm from './Miscellaneous/contactForm.jsx'
function App() {

  return (
    <>
     <div className="App">
       <MainFooter />
      {/* <Home /> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      <Show/>
      {/* <Showindividual/> */}
      {/* <Newlisting/> */}
      {/* <ContactForm/> */}
    </div>
      </>
  )
}

export default App
