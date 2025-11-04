import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUI from "../../context/UIcontext";
import { deleteCookie, getCookie } from "../../lib/cookies";
import { _post } from "../../lib/api";
import { showError, showSuccess } from "../../lib/toast";

const EmailVerification = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const email = getCookie("verifyEmailOtp");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!verificationCode.trim()) {
      setError("Please enter the verification code");
      return;
    }

    setIsLoading(true);
    try {
      const isEmailVerified = await _post("api/auth/email-verify", {
        email,
        otp: verificationCode,
      });

      if (isEmailVerified?.data?.success) {
        deleteCookie("verifyEmailOtp");
        showSuccess("Email verified and account created successfully.");
        navigate("/auth/sign-in");
      }
      // }
    } catch (err) {
      showError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    setError("");
    setIsLoading(true);

    try {
      // Replace with your actual resend API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Verification code resent successfully!");
    } catch (err) {
      setError("Failed to resend code. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      {/* Logo */}
      <div
        className="p-4 cursor-pointer max-w-min "
        onClick={() => navigate("/")}
      >
        <div className="flex items-center justify-center space-x-2">
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

      {/* Verification Form Container */}
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Email Verification
          </h1>
          <p className="text-gray-600 leading-relaxed">
            We've sent an verification to{" "}
            <span className="font-semibold text-gray-900">{email}</span> to
            verify your email address and activate your account.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Verification Code Input */}
          <div>
            <input
              type="text"
              placeholder="Verification Code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              disabled={isLoading}
            />
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>

          {/* Verify Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Verifying...
              </>
            ) : (
              <>
                Verify My Account
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </>
            )}
          </button>
        </form>

        {/* Resend Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Didn't recieve any code?{" "}
            <button
              onClick={handleResend}
              disabled={isLoading}
              className="text-blue-600 font-medium hover:text-blue-700 transition-colors disabled:opacity-50"
            >
              Resends
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
