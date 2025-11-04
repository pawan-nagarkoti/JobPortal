import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { _post } from "../../lib/api";
import { showError, showSuccess } from "../../lib/toast";
import Loader from "../../components/other/Loader";
import useUI from "../../context/UIcontext";
import { addCookie } from "../../lib/cookies";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState("applicant");
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [togglePass, setTogglePass] = useState(false);
  const [toggleConfirmPass, setToggleConfirmPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // create new account
  const handleCreateAccountForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const createAccountObj = {
      role: accountType,
      name: fullname,
      username,
      email,
      password,
      confirmPassword,
    };

    try {
      const addAccount = await _post("api/auth/sign-up", createAccountObj);
      if (addAccount.data.success) {
        addCookie("verifyEmailOtp", addAccount.data.data.email);
        showSuccess(
          "We've sent an OTP to your registered email address. Please verify your account."
        );
        navigate("/auth/verify-email");
      }
    } catch (e) {
      console.log(e.message);
      showError(e.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Create Account Form */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col">
        {/* Logo */}
        <div
          className="p-4 cursor-pointer max-w-min"
          onClick={() => navigate("/")}
        >
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-900">Jobpilot</span>
          </div>
        </div>

        {/* Create Account Form Container */}
        <div className="flex-1 flex items-center justify-center px-8 py-12">
          <div className="w-full max-w-md">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Create account.
            </h1>
            <p className="text-gray-600 mb-8">
              Already have account?{" "}
              <span
                className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer"
                onClick={() => navigate("/auth/sign-in")}
              >
                Log In
              </span>
            </p>

            {/* Account Type Toggle */}
            <form className="space-y-4" onSubmit={handleCreateAccountForm}>
              <div className="mb-6">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">
                  Create Account As A
                </p>
                <div className="flex gap-5 bg-gray-100 rounded-lg p-1">
                  <button
                    type="button"
                    onClick={() => setAccountType("applicant")}
                    className="flex-1 flex items-center justify-center py-2.5 px-4  text-gray-900 rounded-md shadow-sm transition-all"
                    style={{
                      background:
                        accountType === "applicant"
                          ? "oklch(54.6% 0.245 262.881)"
                          : "white",
                      color: accountType === "applicant" ? "white" : "black",
                    }}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="font-medium text-sm">Candidate</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setAccountType("employer")}
                    className="flex-1 flex items-center justify-center py-2.5 px-4 rounded-md transition-all"
                    style={{
                      background:
                        accountType === "employer"
                          ? "oklch(54.6% 0.245 262.881)"
                          : "white",
                      color: accountType === "employer" ? "white" : "black",
                    }}
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <span className="font-medium text-sm">Employers</span>
                  </button>
                </div>
              </div>

              {/* Full Name & Username Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <input
                  type={togglePass ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                  onClick={() => setTogglePass((t) => !t)}
                >
                  {togglePass ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3l18 18M10.73 5.08A9.7 9.7 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.77 9.77 0 01-4.144 4.881M6.94 6.94A9.75 9.75 0 002.458 12 9.77 9.77 0 006.6 16.88M9.88 9.88a3 3 0 104.24 4.24"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* Confirm Password Input */}
              <div className="relative">
                <input
                  type={toggleConfirmPass ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                  onClick={() => setToggleConfirmPass((t) => !t)}
                >
                  {toggleConfirmPass ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3l18 18M10.73 5.08A9.7 9.7 0 0112 5c4.478 0 8.268 2.943 9.542 7a9.77 9.77 0 01-4.144 4.881M6.94 6.94A9.75 9.75 0 002.458 12 9.77 9.77 0 006.6 16.88M9.88 9.88a3 3 0 104.24 4.24"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label className="ml-2 text-sm text-gray-600">
                  I've read and agree with your{" "}
                  <span
                    onClick={() => navigate("/privacy")}
                    className="text-blue-600 font-medium hover:text-blue-700 cursor-pointer"
                  >
                    Terms of Services
                  </span>
                </label>
              </div>

              {/* Create Account Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
              >
                {isLoading ? <Loader /> : "Create Account"}
              </button>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">OR</span>
                </div>
              </div>

              {/* Social Sign Up Buttons */}
              <div className="grid grid-cols-2 gap-4">
                {/* Facebook Button */}
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
                >
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    Sign up with Facebook
                  </span>
                </button>

                {/* Google Button */}
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    Sign up with Google
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right Side - Hero Section */}
      <div
        className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-slate-700 to-slate-900 relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(51, 65, 85, 0.95), rgba(15, 23, 42, 0.95)), url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=1600&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-900/50 to-slate-900/90"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-12 py-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Over 1,75,324 candidates
            <br />
            waiting for good employees.
          </h2>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 w-full max-w-2xl">
            {/* Live Jobs */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-white mb-1">1,75,324</div>
              <div className="text-sm text-gray-300">Live Job</div>
            </div>

            {/* Companies */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-white mb-1">97,354</div>
              <div className="text-sm text-gray-300">Companies</div>
            </div>

            {/* New Jobs */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-white mb-1">7,532</div>
              <div className="text-sm text-gray-300">New Jobs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
