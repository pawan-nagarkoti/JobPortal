import { Route, Routes } from "react-router-dom";
import Home from "./pages/other/home";
import Layout from "./pages/other/layout";
import Employer from "./pages/employer/employer";
import EmailVerification from "./pages/auth/EmailVerification";
import SignIn from "./pages/auth/SignIn";
import ForgetPassword from "./pages/auth/ForgetPassword";
import CreateAccount from "./pages/auth/CreateAccount";
import ResetPassword from "./pages/auth/ResetPassword";
import JobPage from "./pages/employer/job";
import JobDetailPage from "./pages/employer/jobDetailPage";
import EmployerDetailPage from "./pages/employer/employerDetailPage";

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
        </Route>

        <Route path="/auth">
          <Route path="sign-in" element={<SignIn />} />
          <Route path="verify-email" element={<EmailVerification />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
