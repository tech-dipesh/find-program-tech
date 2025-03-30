import React from 'react'
import axios from 'axios'
const API = axios.create({
  baseURL: 'http://localhost:4000',
  // headers: {
  //   'Content-Type': 'application/json'
  // }
  withCredentials: true
})

export const getAllItems = () => API.get('/tools');
export const getItemById = (id) => API.get(`/tools/${id}`);
export const createItem = (newItem) => API.post('/tools', newItem);

export const Axios = () => {
  return (
    <>

    </>
  )
}
