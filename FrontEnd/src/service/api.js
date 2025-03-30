import axios from "axios";
// In FrontEnd/src/api.js
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000/api',
  withCredentials: true, // Add this for session cookies
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Example service functions
export const getAllItems = () => API.get('/items');
export const getItemById = (id) => API.get(`/items/${id}`);
export const createItem = (newItem) => API.post('/items', newItem);
export const updateItem = (id, updatedItem) => API.put(`/items/${id}`, updatedItem);
export const deleteItem = (id) => API.delete(`/items/${id}`);

// Export the API instance in case you need direct access
export default API;