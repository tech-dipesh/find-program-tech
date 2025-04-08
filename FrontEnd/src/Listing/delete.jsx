import { useState } from "react";
import { toastError, toastSuccess } from "../Miscellaneous/react-toast";
import { useNavigate, useParams } from "react-router-dom";
import { deleteItem } from "../service/api";
export default function Delete() {
  const navigate=useNavigate();
  const {id}=useParams()
  const [isOpen, setIsOpen] = useState(false);
  const handleDelete =async (deleteData) => {
    setIsOpen(false);
    try {
      const response=await deleteItem(id, deleteData)
      navigate(`/tools`)
      setTimeout(() => {
        toastSuccess("Successfully deleted the listing")
      }, 100);
    } catch (error) {
      console.error("Error on the delete function", error);
      navigate(`/tools/${id}`)
      toastError(error)
    }
  };

  return (
    <div className="ml-100 ">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium"
      >
        Delete
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[#0f172a] p-6 rounded-xl shadow-xl w-full max-w-sm text-white relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white text-xl leading-none hover:text-red-500"
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold mb-3">Are you sure?</h2>
            <div className="text-sm text-red-400 bg-red-950 p-3 rounded-lg border border-red-600 mb-5">
              ⚠️ You can't undo after deleted.
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
