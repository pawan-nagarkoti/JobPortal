import { useNavigate } from "react-router-dom";
import { MapPin, Users, Globe, ArrowUpRight } from "lucide-react";

export default function CompanyCard({ company }) {
  const navigate = useNavigate();

  if (!company) return "loading...";

  return (
    <div
      onClick={() => navigate(`/employer-detail/${company._id}`)}
      className="group relative w-full cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Banner */}
      <div className="relative h-28 w-full  bg-linear-to-br from-slate-100 to-slate-200">
        <img
          src={company.banner || "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=200&fit=crop"}
          alt=""
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Logo overlapping the banner */}
        <div className="absolute -bottom-6 left-5 h-16 w-16 overflow-hidden rounded-full border-4 border-white bg-white shadow-md">
          <img
            src={company.logo || "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop"}
            alt="Company logo"
            className="h-full w-full object-contain p-1"
          />
        </div>
      </div>

      {/* Body */}
      <div className="px-5 pb-5 pt-9">
        <div className="flex items-start justify-between gap-2">
          <h3 className="truncate text-base font-semibold text-gray-900">{company.name}</h3>
          <ArrowUpRight
            size={18}
            className="mt-0.5 shrink-0 text-gray-300 transition-colors group-hover:text-indigo-500"
          />
        </div>

        <p className="mt-0.5 text-sm font-medium text-indigo-500">{company.organization}</p>

        <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-gray-500 h-[50px]">{company.shortDescription}</p>

        {/* Meta row */}
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
          <span className="inline-flex items-center gap-1">
            <MapPin size={14} className="text-gray-400" />
            Bengaluru, {company.country}
          </span>
          <span className="inline-flex items-center gap-1">
            <Users size={14} className="text-gray-400" />
            {company.teamSize}
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
            Twitter
          </a>
          <a
            href="#"
            onClick={(e) => e.stopPropagation()}
            className="truncate text-xs font-medium text-gray-500 hover:text-indigo-500"
          >
            Website
          </a>
        </div>
      </div>
    </div>
  );
}
