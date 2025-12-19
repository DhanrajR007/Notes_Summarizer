import React from "react";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center mb-8 animate-fade-in-up">
      <div>
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
          Dashboard
        </h1>
        <p className="text-gray-400 text-sm mt-1">
          Generate content from your documents
        </p>
      </div>
    </div>
  );
};

export default DashboardHeader;
