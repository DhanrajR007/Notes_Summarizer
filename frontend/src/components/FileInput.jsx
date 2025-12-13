import React, { useRef, useState } from "react";

const FileInput = ({ label, onChange }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    setFileName(file.name);
    if (onChange) onChange(file);
  };

  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-gray-300 ml-1 block">
          {label}
        </label>
      )}
      <div
        className={`
          relative w-full h-32 rounded-xl border-2 border-dashed transition-all duration-300 cursor-pointer flex flex-col items-center justify-center p-4 group
          ${
            isDragging
              ? "border-indigo-500 bg-indigo-500/10 scale-[1.02]"
              : "border-gray-600 bg-white/5 hover:bg-white/10 hover:border-gray-500"
          }
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />

        {fileName ? (
          <div className="text-center animate-fade-in-up">
            <div className="w-12 h-12 mx-auto bg-indigo-500/20 rounded-full flex items-center justify-center mb-2 text-indigo-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-white truncate max-w-[200px]">
              {fileName}
            </p>
            <p className="text-xs text-indigo-300 mt-1">Click to change</p>
          </div>
        ) : (
          <div className="text-center">
            <div
              className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2 transition-colors duration-300 ${
                isDragging
                  ? "bg-indigo-500/20 text-indigo-400"
                  : "bg-gray-700/50 text-gray-400 group-hover:bg-gray-600/50 group-hover:text-gray-300"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
              <span className="text-indigo-400">Click to upload</span> or drag
              and drop
            </p>
            <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-400 transition-colors">
              PDF, DOC, TXT up to 10MB
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileInput;
