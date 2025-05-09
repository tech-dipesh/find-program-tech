import { Link } from "react-router-dom";
import Video from "../assets/demo.mp4";
export default function Hero() {
  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
            Discover Your Next <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dev Toolkit</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Join with me to build the next Developer Tool.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105">
              Explore Now
            </Link>
            <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl text-lg hover:border-blue-500 transition-all">
              <a href="https://www.linkedin.com/in/dipeshacademy">
                Watch Demo</a>
            </button>
          </div>
          <div className="mt-5 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
            {/* <div className="aspect-video bg-gray-100 dark:bg-gray-800 animate-pulse"> */}
              {/* <video src="https://www.youtube.com/watch?v=GYQmzL2Vbt0"></video> */}
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/GYQmzL2Vbt0"
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Demo Video"
              ></iframe>
              </div>
            {/* </div> */}
          </div>
        </div>
      </section>
    </>
  )
}