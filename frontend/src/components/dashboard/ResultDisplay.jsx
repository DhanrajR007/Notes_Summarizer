import React from "react";
import ReactMarkdown from "react-markdown";

const ResultDisplay = ({ result, type, onBack }) => {
  if (!result) return null;

  let content = "";
  let title = "";

  if (type === "summary" && result.summary) {
    content = result.summary.summaryText;
    title = "Summary";
  } else if (type === "mcq" && result.mcq) {
    content = result.mcq.mcqText;
    title = "Multiple Choice Questions";
  } else if (type === "questions" && result.question) {
    content = result.question.qusText;
    title = "Important Questions";
  }

  return (
    <div className="glass-card rounded-2xl p-6 flex-1 flex flex-col overflow-hidden min-h-[500px] animate-fade-in-up">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-700/50">
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-purple-500">
          {title}
        </h2>
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 transition-all duration-300 text-sm font-medium border border-gray-700/50 cursor-pointer"
        >
          Create New
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => (
                <h1 className="text-3xl font-bold text-white mb-4" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2
                  className="text-2xl font-semibold text-gray-100 mb-3 mt-6"
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <p className="text-gray-300 mb-4 leading-relaxed" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc pl-5 mb-4 text-gray-300" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol
                  className="list-decimal pl-5 mb-4 text-gray-300"
                  {...props}
                />
              ),
              li: ({ node, ...props }) => <li className="mb-2" {...props} />,
              strong: ({ node, ...props }) => (
                <strong className="text-cyan-400 font-bold" {...props} />
              ),
              code: ({ node, ...props }) => (
                <code
                  className="bg-gray-800/80 px-1 py-0.5 rounded text-pink-400 font-mono text-sm"
                  {...props}
                />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="border-l-4 border-purple-500 pl-4 italic text-gray-400 my-4 bg-gray-900/30 py-2 pr-2 rounded-r"
                  {...props}
                />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
