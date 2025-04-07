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
// export const CommentItem = (id, commentData) => API.post(`/tools/${id}/comment`, CommentItem);
export const postComment = (id, commentData) => API.post(`/tools/${id}/comment`, commentData); 
//Miscelleuuns
export const ContactForm=(contactData)=>API.post("/contact", contactData);

// Login Credential
export const likeItem = (id, likeData) => API.post(`/tools/${id}/like`, likeData);
export const disLikeItem = (id, disLikeData) => API.post(`/tools/${id}/dislike`, disLikeData);
export const logOut=()=>API.get(`/logout`)
export const getUserActivity=()=>API.get("/current-user")
export default API;