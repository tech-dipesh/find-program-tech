import { useEffect, useState } from "react";
import Nodejs from "../assets/nodejs.webp";
import Upvote from "./upvote";
import MainNavbar from "../Layout/mainNavbar";
import Footer from "../Layout/footer";
import getItemById from "../service/api";
import { useParams } from "react-router-dom";
export default function Showindividual() {
  const { id } = useParams();
  const [show, setshow] = useState(null);

  useEffect(() => {
    const fetchTool = async () => {
      try {
        const response = await getItemById(id);
        if (Array.isArray(response.data.tools)) {
          const tool = response.data.tools.find(t => t._id === id);
          setshow(tool);
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
  console.log(show)

  return (
    <>
      <MainNavbar />
      <main>
        <div className="min-h-screen bg-gray-50 py-8 px-4">
          <div className="max-w-4xl mx-auto mt-20">
            <button className="mb-6 text-gray-600 hover:text-gray-800 flex items-center">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Listings
            </button>

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
                    <a
                      href="https://www.youtube.com"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website
                    </a>
                  </div>

                  <div className="mt-4 flex items-center gap-6 text-gray-600">
                    <span>🚀 Launched: {show.releaseYear}</span>
                    <span>💬 5 Comments</span>
                    <span> 10 <i className="fa-solid fa-heart ml-2"></i></span>
                  </div>

                  <p className="mt-6 text-gray-700 leading-relaxed">
                    {/* Best backend server side framework for the javascript. */}
                    {show.useCase}
                  </p>
                </div>
              </div>
            </div>
            <Upvote />
            {/* <Description /> */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">In-Depth Overview</h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p className="text-lg font-medium text-gray-700">
                   {show.Description}
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-800 mb-2">Core Features:</h3>
                    <ul className="list-none space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        Event-driven architecture for scalable network applications
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        Non-blocking I/O model for high performance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6">Comments 10</h2>

              <form className="mb-8">
                <textarea
                  className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  rows="4"
                  placeholder="Add your comment..."
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
