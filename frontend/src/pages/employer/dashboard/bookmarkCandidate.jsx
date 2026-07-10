import React from "react";
import Sidebar from "./Sidebar";
import BookmarkCandidateList from "../../../components/employer/bookmarkCandidateList";

export default function BookmarkCandidate() {
  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <BookmarkCandidateList />
          </div>
        </main>
      </div>
    </>
  );
}
