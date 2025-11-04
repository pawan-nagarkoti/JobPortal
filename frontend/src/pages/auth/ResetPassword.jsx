import { useState } from "react";
import { showError, showSuccess } from "../../lib/toast";
import Loader from "../../components/other/Loader";
import { _post } from "../../lib/api";
import { useNavigate, useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [isToggleNewPass, setIsToggleNewPass] = useState(false);
  const [isToggleConfirmPass, setIsToggleConfirmPass] = useState(false);
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const isResetPasswordResponse = await _post(
        `api/auth/reset-password?token=${token}`,
        {
          newPassword,
          confirmPassword,
        }
      );
      if (isResetPasswordResponse.data.success) {
        showSuccess(isResetPasswordResponse.data.message);
        navigate("/");
      }
    } catch (e) {
      showError(e.response.data.message);
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

      {/* Reset Password Form Container */}
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Reset Password
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
            Please enter your new password below to regain access to your
            account.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleResetPassword}>
          {/* New Password Input */}
          <div className="relative">
            <input
              type={isToggleNewPass ? "text" : "password"}
              placeholder="New Password"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
              onClick={() => setIsToggleNewPass((t) => !t)}
            >
              {isToggleNewPass ? (
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
              type={isToggleConfirmPass ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onClick={() => setIsToggleConfirmPass((t) => !t)}
            >
              {isToggleConfirmPass ? (
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

          {/* Reset Password Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
          >
            {isLoading ? <Loader /> : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
