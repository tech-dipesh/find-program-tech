import React from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';

export function toastSuccess(message){
  return (
    <>
    {toast.success(message, {
position: "top-center",
autoClose: 4000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
})}
    </>
  )
}
export function toastError(message){
  return (
    <>
    {toast.error(message, {
position: "top-center",
autoClose: 4000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
})}
    </>
  )
}