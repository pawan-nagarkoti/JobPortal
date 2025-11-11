import React, { useState, useRef } from "react";
import CustomEditor from "../../components/form/customEditor";
import { _post } from "../../lib/api";
import {
  industryTypes,
  organizationTypes,
  teamSizeList,
} from "../../lib/constant";
import useUI from "../../context/UIcontext";

export default function EmployerProfile() {
  const [renderTab, setRenderTab] = useState(<CompanyInfo />);
  const [tabName, setTabname] = useState("companyInfo");

  const handleTabname = (name) => {
    switch (true) {
      case name === "companyInfo":
        setTabname("companyInfo");
        setRenderTab(<CompanyInfo />);
        break;
      case name === "foundingInfo":
        setTabname("foundingInfo");
        setRenderTab(<FoundingInfo />);
        break;
      case name === "socialMedia":
        setTabname("socialMedia");
        setRenderTab(<SocialMediaProfile />);
        break;
      case name === "contact":
        setTabname("contact");
        setRenderTab(<Contact />);
        break;
      default:
        break;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-8">
        <button
          className={`flex items-center px-6 py-4 cursor-pointer  ${
            tabName === "companyInfo"
              ? "border-b-2 border-blue-600 text-blue-600 font-medium"
              : "text-gray-400 hover:text-gray-600"
          }`}
          onClick={() => handleTabname("companyInfo")}
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          Company Info
        </button>
        <button
          className={`flex items-center px-6 py-4 cursor-pointer ${
            tabName === "foundingInfo"
              ? "border-b-2 border-blue-600 text-blue-600 font-medium"
              : "text-gray-400 hover:text-gray-600"
          }`}
          onClick={() => handleTabname("foundingInfo")}
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
          Founding Info
        </button>
        <button
          className={`flex items-center px-6 py-4 cursor-pointer ${
            tabName === "socialMedia"
              ? "border-b-2 border-blue-600 text-blue-600 font-medium"
              : "text-gray-400 hover:text-gray-600"
          }`}
          onClick={() => handleTabname("socialMedia")}
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
          Social Media Profile
        </button>
        <button
          className={`flex items-center px-6 py-4 cursor-pointer ${
            tabName === "contact"
              ? "border-b-2 border-blue-600 text-blue-600 font-medium"
              : "text-gray-400 hover:text-gray-600"
          }`}
          onClick={() => handleTabname("contact")}
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
          Contact
        </button>
      </div>

      <div>{renderTab}</div>
    </div>
  );
}

const CompanyInfo = () => {
  const { employerTabData, setEmployerTabData } = useUI();

  const [logoPreview, setLogoPreview] = useState(
    (employerTabData.logo && URL?.createObjectURL(employerTabData.logo)) || null
  );
  const [bannerPreview, setBannerPreview] = useState(
    (employerTabData.logo && URL?.createObjectURL(employerTabData.banner)) ||
      null
  );
  const editorRef = useRef(employerTabData.description || null);

  const [logo, setLogo] = useState(employerTabData.logo || "");
  const [banner, setBanner] = useState(employerTabData.banner || "");
  const [companyName, setCompanyName] = useState(
    employerTabData.companyName || ""
  );

  const handleCompanyInfo = async () => {
    let editorContent;
    if (editorRef.current) {
      editorContent = editorRef.current.getContent();
    }
    const companyObj = {
      description: editorContent,
      logo,
      banner,
      companyName,
    };
    setEmployerTabData(companyObj);
  };

  return (
    <>
      <div className="bg-white rounded-lg p-8">
        {/* Logo & Banner Image Section */}
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Logo & Banner Image
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Upload Logo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Logo
            </label>
            <div className="space-y-4">
              <div>
                <input
                  type="file"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setLogoPreview(URL.createObjectURL(file));
                      setLogo(file);
                    }
                  }}
                />
                {/* Image Preview */}
                {logoPreview && (
                  <div className="flex justify-center">
                    <img
                      src={logoPreview}
                      alt="Preview"
                      className="mt-4 h-50 w-full object-cover rounded-lg border border-gray-200 shadow-sm"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Banner Image */}
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Banner Image
            </label>
            <div>
              <input
                type="file"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setBannerPreview(URL.createObjectURL(file));
                    setBanner(file);
                  }
                }}
              />
              {/* Image Preview */}
              {bannerPreview && (
                <div className="flex justify-center">
                  <img
                    src={bannerPreview}
                    alt="Preview"
                    className="mt-4 h-50 w-full object-cover rounded-lg border border-gray-200 shadow-sm"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Company Name */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company name
          </label>
          <input
            type="text"
            value={companyName}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        {/* About Us */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            About Us
          </label>
          <div className="border border-gray-300 rounded-lg">
            <CustomEditor
              ref={editorRef}
              value={employerTabData.description || ""}
              onEditorChange={(newContent) =>
                setEmployerTabData((prev) => ({
                  ...prev,
                  description: newContent,
                }))
              }
            />
          </div>
        </div>

        {/* Save & Next Button */}
        <div>
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 flex items-center"
            onClick={handleCompanyInfo}
          >
            Save & Next
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

const FoundingInfo = () => {
  const [organisationType, setOrganisationType] = useState("");
  const [industryType, setIndustryType] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [establishmentYear, setEstablishmentYear] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const editorRef = useRef(null);

  return (
    <form
      className="max-w-6xl mx-auto p-6 space-y-6"
      onSubmit={handleFundingFormData}
    >
      {/* Row 1: Organization Type, Industry Types, Team Size */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Organization Type
          </label>
          <div className="relative">
            <select
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-gray-400"
              onChange={(e) => setOrganisationType(e.target.value)}
            >
              {organizationTypes?.map((v, i) => (
                <option value={v.name}>{v.name}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Industry Types
          </label>
          <div className="relative">
            <select
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-gray-400"
              onChange={(e) => setIndustryType(e.target.value)}
            >
              {industryTypes?.map((v, i) => (
                <option value={v.name}>{v.name}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Team Size
          </label>
          <div className="relative">
            <select
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white text-gray-400"
              onChange={(e) => setTeamSize(e.target.value)}
            >
              {teamSizeList?.map((v, i) => (
                <option value={v.name}>{v.name}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Year of Establishment, Company Website */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Year of Establishment
          </label>
          <div className="relative">
            <input
              type="date"
              placeholder="dd/mm/yyyy"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => setEstablishmentYear(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Company Website
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
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
              placeholder="Website url..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => setCompanyUrl(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Company Vision */}
      <div>
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Company Vision
        </label>
        <div className="border border-gray-300 rounded-lg">
          <CustomEditor ref={editorRef} />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <button className="px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300">
          Previous
        </button>
        <button
          type="submit"
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 flex items-center"
        >
          Save & Next
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

const SocialMediaProfile = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg p-6 space-y-6">
        {/* Social Link 1 */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Social Link 1
          </label>
          <div className="flex items-center gap-3">
            <div className="relative shrink-0" style={{ width: "220px" }}>
              <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                <option>🔵 Facebook</option>
                <option>🐦 Twitter</option>
                <option>📷 Instagram</option>
                <option>▶️ Youtube</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <input
              type="text"
              placeholder="Profile link/url..."
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="p-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Social Link 2 */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Social Link 2
          </label>
          <div className="flex items-center gap-3">
            <div className="relative shrink-0" style={{ width: "220px" }}>
              <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                <option>🔵 Facebook</option>
                <option>🐦 Twitter</option>
                <option>📷 Instagram</option>
                <option>▶️ Youtube</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <input
              type="text"
              placeholder="Profile link/url..."
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="p-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Social Link 3 (Instagram) */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Social Link 2
          </label>
          <div className="flex items-center gap-3">
            <div className="relative shrink-0" style={{ width: "220px" }}>
              <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                <option>🔵 Facebook</option>
                <option>🐦 Twitter</option>
                <option>📷 Instagram</option>
                <option>▶️ Youtube</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <input
              type="text"
              placeholder="Profile link/url..."
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="p-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Social Link 4 */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Social Link 3
          </label>
          <div className="flex items-center gap-3">
            <div className="relative shrink-0" style={{ width: "220px" }}>
              <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                <option>🔵 Facebook</option>
                <option>🐦 Twitter</option>
                <option>📷 Instagram</option>
                <option>▶️ Youtube</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            <input
              type="text"
              placeholder="Profile link/url..."
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="p-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Add New Social Link Button */}
        <button className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition flex items-center justify-center gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Add New Social Link
        </button>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4">
          <button className="px-8 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300">
            Previous
          </button>
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 flex items-center">
            Save & Next
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Contact Information Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Contact Information
        </h2>

        {/* Map Location */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Map Location
          </label>
          <input
            type="text"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder=""
          />
        </div>

        {/* Phone */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>
          <div className="flex gap-2">
            <select className="w-32 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
              <option>🇧🇩 +880</option>
            </select>
            <input
              type="tel"
              placeholder="Phone number.."
              className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
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
            />
          </div>
        </div>

        <button className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
          Save Changes
        </button>
      </div>

      {/* Change Password Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Change Password
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
              />
              <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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
            <label className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
              />
              <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
              />
              <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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

      {/* Delete Your Company Section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Delete Your Company
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          If you delete your Jobpilot account, you will no longer be able to get
          information about the matched jobs, following employers, and job
          alert, shortlisted jobs and more. You will be abandoned from all the
          services of Jobpilot.com.
        </p>
        <button className="flex items-center text-red-600 hover:text-red-700 font-medium">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
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

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const v = new FormData();

//   let editorContent;
//   if (editorRef.current) {
//     editorContent = editorRef.current.getContent();
//   }

//   v.append("name", companyName);
//   v.append("logo", logo);
//   v.append("banner", banner);
//   v.append("description", editorContent);

//   const res = await _post("api/employer/add", v);
// };

// const handleClear = () => {
//   if (editorRef.current) {
//     editorRef.current.setContent("");
//   }
// };
