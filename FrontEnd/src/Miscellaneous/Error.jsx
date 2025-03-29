import { AlertCircle } from "lucide-react";
export default function FormError ({ error }) {
  if (!error) return null;
  return (
  // <div className="fixed">
    <div className="bg-gray-900 p-4 -mt-30 ml-30 rounded-md shadow-lg mb-20">
      <div className="flex items-center space-x-3">
        <AlertCircle className="h-5 w-5 text-red-500" />
        <div className="text-red-500 text-sm font-medium">{error.message}</div>
      </div>
    </div>
    // </div>
  );
};