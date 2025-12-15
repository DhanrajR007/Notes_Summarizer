import React, { useState } from "react";

const Profile = () => {
  const [user] = useState({
    name: "Alex Morgan",
    email: "alex.morgan@example.com",
    role: "Content Creator",
    bio: "Passionate about simplifying complex information through AI.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    banner:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop",
  });

  return (
    <div className="min-h-screen bg-gray-950 font-sans text-gray-100 pb-20">
      {/* 1. Cover Image Section */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-gray-950/90 z-10"></div>
        <img
          src={user.banner}
          alt="Cover"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* 2. Main Content Container */}
      <div className="max-w-5xl mx-auto px-6 relative z-20 -mt-24">
        {/* Profile Header Block */}
        <div className="flex flex-col md:flex-row items-end md:items-center gap-6 mb-8">
          {/* Avatar */}
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1.5 bg-gray-950 ring-4 ring-gray-800/50 backdrop-blur-sm">
              <img
                src={user.avatar}
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-gray-900 bg-gray-800"
              />
            </div>
            <button className="absolute bottom-2 right-2 p-2 bg-indigo-600 rounded-full text-white ring-4 ring-gray-950 hover:bg-indigo-500 transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
          </div>

          {/* Name & Actions */}
          <div className="flex-1 pb-2">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
              <div>
                <h1 className="text-4xl font-bold text-white mb-1 tracking-tight">
                  {user.name}
                </h1>
                <p className="text-gray-400 font-medium text-lg">{user.role}</p>
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white transition-all text-gray-300 font-medium">
                  Settings
                </button>
                <button className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-lg shadow-indigo-600/20 transition-all">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Grid Layout for Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Sidebar: Identity (4 cols) */}
          <div className="md:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-gray-900/40 border border-white/5 backdrop-blur-xl">
              <h3 className="text-sm font-bold text-gray-100 uppercase tracking-wider mb-4 border-b border-white/5 pb-2">
                Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400 text-sm group hover:text-white transition-colors">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  {user.email}
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm group hover:text-white transition-colors">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  San Francisco, CA
                </div>
                <div className="flex items-center gap-3 text-gray-400 text-sm group hover:text-white transition-colors">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  Joined November 2024
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gray-900/40 border border-white/5 backdrop-blur-xl">
              <h3 className="text-sm font-bold text-gray-100 uppercase tracking-wider mb-4 border-b border-white/5 pb-2">
                Bio
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {user.bio}
              </p>
            </div>
          </div>

          {/* Right Main Column: Stats (8 cols) */}
          <div className="md:col-span-8 flex flex-col justify-start">
            {/* Stats Row - Now the hero of this column */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 h-full">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-900/20 border border-white/5 hover:border-indigo-500/30 transition-all group flex flex-col justify-center items-center text-center backdrop-blur-md">
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 011.414.586l4 4a1 1 0 01.586 1.414V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <p className="text-4xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  124
                </p>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                  Summaries
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-900/20 border border-white/5 hover:border-purple-500/30 transition-all group flex flex-col justify-center items-center text-center backdrop-blur-md">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
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
                </div>
                <p className="text-4xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  85
                </p>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                  Questions
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-900/20 border border-white/5 hover:border-teal-500/30 transition-all group flex flex-col justify-center items-center text-center backdrop-blur-md">
                <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-110 transition-transform">
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
                <p className="text-4xl font-bold text-white mb-2 group-hover:text-teal-300 transition-colors">
                  43
                </p>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                  Quizzes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
