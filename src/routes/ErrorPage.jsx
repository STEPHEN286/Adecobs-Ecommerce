import React from "react";
import { Link } from "react-router-dom"; // Corrected to use `react-router-dom`
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-600 mb-6">
        We're sorry, but an error occurred while trying to load the page.
      </p>
      {error && (
        <pre className="bg-gray-200 p-4 rounded-md text-sm text-gray-700 shadow-md mb-6">
          {error.statusText || error.message}
        </pre>
      )}
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition duration-200"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
