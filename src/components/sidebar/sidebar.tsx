import cronoLogo from "../../assets/menu/crono.svg";
import arrowLeft from "../../assets/menu/arrow-left.svg";
import profileIcon from "../../assets/profile/profile.svg";
import trialBanner from "../../assets/menu/trial.png";
import {
  IconDashboard,
  IconFindNew,
  IconLists,
  IconTemplates,
  IconSequences,
  IconTasks,
  IconInbox,
  IconDeals,
  IconAnalytics,
} from "./icons";
import { NavItem } from "./nav-item";

const navItems = [
  { icon: IconDashboard, label: "Dashboard", active: true },
  { icon: IconFindNew, label: "Find New" },
  { icon: IconLists, label: "Lists" },
  { icon: IconTemplates, label: "Templates" },
  { icon: IconSequences, label: "Sequences" },
  { icon: IconTasks, label: "Tasks" },
  { icon: IconInbox, label: "Inbox", badge: 24 },
  { icon: IconDeals, label: "Deals" },
  { icon: IconAnalytics, label: "Analytics", hasArrow: true },
];

export const Sidebar = () => (
  <aside className="w-[192px] h-full bg-white border-r border-gray-100 flex flex-col flex-shrink-0">
    {/* Logo */}
    <div className="flex items-center justify-between px-4 py-4">
      <img src={cronoLogo} alt="crono" className="h-5" />
      <button>
        <img src={arrowLeft} alt="Collapse menu" className="w-6 h-6" />
      </button>
    </div>

    {/* Nav */}
    <nav className="flex-1 py-1 overflow-y-auto">
      {navItems.map((item) => (
        <NavItem key={item.label} {...item} />
      ))}
      <div className="px-3 mt-2">
        <img src={trialBanner} alt="Trial ends in 2 days" className="w-full rounded-lg" />
      </div>
    </nav>

    {/* Profile */}
    <div className="border-t border-gray-100 px-3 py-3 flex items-center gap-2.5">
      <img src={profileIcon} alt="Profile" className="w-8 h-8 rounded-full flex-shrink-0" />
      <div className="overflow-hidden">
        <p className="text-xs font-semibold text-gray-800 truncate leading-tight">William Robertson</p>
        <p className="text-[11px] text-gray-400 leading-tight">Sales</p>
      </div>
    </div>
  </aside>
);
