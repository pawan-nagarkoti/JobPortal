import React from "react";

const TermsAndConditionsPage = () => {
  const tableOfContents = [
    { id: "01", title: "Terms & Condition" },
    { id: "02", title: "Limitations" },
    { id: "03", title: "Security" },
    { id: "04", title: "Privacy Policy" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Section 1: Terms & Condition */}
            <section id="terms-condition" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                01. Terms & Condition
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Praesent placerat dictum elementum. Nam pulvinar urna vel lectus
                maximus, eget faucibus turpis hendrerit. Sed iaculis molestie
                arcu, et accumsan nisi. Quisque molestie velit vitae ligula
                luctus bibendum. Duis sit amet eros mollis, viverra ipsum sed,
                convallis sapien. Donec justo erat, pulvinar vitae dui ut,
                finibus euismod enim. Donec velit tortor, mollis eu tortor
                euismod, gravida lacinia arcu.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>
                    In ac turpis mi. Donec quis semper neque. Nulla cursus
                    gravida interdum.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>
                    Curabitur luctus sapien augue, mattis faucibus nisl vehicula
                    nec. Mauris at scelerisque lorem. Nullam tempus felis ipsum,
                    sagittis malesuada nulla vulputate et.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>
                    Aenean vel metus leo. Vivamus nec neque a libero sodales
                    aliquam a et dolor.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Vestibulum rhoncus sagittis dolor vel finibus.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>
                    Integer feugiat lacus ut efficitur mattis. Sed quis molestie
                    velit.
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 2: Limitations */}
            <section id="limitations" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                02. Limitations
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                In pretium est sit amet diam feugiat eleifend. Curabitur
                consectetur fringilla metus. Morbi hendrerit facilisis
                tincidunt. Sed condimentum mi eu ligula elementum, at ut iaculis
                metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce vel erat elit, in vitae turpis tempor, accumsan sapien
                vitae, rutrum eros. Integer pulvinar mattis turpis, ac fermentum
                leo ullamcorper a. Nam finibus eros libero, sit amet mattis
                lacus tristique eu. Donec nec ex convallis, ultricies eros ut,
                mollis libero. Ut scelerisque lacus interdum consectetur
                sodales.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>
                    In ac turpis mi. Donec quis semper neque. Nulla cursus
                    gravida interdum.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Curabitur luctus sapien augue.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>
                    mattis faucibus nisl vehicula nec, Mauris at scelerisque
                    lorem.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>
                    Nullam tempus felis ipsum, sagittis malesuada nulla
                    vulputate et. Aenean vel metus leo.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>
                    Vivamus nec neque a libero sodales aliquam a et dolor.
                  </span>
                </li>
              </ul>
            </section>

            {/* Section 3: Security */}
            <section id="security" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                02. Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ex neque, elementum eu blandit in, ornare eu purus.
                Fusce eu rhoncus mi, quis ultrices lacus. Phasellus id
                pellentesque nulla. Cras erat nisl, mattis et efficitur et,
                iaculis a lacus. Fusce gravida augue quis leo facilisis.
              </p>
            </section>

            {/* Section 4: Privacy Policy */}
            <section id="privacy-policy" className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                04. Privacy Policy
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Praesent non sem facilisis, hendrerit nisi vitae, volutpat quam.
                Aliquam metus mauris, semper eu eros vitae, blandit tristique
                metus. Vestibulum maximus nec justo sed maximus. Vivamus ut amet
                turpis sem. Integer vitae tortor ac ex scelerisque facilisis ac
                vitae urna. In hac habitasse platea dictumst. Maecenas imperdiet
                tortor arcu, nec tincidunt neque malesuada volutpat.
              </p>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>
                    In ac turpis mi. Donec quis semper neque. Nulla cursus
                    gravida interdum.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>
                    Mauris at scelerisque lorem. Nullam tempus felis ipsum,
                    sagittis malesuada nulla vulputate et.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Aenean vel metus leo.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Vestibulum rhoncus sagittis dolor vel finibus.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>
                    Integer feugiat lacus ut efficitur mattis. Sed quis molestie
                    velit.
                  </span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                Fusce rutrum mauris sit amet justo rutrum, ut sodales lorem
                ullamcorper. Aliquam vitae iaculis urna. Nulla vitae mi vel nisl
                viverra ullamcorper rutrum est. Mauris vitae elit nec enim
                tincidunt aliquet. Donec ultrices nulla a enim pulvinar, quis
                pulvinar lacus consectetur. Donec dignissim, risus nec mollis
                efficitur, turpis erat blandit urna, eget elementum lacus lectus
                eget lorem.
              </p>
            </section>
          </div>

          {/* Sidebar - Table of Contents */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-6">
              <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">
                TABLE OF CONTENTS
              </h3>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/&/g, "")}`}
                    className="block text-sm text-gray-600 hover:text-blue-600 transition py-2"
                  >
                    {item.id}. {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
