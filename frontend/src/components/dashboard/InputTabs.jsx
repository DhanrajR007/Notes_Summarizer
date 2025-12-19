import React from "react";

const InputTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-full md:w-64 bg-black/20 md:border-r border-white/10 p-4 flex flex-col">
      <div className="space-y-2">
        <button
          onClick={() => setActiveTab("text")}
          className={`w-full flex items-center p-3 rounded-xl transition-all duration-300 ${
            activeTab === "text"
              ? "bg-indigo-600/50 text-white shadow-lg shadow-indigo-500/20 border border-indigo-400/30"
              : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          <span className="font-medium">Text Input</span>
        </button>
        <button
          onClick={() => setActiveTab("file")}
          className={`w-full flex items-center p-3 rounded-xl transition-all duration-300 ${
            activeTab === "file"
              ? "bg-indigo-600/50 text-white shadow-lg shadow-indigo-500/20 border border-indigo-400/30"
              : "text-gray-400 hover:bg-white/5 hover:text-gray-200"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <span className="font-medium">File Upload</span>
        </button>
      </div>
    </div>
  );
};

export default InputTabs;
