import React from "react";

const GenerateButton = ({ disabled, handleSubmit }) => {
  return (
    <button
      onClick={handleSubmit}
      disabled={disabled}
      className="w-full py-4 rounded-2xl bg-linear-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-xl shadow-indigo-600/20 text-white font-bold text-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center group"
    >
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
    </button>
  );
};

export default GenerateButton;
