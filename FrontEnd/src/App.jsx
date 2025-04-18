import React, { useState, useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './content/allHomepage.jsx'
import Login from './Register/login.jsx'
import "./App.css";
import Signup from './Register/signup.jsx'
import Show from './Listing/show.jsx'
import Showindividual from './Listing/showIndividual.jsx'
import Newlisting from './Listing/newListing.jsx'
import ContactForm from './Miscellaneous/contactForm.jsx'
import Axios from "axios"
import { NoUrl } from './Miscellaneous/Nourl.jsx';
import { Edit } from './Listing/edit.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tools">
          <Route index element={<Show />} />
          <Route path="new" element={<Newlisting />} />
          <Route path=":id" element={<Showindividual />} />
          <Route path=":id/edit" element={<Edit/>} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='contact' element={<ContactForm />} />
        <Route path="*" element={<NoUrl />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
