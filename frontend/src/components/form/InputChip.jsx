import { useEffect, useState } from "react";
import { X, Tag } from "lucide-react";

export default function InputChip(
  { label = "", placeholderName = "", getValues },
  ref,
) {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);

  const handleKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === ",") && input.trim()) {
      e.preventDefault();
      const value = input.trim();

      if (!tags.includes(value)) {
        setTags([...tags, value]);
      }

      setInput("");
    }

    if (e.key === "Backspace" && !input && tags.length) {
      setTags(tags.slice(0, -1));
    }
  };

  const removeTag = (tag) => {
    setTags(tags.filter((item) => item !== tag));
  };

  useEffect(() => {
    getValues(tags);
  }, [tags]);

  return (
    <div className="w-full max-w-xl space-y-2">
      <label className="text-sm font-medium text-slate-700">{label}</label>

      <div className="flex min-h-14 w-full flex-wrap items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-3 shadow-sm transition-all duration-200 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100">
        {tags.map((tag) => (
          <div
            key={tag}
            className="group inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 transition hover:bg-blue-100"
          >
            <Tag className="h-3.5 w-3.5 text-blue-500" />
            <span>{tag}</span>

            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="rounded-full p-0.5 text-blue-500 transition hover:bg-blue-200 hover:text-blue-700"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={tags.length ? "Add more..." : placeholderName}
          className="min-w-[140px] flex-1 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
        />
      </div>
    </div>
  );
}
