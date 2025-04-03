
export default function Upvote() {
  return (
    <div className="flex flex-col items-center gap-3">
      <button className="
        p-3 rounded-full transition-all
        hover:bg-green-50 hover:text-green-600
        active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500
      ">
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
        active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-500
      ">
        <i className="fa-solid fa-heart-crack text-2xl w-8 h-8
          transform transition-transform hover:scale-110" />
      </button>
    </div>
  )
}