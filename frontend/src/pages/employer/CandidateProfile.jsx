const CandidateProfile = () => {
  // Dummy candidate data
  const candidate = {
    name: "Esther Howard",
    role: "Website Designer (UI/UX)",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    dateOfBirth: "14 June, 2021",
    nationality: "Bangladesh",
    maritalStatus: "Single",
    gender: "Male",
    experience: "7 Years",
    education: "Master Degree",
    website: "www.estherhoward.com",
    location: "Beverly Hills, California 90202",
    address: "Zone/Block Basement 1 Unit B2, 1372 Spring Avenue, Portland,",
    phone: "+1-202-555-0141",
    secondaryPhone: "+1-202-555-0189",
    email: "esther.howard@gmail.com",
  };

  const biography = `I've been passionate about graphic design and digital art from an early age with a keen interest in Website and Mobile Application User Interfaces. I can create high-quality and aesthetically pleasing designs in a quick turnaround time. Check out the portfolio section of my profile to see samples of my work and feel free to discuss your designing needs. I mostly use Adobe Photoshop, Illustrator, XD and Figma. *Website User Experience and Interface (UI/UX) Design - for all kinds of Professional and Personal websites. *Mobile Application User Experience and Interface Design - for all kinds of IOS/Android and Hybrid Mobile Applications. *Wireframe Designs.`;

  const coverLetter = [
    "Dear Sir,",
    "I am writing to express my interest in the fourth grade instructional position that is currently available in the Fort Wayne Community School System. I learned of the opening through a notice posted on JobZone, IPFW's job database. I am confident that my academic background and curriculum development skills would be successfully utilized in this teaching position.",
    "I have just completed my Bachelor of Science degree in Elementary Education and have successfully completed Praxis I and Praxis II. During my student teaching experience, I developed and initiated a three-week curriculum sequence on animal species and earth resources. This collaborative unit involved working with three other third grade teachers within my team, and culminated in a field trip to the Indianapolis Zoo Animal Research Unit.",
    "Sincerely,",
    "Esther Howard",
  ];

  const socialLinks = [
    { name: "Facebook", icon: "facebook", url: "#", bgColor: "bg-blue-600" },
    { name: "Twitter", icon: "twitter", url: "#", bgColor: "bg-blue-400" },
    { name: "LinkedIn", icon: "linkedin", url: "#", bgColor: "bg-blue-700" },
    { name: "Dribbble", icon: "dribbble", url: "#", bgColor: "bg-pink-500" },
    {
      name: "Instagram",
      icon: "instagram",
      url: "#",
      bgColor: "bg-purple-600",
    },
    { name: "YouTube", icon: "youtube", url: "#", bgColor: "bg-red-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Profile Image */}
              <img
                src={candidate.image}
                alt={candidate.name}
                className="w-20 h-20 rounded-full object-cover"
              />

              {/* Name and Role */}
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {candidate.name}
                </h1>
                <p className="text-gray-600">{candidate.role}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3">
              <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
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
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
              </button>
              <button className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 flex items-center">
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Send Mail
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Biography Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                BIOGRAPHY
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {biography}
              </p>
            </div>

            {/* Cover Letter Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                COVER LETTER
              </h2>
              <div className="space-y-4 text-gray-700">
                {coverLetter.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Social Media Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">
                Follow me Social Media
              </h3>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`${social.bgColor} w-10 h-10 rounded flex items-center justify-center text-white hover:opacity-90 transition`}
                  >
                    {social.icon === "facebook" && (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    )}
                    {social.icon === "twitter" && (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    )}
                    {social.icon === "linkedin" && (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )}
                    {social.icon === "dribbble" && (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm7.88 6.595c1.396 1.71 2.245 3.887 2.28 6.27-.403-.086-4.408-.895-8.468-.387-.084-.206-.17-.412-.263-.618-.279-.654-.581-1.31-.895-1.943 4.268-1.747 6.21-4.27 6.346-4.322zM12 2.014c2.558 0 4.893 1 6.63 2.63-.105.14-1.854 2.45-5.95 3.916-1.81-3.326-3.817-6.048-4.11-6.45A9.95 9.95 0 0112 2.014zM6.14 3.152c.286.39 2.27 3.112 4.098 6.388-5.176 1.377-9.738 1.354-10.237 1.346A9.968 9.968 0 016.14 3.152zM2.007 12.012v-.298c.485.01 5.942.077 11.465-1.59.358.695.7 1.406 1.02 2.116-.144.04-.292.085-.435.13-5.73 1.85-8.77 6.906-9.012 7.346A9.957 9.957 0 012.007 12.012zm9.993 9.974c-2.34 0-4.49-.807-6.195-2.154.198-.42 2.398-4.817 8.724-6.956.022-.006.042-.014.064-.02 1.583 4.116 2.23 7.576 2.408 8.545a9.932 9.932 0 01-5.001 1.585zm6.988-2.39c-.13-.774-.732-3.99-2.193-7.995 3.826-.607 7.187.386 7.596.52a9.966 9.966 0 01-5.403 7.475z" />
                      </svg>
                    )}
                    {social.icon === "instagram" && (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    )}
                    {social.icon === "youtube" && (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className="space-y-6">
            {/* Personal Info Grid */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="grid grid-cols-2 gap-6">
                {/* Date of Birth */}
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500 uppercase mb-1">
                    Date of Birth
                  </p>
                  <p className="font-semibold text-gray-900">
                    {candidate.dateOfBirth}
                  </p>
                </div>

                {/* Nationality */}
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                      />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500 uppercase mb-1">
                    Notionality
                  </p>
                  <p className="font-semibold text-gray-900">
                    {candidate.nationality}
                  </p>
                </div>

                {/* Marital Status */}
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500 uppercase mb-1">
                    Marital Status
                  </p>
                  <p className="font-semibold text-gray-900">
                    {candidate.maritalStatus}
                  </p>
                </div>

                {/* Gender */}
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <svg
                      className="w-8 h-8 text-blue-600"
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
                  </div>
                  <p className="text-xs text-gray-500 uppercase mb-1">Gender</p>
                  <p className="font-semibold text-gray-900">
                    {candidate.gender}
                  </p>
                </div>

                {/* Experience */}
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500 uppercase mb-1">
                    Experience
                  </p>
                  <p className="font-semibold text-gray-900">
                    {candidate.experience}
                  </p>
                </div>

                {/* Education */}
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500 uppercase mb-1">
                    Educations
                  </p>
                  <p className="font-semibold text-gray-900">
                    {candidate.education}
                  </p>
                </div>
              </div>
            </div>

            {/* Download Resume */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">
                Download My Resume
              </h3>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center space-x-3">
                  <svg
                    className="w-10 h-10 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-500">Esther Howard</p>
                    <p className="font-semibold text-gray-900">PDF</p>
                  </div>
                </div>
                <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
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
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                {/* Website */}
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-lg mr-3 flex-shrink-0">
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
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">
                      Website
                    </p>
                    <a
                      href={`https://${candidate.website}`}
                      className="text-gray-900 hover:text-blue-600 font-medium"
                    >
                      {candidate.website}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-lg mr-3 flex-shrink-0">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">
                      Location
                    </p>
                    <p className="text-gray-900 font-medium">
                      {candidate.location}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {candidate.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-lg mr-3 flex-shrink-0">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">
                      Phone
                    </p>
                    <p className="text-gray-900 font-medium">
                      {candidate.phone}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      Secondary Phone
                    </p>
                    <p className="text-gray-900 font-medium">
                      {candidate.secondaryPhone}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-lg mr-3 flex-shrink-0">
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
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-1">
                      Email Address
                    </p>
                    <a
                      href={`mailto:${candidate.email}`}
                      className="text-gray-900 hover:text-blue-600 font-medium break-all"
                    >
                      {candidate.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
