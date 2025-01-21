import React from "react";

const LoadingError = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-3xl font-semibold text-red-600 mb-4">Error Loading Data</h1>
      <p className="text-lg text-gray-600 mb-6">
        It seems there's a network issue or data couldn't be loaded.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition duration-200"
      >
        Retry
      </button>
    </div>
  );
};

export default LoadingError;
