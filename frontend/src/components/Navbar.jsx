import { Link } from "@tanstack/react-router";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.auth);

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-6 py-3 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-linear-to-tr from-indigo-500 to-violet-500 rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
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
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400">
            <Link to="/">NoteSum</Link>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div>
            {user.isAuthenticated ? (
              <Link
                to="/dashboard"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                to="/auth"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95"
              >
                Login
              </Link>
            )}
          </div>
          <div>
            {user.isAuthenticated && (
              <>
                <Link
                  to="/profile"
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95"
                >
                  Profile
                </Link>

                <Link
                  to="/history"
                  className="mx-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95"
                >
                  History
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
