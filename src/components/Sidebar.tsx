import {
  LayoutDashboard,
  Search,
  List,
  FileText,
  GitBranch,
  CheckSquare,
  Inbox,
  TrendingUp,
  BarChart2,
  ChevronLeft,
  Zap,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Search, label: "Find New" },
  { icon: List, label: "Lists" },
  { icon: FileText, label: "Templates" },
  { icon: GitBranch, label: "Sequences" },
  { icon: CheckSquare, label: "Tasks" },
  { icon: Inbox, label: "Inbox", badge: 24 },
  { icon: TrendingUp, label: "Deals" },
  { icon: BarChart2, label: "Analytics", hasArrow: true },
];

export function Sidebar() {
  return (
    <aside className="w-48 h-full bg-white border-r border-gray-100 flex flex-col flex-shrink-0">
      {/* Logo */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-gray-100">
        <div className="flex items-center gap-1.5">
          <Zap size={18} className="text-[#00C896]" fill="#00C896" />
          <span className="font-bold text-gray-900 text-base tracking-tight">crono</span>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <ChevronLeft size={16} />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-2 overflow-y-auto">
        {navItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </nav>

      {/* Upgrade widget */}
      <div className="mx-2 mb-3 rounded-lg bg-amber-50 border border-amber-200 px-3 py-2">
        <p className="text-xs text-amber-700 font-medium">Trial ends in 2 days</p>
        <button className="mt-1 w-full text-xs bg-amber-400 hover:bg-amber-500 text-white font-semibold rounded px-2 py-1 flex items-center justify-center gap-1 transition-colors">
          <Zap size={10} fill="white" />
          Upgrade plan
        </button>
      </div>

      {/* Profile */}
      <div className="border-t border-gray-100 px-3 py-3 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold text-gray-600 flex-shrink-0">
          WR
        </div>
        <div className="overflow-hidden">
          <p className="text-xs font-semibold text-gray-800 truncate">William Robertson</p>
          <p className="text-xs text-gray-400">Sales</p>
        </div>
      </div>
    </aside>
  );
}

function NavItem({
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
}) {
  return (
    <div
      className={`relative flex items-center gap-2.5 px-4 py-2 cursor-pointer text-sm transition-colors
        ${active
          ? "text-[#00C896] font-semibold bg-[#E6FAF5]"
          : "text-gray-500 hover:text-gray-800 hover:bg-gray-50"
        }`}
    >
      {active && (
        <span className="absolute left-0 top-0 bottom-0 w-0.5 rounded-r bg-[#00C896]" />
      )}
      <Icon size={16} />
      <span className="flex-1">{label}</span>
      {badge !== undefined && (
        <span className="bg-[#00C896] text-white text-[10px] font-bold rounded-full px-1.5 py-0.5 leading-none">
          {badge}
        </span>
      )}
      {hasArrow && <ChevronLeft size={12} className="rotate-180" />}
    </div>
  );
}
