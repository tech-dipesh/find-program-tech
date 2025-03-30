import React from 'react'

export const NoUrl = () => {
  return (
    <>
  <div className="bg-gray-900 p-4 -mt-30 ml-30 rounded-md shadow-lg mb-20">
      <div className="flex items-center space-x-3">
        <AlertCircle className="h-5 w-5 text-red-500" />
        <div className="text-red-500 text-sm font-medium">404 Sorry we didn't find the url that you are trying to access.</div>
      </div>
    </div>
    </>
  )
}
