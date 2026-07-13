import React, { useEffect, useState } from "react";
import useUI from "../../context/UIcontext";
import { getCookie } from "../../lib/cookies";
import { _put } from "../../lib/api";
import { showSuccess } from "../../lib/toast";

const CandidateGrid = ({ candidate }) => {
  const { setOpenModal, setCandidateId } = useUI();
  const [isToggle, setIsToggle] = useState(false);
  const loginUser = getCookie("loginUserInfo");

  useEffect(() => {
    if (!candidate?._id || !loginUser?.id) return;

    const bookmarkedData = candidate?.bookmarkCandidate?.find((item) => item.employerId === loginUser.id);

    setIsToggle(bookmarkedData?.bookmark || false);
  }, [candidate, loginUser?.id]);

  if (!candidate) return <p>loading...</p>;

  const handleBookmark = async () => {
    try {
      if (!candidate?._id || !loginUser?.id) return;

      const nextToggle = !isToggle;
      setIsToggle(nextToggle);

      const data = new FormData();
      data.append("bookmarkCandidate[employerId]", loginUser.id);
      data.append("bookmarkCandidate[bookmark]", nextToggle);

      const res = await _put(`api/applicant/update/${candidate._id}`, data);

      if (res?.data?.success) {
        showSuccess(res.data.message);
      } else {
        setIsToggle(!nextToggle);
      }
    } catch (e) {
      console.log(e.message);
      setIsToggle((prev) => !prev);
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src={candidate.profilePicture} alt={candidate.name} className="w-20 h-20 rounded-xl object-cover" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{candidate.name}</h3>
                <p className="text-gray-600">{candidate.title}</p>

                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center">{candidate.location}</div>
                  <div className="flex items-center">{candidate.experience}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              {loginUser?.role === "employer" && (
                <button
                  type="button"
                  className="cursor-pointer p-2 rounded-lg border transition"
                  onClick={handleBookmark}
                >
                  {isToggle ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.75 3A1.75 1.75 0 006 4.75V21l6-3 6 3V4.75A1.75 1.75 0 0016.25 3h-8.5z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 4.75A1.75 1.75 0 017.75 3h8.5A1.75 1.75 0 0118 4.75V21l-6-3-6 3V4.75z"
                      />
                    </svg>
                  )}
                </button>
              )}

              <button
                type="button"
                className="px-6 py-2.5 bg-blue-50 text-blue-600 font-semibold rounded-lg hover:bg-blue-100 transition flex items-center"
                onClick={() => {
                  setCandidateId(candidate._id);
                  setOpenModal(true);
                }}
              >
                View Profile
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateGrid;
