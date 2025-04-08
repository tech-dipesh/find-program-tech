import { useEffect, useState } from "react";
import Nodejs from "../assets/nodejs.webp";
import Upvote from "./upvote";
import MainNavbar from "../Layout/mainNavbar";
import Footer from "../Layout/footer";
import getItemById from "../service/api";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Comment } from "./comment.jsx";
export default function Showindividual() {
  const { id } = useParams();
  const [show, setshow] = useState(null);
  const [comments, setComments] = useState([]);
  const [deleted, setdeleted] = useState()
  useEffect(() => {
    const fetchTool = async (data) => { 
      try {
        const response = await getItemById(id);
        // if (Array.isArray(response.data.tools)) {
        if (response.data.tools) {
          const tool = response.data.tools.find(t => t._id === id);
          setshow(tool);
          //just passing the to
          const commentsResponse = await axios.get(`http://localhost:5000/tools/${id}/comment`);
          setComments(commentsResponse.data);
        } else {
          setshow(response.data.tools);
        }
      } catch (error) {
        console.error('Error fetching tool:', error);
      }
    };
    fetchTool();
  }, [id]);

  if (!show) return <div className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">Loading...</div>;

  // useEffect(() => {
  //   let Comment=async ()
  // }, [])

  return (
    <>
      <MainNavbar />
      <main>
        <div className="min-h-screen bg-gray-50 py-8 px-4">
          <div className="max-w-4xl mx-auto mt-20">
            <Link to="/tools" className="mb-6 text-gray-600 hover:text-gray-800 flex items-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Listings
            </Link>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex items-start gap-6">
                <img
                  src={Nodejs}
                  alt="Nodejs"
                  className="w-20 h-20 rounded-lg object-contain"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">{show.Name}</h1>
                      <div className="flex gap-2 mb-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          Founder: {show.companyName}
                        </span>
                      </div>
                      <div className="flex gap-2 mb-3">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          API Tools
                        </span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          Backend
                        </span>

                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          Release Year: {show.releaseYear}
                        </span>
                      </div>
                    </div>

                    {/* <a
                      // href={show.webLink}
                      href={show._id}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 cursor-pointer"
                    >
                      Edit
                    </a> */}
                    <Link to={`/tools/${show._id}/edit`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 cursor-pointer">
                      Edit
                    </Link>
                    <a
                      href={show.webLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-45 ml-155 absolute px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 cursor-pointer"
                    >
                      Visit Website
                    </a>

                  </div>

                  <div className="mt-4 flex items-center gap-6 text-gray-600">
                    <span>🚀 Launched: {show.releaseYear}</span>
                    <span>💬 {comments.length} Comments</span>
                    <span> 10 <i className="fa-solid fa-heart ml-2"></i></span>
                  </div>

                  <p className="mt-6 text-gray-700 leading-relaxed">
                    {/* Best backend server side framework for the javascript. */}
                    {show.useCase}
                  </p>
                </div>
              </div>
            </div>
            {/* <Upvote /> */}
            {/* <Description /> */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">In-Depth Overview</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p className="text-lg font-medium text-gray-700">
                    {show.Description}
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Stack:</h3>
                    <ul className="list-none space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        {show.techStack}
                      </li>
                      {/* <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        Non-blocking I/O model for high performance
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Comment />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
