import { ChevronRight } from "lucide-react";

const avatars = [
  { initials: "RS", bg: "bg-red-400" },
  { initials: "JD", bg: "bg-purple-400" },
  { initials: "ML", bg: "bg-blue-400" },
  { initials: "M", bg: "bg-gray-700" },
];

export function RepliesCard() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 h-full flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-700">Replies</span>
        <button className="text-xs text-[#00C896] font-medium flex items-center gap-0.5 hover:underline">
          Open inbox <ChevronRight size={12} />
        </button>
      </div>
      <div className="flex items-center gap-4 mt-3">
        <span className="text-3xl font-bold text-gray-900">24</span>
        <div className="flex -space-x-2">
          {avatars.map((a, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-full ${a.bg} flex items-center justify-center text-white text-xs font-bold border-2 border-white`}
            >
              {a.initials}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
