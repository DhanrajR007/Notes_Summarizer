import React, { useState } from "react";
import TextInput from "../components/TextInput";
import FileInput from "../components/FileInput";
import { useSelector } from "react-redux";

const Dashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState("text"); // 'text' or 'file'
  const [generationType, setGenerationType] = useState("summary"); // 'summary', 'mcq', 'questions'
  const [textInput, setTextInput] = useState("");
  const [file, setFile] = useState(null);
  const user = useSelector((state) => state.auth);
  console.log(user);

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleFileChange = (selectedFile) => {
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:", { activeTab, generationType, textInput, file });
  };

  const GenerationOption = ({ id, label, icon, description }) => (
    <button
      type="button"
      onClick={() => setGenerationType(id)}
      className={`group relative p-4 rounded-xl border transition-all duration-300 text-left hover:scale-[1.02] active:scale-[0.98]
        ${
          generationType === id
            ? "bg-indigo-600/20 border-indigo-500/50 shadow-lg shadow-indigo-500/10"
            : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
        }
      `}
    >
      <div
        className={`p-3 rounded-lg w-fit mb-3 transition-colors ${
          generationType === id
            ? "bg-indigo-500 text-white"
            : "bg-gray-800 text-gray-400 group-hover:text-white group-hover:bg-gray-700"
        }`}
      >
        {icon}
      </div>
      <h3
        className={`font-semibold text-lg mb-1 ${
          generationType === id
            ? "text-white"
            : "text-gray-200 group-hover:text-white"
        }`}
      >
        {label}
      </h3>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>

      {/* Active Indicator */}
      {generationType === id && (
        <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.8)]"></div>
      )}
    </button>
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gray-950">
      {/* Background Ambience */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px] animate-float opacity-60"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-600/20 rounded-full blur-[120px] animate-float animation-delay-2000 opacity-60"></div>

      <div className="w-full max-w-6xl relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 animate-fade-in-up">
          <div>
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              Dashboard
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Generate content from your documents
            </p>
          </div>
          <button
            onClick={onLogout}
            className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all text-sm font-medium"
          >
            Sign Out
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 animate-fade-in-up animation-delay-300">
          {/* Main Input Area */}
          <div className="glass-card rounded-2xl p-1 flex-1 flex flex-col md:flex-row overflow-hidden min-h-[500px]">
            {/* Sidebar / Tabs */}
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

            {/* Content Area */}
            <div className="flex-1 p-6 md:p-8 relative">
              <form onSubmit={handleSubmit} className="h-full flex flex-col">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                    {activeTab === "text" ? (
                      <>
                        <span className="w-2 h-8 bg-indigo-500 rounded-full mr-3"></span>
                        Input Text Content
                      </>
                    ) : (
                      <>
                        <span className="w-2 h-8 bg-indigo-500 rounded-full mr-3"></span>
                        Upload Document
                      </>
                    )}
                  </h2>

                  {activeTab === "text" ? (
                    <div className="space-y-4 animate-fade-in-up">
                      <TextInput
                        placeholder=" Paste your text here..."
                        value={textInput}
                        onChange={handleTextChange}
                        icon={
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 6h16M4 12h16M4 18h7"
                            />
                          </svg>
                        }
                      />
                    </div>
                  ) : (
                    <div className="animate-fade-in-up space-y-4">
                      <FileInput onChange={handleFileChange} />
                      <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-sm text-indigo-300 flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-3 mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div>
                          <p className="font-medium text-indigo-200 mb-1">
                            Supported Formats
                          </p>
                          <p className="opacity-80">
                            PDF files, Word documents (.docx), and Plain Text
                            (.txt) are supported. Max file size 10MB.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Configuration / Output Sidebar */}
          <div className="w-full lg:w-80 flex flex-col gap-6">
            {/* Generation Type Selection */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
                Output Type
              </h3>

              <div className="flex flex-col gap-3">
                <GenerationOption
                  id="summary"
                  label="Summary"
                  description="Get a concise summary of the content."
                  icon={
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
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                  }
                />
                <GenerationOption
                  id="mcq"
                  label="MCQ"
                  description="Generate multiple choice questions."
                  icon={
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
                  }
                />
                <GenerationOption
                  id="questions"
                  label="Questions"
                  description="Generate open-ended questions."
                  icon={
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
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  }
                />
              </div>
            </div>

            {/* Action Button */}
            <button
              onClick={handleSubmit}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
