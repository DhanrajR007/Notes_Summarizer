import React, { useState } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const Auth = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gray-950">
      {/* Animated Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/30 rounded-full blur-[120px] animate-float opacity-70"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-600/30 rounded-full blur-[120px] animate-float animation-delay-2000 opacity-70"></div>
      <div className="absolute top-[20%] right-[20%] w-[20%] h-[20%] bg-pink-600/20 rounded-full blur-[100px] animate-pulse-slow opacity-50"></div>

      <div className="w-full max-w-md relative z-10 perspective-1000">
        <div className="glass-card rounded-2xl p-8 sm:p-10 animate-fade-in-up">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-3 tracking-tight">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h1>
            <p className="text-gray-400 font-medium">
              {isLogin
                ? "Enter your credentials to access your account"
                : "Join us and start shortening URLs today"}
            </p>
          </div>

          <div className="transition-all duration-500 ease-in-out">
            {isLogin ? (
              <SignIn onSwitch={toggleAuth} onLogin={onLogin} />
            ) : (
              <SignUp onSwitch={toggleAuth} onLogin={onLogin} />
            )}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-xs tracking-wider uppercase">
            &copy; 2024 UrlShortner. Secure & Fast.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
