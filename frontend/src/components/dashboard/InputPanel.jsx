import React from "react";
import TextInput from "../TextInput";
import FileInput from "../FileInput";

const InputPanel = ({
  activeTab,
  textInput,
  handleTextChange,
  handleFileChange,
  handleSubmit,
}) => {
  return (
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
                    PDF files, Word documents (.docx), and Plain Text (.txt) are
                    supported. Max file size 10MB.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default InputPanel;
