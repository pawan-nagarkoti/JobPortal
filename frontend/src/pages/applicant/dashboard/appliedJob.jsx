import React from "react";
import LeftSidebar from "./leftSidebar";

export default function appliedJob() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <LeftSidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl px-6 py-8">test</div>
      </main>
    </div>
  );
}
