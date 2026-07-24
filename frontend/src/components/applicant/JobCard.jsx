import { MapPin, Briefcase, Clock, Wallet, ArrowUpRight, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  if (!job) return "loading...";
  return (
    <Link
      to={`/job-detail/${job._id}`}
      className="group relative w-full  cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Featured badge */}
      <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-medium text-amber-600">
        <BadgeCheck size={12} />
        Featured
      </span>

      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
          <img
            src={
              job.employerId.logo || "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop"
            }
            alt="Company logo"
            className="h-full w-full object-contain p-1"
          />
        </div>

        <div className="min-w-0 flex-1 pr-16">
          <h3 className="truncate text-base font-semibold text-gray-900">{job.title}</h3>
          <p className="mt-0.5 truncate text-sm font-medium text-indigo-500">{job.employerId.name}</p>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-gray-500">
        Own the design system and build delightful, accessible interfaces for our core product used by thousands of
        teams every day.
      </p>

      {/* Meta row */}
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
        <span className="inline-flex items-center gap-1">
          <MapPin size={14} className="text-gray-400" />
          {job.location.city}, {job.location.country}
        </span>
        <span className="inline-flex items-center gap-1">
          <Briefcase size={14} className="text-gray-400" />
          {job.workType}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock size={14} className="text-gray-400" />
          {job.jobType}
        </span>
      </div>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {job?.tags?.slice(0, 2)?.map((t, i) => (
          <span className="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-600" key={i}>
            {t.name}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900">
          <Wallet size={15} className="text-gray-400" />${job.salary.minSalary}k&nbsp;&ndash;&nbsp;$
          {job.salary.maxSalary}k<span className="text-xs font-normal text-gray-400">/{job.salary.period}</span>
        </span>
        <ArrowUpRight size={18} className="shrink-0 text-gray-300 transition-colors group-hover:text-indigo-500" />
      </div>
    </Link>
  );
}
