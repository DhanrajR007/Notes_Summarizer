import React, { useState } from "react";

const Profile = () => {
  const [user] = useState({
    name: "Alex Morgan",
    email: "alex.morgan@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    role: "Content Creator",
  });

  const stats = [
    { label: "Summaries", value: 124 },
    { label: "Questions", value: 85 },
    { label: "Quizzes", value: 43 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gray-950 font-sans">
      {/* Subtle Background */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 rounded-full blur-[120px] opacity-40"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-teal-600/10 rounded-full blur-[120px] opacity-40"></div>

      <div className="w-full max-w-md relative z-10 animate-fade-in-up">
        <div className="glass-card rounded-3xl overflow-hidden p-8 text-center border border-white/10 shadow-2xl bg-gray-900/40 backdrop-blur-xl">
          {/* Avatar */}
          <div className="relative mx-auto w-32 h-32 mb-6">
            <div className="absolute inset-0 bg-linear-to-tr from-indigo-500 to-purple-500 rounded-full blur-lg opacity-40 animate-pulse"></div>
            <img
              src={user.avatar}
              alt="Profile"
              className="relative w-32 h-32 rounded-full object-cover border-4 border-gray-900/50 shadow-xl"
            />
          </div>

          {/* User Info */}
          <h1 className="text-2xl font-bold text-white mb-2">{user.name}</h1>
          <p className="text-gray-400 text-sm mb-8">{user.email}</p>

          {/* Simple Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-3 rounded-2xl bg-white/5 border border-white/5"
              >
                <p className="text-xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Action */}
          <button className="w-full py-3.5 rounded-xl bg-linear-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-medium shadow-lg shadow-indigo-500/20 transition-all active:scale-[0.98]">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
