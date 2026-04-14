import { Pencil } from "lucide-react";
import { Card } from "../card";
import contactsIcon from "../../assets/performance/contacts-engaged.svg";
import companiesIcon from "../../assets/performance/companies-engaged.svg";
import activitiesIcon from "../../assets/performance/activities.svg";
import meetingsIcon from "../../assets/performance/meetings.svg";
import dealsIcon from "../../assets/performance/deals.svg";
import { KpiCard } from "./kpi-card";

const kpiData = [
  {
    label: "Contacts engaged",
    current: 0,
    total: 500,
    icon: contactsIcon,
    valueColor: "#3B85E8",
    progressColor: "#3B85E8",
    progressPct: 0,
    showInfo: true,
  },
  {
    label: "Companies engaged",
    current: 0,
    total: 500,
    icon: companiesIcon,
    valueColor: "#3B58DB",
    progressColor: "#3B58DB",
    progressPct: 0,
  },
  {
    label: "Activities",
    current: 1000,
    total: 2000,
    icon: activitiesIcon,
    valueColor: "#995AFF",
    progressColor: "#995AFF",
    progressPct: 50,
  },
  {
    label: "Meetings",
    current: 20,
    total: 30,
    icon: meetingsIcon,
    valueColor: "#E2AD13",
    progressColor: "#E2AD13",
    progressPct: 67,
  },
  {
    label: "Deals",
    current: 100,
    total: 200,
    icon: dealsIcon,
    valueColor: "#F376D8",
    progressColor: "#F376D8",
    progressPct: 50,
  },
  {
    label: "Pipeline",
    current: "50K",
    total: "100K",
    valueColor: "#07C8C0",
    progressColor: "#07C8C0",
    progressPct: 50,
    prefix: "€",
  },
];

export const PerformancePanel = () => (
  <Card className="px-4 py-4 h-full flex flex-col">
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-sm font-semibold text-gray-800">May's performance</h2>
      <button className="flex items-center gap-1 text-xs text-[#07C8C0] font-medium hover:underline">
        Edit KPIs <Pencil size={11} />
      </button>
    </div>
    <div className="grid grid-cols-2 gap-2">
      {kpiData.map((kpi) => (
        <KpiCard key={kpi.label} {...kpi} />
      ))}
    </div>
  </Card>
);
