import React, { useEffect, useState, useRef } from "react";
import Sidebar from "./Sidebar";
import { _get, _post, _put } from "../../../lib/api";
import { cookies, getCookie } from "../../../lib/cookies";
import { industryTypes, organizationTypes, teamSizeList } from "../../../lib/constant";
import CustomEditor from "../../../components/form/CustomEditor";
import { HtmlSanitizer } from "../../../components/other/HtmlSanitizer";
import { v4 as uuidv4 } from "uuid";
import { showSuccess } from "../../../lib/toast";

export const ProfileForEmployer = () => {
  const userId = getCookie("loginUserInfo");
  const [employerId, setEmployerId] = useState("");
  const [isToggle, setIsToggle] = useState(false);

  const [employerData, setEmployerData] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [organization, setOrganization] = useState("");
  const [industry, setIndustry] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [date, setDate] = useState("");
  const [url, setUrl] = useState("");
  const [logo, setLogo] = useState("");
  const [banner, setBanner] = useState("");
  const [vision, setVision] = useState("");
  const [description, setDescription] = useState("");

  const refForDescription = useRef(null);
  const refForVision = useRef(null);

  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const [socialLinks, setSocialLinks] = useState([{ id: uuidv4(), name: "", url: "" }]);

  // preview images
  const [logoPreview, setLogoPreview] = useState("");
  const [bannerPreview, setBannerPreview] = useState("");

  const handleAddSocialLink = () => {
    setSocialLinks((prev) => [...prev, { id: uuidv4(), name: "", url: "" }]);
  };

  const handleRemoveSocialLink = (deletedId) => {
    setSocialLinks((prev) => prev.filter((d) => d.id !== deletedId));
  };

  const handleInputChange = (id, field, value) => {
    setSocialLinks((prev) => prev.map((link) => (link.id === id ? { ...link, [field]: value } : link)));
  };

  const stats = {
    openJobs: 589,
    savedCandidates: 2517212,
  };

  const fetchEmployer = async () => {
    if (!userId) return;
    const res = await _get(`api/employer/fetch?loginUserId=${userId.id}`);
    if (res.data.success) {
      let e = res.data.data[0];
      setEmployerId(e._id);
      setCompanyName(e.name);
      setOrganization(e.organization);
      setIndustry(e.industry);
      setTeamSize(e.teamSize);
      setDate(e.establishmentYear?.split("T")[0] || "");
      setUrl(e.url);
      setLogoPreview(e.logo);
      setBannerPreview(e.banner);
      setVision(e.companyVision);
      setDescription(e.description);
      setEmployerData(res.data.data[0]);
      setCountry(e.country);
      setLocation(e.contact.location);
      setCountryCode(e.contact.phone.countryCode);
      setNumber(e.contact.phone.number);
      setEmail(e.contact.email);
      setSocialLinks(e.socialLinks);
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    if (!employerId) return;
    setIsToggle(true);
    try {
      const updatedForm = new FormData();

      updatedForm.set("name", companyName);
      updatedForm.set("organization", organization);
      updatedForm.set("industry", industry);
      updatedForm.set("teamSize", teamSize);
      updatedForm.set("establishmentYear", date);
      updatedForm.set("url", url);

      updatedForm.set("logo", logo ? logo : logoPreview);
      updatedForm.set("banner", banner ? banner : bannerPreview);
      updatedForm.set("description", refForDescription.current.getContent());
      updatedForm.set("companyVision", refForVision.current.getContent());

      socialLinks.forEach((s, index) => {
        updatedForm.set(`socialLinks[${index}].name`, s.name || "");
        updatedForm.set(`socialLinks[${index}].url`, s.url || "");
      });

      // Send nested data as a JSON string (better for complex/deep objects)
      // const contact = {
      //   location: { country, city, map },
      //   phone: { countryCode, number },
      //   email,
      // };

      // updatedForm.set("contact", JSON.stringify(contact));

      updatedForm.set("country", country);
      updatedForm.set("city", "city");
      updatedForm.set("location", location);
      updatedForm.set("countryCode", countryCode);
      updatedForm.set("number", number);
      updatedForm.set("email", email);

      const res = await _put(`api/employer/update/${employerId}`, updatedForm);
      if (res.data.success) {
        fetchEmployer();
        showSuccess("Profile updated");
      }
    } catch (e) {
      console.log(e.message);
    } finally {
      setIsToggle(false);
    }
  };

  useEffect(() => {
    fetchEmployer();
  }, []);

  if (!employerData) return "loding...";

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h1 className="text-2xl font-semibold text-gray-900">Employer Profile</h1>
            <p className="mt-1 text-sm text-gray-500 mb-3">
              Manage your company details, branding, and contact information.
            </p>

            {/* Stats Cards */}
            <StatsCards stats={stats} />
          </div>

          <div>
            <form className="grid grid-cols-12 gap-6" onSubmit={handleUpdateProfile}>
              {/* Left */}
              <div className="col-span-12 lg:col-span-8 space-y-6">
                {/* Basic Info */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-gray-900">Basic Information</h2>

                  <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">Company Name</label>
                      <input
                        type="text"
                        placeholder="Enter company name"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">Organization</label>
                      <select
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                        defaultValue={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                      >
                        <option value="" disabled>
                          Choose Organisation Type
                        </option>
                        {organizationTypes?.map((v, i) => (
                          <option value={v.name} key={i}>
                            {v.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">Industry</label>
                      <select
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                        defaultValue={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                      >
                        <option value="" disabled>
                          Choose Industry Type
                        </option>
                        {industryTypes?.map((v, i) => (
                          <option value={v.name} key={i}>
                            {v.name}
                          </option>
                        ))}{" "}
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">Team Size</label>
                      <select
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                        defaultValue={teamSize}
                        onChange={(e) => setTeamSize(e.target.value)}
                      >
                        <option value="" disabled>
                          Choose Team Size
                        </option>
                        {teamSizeList?.map((v, i) => (
                          <option value={v.name} key={i}>
                            {v.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">Establishment Year</label>
                      <input
                        type="date"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">Website URL</label>
                      <input
                        type="text"
                        placeholder="https://example.com"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Branding */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-gray-900">Branding</h2>

                  <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">Logo URL</label>
                      <input
                        type="file"
                        placeholder="Paste logo URL"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                        onChange={(e) => {
                          let file = e.target.files[0];
                          if (file) {
                            setLogoPreview(URL.createObjectURL(file));
                            setLogo(file);
                          }
                        }}
                      />

                      {/* preview */}
                      {logoPreview ? (
                        <div className="w-52 mt-2">
                          <div className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500">
                            <img
                              src={logoPreview || null}
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

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">Banner URL</label>
                      <input
                        type="file"
                        placeholder="Paste banner URL"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                        onChange={(e) => {
                          let file = e.target.files[0];
                          if (file) {
                            setBannerPreview(URL.createObjectURL(file));
                            setBanner(file);
                          }
                        }}
                      />

                      {/* preview */}
                      {bannerPreview ? (
                        <div className="w-52 mt-2">
                          <div className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500">
                            <img
                              src={bannerPreview || null}
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
                    <label className="mb-2 block text-sm font-medium text-gray-700">Description</label>
                    <CustomEditor
                      ref={refForDescription}
                      value={description || ""}
                      onEditorChange={(newContent) =>
                        setDescription((prev) => ({
                          ...prev,
                          description: newContent,
                        }))
                      }
                    />
                  </div>

                  <div className="mt-5">
                    <label className="mb-2 block text-sm font-medium text-gray-700">Company Vision</label>
                    <CustomEditor
                      ref={refForVision}
                      value={vision || ""}
                      onEditorChange={(newContent) =>
                        setVision((prev) => ({
                          ...prev,
                          description: newContent,
                        }))
                      }
                    />
                  </div>
                </div>

                {/* Social Links */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900 mb-3">Social Links</h2>
                    {socialLinks.map((link, index) => (
                      <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
                        <label className="block text-sm font-medium text-gray-900 mb-2">Social Link {index + 1}</label>
                        <div className="flex items-center gap-3">
                          <div className="relative shrink-0" style={{ width: "220px" }}>
                            <select
                              value={link.name}
                              onChange={(e) => handleInputChange(link.id, "name", e.target.value)}
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
                            onChange={(e) => handleInputChange(link.id, "url", e.target.value)}
                            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          {socialLinks.length > 1 && (
                            <button
                              onClick={() => handleRemoveSocialLink(link.id || "")}
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
                    <div className="h-32 rounded-2xl bg-gray-100 overflow-hidden border">
                      <img src={bannerPreview || null} alt="" />
                    </div>
                    <div className="-mt-10  ml-4 flex h-20 w-20 items-center justify-center rounded-2xl">
                      <img src={logoPreview || null} alt="" />
                    </div>

                    <div className="mt-4">
                      <h3 className="text-lg font-semibold text-gray-900">{companyName}</h3>
                      <p className="text-sm text-gray-500">
                        {industry} • {teamSize}
                      </p>
                      <div className="mt-3 text-sm leading-6 text-gray-600">{HtmlSanitizer(description)}</div>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-gray-900">Contact Information</h2>

                  <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">Country</label>
                      <input
                        type="text"
                        placeholder="Enter country"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </div>

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
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">Phone Number</label>
                      <input
                        type="text"
                        placeholder="Enter phone number"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="mb-2 block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        placeholder="Enter email"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className="text-lg font-semibold text-gray-900">Actions</h2>

                  <div className="mt-4 space-y-3">
                    <button
                      className="w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700"
                      type="submit"
                    >
                      {isToggle ? "loading..." : " Save Profile"}
                    </button>
                    <button className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50">
                      Preview Public Page
                    </button>
                  </div>
                </div>

                {/* Change Password Section */}
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

                {/* Delete Your Company Section */}
                <div className="bg-white rounded-lg p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Delete Your Company</h2>
                  <p className="text-sm text-gray-600 mb-4">
                    If you delete your Jobpilot account, you will no longer be able to get information about the matched
                    jobs, following employers, and job alert, shortlisted jobs and more. You will be abandoned from all
                    the services of Jobpilot.com.
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
        </div>
      </main>
    </div>
  );
};

const StatsCards = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Open Jobs Card */}
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.openJobs}</p>
            <p className="text-gray-600">Open Jobs</p>
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

      {/* Saved Candidates Card */}
      <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-bold text-gray-900 mb-1">{stats.savedCandidates}</p>
            <p className="text-gray-600">Saved Candidates</p>
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
    </div>
  );
};
