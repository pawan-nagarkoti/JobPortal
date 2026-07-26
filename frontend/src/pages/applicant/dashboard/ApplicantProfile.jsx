import React, { useEffect, useRef, useState } from "react";
import LeftSidebar from "./LeftSidebar";
import { _get, _put } from "../../../lib/api";
import { getCookie } from "../../../lib/cookies";
import { EDUCATION, GENDER, MARITAL_STATUS } from "../../../lib/constant";
import CustomEditor from "../../../components/form/CustomEditor";
import InputChip from "../../../components/form/InputChip";
import { v4 as uuidv4 } from "uuid";
import UploadResume from "../../../components/applicant/UploadResume";
import { showSuccess } from "../../../lib/toast";

export const ApplicantProfile = () => {
  let userId = getCookie("loginUserInfo");
  const [isToggle, setIsToggle] = useState(false);
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [dob, setDob] = useState("");
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");

  const [exprience, setExprience] = useState("");
  const [education, setEducation] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [pic, setPic] = useState("");
  const [profilePreview, setProfilePreview] = useState("");
  const [bio, setBio] = useState("");
  const refForBio = useRef();

  const [location, setLocation] = useState("");
  const [countrycode, setCountryCode] = useState("");
  const [number, setNumber] = useState("");

  const [roleAlert, setRoleAlert] = useState(""); //get preselected alert title
  const [locationAlert, setLocationAlert] = useState(""); // get preselected alert location

  const [alertJobRole, setAlertJobRole] = useState(""); // add new alert role
  const [alertJobLocation, setAlertJobLocation] = useState(""); // add new alert location

  const [socialLinks, setSocialLinks] = useState([{ _id: uuidv4(), name: "", url: "" }]);

  const handleAddSocialLink = () => {
    setSocialLinks((prev) => [...prev, { _id: uuidv4(), name: "", url: "" }]);
  };

  const handleRemoveSocialLink = (deletedId) => {
    setSocialLinks((prev) => prev.filter((d) => d._id !== deletedId));
  };

  const handleInputChange = (_id, field, value) => {
    setSocialLinks((prev) => prev.map((link) => (link._id === _id ? { ...link, [field]: value } : link)));
  };

  const stats = {
    appliedJobs: 24,
    savedJobs: 12,
  };

  const fetchApplicantDetail = async () => {
    if (!userId) return;
    try {
      const res = await _get(`api/applicant/fetch?userId=${userId.id}`);
      if (res.data.success) {
        let a = res.data.applicants[0];
        setData(a);
        setName(a.name);
        setTitle(a.title);
        setDob(a.dob?.split("T")[0] || "");
        setNationality(a.nationality);
        setGender(a.gender);
        setMaritalStatus(a.maritalStatus);

        setExprience(a.experience);
        setEducation(a.education);
        setWebsiteUrl(a.websiteUrl);
        setProfilePreview(a.profilePicture);
        setBio(a.biography);

        setLocation(a.location);
        setNumber(a.phone.number);
        setCountryCode(a.phone.countryCode);

        setRoleAlert(a.alertJob.jobTitle);
        setLocationAlert(a.alertJob.alertLocation);
        setSocialLinks(a.socialLinks);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const updateApplicant = async (e) => {
    e.preventDefault();
    setIsToggle(true);
    const applicantId = data._id;
    if (!applicantId) return console.log("Applicant ID not found while we are updating applicant");

    try {
      const updatedForm = new FormData();
      updatedForm.set("name", name);
      updatedForm.set("title", title);
      updatedForm.set("dob", dob);
      updatedForm.set("nationality", nationality);
      updatedForm.set("gender", gender);
      updatedForm.set("maritalStatus", maritalStatus);

      updatedForm.set("experience", exprience);
      updatedForm.set("education", education);
      updatedForm.set("websiteUrl", websiteUrl);
      updatedForm.set("profilePicture", pic ? pic : profilePreview);
      updatedForm.set("biography", refForBio.current.getContent());

      updatedForm.set("location", location);
      updatedForm.set("countryCode", countrycode);
      updatedForm.set("number", number);

      socialLinks.forEach((v, index) => {
        updatedForm.set(`socialLinks[${index}].name`, v.name);
        updatedForm.set(`socialLinks[${index}].url`, v.url);
      });

      updatedForm.set("alertJob.jobTitle", JSON.stringify(alertJobRole));
      updatedForm.set("alertJob.alertLocation", JSON.stringify(alertJobLocation));

      const res = await _put(`api/applicant/update/${applicantId}`, updatedForm);
      if (res.data.success) {
        fetchApplicantDetail();
        showSuccess("applicant profile updated");
      }
    } catch (e) {
      console.log(e.message);
    } finally {
      setIsToggle(false);
    }
  };

  useEffect(() => {
    fetchApplicantDetail();
  }, []);

  if (!data) return "loading...";
  return (
    <div className="flex min-h-screen bg-gray-50">
      <LeftSidebar />
      <main className="flex-1 p-8">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">Hello, Esther Howard</h1>
              <p className="text-gray-600">Here is your daily activities and job alerts</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Applied Jobs */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-gray-900 mb-1">{stats.appliedJobs}</p>
                    <p className="text-gray-600">Applied jobs</p>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Favorite Jobs */}
              <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-gray-900 mb-1">{stats.favoriteJobs}</p>
                    <p className="text-gray-600">Favorite jobs</p>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Job Alerts */}
              <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-gray-900 mb-1">{stats.jobAlerts}</p>
                    <p className="text-gray-600">Job Alerts</p>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="grid grid-cols-12 gap-6" onSubmit={updateApplicant}>
            {/* Left */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              {/* Basic Info */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">Basic Information</h2>

                <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Professional Title</label>
                    <input
                      type="text"
                      placeholder="Frontend Developer"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Date of Birth</label>
                    <input
                      type="date"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Nationality</label>
                    <input
                      type="text"
                      placeholder="Enter nationality"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                      value={nationality}
                      onChange={(e) => setNationality(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Gender</label>
                    <select
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="" disabled>
                        Select Gender
                      </option>
                      {GENDER?.map((v, index) => (
                        <option key={index} value={v.value}>
                          {v.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Marital Status</label>
                    <select
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                      value={maritalStatus}
                      onChange={(e) => setMaritalStatus(e.target.value)}
                    >
                      <option value="" disabled>
                        Select Marital Status
                      </option>
                      {MARITAL_STATUS?.map((v, index) => (
                        <option key={index} value={v.value}>
                          {v.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Professional Details */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">Professional Details</h2>

                <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Experience</label>
                    <input
                      type="text"
                      placeholder="e.g. 2 years"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                      value={exprience}
                      onChange={(e) => setExprience(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Education</label>
                    <select
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                    >
                      <option disabled value="">
                        select education
                      </option>
                      {EDUCATION?.map((e, i) => (
                        <option key={i} value={e.value}>
                          {e.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Website URL</label>
                    <input
                      type="text"
                      placeholder="https://example.com"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Profile Picture URL</label>
                    <input
                      type="file"
                      placeholder="Paste profile image URL"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                      onChange={(e) => {
                        let file = e.target.files[0];
                        if (file) {
                          setProfilePreview(URL.createObjectURL(file));
                          setPic(file);
                        }
                      }}
                    />

                    {/* preview */}
                    {profilePreview ? (
                      <div className="w-52 mt-2">
                        <div className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500">
                          <img
                            src={profilePreview || null}
                            alt="Company logo"
                            className="h-32 w-full rounded-lg object-cover"
                          />

                          <div className="mt-3 flex gap-2">
                            <button
                              type="button"
                              className="flex-1 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
                            >
                              Edit
                            </button>

                            <button
                              type="button"
                              className="flex-1 rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-gray-700">Biography</label>
                  <CustomEditor
                    ref={refForBio}
                    value={bio || ""}
                    onEditorChange={(newContent) =>
                      setBio((prev) => ({
                        ...prev,
                        description: newContent,
                      }))
                    }
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">Contact Information</h2>

                <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Location</label>
                    <input
                      type="text"
                      placeholder="Enter location"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Country Code</label>
                    <input
                      type="text"
                      placeholder="+91"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                      value={countrycode}
                      onChange={(e) => setCountryCode(e.target.value)}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="text"
                      placeholder="Enter phone number"
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Social Links</h2>
                </div>

                <div className="mt-5">
                  {socialLinks.map((link, index) => (
                    <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
                      <label className="block text-sm font-medium text-gray-900 mb-2">Social Link {index + 1}</label>
                      <div className="flex items-center gap-3">
                        <div className="relative shrink-0" style={{ width: "220px" }}>
                          <select
                            value={link.name}
                            onChange={(e) => handleInputChange(link._id, "name", e.target.value)}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                          >
                            <option value="">Select Platform</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Instagram">Instagram</option>
                            <option value="Youtube">Youtube</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                            <svg
                              className="w-4 h-4 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                        <input
                          type="text"
                          placeholder="Profile link/url..."
                          value={link.url}
                          onChange={(e) => handleInputChange(link._id, "url", e.target.value)}
                          className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        {socialLinks.length > 1 && (
                          <button
                            onClick={() => handleRemoveSocialLink(link._id || "")}
                            className="p-2.5 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition"
                            title="Remove"
                            type="button"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}

                  <button
                    className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition flex items-center justify-center gap-2"
                    onClick={handleAddSocialLink}
                    type="button"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Add New Social Link
                  </button>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">Profile Preview</h2>

                <div className="mt-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-200 text-sm text-gray-500">
                      <img src={profilePreview || null} alt="" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                      <p className="text-sm text-gray-500">{title}</p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm leading-6 text-gray-600">
                      Your candidate biography preview will appear here.
                    </p>

                    <div className="mt-4 space-y-2 text-sm text-gray-500">
                      <p>Experience: {exprience}</p>
                      <p>Education: {education}</p>
                      <p>Location: {nationality}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Alerts */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">Job Alerts</h2>

                <div>
                  <InputChip
                    label="Job Title"
                    placeholderName="Job title"
                    getValues={setAlertJobRole}
                    preSelectedTags={roleAlert}
                  />
                </div>

                <div className="mt-3">
                  <InputChip
                    label="Location"
                    placeholderName="City, state, country name"
                    getValues={setAlertJobLocation}
                    preSelectedTags={locationAlert}
                  />
                </div>
              </div>

              {/* Resume Section */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Resume</h2>
                </div>

                <UploadResume />
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">Privacy Settings</h2>

                <div className="mt-4 space-y-3">
                  <label className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3">
                    <span className="text-sm font-medium text-gray-700">Profile Privacy</span>
                    <input type="checkbox" className="h-4 w-4" />
                  </label>

                  <label className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3">
                    <span className="text-sm font-medium text-gray-700">Resume Privacy</span>
                    <input type="checkbox" className="h-4 w-4" />
                  </label>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900">Actions</h2>

                <div className="mt-4 space-y-3">
                  <button
                    className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700"
                    type="submit"
                  >
                    {isToggle ? "loading..." : "Save Profile"}
                  </button>
                  <button className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Preview Public Page
                  </button>
                </div>
              </div>

              {/* Change Password */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Change Password</h2>

                <div className="col-span-12 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                      />
                      <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      </button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                      />
                      <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      </button>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                      />
                      <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      </button>
                    </div>
                  </div>
                </div>

                <button className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                  Change Password
                </button>
              </div>

              {/* Delete Account */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Delete Account</h2>
                <p className="text-sm text-gray-600 mb-4">
                  If you delete your account, you will lose access to applied jobs, saved jobs, alerts, and your
                  candidate profile information.
                </p>
                <button className="flex items-center text-red-600 hover:text-red-700 font-medium">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Close Account
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};
