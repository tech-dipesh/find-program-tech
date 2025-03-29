import React from 'react';
import { AlertCircle } from 'lucide-react';

const Error = () => (
  <div className="bg-gray-900 p-4 rounded-md shadow-lg">
    <div className="flex items-center space-x-3">
      <AlertCircle className="h-5 w-5 text-red-500" />
      <div className="text-red-500 text-sm font-medium">Danger alert! Change a few things up and try submitting again.</div>
    </div>
  </div>
);


export default Error;