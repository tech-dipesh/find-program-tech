import Node from "../assets/nodejs.webp";
import Express from "../assets/express-js.png";
import MainNavbar from "../Layout/mainNavbar";
import Footer from "../Layout/footer";
export default function Show(){
  return (
    <>
    <MainNavbar/>
    {/* <div className="mt-10"></div> */}
    <div className="flex flex-col items-center min-h-screen p-4 bg-gray-50">
  <div className="w-full max-w-3xl mx-auto space-y-6 mt-25">
    <div className="relative flex flex-col p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <img 
          src={Node} 
          alt="Tool Logo" 
          className="w-12 h-12 rounded-lg object-contain"
        />
        <div>
          <h2 className="text-xl font-bold text-gray-800">API Tester Pro</h2>
          <div className="mt-2 flex gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
              API Tools
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
              Debugging
            </span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-gray-600 text-md">
        Simplify API Testing for Developers
      </p>

      <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
        <span>Launched: 2022</span>
        <span>•</span>
        <span>Comments: 45</span>
      </div>

      <div className="mt-6 flex justify-end">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200">
          Learn More
        </button>
      </div>
    </div>

    <div className="relative flex flex-col p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <img 
          src={Express}
          alt="Tool Logo" 
          className="w-12 h-12 rounded-lg object-contain"
        />
        <div>
          <h2 className="text-xl font-bold text-gray-800">DebugMaster</h2>
          <div className="mt-2 flex gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-medium">
              Debugging
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-medium">
              Testing
            </span>
          </div>
        </div>
      </div>

      <p className="mt-4 text-gray-600 text-md">
        Debugging Made Easy for Modern Apps
      </p>

      <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
        <span>Launched: 2021</span>
        <span>•</span>
        <span>Comments: 120</span>
      </div>

      <div className="mt-6 flex justify-end">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200">
          Learn More
        </button>
      </div>
    </div>

  </div>
</div>
<Footer/>
    </>
  )
}