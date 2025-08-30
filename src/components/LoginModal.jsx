import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginModal() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  const { isLoginOpen, closeLogin, login } = useAuth();
  const navigate = useNavigate();

  if (!isLoginOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length === 0) {
      alert("No user registered. Please sign up first.");
      closeLogin();
      navigate("/sign-up");
      return;
    }

    const inputVal = username.trim();
    const existingUser = users.find(
      (u) => u.email === inputVal || u.phone === inputVal
    );

    if (!existingUser) {
      alert("User not found. Please sign up.");
      closeLogin();
      navigate("/sign-up");
      return;
    }

    if (existingUser.password === password) {
      alert("Login successful!");
      login(existingUser);
      closeLogin();
      navigate("/"); // redirect to home/dashboard
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-start pt-20 z-[9999] bg-black/50">
      <div className="bg-white shadow-2xl border rounded-xl p-4 w-[340px] relative">
        <button
          onClick={closeLogin}
          className="absolute top-2 right-3 text-lg font-bold text-gray-600 hover:text-black"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold text-center">Sign In</h2>

        <p className="text-center text-sm font-medium mb-3">
          Don’t have an account?{" "}
          <button
            onClick={() => {
              closeLogin();
              navigate("/sign-up");
            }}
            className="text-blue-600 hover:underline"
          >
            Sign Up
          </button>
        </p>

        <form className="flex flex-col gap-3" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium mb-1">
              Email / Phone
            </label>
            <input
              type="text"
              autoFocus
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter email or phone"
              className="w-full p-2 bg-blue-200 rounded-xl placeholder-gray-600 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPwd ? "text" : "password"}
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-2 bg-blue-200 rounded-xl placeholder-gray-600 outline-none"
              />
              <span
                role="button"
                tabIndex={0}
                aria-label={showPwd ? "Hide password" : "Show password"}
                className="absolute right-3 top-3 cursor-pointer text-gray-600"
                onClick={() => setShowPwd(!showPwd)}
                onKeyDown={(e) => e.key === "Enter" && setShowPwd(!showPwd)}
              >
                {showPwd ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-black py-2 rounded-xl hover:bg-blue-600 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
