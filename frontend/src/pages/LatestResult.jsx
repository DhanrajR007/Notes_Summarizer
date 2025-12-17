import { useSelector } from "react-redux";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const LatestResult = () => {
  const historyItems = useSelector((state) => state.history.items);
  const [latestItem, setLatestItem] = useState(null);
  console.log(historyItems);

  useEffect(() => {
    if (historyItems && historyItems.length > 0) {
      setLatestItem(historyItems[0]);
    }
  }, [historyItems]);

  const getTypeStyle = (type) => {
    switch (type) {
      case "Summary":
        return "text-blue-400 bg-blue-400/10 border-blue-400/20";
      case "MCQ":
        return "text-purple-400 bg-purple-400/10 border-purple-400/20";
      case "Questions":
        return "text-orange-400 bg-orange-400/10 border-orange-400/20";
      default:
        return "text-white";
    }
  };

  if (!latestItem) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gray-950 font-sans text-white">
        <p>No recent history found. Please generate some content first.</p>
        <Link to="/" className="ml-4 text-indigo-400 hover:text-indigo-300">
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col p-4 md:p-8 bg-gray-950 font-sans relative overflow-x-hidden">
      {/* Background Elements */}
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-teal-600/10 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Latest Result
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Your most recently generated content
            </p>
          </div>
          <Link
            to="/history"
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all text-sm font-medium"
          >
            Attributes History
          </Link>
        </div>

        {/* Content Card */}
        <div className="glass-card rounded-2xl border border-white/10 bg-gray-900/40 backdrop-blur-xl p-6 md:p-8 shadow-2xl">
          {/* Item Meta */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6 mb-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">
                {latestItem.title}
              </h2>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-gray-400">{latestItem.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                <span className="text-gray-400">
                  {latestItem.duration} read
                </span>
              </div>
            </div>
            <span
              className={`px-3 py-1 self-start md:self-center rounded-full text-xs font-medium border ${getTypeStyle(
                latestItem.type
              )}`}
            >
              {latestItem.type}
            </span>
          </div>

          {/* Markdown Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {latestItem.type === "MCQ" ? (
              <div className="whitespace-pre-wrap font-mono text-sm text-gray-300 bg-black/20 p-4 rounded-lg border border-white/5">
                {latestItem.content}
              </div>
            ) : (
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => (
                    <h1
                      className="text-2xl font-bold text-white mb-4 mt-6"
                      {...props}
                    />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2
                      className="text-xl font-semibold text-white mb-3 mt-5"
                      {...props}
                    />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3
                      className="text-lg font-medium text-white mb-2 mt-4"
                      {...props}
                    />
                  ),
                  p: ({ node, ...props }) => (
                    <p
                      className="text-gray-300 leading-relaxed mb-4"
                      {...props}
                    />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul
                      className="list-disc list-outside ml-6 mb-4 text-gray-300"
                      {...props}
                    />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol
                      className="list-decimal list-outside ml-6 mb-4 text-gray-300"
                      {...props}
                    />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="mb-1" {...props} />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote
                      className="border-l-4 border-indigo-500 pl-4 italic text-gray-400 my-4"
                      {...props}
                    />
                  ),
                  code: ({ node, inline, className, children, ...props }) => {
                    return inline ? (
                      <code
                        className="bg-white/10 rounded px-1 py-0.5 text-sm font-mono text-indigo-300"
                        {...props}
                      >
                        {children}
                      </code>
                    ) : (
                      <pre className="bg-black/30 rounded-lg p-4 overflow-x-auto border border-white/5 mb-4">
                        <code
                          className="text-sm font-mono text-gray-300"
                          {...props}
                        >
                          {children}
                        </code>
                      </pre>
                    );
                  },
                }}
              >
                {latestItem.content}
              </ReactMarkdown>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestResult;
