import { useState } from "react";
import { loginUser } from "../apis/user.api";
import { useDispatch } from "react-redux";
import { login } from "../store/slice/authSlice";

const SignIn = ({ onSwitch, onLogin }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onLogin) onLogin();
    setLoading(true);

    try {
      const user = await loginUser(email, password);
      dispatch(login(user));
      setLoading(false);
      setEmail("");
      setPassword("");
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {loading ? (
          <button type="submit" className="btn-primary">
            Signin In
          </button>
        ) : (
          <button type="submit" className="btn-primary">
            Sign In
          </button>
        )}
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
