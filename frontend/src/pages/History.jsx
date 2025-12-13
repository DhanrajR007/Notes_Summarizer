import React, { useState } from "react";

const History = () => {
  const [historyItems] = useState([
    {
      id: 1,
      title: "Introduction to React Hooks",
      type: "Summary",
      date: "2024-03-15",
      duration: "2 min",
    },
    {
      id: 2,
      title: "Q3 Financial Report",
      type: "MCQ",
      date: "2024-03-14",
      duration: "5 min",
    },
    {
      id: 3,
      title: "History of Ancient Rome",
      type: "Questions",
      date: "2024-03-12",
      duration: "--",
    },
    {
      id: 4,
      title: "Marketing Strategy 2025",
      type: "Summary",
      date: "2024-03-10",
      duration: "1 min",
    },
    {
      id: 5,
      title: "Biology 101 Notes",
      type: "MCQ",
      date: "2024-03-08",
      duration: "3 min",
    },
  ]);

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

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gray-950 font-sans">
      {/* Subtle Background */}
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-teal-600/10 rounded-full blur-[120px] opacity-30"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px] opacity-30"></div>

      <div className="w-full max-w-5xl relative z-10 animate-fade-in-up">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              History
            </h1>
            <p className="text-gray-400 text-sm mt-1">Your generated content</p>
          </div>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-10 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all text-sm"
            />
            <svg
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Simple List/Table */}
        <div className="glass-card rounded-2xl overflow-hidden border border-white/10 bg-gray-900/40 backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 text-gray-400 text-xs font-medium uppercase tracking-wider">
                  <th className="p-6 font-semibold">Document</th>
                  <th className="p-6 font-semibold">Type</th>
                  <th className="p-6 font-semibold">Date</th>
                  <th className="p-6 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {historyItems.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-white/5 transition-colors group"
                  >
                    <td className="p-6">
                      <p className="font-semibold text-white group-hover:text-indigo-300 transition-colors">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {item.duration} read
                      </p>
                    </td>
                    <td className="p-6">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeStyle(
                          item.type
                        )}`}
                      >
                        {item.type}
                      </span>
                    </td>
                    <td className="p-6 text-gray-400 text-sm">{item.date}</td>
                    <td className="p-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                              fillRule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 000-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
