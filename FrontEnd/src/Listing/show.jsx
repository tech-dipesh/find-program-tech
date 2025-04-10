import { useState, useEffect } from "react";
import Node from "../assets/nodejs.webp";
// import Express from "../assets/express-js.png";
import MainNavbar from "../Layout/mainNavbar";
import Footer from "../Layout/footer";
import { getAllItems } from '../service/api';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Miscellaneous/Loading";

export default function Show() {
  const {id}=useParams()
  const [tools, setTools] = useState([]);
  const [comments, setComments]=useState([])
  useEffect(() => {
    const setId = async () => {
      try {
        const response=await getAllItems();
        setTools(response.data.tools)
        //extracting the length of the total comments:
        const commentsResponse = await axios.get(`http://localhost:5000/tools/${id}/comment`);
        setComments(commentsResponse.data);
      } catch (error) {
        // console.error(`Error on UseEffect fetching data, ${error}`);
        console.error(error)
      }
    }
    setId()
  }, [])

  if(!tools) return <Loading/>
  return (
    <>
      <MainNavbar />
      <div className="pt-20"></div>
      {tools.map((tool) => (
        <div key={tool._id}>
          <div className="flex flex- items-center bg-gray-50">
            <div className="w-full max-w-3xl mx-auto space-y-6 mt-10">
              <div className="relative flex flex-col p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <img
                    src={tool.Logo || "https://i.postimg.cc/K8wWMRWj/image.png"}
                    alt="Tool Logo"
                    className="w-12 h-12 rounded-lg object-contain"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">{tool.Name}</h2>
                    <div className="mt-2 flex gap-2">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                        {tool.techStack}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-gray-600 text-md">
                  {tool.useCase}
                </p>

                <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                  <span>Launched: {tool.releaseYear}</span>
                  <span>•</span>
                  {/* <span>{tool.comments.length}</span> */}
                  <span>Commennts: {comments.length}</span>
                </div>

                <div className="mt-6 flex justify-end">
                  <Link to={tool._id} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200">
                    Link
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </>
  )
  }