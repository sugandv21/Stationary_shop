import React, { useState, useEffect } from "react";
import banner from "../assets/images/about_banner.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function SignUp() {
    useEffect(() => {
              document.title = "Supplyhive | Sign Up";
            }, []); 
  const [otpEnabled, setOtpEnabled] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [passwordModal, setPasswordModal] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);

  const navigate = useNavigate();
  const { openLogin } = useAuth();

  // Helper validation functions
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleGenerateOtp = (e) => {
    e.preventDefault();
    const { name, email, phone } = form;

    if (!name.trim() || !email.trim() || !phone.trim()) {
      alert("All fields are required.");
      return;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!validatePhone(phone)) {
      alert("Phone number must be 10 digits.");
      return;
    }

    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(newOtp);
    alert(`Your OTP is: ${newOtp}`);
    setOtpEnabled(true);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (!/^\d{4}$/.test(otp)) {
      alert("Enter a valid 4-digit OTP.");
      return;
    }
    if (otp === generatedOtp) {
      setPasswordModal(true);
    } else {
      alert("Invalid OTP!");
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPwd) {
      alert("Passwords do not match.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(
      (u) => u.email === form.email || u.phone === form.phone
    );

    if (userExists) {
      alert("User already registered. Please login.");
      setPasswordModal(false);
      openLogin();
      return;
    }

    users.push({ ...form, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");
    setPasswordModal(false);
    openLogin();
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 mt-20">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-2xl overflow-hidden">
          <img
            src={banner}
            alt="Stationery banner"
            className="w-full h-56 md:h-84 object-cover"
          />
        </div>

        <p className="text-center text-xl md:text-2xl mt-10 text-gray-800">
          "Your Perfect Stationery Partner Is Just a Message Away."
        </p>

        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-md rounded-2xl border-2 border-gray-400 p-6">
            <h3 className="text-center text-lg font-medium text-gray-800 mb-6">
              Sign Up
            </h3>

            <form
              className="space-y-5"
              onSubmit={otpEnabled ? handleVerifyOtp : handleGenerateOtp}
            >
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="h-11 rounded-xl bg-[#75AEEF] px-4 text-sm font-medium border border-black placeholder:text-center"
                />
                <input
                  type="email"
                  placeholder="Email ID"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="h-11 rounded-xl bg-[#75AEEF] px-4 text-sm font-medium border border-black placeholder:text-center"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  className="h-11 rounded-xl bg-[#75AEEF] px-4 text-sm font-medium border border-black placeholder:text-center"
                />
                <input
                  type="text"
                  placeholder="OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  disabled={!otpEnabled}
                  className={`h-11 rounded-xl px-4 text-sm font-medium border border-black placeholder:text-center ${
                    otpEnabled ? "bg-[#75AEEF]" : "bg-gray-300 cursor-not-allowed"
                  }`}
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mt-2 rounded-xl bg-[#097AFA] px-5 py-2 text-black text-sm font-semibold hover:bg-[#1467cf]"
                >
                  {otpEnabled ? "Submit now" : "Generate OTP"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Password Modal */}
      {passwordModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-2xl w-[350px] shadow-xl relative">
            <button
              onClick={() => setPasswordModal(false)}
              className="absolute top-2 right-3 text-lg font-bold text-gray-600 hover:text-black"
            >
              &times;
            </button>

            <h3 className="text-center text-lg font-medium text-gray-800 mb-6">
              Set Password
            </h3>

            <form className="space-y-5" onSubmit={handlePasswordSubmit}>
              <div className="relative">
                <input
                  type={showPwd ? "text" : "password"}
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-11 w-full rounded-xl bg-[#75AEEF] px-4 text-sm font-medium border border-black placeholder:text-center"
                />
                <span
                  role="button"
                  tabIndex={0}
                  aria-label={showPwd ? "Hide password" : "Show password"}
                  className="absolute right-3 top-3 cursor-pointer text-gray-700"
                  onClick={() => setShowPwd(!showPwd)}
                  onKeyDown={(e) => e.key === "Enter" && setShowPwd(!showPwd)}
                >
                  {showPwd ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div className="relative">
                <input
                  type={showConfirmPwd ? "text" : "password"}
                  placeholder="Confirm Password"
                  required
                  value={confirmPwd}
                  onChange={(e) => setConfirmPwd(e.target.value)}
                  className="h-11 w-full rounded-xl bg-[#75AEEF] px-4 text-sm font-medium border border-black placeholder:text-center"
                />
                <span
                  role="button"
                  tabIndex={0}
                  aria-label={showConfirmPwd ? "Hide confirm password" : "Show confirm password"}
                  className="absolute right-3 top-3 cursor-pointer text-gray-700"
                  onClick={() => setShowConfirmPwd(!showConfirmPwd)}
                  onKeyDown={(e) => e.key === "Enter" && setShowConfirmPwd(!showConfirmPwd)}
                >
                  {showConfirmPwd ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <button
                type="submit"
                className="w-full mt-2 rounded-xl bg-[#097AFA] px-5 py-2 text-black text-sm font-semibold hover:bg-[#1467cf]"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
