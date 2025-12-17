import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user || !user.user) {
    return (
      <div className="min-h-screen bg-neutral-950 flex items-center justify-center text-neutral-400">
        Loading...
      </div>
    );
  }

  const { name, email, imageUrl, createdAt } = user.user;

  // Dummy Data
  const recentNotes = [
    {
      title: "React Architecture",
      desc: "Atomic design principles",
      date: "2h ago",
      color: "bg-orange-500",
    },
    {
      title: "Backend Scaling",
      desc: "Horizontal vs Vertical",
      date: "5h ago",
      color: "bg-blue-500",
    },
    {
      title: "UI/UX Trends",
      desc: "Bento grids & glassmorphism",
      date: "1d ago",
      color: "bg-purple-500",
    },
    {
      title: "Docker Basics",
      desc: "Containerization 101",
      date: "2d ago",
      color: "bg-emerald-500",
    },
  ];

  const mcqStats = {
    total: 150,
    passed: 120,
    accuracy: "80%",
    recent: [
      { subject: "JavaScript", score: "9/10" },
      { subject: "Python", score: "7/10" },
    ],
  };

  const questions = [
    { title: "How to optimize React re-renders?", answers: 12, views: 340 },
    { title: "Best DB for high-read apps?", answers: 8, views: 210 },
  ];

  const BentoCard = ({ children, className = "" }) => (
    <div
      className={`bg-neutral-900 border border-neutral-800 rounded-2xl p-6 ${className}`}
    >
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 p-6 md:p-8 font-sans selection:bg-neutral-700">
      <div className="max-w-6xl mx-auto space-y-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
            Dashboard
          </h1>
          <p className="text-neutral-400">
            Welcome back to your personal workspace.
          </p>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-4">
          {/* 1. Profile Main Card (Span 2 cols, 2 rows) */}
          <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10 flex flex-col items-center text-center pt-8 pb-4">
              <div className="w-28 h-28 rounded-full border-4 border-neutral-800 p-1 mb-6 shadow-2xl">
                <img
                  src={
                    imageUrl ||
                    `https://ui-avatars.com/api/?name=${name}&background=262626&color=fff`
                  }
                  alt={name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">{name}</h2>
              <p className="text-neutral-400 mb-6">{email}</p>
              <button className="bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-neutral-200 transition-colors">
                Edit Profile
              </button>
            </div>

            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-neutral-800/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none group-hover:bg-neutral-800/20 transition-all duration-500"></div>
          </BentoCard>

          {/* 2. Quick Stats (Span 1 col) */}
          <BentoCard className="flex flex-col justify-center">
            <span className="text-neutral-500 text-sm font-medium uppercase tracking-wider mb-1">
              Joined
            </span>
            <span className="text-2xl font-bold text-white">
              {new Date(createdAt).toLocaleDateString(undefined, {
                month: "short",
                year: "numeric",
              })}
            </span>
          </BentoCard>

          {/* 3. Status (Span 1 col) */}
          <BentoCard className="flex flex-col justify-center bg-emerald-900/10 border-emerald-900/20">
            <span className="text-emerald-500 text-sm font-medium uppercase tracking-wider mb-1">
              Status
            </span>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-2xl font-bold text-white">Active</span>
            </div>
          </BentoCard>

          {/* 4. Notes Section (Span 2 cols, 2 rows) - Vertical List */}
          <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">Recent Notes</h3>
              <span className="text-xs font-semibold bg-neutral-800 text-neutral-300 px-2 py-1 rounded-md">
                {recentNotes.length}
              </span>
            </div>
            <div className="space-y-4 overflow-y-auto flex-1 pr-2 custom-scrollbar">
              {recentNotes.map((note, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-neutral-800/50 transition-colors cursor-pointer group"
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex-shrink-0 ${note.color} bg-opacity-20 flex items-center justify-center text-lg`}
                  >
                    📝
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                      {note.title}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {note.desc}
                    </p>
                  </div>
                  <span className="text-xs text-neutral-600 font-medium whitespace-nowrap">
                    {note.date}
                  </span>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* 5. MCQ Performance (Span 1 col, 2 rows) */}
          <BentoCard className="md:row-span-2 flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-4">MCQ Stats</h3>
            <div className="flex-1 flex flex-col items-center justify-center my-4">
              <div className="w-24 h-24 rounded-full border-8 border-neutral-800 border-t-blue-500 flex items-center justify-center mb-4">
                <span className="text-xl font-bold">{mcqStats.accuracy}</span>
              </div>
              <p className="text-center text-sm text-neutral-400">
                Total Accuracy
              </p>
            </div>
            <div className="space-y-3 mt-auto">
              {mcqStats.recent.map((q, i) => (
                <div key={i} className="flex justify-between text-sm">
                  <span className="text-neutral-300">{q.subject}</span>
                  <span className="font-mono text-white">{q.score}</span>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* 6. Questions (Span 1 col, 2 rows) */}
          <BentoCard className="md:row-span-2 flex flex-col bg-gradient-to-b from-neutral-900 to-neutral-800/50">
            <h3 className="text-lg font-semibold text-white mb-4">Q&A</h3>
            <div className="space-y-4">
              {questions.map((q, i) => (
                <div
                  key={i}
                  className="bg-black/20 p-4 rounded-xl border border-white/5"
                >
                  <p className="text-sm font-medium text-neutral-200 mb-3 line-clamp-2 leading-relaxed">
                    "{q.title}"
                  </p>
                  <div className="flex items-center gap-3 text-xs text-neutral-500">
                    <span className="flex items-center gap-1">
                      <span className="text-neutral-300">{q.answers}</span> ans
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-neutral-300">{q.views}</span> views
                    </span>
                  </div>
                </div>
              ))}
              <button className="w-full py-3 rounded-xl border border-dashed border-neutral-700 text-neutral-400 text-sm hover:text-white hover:border-neutral-500 transition-all">
                + Ask Question
              </button>
            </div>
          </BentoCard>
        </div>
      </div>
    </div>
  );
};

export default Profile;
