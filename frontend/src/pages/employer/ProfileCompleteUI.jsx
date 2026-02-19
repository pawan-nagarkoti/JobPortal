import { useNavigate } from "react-router-dom";

const ProfileCompleteUI = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-slate-200 p-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Main content */}
      <div className="text-center space-y-6 max-w-md">
        {/* Congrats message */}
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Congratulations,
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold  bg-linear-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
            Your profile is 100% complete!
          </h2>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 pt-8">
        <button
          className="px-8 py-3 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          onClick={() => navigate("/employer-dashboard")}
        >
          View Dashboard
        </button>
        <button className="px-8 py-3 bg-linear-to-r from-slate-100 to-slate-200 hover:from-slate-200 hover:to-slate-300 text-slate-800 font-medium rounded-xl shadow-lg hover:shadow-xl border border-slate-300 transform hover:-translate-y-0.5 transition-all duration-200">
          Post Job
        </button>
      </div>
    </div>
  );
};

export default ProfileCompleteUI;
