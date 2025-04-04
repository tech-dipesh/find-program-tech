// import {React, useState, useEffect} from "react"
// import { Router, useParams } from "react-router-dom"
// import {likeItem, disLikeItem} from "../service/api"
// export default function Upvote() {
//   const [Like, setLike] = useState(0)
//   const [DisLike, setDisLike] = useState(0)
//   const {id}=useParams();

// const handleLike = async () => {
//   try {
//     const res = await likeItem(id);
//     setLike(res.data.likes);
//     setDisLike(res.data.dislikes); 
//   } catch (error) {
//     console.error("Like error:", error);  
//   }
// };

// const handleDislike = async () => {
//   try {
//     const res = await disLikeItem(id);
//     setDisLike(res.data.dislikes);
//     setLike(res.data.likes);
//   }
//   catch(error){
//     console.error("Dislike error:", error);
//   }
// };
  
//   return (
//     <div className="flex flex-col items-center gap-3">
//       <button className="
//         p-3 rounded-full transition-all
//         hover:bg-green-50 hover:text-green-600
//         active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500"
//           onClick={handleLike}>
//         <i className="fa-solid fa-heart text-2xl w-8 h-8 
//           transform transition-transform hover:scale-110" />
//       </button>

//       <span className="text-sm font-semibold text-gray-700 px-3 py-1.5 rounded-md
//         bg-gray-100/50 hover:bg-gray-100 transition-colors cursor-default">
//         {Like}
//       </span>

//       <button className="
//         p-3 rounded-full transition-all
//         hover:bg-red-50 hover:text-red-600
//         active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500" onClick={handleDislike}>
//         <i className="fa-solid fa-heart-crack text-2xl w-8 h-8
//           transform transition-transform hover:scale-110" />
//       </button>
//           <span className="text-sm font-semibold text-gray-700 px-3 py-1.5 rounded-md
//             bg-gray-100/50 hover:bg-gray-100 transition-colors cursor-default">
//             {DisLike}
//           </span>
//     </div>
//   )
// }

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { likeItem, disLikeItem } from "../service/api";
import axios from "axios";

export default function Upvote() {
  const { id } = useParams();
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const res = await axios.get(`/tools/${id}`);
        setLikes(res.data.likes);
        setDislikes(res.data.dislikes);
      } catch (error) {
        setError("Failed to load votes");
        console.error("Error fetching counts:", error);
      }
    };
    fetchCounts();
  }, [id]);

  const handleLike = async () => {
    try {
      const res = await likeItem(id);
      setLikes(res.data.likes);
      setDislikes(res.data.dislikes);
      setError(null);
    } catch (error) {
      setError("Failed to like. Please login!");
      console.error("Like error:", error);
    }
  };

  const handleDislike = async () => {
    try {
      const res = await disLikeItem(id);
      setDislikes(res.data.dislikes);
      setLikes(res.data.likes);
      setError(null);
    } catch (error) {
      setError("Failed to dislike. Please login!");
      console.error("Dislike error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      {error && (
        <div className="text-red-500 text-sm mb-2">{error}</div>
      )}
      
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-center">
          <button
            onClick={handleLike}
            className="p-3 rounded-full transition-all hover:bg-green-50 hover:text-green-600 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <i className="fa-solid fa-heart text-2xl" />
          </button>
          <span className="text-sm font-semibold text-gray-700 px-3 py-1.5 rounded-md bg-gray-100/50 mt-2">
            {likes || <h1>0</h1>}
          </span>
        </div>

        <div className="flex flex-col items-center">
          <button
            onClick={handleDislike}
            className="p-3 rounded-full transition-all hover:bg-red-50 hover:text-red-600 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <i className="fa-solid fa-heart-crack text-2xl" />
          </button>
          <span className="text-sm font-semibold text-gray-700 px-3 py-1.5 rounded-md bg-gray-100/50 mt-2">
            {dislikes || <h1>0</h1>}
          </span>
        </div>
      </div>
    </div>
  );
}