import axios from "axios";
const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Your backend URL
  headers: {
    'Content-Type': 'application/json'
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