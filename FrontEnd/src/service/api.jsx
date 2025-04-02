import axios from "axios";
// In FrontEnd/src/api.js
const API = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export const getAllItems = () => API.get('/tools');
export const getItemById = (id) => API.get(`/tools/${id}`);
export const createItem = (newItem) => API.post('/tools', newItem);
export const updateItem = (id, updatedItem) => API.put(`/tools/${id}`, updatedItem);
export const deleteItem = (id) => API.delete(`/tools/${id}`);
export const CommentItem = (id, commetItems) => API.post(`/tools/${id}/comment`, commetItems);

export default API;