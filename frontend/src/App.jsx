import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Employer from "./pages/applicant/Employer";
import EmailVerification from "./pages/auth/EmailVerification";
import SignIn from "./pages/auth/SignIn";
import ForgetPassword from "./pages/auth/ForgetPassword";
import CreateAccount from "./pages/auth/CreateAccount";
import ResetPassword from "./pages/auth/ResetPassword";
import JobPage from "./pages/applicant/JobPage";
import JobDetailPage from "./pages/applicant/JobDetailPage";
import EmployerDetailPage from "./pages/applicant/EmployerDetailPage";
import CandidatesList from "./pages/employer/CandidateList";
import Dashboard from "./pages/applicant/dashboard/dashboard";
import Setting from "./pages/applicant/dashboard/Setting";
import EmployerProfile from "./pages/employer/EmployerProfile";
import EmployerDashbord from "./pages/employer/dashboard/Dashboard";
import PostJobForm from "./pages/employer/dashboard/PostJobForm";
import EmployerSetting from "./pages/employer/dashboard/setting";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="find-job" element={<JobPage />} />
          <Route path="job-detail/1" element={<JobDetailPage />} />
          <Route path="find-employer" element={<Employer />} />
          <Route path="employer-detail/1" element={<EmployerDetailPage />} />
          <Route path="find-candidate" element={<CandidatesList />} />
          <Route path="applicant-dashboard" element={<Dashboard />} />
          <Route path="applicant-dashboard/setting" element={<Setting />} />
          <Route path="employer-dashboard" element={<EmployerDashbord />} />
          <Route path="employer-job-post" element={<PostJobForm />} />
          <Route path="employer-setting" element={<EmployerSetting />} />
        </Route>

        <Route path="/auth">
          <Route path="sign-in" element={<SignIn />} />
          <Route path="verify-email" element={<EmailVerification />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>

        <Route>
          <Route
            path="/create/employer-profile"
            element={<EmployerProfile />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
