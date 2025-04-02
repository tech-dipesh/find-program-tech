import React, { useEffect, useState } from 'react'
import Nodejs from "../assets/nodejs.webp";
import { useForm } from "react-hook-form"
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { CommentItem } from '../service/api';

export const Comment = () => {
  let [CommentItem, setCommentItem]=useState()
  
  let navigate=useNavigate()
  let {id}=useParams;
  const {register,
  handleSubmit,
  formState: { errors },
} = useForm()

const onSubmit = (data) => console.log(data)

useEffect(() => {
  const fetchingComment=async (data) => {
    try {
      await CommentItem(id)
      let CommentItem=await axios.post(`http://localhost:5000/${id}/comment`,{
        "content-type": "application/json",
      },
      {withCredentials: true}
    )
    console.log("send data successfully", CommentItem.data),
    navigate("/resid")
    // useCredintials: true
    } catch (error) {
      console.error("Error on the comment post id listings", error)
    }
  }
  fetchingComment()
}, [id])

  return (
    <>
     <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6">Comments 10</h2>
              <form className="mb-8" onSubmit={handleSubmit(onSubmit)}>
              {errors.Comment && <span className="flex items-center justify-center mt-2 ml-1/2 text-m text-red-500">{errors.Comment.message}</span>}

                <input 
                  type='text'
                  className="w-full mt-1 h-30 p-4 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  rows="4"
                  placeholder="Add your comment..."
                  {...register("Comment", { required: {value: true, message: "Comment field is required"}, minLength:{value:5, message: "It should have at least 5 length Character."} })}
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

              <div className="space-y-6">
                <div className="border-b pb-6">
                  <div className="flex items-start gap-4">
                    <img
                      src={Nodejs}
                      alt="Nodejs"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold">dipak</h3>
                        <span className="text-gray-500 text-sm">1 days ago</span>
                      </div>
                      <p className="text-gray-700">it made for the easiness i love that.</p>
                      <div className="mt-3 flex items-center gap-4">

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button
                  className="px-6 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg"
                >Show All Comments
                </button>
              </div>
            </div>
    </>
  )
}
