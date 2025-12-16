import { Link } from "@tanstack/react-router";

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gray-950 font-sans selection:bg-indigo-500/30">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-float" />
      <div className="absolute   bottom-0 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite_reverse]" />

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="animate-[fadeInUp_0.8s_ease-out_forwards]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-xs font-medium text-indigo-300 tracking-wide uppercase">
              AI-Powered Summarization
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Summarize Your Notes <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-violet-400 to-indigo-400 animate-gradient-x">
              In Seconds
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
            Turn lengthy documents and messy notes into concise, actionable
            insights using advanced AI. Save time and study smarter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/dashboard"
              className="px-8 py-4 rounded-xl bg-linear-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold shadow-lg shadow-indigo-500/25 transition-all transform hover:-translate-y-1 hover:scale-105"
            >
              Summarize Now
            </Link>
            <a
              href="https://github.com/DhanrajR007/Notes_Summarizer"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold backdrop-blur-sm transition-all transform hover:-translate-y-1"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 max-w-6xl w-full px-4 animate-[fadeInUp_1s_ease-out_forwards]">
          {[
            {
              title: "AI Analysis",
              desc: "Deep context understanding to extract the most key points from your text.",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              ),
            },
            {
              title: "Smart Organization",
              desc: "Automatically categorize and tag your summaries for easy retrieval.",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              ),
            },
            {
              title: "Instant Export",
              desc: "Export your summaries to PDF, Markdown, or share them directly.",
              icon: (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                />
              ),
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
            >
              <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-6 h-6 text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {feature.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-white/5 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} NoteSum. Built with ❤️ by
            DhanrajR007.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
