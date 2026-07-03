import { useEffect, useState } from "react";
import { _get, _post } from "../../lib/api";
import useUI from "../../context/UIcontext";
import { useParams } from "react-router-dom";
import { getCookie } from "../../lib/cookies";

export default function ResumeModal() {
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [selectedResumeId, setSelectedResumeId] = useState("");
  const { id } = useParams();
  const { openModal, setOpenModal } = useUI();
  const [isLoading, setIsLoading] = useState("");

  const userId = getCookie("loginUserInfo");

  const FetchApplicantOnTheBasisOfLoginUser = async () => {
    try {
      const response = await _get(`api/applicant/fetch?userId=${userId.id}`);
      if (response.data.success) {
        return response.data.applicants[0]._id;
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const fetchResumes = async () => {
    let applicantId = await FetchApplicantOnTheBasisOfLoginUser();
    if (!applicantId) return;

    const apiResponse = await _get(
      `api/resume/fetch?applicantId=${applicantId}`,
    );
    if (apiResponse.data.success) {
      setResume(apiResponse.data);
    }
  };
  useEffect(() => {
    fetchResumes();
  }, []);

  const handleApplyNow = async () => {
    setIsLoading(true);
    const selectedResumeDetail = await _get(
      `api/resume/single/${selectedResumeId}`,
    );
    const applyJobObj = {
      jobId: id,
      applicantId: selectedResumeDetail.data.data.applicantId,
      coverLetter: coverLetter,
      resumeId: selectedResumeDetail.data.data._id,
    };

    try {
      const apiResponse = await _post("api/job-application/add", applyJobObj);
      if (apiResponse.data.success) {
        setOpenModal(false);
      }
    } catch (e) {
      console.log(e.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="space-y-7">
        <div>
          <h1 className="text-[20px] font-semibold tracking-[-0.02em] text-slate-900 ">
            Apply Job: Senior UX Designer
          </h1>
        </div>

        <div className="space-y-3">
          <label className="block text-[15px] font-medium text-slate-800">
            Choose Resume
          </label>

          <div className="">
            <select
              defaultValue=""
              className="h-12 w-full border px-6 pr-14 text-[20px"
              onChange={(e) => setSelectedResumeId(e.target.value)}
            >
              <option value="" disabled>
                select resume
              </option>
              {resume?.data?.map((r, i) => (
                <option key={i} value={r._id}>
                  {r.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-[15px] font-medium text-slate-800">
            Cover Letter
          </label>

          <div className="overflow-hidden  border border-slate-200 bg-white">
            <textarea
              rows={7}
              placeholder="Write down your biography here. Let the employers know who you are..."
              className="min-h-60 w-full resize-none border-0 px-5 py-5 text-[14px] text-slate-700 outline-none placeholder:text-slate-300"
              onChange={(e) => setCoverLetter(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            className="inline-flex h-12 items-center justify-center gap-4 rounded-xl bg-[#0f6bdc] px-4 text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(15,107,220,0.28)] transition hover:bg-[#0d5fc3]"
            onClick={handleApplyNow}
          >
            {isLoading ? "loading..." : "Apply Now"}
          </button>
        </div>
      </div>
    </div>
  );
}
