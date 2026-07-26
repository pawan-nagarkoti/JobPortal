import { MapPin, Briefcase, GraduationCap, Globe, ArrowUpRight } from "lucide-react";

export default function AppliedCandidate({ candidate }) {
  if (!candidate) return "loading..";
  return (
    <div className="group relative w-full max-w-sm cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-md ring-1 ring-gray-100">
          <img
            src={
              candidate.applicantId.profilePicture ||
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
            }
            alt="Profile picture"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="truncate text-base font-semibold text-gray-900">{candidate.applicantId.name}</h3>
            <ArrowUpRight
              size={18}
              className="mt-0.5 shrink-0 text-gray-300 transition-colors group-hover:text-indigo-500"
            />
          </div>
          <p className="mt-0.5 truncate text-sm font-medium text-indigo-500">{candidate.jobId.title}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-gray-500">
        Product designer with a background in fintech, focused on turning complex workflows into simple, intuitive
        interfaces.
      </p>

      {/* Meta row */}
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
        <span className="inline-flex items-center gap-1">
          <MapPin size={14} className="text-gray-400" />
          {candidate.jobId.location.city}, {candidate.jobId.location.country}
        </span>
        <span className="inline-flex items-center gap-1">
          <Briefcase size={14} className="text-gray-400" />
          {candidate.applicantId.experience}
        </span>
        <span className="inline-flex items-center gap-1">
          <GraduationCap size={14} className="text-gray-400" />
          {candidate.applicantId.education}
        </span>
      </div>

      {/* Footer: socials */}
      <div className="mt-4 flex items-center gap-3 border-t border-gray-100 pt-3">
        <Globe size={14} className="text-gray-400" />
        <a
          href="#"
          onClick={(e) => e.stopPropagation()}
          className="truncate text-xs font-medium text-gray-500 hover:text-indigo-500"
        >
          LinkedIn
        </a>
        <a
          href="#"
          onClick={(e) => e.stopPropagation()}
          className="truncate text-xs font-medium text-gray-500 hover:text-indigo-500"
        >
          Portfolio
        </a>
        <a
          href="#"
          onClick={(e) => e.stopPropagation()}
          className="truncate text-xs font-medium text-gray-500 hover:text-indigo-500"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
