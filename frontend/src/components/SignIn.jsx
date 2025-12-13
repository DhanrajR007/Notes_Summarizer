import React from "react";

const SignIn = ({ onSwitch, onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) onLogin();
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="input-modern"
            placeholder="Email address"
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="input-modern"
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn-primary">
          Sign In
        </button>
      </form>

      <div className="text-center pt-2">
        <p className="text-sm text-gray-400">
          Don't have an account?{" "}
          <button onClick={onSwitch} className="btn-secondary ml-1">
            Create one now
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
