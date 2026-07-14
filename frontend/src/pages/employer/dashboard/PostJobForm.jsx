import React, { useEffect, useState, useRef } from "react";
import Sidebar from "./Sidebar";
import {
  COUNTRIES,
  EDUCATION_LEVELS,
  EXPERIENCE_LEVELS,
  INDIA_CITIES,
  JOB_BENEFITS,
  JOB_LEVELS,
  JOB_TYPES,
  JOB_ROLES_LIST,
  salaryPeriod,
  WORK_TYPE,
  EDUCATION,
} from "../../../lib/constant";
import CustomEditor from "../../../components/form/customEditor";
import { _get, _post } from "../../../lib/api";
import { showSuccess } from "../../../lib/toast";
import { getCookie } from "../../../lib/cookies";

const PostJobForm = () => {
  const [title, setTitle] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [salaryType, setSalaryType] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [jobType, setJobType] = useState("");
  const [vacancie, setVacancie] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [jobLevel, setJobLevel] = useState("");
  const [workType, setWorkType] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [isWorldWide, setIsWorldWide] = useState(false);
  const [isFeatured, setIsFeatured] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState("");

  const [selectedBenefits, setSelectedBenefits] = useState([]);
  const toggleBenefit = (benefit) => {
    if (selectedBenefits.includes(benefit)) {
      setSelectedBenefits(selectedBenefits.filter((b) => b !== benefit));
    } else {
      setSelectedBenefits([...selectedBenefits, benefit]);
    }
  };

  const [tagContainer, setTagContainer] = useState([]);
  const toggleTag = (tag) => {
    if (tagContainer.some((t) => t.name == tag.key)) {
      setTagContainer(tagContainer.filter((b) => b.name !== tag.key));
    } else {
      setTagContainer([...tagContainer, { name: tag.key, category: tag.category }]);
    }
  };

  const editorRef = useRef(null);

  const fetchEmployerDetail = async () => {
    let loginUserData = getCookie("loginUserInfo"); // get login user detail
    const response = await _get(`api/employer/fetch?loginUserId=${loginUserData.id}`);
    if (response.data.success) {
      return response.data.data[0]._id;
    }
  };

  const handleJobListForm = async (e) => {
    e.preventDefault();
    let employerId = await fetchEmployerDetail();
    setIsLoading(true);

    let jobDescription;
    if (editorRef.current) {
      jobDescription = editorRef.current.getContent();
    }

    const jobPostObject = {
      employerId,
      title,
      tags: tagContainer,
      role: jobRole,
      minSalary,
      maxSalary,
      period: salaryType,
      currency: "USD",
      education,
      experience,
      jobType,
      vacancies: vacancie,
      expirationDate,
      jobLevel,
      workType,
      country,
      city,
      isWorldWide,
      jobBenefits: selectedBenefits.map((b) => ({ name: b })),
      description: jobDescription,
      isFeatured,
      isActive,
    };

    try {
      const jobPostResponse = await _post("/api/jobList/add", jobPostObject);
      if (jobPostResponse.data.success) {
        setTitle("");
        setJobRole("");
        setMinSalary("");
        setMaxSalary("");
        setSalaryType("");
        setEducation("");
        setExperience("");
        setJobType("");
        setVacancie("");
        setExpirationDate("");
        setJobLevel("");
        setWorkType("");
        setCountry("");
        setCity("");
        setIsWorldWide(false);
        setIsFeatured(false);
        setIsActive(false);
        setDescription("");
        showSuccess("Job successfully created");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <form className="max-w-4xl mx-auto p-6 bg-white" onSubmit={handleJobListForm}>
              <h1 className="text-2xl font-bold text-gray-900 mb-8">Post a job</h1>
              {/* Job Title */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Tittle</label>
                <input
                  type="text"
                  placeholder="Add job tittle, role, vacancies etc"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              {/* Tags and Job Role */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                  <div className="flex flex-wrap gap-2">
                    {JOB_ROLES_LIST.map((tag, i) => (
                      <button
                        type="button"
                        key={i}
                        onClick={() => toggleTag(tag)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                          tagContainer.some((t) => t.name == tag.key)
                            ? "bg-blue-100 text-blue-700 border border-blue-300"
                            : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {tag.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Role</label>
                  <select
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                    value={jobRole || ""}
                    onChange={(e) => setJobRole(e.target.value)}
                  >
                    <option value="" disabled>
                      select job role
                    </option>
                    {JOB_ROLES_LIST.map((v, i) => (
                      <option key={i} value={v.key}>
                        {v.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Salary Section */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Salary</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Min Salary</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Minimum salary..."
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-16"
                        value={minSalary}
                        onChange={(e) => setMinSalary(e.target.value)}
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">USD</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Max Salary</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Maximum salary..."
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-16"
                        value={maxSalary}
                        onChange={(e) => setMaxSalary(e.target.value)}
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">USD</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Salary Type</label>
                    <select
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                      value={salaryType}
                      onChange={(e) => setSalaryType(e.target.value)}
                    >
                      <option value="" disabled>
                        select salary period
                      </option>

                      {salaryPeriod.map((s, i) => (
                        <option key={i} value={s.key}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              {/* Advance Information */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Advance Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Education</label>
                    <select
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                    >
                      <option value="" disabled>
                        select education
                      </option>
                      {EDUCATION.map((e, i) => (
                        <option key={i} value={e.value}>
                          {e.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                    <select
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                    >
                      <option value="" disabled>
                        select experience
                      </option>
                      {EXPERIENCE_LEVELS.map((e, i) => (
                        <option value={e.key} key={i}>
                          {e.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
                    <select
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                      value={jobType}
                      onChange={(e) => setJobType(e.target.value)}
                    >
                      <option value="" disabled>
                        select job type
                      </option>
                      {JOB_TYPES.map((v, i) => (
                        <option key={i} value={v.key}>
                          {v.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Vacancies</label>
                    <input
                      type="number"
                      placeholder="vacancies"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={vacancie}
                      onChange={(e) => setVacancie(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expiration Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={expirationDate}
                      onChange={(e) => setExpirationDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Level</label>
                    <select
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                      value={jobLevel}
                      onChange={(e) => setJobLevel(e.target.value)}
                    >
                      <option value="" disabled>
                        select job level
                      </option>
                      {JOB_LEVELS.map((v, i) => (
                        <option key={i} value={v.key}>
                          {v.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Work Type</label>
                    <select
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                      value={workType}
                      onChange={(e) => setWorkType(e.target.value)}
                    >
                      <option value="" disabled>
                        select work type
                      </option>
                      {WORK_TYPE.map((v, i) => (
                        <option key={i} value={v.value}>
                          {v.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              {/* Location */}
              <div className="mb-6 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Location</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                    <select
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option value="" disabled>
                        select country
                      </option>
                      {COUNTRIES.map((v, i) => (
                        <option key={i} value={v.name}>
                          {v.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <select
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    >
                      <option value="" disabled>
                        select city
                      </option>
                      {INDIA_CITIES.map((c, i) => (
                        <option value={c.key} key={i}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 rounded"
                    value={isWorldWide}
                    onChange={(e) => setIsWorldWide(e.target.checked)}
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    Fully Remote Position - <span className="font-semibold">Worldwide</span>
                  </span>
                </label>
              </div>
              {/* Job Benefits */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Job Benefits</h3>
                <div className="flex flex-wrap gap-2">
                  {JOB_BENEFITS.map((benefit, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => toggleBenefit(benefit.key)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                        selectedBenefits.includes(benefit.key)
                          ? "bg-blue-100 text-blue-700 border border-blue-300"
                          : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {benefit.name}
                    </button>
                  ))}
                </div>
              </div>
              {/* Job Description */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Job Description</label>
                <div className="border border-gray-300 rounded-lg">
                  <CustomEditor
                    ref={editorRef}
                    value={description}
                    onEditorChange={(newContent) => setDescription(newContent)}
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div>Featured Job</div>
                <div
                  className={`w-14 h-7 relative rounded-full p-0.5 cursor-pointer transition-all duration-300 shadow-sm ${
                    isFeatured ? "bg-green-400" : "bg-gray-400"
                  }`}
                  onClick={() => setIsFeatured(!isFeatured)}
                >
                  <div
                    className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                      isFeatured ? "translate-x-7 bg-white" : "translate-x-0 bg-white"
                    }`}
                  />
                </div>
              </div>

              <div className="flex gap-4 my-5">
                <div>Active Job</div>
                <div
                  className={`w-14 h-7 relative rounded-full p-0.5 cursor-pointer transition-all duration-300 shadow-sm ${
                    isActive ? "bg-green-400" : "bg-gray-400"
                  }`}
                  onClick={() => setIsActive(!isActive)}
                >
                  <div
                    className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                      isActive ? "translate-x-7 bg-white" : "translate-x-0 bg-white"
                    }`}
                  />
                </div>
              </div>

              {/* Post Job Button */}

              <button className="px-8 py-2 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white">
                {isLoading ? "Loading..." : "Job Post"}
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default PostJobForm;
