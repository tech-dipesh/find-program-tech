export default function Newlisting(){
  return (
    <>
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">Submit New Tool</h2>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tool Name *
              <span className="ml-2 text-xs text-gray-500">(Max 40 characters)</span>
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter tool name"
              maxLength={40}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Founder/Company *
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Company or developer name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Release Date *
            </label>
            <input
              type="number" min="1950" max="2025"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tool Logo *
            </label>
            <div className="flex items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-indigo-500 transition-colors">
              <input type="file" className="hidden" accept="image/*" />
              <span className="text-gray-500">Drag & drop or click to upload</span>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            One-Liner Use Case *
            <span className="ml-2 text-xs text-gray-500">(Max 10 words)</span>
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="e.g., 'Automated API testing platform for developers'"
            maxLength={100}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Detailed Description *
          </label>
          <textarea
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent h-32"
            placeholder="Describe features, benefits, and unique value proposition"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tech Stack *
            </label>
            <div className="flex flex-wrap gap-2 p-2 border rounded-lg">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                React
                <button className="ml-2 text-blue-600 hover:text-blue-800">×</button>
              </span>
              <input
                type="text"
                className="flex-1 min-w-[120px] p-1 outline-none"
                placeholder="Add technology"
              />
            </div>
          </div>
        </div>

        <div className="pt-6 border-t">
          <button className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium text-lg">
            Submit Listing
          </button>
        </div>
      </form>
    </div>
    </>
  )
}