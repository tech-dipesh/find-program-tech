import React, { useEffect, useState } from 'react'
import Nodejs from "../assets/nodejs.webp";
import { useForm } from "react-hook-form"
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import API, { postComment } from '../service/api';
// import API, { CommentItem, CommentItem as postCommentAPI } from '../service/api';
import axios from 'axios';
import { toastError, toastSuccess } from '../Miscellaneous/react-toast';
import { toast } from 'react-toastify';

export const Comment = () => {
  let [comments, setComments] = useState([])
  const [isLoggedin, setisLoggedin] = useState(false)
  let navigate = useNavigate()
  let { id } = useParams();
  const { register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  // const onSubmit = (data) => console.log(data)

  useEffect(() => {
    const fetchingComment = async (data) => {
      try {
        // setComments([])
        let response = await API.get(`/tools/${id}/comment`,
          //  {  "content-type": "application/json",
        // },
          // { withCredentials: true }
        );
        setComments(response.data)
          // navigate("/resid")
      } catch (error) {
        toastError(error)
        console.error(error.message)
      }
    }
    if(id){
    fetchingComment()
    }
  }, [id, comments.length])

  const onsubmit = async (data) => {
    try {
      console.log("Comment is ", data.Comment);
      // const response = await axios.post(`http://localhost:5000/{id}/comment`,
    //   {Comment: data.comment},
    //   {headers: {
    //    "content-type": "application/json",
    //  },
    //   withCredentials: true })
    const response = await postComment(id, { Comment: data.Comment }, );
      console.log("response data", response.data);
      setComments(prevComment=>[...prevComment, response.data])
      toastSuccess("New comment is added");
      reset()
    } catch (error) {
      toastError(error.message)
      if (error.response?.status === 401) {
          navigate("/login");
          toastError(error?.response?.message)
      }
    }
  }
  return (
    <>
      <div className="bg-white rounded-xl shadow-md p-6 mb-30 mt-20">
        <h2 className="text-2xl font-semibold mb-6">Comments: {comments.length}</h2>
        <form className="mb-8" onSubmit={handleSubmit(onsubmit)}>
          {errors.Comment && <span className="flex items-center justify-center mt-2 ml-1/2 text-m text-red-500">{errors.Comment.message}</span>}

          <input
            type='text'
            className="w-full mt-1 h-30 p-4 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            rows="4"
            placeholder="Add your comment..."
            {...register("Comment", { required: { value: true, message: "Comment field is required" }, minLength: { value: 5, message: "It should have at least 5 length Character." } })}
          />
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Post Comment
            </button>
          </div>
        </form>
        {/* {for (const comments of CommentItem) { */}
        {/* //as it doesn't return aything we should use parenthese instead of curly brace inside code. */}
        {/* {CommentItem && CommentItem.map((Comment)=>( */}
        {Object.values(comments).map((Comment, index) => (
        // {for (for Comment in commentData){
          <div className="space-y-6" key={Comment._id || index}>
            <div className="border-b pb-6">
              <div className="flex items-start gap-4">
                <img
                  src="https://i.postimg.cc/K8wWMRWj/image.png"
                  alt="Nodejs"
                  className="w-10 h-10 rounded-full object-cover"
                  />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {/* //as i have to add the two case so that's why i am facing the error. */}
                    {/* <h3 className="font-semibold">{Comment.userName}</h3> */}
                    <h3 className="font-semibold">{Comment.userName?.userName || 'guest'}</h3>
                    {/* converting only date */}
                    <span className="text-gray-500 text-sm"> {new Date(Comment.date).toLocaleDateString()}</span>
                  </div>
                  <p className="text-gray-700">{Comment.Comment}</p>
                </div>
              </div>
            </div>
          </div>
        // }}
                ))}
            </div>
    </>
  )
}
