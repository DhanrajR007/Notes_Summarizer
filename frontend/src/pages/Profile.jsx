import React, { useState } from "react";

const Profile = () => {
  const [user] = useState({
    name: "Alex Morgan",
    email: "alex.morgan@example.com",
    role: "Content Creator",
    bio: "Passionate about simplifying complex information through AI.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    joinDate: "Nov 2024",
    location: "San Francisco, CA",
  });

  const stats = [
    {
      label: "Summaries",
      value: 124,
      icon: "📝",
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Questions",
      value: 85,
      icon: "❓",
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Quizzes",
      value: 43,
      icon: "✅",
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gray-950 font-sans">
      {/* Background Ambience (Matching Dashboard/History) */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-slow opacity-50"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-600/20 rounded-full blur-[120px] animate-pulse-slow animation-delay-4000 opacity-50"></div>

      <div className="w-full max-w-6xl relative z-10 animate-fade-in-up">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Profile
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Manage your account and view statistics
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column: Identity Card */}
          <div className="w-full lg:w-1/3">
            <div className="glass-card rounded-2xl p-8 border border-white/10 flex flex-col items-center text-center h-full">
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full p-1 bg-linear-to-tr from-indigo-500 to-purple-500">
                  <img
                    src={user.avatar}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover border-4 border-gray-900"
                  />
                </div>
                <div className="absolute bottom-0 right-0 p-2 bg-gray-900 rounded-full border border-white/10">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-1">
                {user.name}
              </h2>
              <p className="text-indigo-400 font-medium text-sm mb-4">
                {user.role}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {user.bio}
              </p>

              <div className="w-full space-y-4 mt-auto">
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
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
                    <span className="text-gray-400 text-sm">Email</span>
                  </div>
                  <span className="text-white text-sm font-medium truncate max-w-[150px]">
                    {user.email}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
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
                    <span className="text-gray-400 text-sm">Location</span>
                  </div>
                  <span className="text-white text-sm font-medium">
                    {user.location}
                  </span>
                </div>

                <button className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-lg shadow-indigo-500/20 transition-all active:scale-[0.98]">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-all group h-full"
                >
                  <div
                    className={`p-4 rounded-2xl bg-linear-to-br ${stat.color} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Placeholder for future content if needed, matches layout density */}
            <div className="glass-card rounded-2xl p-8 border border-white/10 flex-1 flex flex-col justify-center items-center text-center opacity-70">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">
                Workspace & Projects
              </h3>
              <p className="text-gray-400 text-sm max-w-md">
                Your active projects and workspace settings will appear here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
