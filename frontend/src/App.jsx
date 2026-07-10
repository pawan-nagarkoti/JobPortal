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
import PostJobForm from "./pages/employer/dashboard/PostJobForm";
import EmployerSetting from "./pages/employer/dashboard/setting";
import AppliedCandidateList from "./pages/employer/dashboard/AppliedCandidateList";
import BlogPage from "./pages/blog/blogPage";
import BlogDetailPage from "./pages/blog/BlogDetailPage";
import AboutUs from "./pages/Aboutus";
import CTApage from "./pages/CTApage";
import NotFoundPage from "./pages/NotFoundpage";
import UnderConstructionPage from "./pages/UnderConstructionPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import ProfileCompleteUI from "./pages/employer/ProfileCompleteUI";
import ScrollToTop from "./components/other/ScrollToTop";
import BookmarkJob from "./pages/applicant/dashboard/bookmarkJob";
import AppliedJob from "./pages/applicant/dashboard/appliedJob";
import JobAlert from "./pages/applicant/dashboard/jobAlert";
import JobTable from "./pages/employer/dashboard/jobTable";
import BookmarkCandidate from "./pages/employer/dashboard/bookmarkCandidate";
import { ProfileForEmployer } from "./pages/employer/dashboard/profileForEmployer";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="find-job" element={<JobPage />} />
          <Route path="job-detail/:id" element={<JobDetailPage />} />

          <Route path="find-employer" element={<Employer />} />
          <Route path="employer-detail/:id" element={<EmployerDetailPage />} />

          <Route path="find-candidate" element={<CandidatesList />} />

          <Route path="applicant-dashboard" element={<Dashboard />} />
          <Route path="applicant-dashboard/setting" element={<Setting />} />
          <Route path="applicant-dashboard/bookmark-job" element={<BookmarkJob />} />
          <Route path="applicant-dashboard/applied-job" element={<AppliedJob />} />
          <Route path="applicant-dashboard/job-alert" element={<JobAlert />} />

          <Route path="/create/employer-profile" element={<EmployerProfile />} />
          <Route path="/profile-completed" element={<ProfileCompleteUI />} />
          <Route path="employer/profile" element={<ProfileForEmployer />} />
          <Route path="employer-job-post" element={<PostJobForm />} />
          <Route path="employer-setting" element={<EmployerSetting />} />
          <Route path="employer/jobname/applicant-list" element={<AppliedCandidateList />} />
          <Route path="employer/job-list" element={<JobTable />} />
          <Route path="employer/bookmark-candidate" element={<BookmarkCandidate />} />

          <Route path="blog" element={<BlogPage />} />
          <Route path="blog-detail/1" element={<BlogDetailPage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<CTApage />} />
          <Route path="privacy" element={<TermsAndConditionsPage />} />
        </Route>

        <Route path="/auth">
          <Route path="sign-in" element={<SignIn />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="verify-email" element={<EmailVerification />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>

        <Route path="no-found" element={<NotFoundPage />} />
        <Route path="under-construction" element={<UnderConstructionPage />} />
      </Routes>
    </>
  );
}

export default App;
