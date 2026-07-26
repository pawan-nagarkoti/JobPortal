import { useEffect, useState, useRef } from "react";
import { _delete, _get, _put, _post } from "../../lib/api";
import { getCookie } from "../../lib/cookies";

export default function UploadResume() {
  const [title, setTitle] = useState("");
  const [cv, setCv] = useState("");
  const [data, setData] = useState("");
  const [editId, setEditId] = useState(null);
  const [isLoading, setLoding] = useState(false);
  const fileInputRef = useRef(null);
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

  const handleAddCV = async () => {
    setLoding(true);
    let applicantId = await FetchApplicantOnTheBasisOfLoginUser();
    try {
      const cvData = new FormData();
      cvData.append("applicantId", applicantId);
      cvData.append("title", title);
      cvData.append("cv", cv);
      const apiResponse = await _post("api/resume/add", cvData);
      if (apiResponse.data.success) {
        fetchResume();
        setTitle("");
        clearFile();
      }
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoding(false);
    }
  };

  const fetchResume = async () => {
    let applicantId = await FetchApplicantOnTheBasisOfLoginUser();
    try {
      if (!editId) {
        const apiResponse = await _get(`api/resume/fetch?applicantId=${applicantId}`);
        if (apiResponse.data.success) {
          setData(apiResponse.data);
        }
      } else {
        const cvData = new FormData();
        cvData.append("applicantId", "6996e48c469802e83cff3a37");
        cvData.append("title", title);
        cvData.append("cv", cv);
        const apiResponse = await _put(`resume/update/${editId}`, cvData);
        if (apiResponse.data.success) {
          setData(apiResponse.data);
        }
      }
    } catch (e) {
      console.log(e.messsage);
    }
  };

  const handleEditBtn = async (id) => {
    setEditId(id);
  };

  const handleDeleteBtn = async (deletedId) => {
    await _delete(`api/resume/delete/${deletedId}`);
    fetchResume();
  };

  useEffect(() => {
    fetchResume();
  }, []);

  const clearFile = () => {
    setCv(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 gap-1 mb-3">
          {/* First: full width file picker */}
          <div className="w-full">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              ref={fileInputRef}
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setCv(file);
                }
              }}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="w-full px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 truncate"
            >
              {cv?.name ? cv.name : "Choose file"}
            </button>
          </div>

          {/* Second: textbox + button together */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Optional title or note"
              className="flex-1 min-w-0 rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              value={title || ""}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button
              type="button"
              onClick={handleAddCV}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition whitespace-nowrap"
            >
              {isLoading ? "loading..." : "Add"}
            </button>
          </div>
        </div>

        {/* Existing Resumes */}
        <div className="grid gap-4">
          {data?.data?.map((r, i) => (
            <div
              key={i}
              className="group relative border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 shrink-0 rounded-lg bg-blue-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-gray-900 truncate">{r.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">Resume</p>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => handleEditBtn(r._id)}
                    className="p-1.5 rounded-md text-gray-500 hover:text-blue-600 hover:bg-blue-50"
                    aria-label="Edit"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDeleteBtn(r._id)}
                    className="p-1.5 rounded-md text-gray-500 hover:text-red-600 hover:bg-red-50"
                    aria-label="Delete"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
