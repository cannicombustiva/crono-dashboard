import { ChevronDown } from "lucide-react";

export const NavItem = ({
  icon: Icon,
  label,
  active,
  badge,
  hasArrow,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  badge?: number;
  hasArrow?: boolean;
}) => (
  <div
    className={`relative flex items-center gap-2.5 px-4 py-2 cursor-pointer text-sm transition-colors
      ${active
        ? "text-[#00C896] font-semibold"
        : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
      }`}
  >
    {active && (
      <span className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r bg-[#00C896]" />
    )}
    <Icon />
    <span className="flex-1">{label}</span>
    {badge !== undefined && (
      <span className="bg-yellow-500 text-white text-[10px] font-bold rounded-full min-w-[20px] h-[18px] flex items-center justify-center leading-none">
        {badge}
      </span>
    )}
    {hasArrow && <ChevronDown size={14} className="text-gray-400" />}
  </div>
);
