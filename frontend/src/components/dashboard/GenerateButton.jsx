import React from "react";

const GenerateButton = ({ disabled, handleSubmit, loading }) => {
  return (
    <button
      onClick={handleSubmit}
      disabled={disabled}
      className={`w-full py-4 rounded-2xl shadow-xl shadow-indigo-600/20 text-white font-bold text-lg transition-all transform flex items-center justify-center group ${
        disabled
          ? "bg-gray-700 cursor-not-allowed opacity-50"
          : "bg-linear-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 hover:scale-[1.02] active:scale-[0.98]"
      }`}
    >
      {loading ? (
        <span className="flex items-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Generating...
        </span>
      ) : (
        <>
          <span>Generate Content</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-2 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </>
      )}
    </button>
  );
};

export default GenerateButton;
