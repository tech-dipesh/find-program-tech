import {React, useState, useEffect} from "react"
import { Router, useParams } from "react-router-dom"
import {likeItem, disLikeItem} from "../service/api"
export default function Upvote() {
  const [Like, setLike] = useState([])
  const [DisLike, setDisLike] = useState([])
  const {id}=useParams();
  useEffect(() => {
    const likePost=async(data)=>{
      try {
        let response=await likeItem(id);
        
        setLike(likeItem.response.data)
      } catch (error) {
        console.error("Error on like post")
      }
    }
  likePost()
  }, [id, likeData])

  useEffect(() => {
    const disLikePost=async(data)=>{
      try {
        let response=await likeItem(id);
        setLike(disLikeItem.response.data)
      } catch (error) {
        console.error("Error on like post")
      }
    }
  disLikePost()
  }, [id, DislikeData])
  
  return (
    <div className="flex flex-col items-center gap-3">
      <button className="
        p-3 rounded-full transition-all
        hover:bg-green-50 hover:text-green-600
        active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500">
          onclick={likePost}
        <i className="fa-solid fa-heart text-2xl w-8 h-8 
          transform transition-transform hover:scale-110" />
      </button>

      <span className="text-sm font-semibold text-gray-700 px-3 py-1.5 rounded-md
        bg-gray-100/50 hover:bg-gray-100 transition-colors cursor-default">
        27
      </span>

      <button className="
        p-3 rounded-full transition-all
        hover:bg-red-50 hover:text-red-600
        active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500" onclick={disLikePost}>
        <i className="fa-solid fa-heart-crack text-2xl w-8 h-8
          transform transition-transform hover:scale-110" />
      </button>
    </div>
  )
}