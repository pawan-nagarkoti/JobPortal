export const BreadcrumbSection = () => {
  return (
    <div className="bg-gray-100 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          {/* Page Title */}
          <h1 className="text-2xl font-bold text-gray-900">Find Job</h1>

          {/* Breadcrumb Navigation */}
          <nav className="flex items-center text-sm">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              Home
            </a>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Find job</span>
          </nav>
        </div>
      </div>
    </div>
  );
};
