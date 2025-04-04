import { AlertCircle } from 'lucide-react'
import React from 'react'
import MainNavbar from '../Layout/mainNavbar'
import Footer from '../Layout/footer'
import { Link } from 'react-router-dom'
import { toastError } from './react-toast'
export const NoUrl = () => {
  return (
    <>
    {toastError="Please make sure requested url is exist."}
  <MainNavbar />
   <div className="flex flex-col min-h-screen justify-center items-center bg-gray-900">
  <div className="bg-gray-800 p-6 rounded-md shadow-lg mb-20 max-w-lg text-center m-30">
    <div className="flex flex-col items-center space-y-4">
      <AlertCircle className="h-12 w-12 text-red-500" />
      <div className="text-red-500 text-2xl font-medium">
        404 - Sorry, we didn't find the URL you were looking for.
      </div>
      <p className="text-gray-400 text-sm">
        The page you're trying to access doesn't exist. You can go back to the homepage or explore other sections.
      </p>
      
      <Link className='mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600' to="/">HomePage</Link>
    </div>
  </div>
  <Footer />
</div>

    </>
  )
}
