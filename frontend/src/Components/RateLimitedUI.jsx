import React from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

const RateLimitedUI = () => {
  return (
    <div className="min-h-screen
     flex items-center justify-center p-4">
      <div className="bg-[#FFFBDE] rounded-lg shadow-md p-8 max-w-md w-full text-center">
        
        {/* Icon */}
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-red-500" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Rate Limit Exceeded
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-6">
          You've made too many requests. Please wait a moment before trying again.
        </p>

        {/* Timer */}
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center gap-2 text-blue-700">
            <Clock className="w-5 h-5" />
            <span className="font-medium">Please wait 1 minute</span>
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition-colors">
          Try Again Later
        </button>

        {/* Footer */}
        <p className="text-sm text-gray-500 mt-6">
          Rate limits help maintain service quality
        </p>
      </div>
    </div>
  );
};

export default RateLimitedUI;