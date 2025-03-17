export default function Description(){
  return(
    <>
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
  <div className="mb-8">
    <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">In-Depth Overview</h2>
    <div className="text-gray-600 leading-relaxed space-y-4">
      <p className="text-lg font-medium text-gray-700">
        Node.js is a cross-platform JavaScript runtime environment that executes JavaScript code outside of a browser, enabling full-stack development with a unified language.
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
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            NPM ecosystem with over 1 million packages
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            Built-in support for real-time applications
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div className="border-t pt-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">FAQ!</h2>
    <div className="space-y-4">
      <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-gray-700 mb-1">System Requirements</h3>
            <p className="text-gray-600 text-sm">
              Compatible with Windows, macOS, Linux. Requires Node.js v16+ and npm 8+
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-gray-700 mb-1">License & Pricing</h3>
            <p className="text-gray-600 text-sm">
              Open-source (MIT License), Enterprise support plans available
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}