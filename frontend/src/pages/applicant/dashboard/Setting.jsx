import React, { useState, useEffect, useRef } from "react";
import LeftSidebar from "./LeftSidebar";
import { EDUCATION, GENDER, MARITAL_STATUS } from "../../../lib/constant";
import { _delete, _get, _post, _put } from "../../../lib/api";
import useUI from "../../../context/UIcontext";
import { v4 as uuidv4 } from "uuid";
import { getCookie } from "../../../lib/cookies";
import { showError, showSuccess } from "../../../lib/toast";
import { useNavigate } from "react-router-dom";
import InputChip from "../../../components/form/InputChip";

export default function Setting() {
  const [renderTab, setRenderTab] = useState(<PersonalSetting />);
  const [tabName, setTabName] = useState("personal");
  const { applicantTabController, setApplicantTabController, applicantSettingsTabData, setApplicantSettingsTabData } =
    useUI("personal");

  const handleTabname = (name) => {
    switch (true) {
      case name === "personal":
        setRenderTab(<PersonalSetting />);
        setTabName("personal");
        break;
      case name === "profile":
        setRenderTab(<ProfileSetting />);
        setTabName("profile");
        break;
      case name === "socialLinks":
        setRenderTab(<SocialLinksSetting />);
        setTabName("socialLinks");

        break;
      case name === "account":
        setRenderTab(<AccountSetting />);
        setTabName("account");

        break;
      case name === "resume":
        setRenderTab(<ResumeSetting />);
        setTabName("resume");

      default:
        break;
    }
  };

  useEffect(() => {
    handleTabname(applicantTabController);
  }, [applicantTabController]); // update tab

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg border border-gray-200 mb-6">
          <div className="flex border-b border-gray-200">
            <button
              className={`flex items-center px-6 py-4 border-b-2
                   ${tabName === "personal" ? `border-blue-600 text-blue-600 font-medium` : ""}`}
              onClick={() => handleTabname("personal")}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Personal
            </button>
            <button
              className={`flex items-center px-6 py-4
                   ${tabName === "profile" ? `border-blue-600 text-blue-600 font-medium` : ""}`}
              onClick={() => handleTabname("profile")}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Profile
            </button>
            <button
              className={`flex items-center px-6 py-4
                   ${tabName === "socialLinks" ? `border-blue-600 text-blue-600 font-medium` : ""}`}
              onClick={() => handleTabname("socialLinks")}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              Social Links
            </button>
            <button
              className={`flex items-center px-6 py-4
                   ${tabName === "account" ? `border-blue-600 text-blue-600 font-medium` : ""}`}
              onClick={() => handleTabname("account")}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Account Setting
            </button>
            <button
              className={`flex items-center px-6 py-4
                   ${tabName === "resume" ? `border-blue-600 text-blue-600 font-medium` : ""}`}
              onClick={() => handleTabname("resume")}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Resume
            </button>
          </div>
        </div>
        <div>{renderTab}</div>
      </div>
    </div>
  );
}

const PersonalSetting = () => {
  const { setApplicantTabController, applicantSettingsTabData, setApplicantSettingsTabData } = useUI();

  useEffect(() => {
    console.log(applicantSettingsTabData);
  }, [applicantSettingsTabData]);
  const [profilePic, setProfilePic] = useState(
    applicantSettingsTabData?.profilePic ? applicantSettingsTabData?.profilePic : null,
  );
  const [previewImg, setPreviewImg] = useState(
    applicantSettingsTabData?.profilePic ? URL?.createObjectURL(applicantSettingsTabData.profilePic) : null,
  );

  const [name, setName] = useState(applicantSettingsTabData.name || "");
  const [title, setTitle] = useState(applicantSettingsTabData.title || "");
  const [experience, setExperience] = useState(applicantSettingsTabData.experience || "");
  const [education, setEducation] = useState(applicantSettingsTabData.education || "");
  const [url, setUrl] = useState(applicantSettingsTabData.url || "");

  const handleBasicInfo = async () => {
    setApplicantSettingsTabData((prev) => ({
      ...prev,
      profilePic,
      name,
      title,
      experience,
      education,
      url,
    }));
    setApplicantTabController("profile");
  };
  return (
    <>
      {/* Basic Information Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Basic Information</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Picture Upload */}
          <label htmlFor="profileImage" className="cursor-pointer block">
            {previewImg ? (
              <img
                src={previewImg}
                alt="Profile preview"
                className="h-28 w-28 rounded-full object-cover mx-auto mb-4"
              />
            ) : (
              <div className="h-28 w-28 rounded-full bg-gray-100 mx-auto mb-4 flex items-center justify-center">
                No Image
              </div>
            )}

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition">
              <p className="text-sm text-gray-600">
                <span className="text-blue-600 font-medium">Browse photo</span> or drag here
              </p>
              <p className="text-xs text-gray-500 mt-1">
                A photo larger than 400 pixels works best. Max photo size 5 MB.
              </p>
            </div>

            <input
              id="profileImage"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;

                setProfilePic(file);
                setPreviewImg(URL.createObjectURL(file));
              }}
            />
          </label>

          {/* Form Fields */}
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Title/Headline */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tittle/headline</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder=""
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder=""
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                />
              </div>

              {/* Educations */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Educations</label>
                <select
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
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
            </div>

            {/* Personal Website */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Personal Website</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                </div>
                <input
                  type="url"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Website url..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
            </div>

            {/* Save Changes Button */}
            <div>
              <button
                className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                onClick={handleBasicInfo}
              >
                Save & Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ProfileSetting = () => {
  const { setApplicantTabController, applicantSettingsTabData, setApplicantSettingsTabData } = useUI();
  const [nationality, setNationality] = useState(applicantSettingsTabData.nationality || "");
  const [dob, setDob] = useState(applicantSettingsTabData.dob || "");
  const [gender, setGender] = useState(applicantSettingsTabData.gender || "");
  const [maritalStatus, setMaritalStatus] = useState(applicantSettingsTabData.maritalStatus || "");
  const [bio, setBio] = useState(applicantSettingsTabData.bio || "");

  const handleSaveChanges = () => {
    setApplicantTabController("socialLinks");
    setApplicantSettingsTabData((prev) => ({
      ...prev,
      nationality,
      dob,
      gender,
      maritalStatus,
      bio,
    }));
  };
  const handlePreviousBtn = () => {
    setApplicantTabController("personal");
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="space-y-6">
        {/* Row 1: Nationality and Date of Birth */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Nationality</label>
            <input
              type="text"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Date of Birth</label>
            <input
              type="date"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
        </div>

        {/* Row 2: Gender and Marital Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Gender</label>
            <div className="relative">
              <select
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
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
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Marital Status</label>
            <div className="relative">
              <select
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none "
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
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Biography Section */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">Biography</label>
          <div className="border border-gray-300 rounded-lg">
            {/* Text Area */}
            <textarea
              className="w-full px-4 py-3 border-0 focus:ring-0 resize-none"
              rows="8"
              placeholder="Write down your biography here. Let the employers know who you are..."
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="flex gap-3">
          <button
            className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
            onClick={() => handlePreviousBtn()}
          >
            Previous
          </button>
          <button
            className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
            onClick={() => handleSaveChanges()}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

const SocialLinksSetting = () => {
  const { applicantTabController, setApplicantTabController, applicantSettingsTabData, setApplicantSettingsTabData } =
    useUI();

  const [socialLinks, setSocialLinks] = useState(
    (applicantTabController.socialLinks && applicantTabController.socialLinks) || [
      { id: uuidv4(), platform: "", url: "" },
    ],
  );

  const handleAddSocialLink = () => {
    setSocialLinks((prev) => [...prev, { id: uuidv4(), platform: "", url: "" }]);
  };

  const handleRemoveSocialLink = (deletedId) => {
    setSocialLinks((prev) => prev.filter((d) => d.id !== deletedId));
  };

  const handleInputChange = (id, field, value) => {
    setSocialLinks((prev) => prev.map((link) => (link.id === id ? { ...link, [field]: value } : link)));
  };

  const handleSocialMediaProfile = () => {
    setApplicantSettingsTabData((prev) => ({ ...prev, socialLinks }));
    setApplicantTabController("account");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg p-6 space-y-6">
        <div>
          {socialLinks.map((link, index) => (
            <div key={link.id} className="mb-6 p-4 border border-gray-200 rounded-lg">
              <label className="block text-sm font-medium text-gray-900 mb-2">Social Link {index + 1}</label>
              <div className="flex items-center gap-3">
                <div className="relative shrink-0" style={{ width: "220px" }}>
                  <select
                    value={link.platform}
                    onChange={(e) => handleInputChange(link.id, "platform", e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">Select Platform</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Twitter">Twitter</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Youtube">Youtube</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Profile link/url..."
                  value={link.url}
                  onChange={(e) => handleInputChange(link.id, "url", e.target.value)}
                  className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {socialLinks.length > 1 && (
                  <button
                    onClick={() => handleRemoveSocialLink(link.id)}
                    className="p-2.5 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition"
                    title="Remove"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}

          <button
            className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition flex items-center justify-center gap-2"
            onClick={handleAddSocialLink}
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

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4">
          <button
            className="px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300"
            onClick={() => setApplicantTabController("profile")}
          >
            Previous
          </button>
          <button
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 flex items-center"
            onClick={handleSocialMediaProfile}
          >
            Save & Next
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const AccountSetting = () => {
  const { setApplicantTabController, applicantSettingsTabData, setApplicantSettingsTabData } = useUI();
  const handlePreviousBtn = () => {
    setApplicantTabController("socialLinks");
  };

  // const [location, setLocation] = useState(
  //   applicantSettingsTabData.location || "",
  // );
  // const [countryCode, setCountryCode] = useState(91);
  // const [number, setNumber] = useState(applicantSettingsTabData.number || "");
  // const [email, setEmail] = useState(applicantSettingsTabData.email || "");

  const [location, setLocation] = useState();
  const [countryCode, setCountryCode] = useState(91);
  const [number, setNumber] = useState();
  const [email, setEmail] = useState();

  let userId = getCookie("loginUserInfo");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [alertJobRole, setAlertJobRole] = useState("");
  const [alertJobLocation, setAlertJobLocation] = useState("");

  const [hasAlertRole, setHasAlertRole] = useState("");
  const [hasAlertLocation, setHasAlertLocation] = useState("");

  useEffect(() => {
    setHasAlertRole(alertJobRole);
    setHasAlertLocation(alertJobLocation);
  }, [alertJobRole, alertJobLocation]);

  const handleSaveChanges = async () => {
    // setApplicantSettingsTabData((prev) => ({
    //   ...prev,
    //   location,
    //   countryCode,
    //   number,
    //   email,
    // }));

    const formData = new FormData();

    formData.append("userId", userId.id);
    formData.append("profilePicture", applicantSettingsTabData.profilePic);
    formData.append("name", applicantSettingsTabData.name);
    formData.append("title", applicantSettingsTabData.title);
    formData.append("experience", applicantSettingsTabData.experience);
    formData.append("education", applicantSettingsTabData.education);
    formData.append("websiteUrl", applicantSettingsTabData.url);
    formData.append("nationality", applicantSettingsTabData.nationality);
    formData.append("dob", applicantSettingsTabData.dob);
    formData.append("gender", applicantSettingsTabData.gender);
    formData.append("maritalStatus", applicantSettingsTabData.maritalStatus);
    formData.append("biography", applicantSettingsTabData.bio);

    applicantSettingsTabData?.socialLinks.forEach((v, i) => {
      formData.append(`socialLinks[${i}].name`, v.platform);
      formData.append(`socialLinks[${i}].url`, v.url);
    });

    formData.append("location", location);
    formData.append("countryCode", countryCode);
    formData.append("number", number);

    formData.append("alertJob.jobTitle", JSON.stringify(hasAlertRole));
    formData.append("alertJob.alertLocation", JSON.stringify(hasAlertLocation));

    setIsLoading(true);
    try {
      const apiResponse = await _post("api/applicant/add", formData);
      if (apiResponse.data.success) {
        showSuccess(apiResponse.data.message);
        navigate("/applicant-dashboard");
      } else {
        showError(apiResponse.data.message);
      }
    } catch (e) {
      console.log(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Contact Info Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Info</h2>

        {/* Map Location */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-900 mb-2">Map Location</label>
          <input
            type="text"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Phone */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-900 mb-2">Phone</label>
          <div className="flex gap-2">
            <select className="w-32 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
              <option>+91</option>
            </select>
            <input
              type="tel"
              placeholder="Phone number.."
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* <div className="flex gap-3">
          <button
            className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
            onClick={() => handlePreviousBtn()}
          >
            Previous
          </button>
          <button
            className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
            onClick={() => handleSaveChanges()}
          >
            {isLoading ? "loading..." : "Save Changes"}
          </button>
        </div> */}
      </div>

      {/* Notification Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Notification</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
            <span className="ml-2 text-sm text-gray-700">Notify me when employers shortlisted me</span>
          </label>

          <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
            <span className="ml-2 text-sm text-gray-700">Notify me when employers saved my profile</span>
          </label>

          <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
            <span className="ml-2 text-sm text-gray-700">Notify me when my applied jobs are expire</span>
          </label>

          <label className="flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
            <span className="ml-2 text-sm text-gray-700">Notify me when employers rejected me</span>
          </label>

          <label className="flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
            <span className="ml-2 text-sm text-gray-700">Notify me when I have up to 5 job alerts</span>
          </label>
        </div>
      </div>

      {/* Job Alerts Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Job Alerts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <InputChip label="Job Title" placeholderName="Job title" getValues={setAlertJobRole} />
          </div>

          <div>
            <InputChip label="Location" placeholderName="City, state, country name" getValues={setAlertJobLocation} />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
            onClick={() => handlePreviousBtn()}
          >
            Previous
          </button>
          <button
            className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
            onClick={() => handleSaveChanges()}
          >
            {isLoading ? "loading..." : "Save Changes"}
          </button>
        </div>
      </div>

      {/* Profile and Resume Privacy */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Privacy */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Profile Privacy</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative inline-block w-12 h-6">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-12 h-6 bg-blue-600 peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </div>
              <span className="text-sm font-medium text-blue-600">YES</span>
            </div>
            <span className="text-sm text-gray-600">Your profile is public now</span>
          </div>
        </div>

        {/* Resume Privacy */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Resume Privacy</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative inline-block w-12 h-6">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-12 h-6 bg-gray-300 peer-focus:ring-2 peer-focus:ring-gray-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </div>
              <span className="text-sm font-medium text-gray-600">NO</span>
            </div>
            <span className="text-sm text-gray-600">Your resume is private now</span>
          </div>
        </div>
      </div>

      {/* Change Password Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Change Password</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Current Password</label>
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

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">New Password</label>
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

          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Confirm Password</label>
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
          Save Changes
        </button>
      </div>

      {/* Delete Account Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Delete Your Account</h2>
        <p className="text-sm text-gray-600 mb-4">
          If you delete your Jobpilot account, you will no longer be able to get information about the matched jobs,
          following employers, and job alert, shortlisted jobs and more. You will be abandoned from all the services of
          Jobpilot.com.
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
  );
};

const ResumeSetting = () => {
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
      {/* Your CV/Resume Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Your Cv/Resume</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Existing Resumes */}
          {data?.data?.map((r, i) => (
            <div key={i} className="relative">
              <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">{r.title}</p>
                    </div>
                  </div>
                  <div className="inline-flex rounded-md shadow-sm">
                    <button
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50"
                      onClick={() => handleEditBtn(r._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-4 py-2 text-sm font-medium text-red-600 bg-white border-t border-b border-r border-gray-300 rounded-r-md hover:bg-red-50"
                      onClick={() => handleDeleteBtn(r._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Add CV/Resume Card */}
          <div>
            <label className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-blue-400 hover:bg-blue-50/40 transition cursor-pointer flex flex-col items-center justify-center text-center gap-4">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                ref={fileInputRef}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setCv(file);
                  }
                }}
              />

              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>

              <div>
                <p className="text-base font-semibold text-gray-900">Add CV/Resume</p>
                <p className="text-sm text-gray-500">Click to upload PDF, DOC, or DOCX</p>
              </div>

              <input
                type="text"
                placeholder="Optional title or note"
                className="w-full max-w-sm rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                value={title || ""}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition mt-2"
              onClick={handleAddCV}
            >
              {isLoading ? "loading..." : "Add"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
