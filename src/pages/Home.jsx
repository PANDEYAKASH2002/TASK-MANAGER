import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 via-blue-400  to-blue-200">
      <h1 className="text-4xl font-bold mb-4">Welcome to Task Manager</h1>
      <Link to="/tasks">
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Go to Tasks
        </button>
      </Link>
    </div>
  );
}

export default Home;