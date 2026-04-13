import { Pencil, Users, Building2, CheckSquare, Calendar, TrendingUp, Euro } from "lucide-react";

interface KpiCardProps {
  label: string;
  current: number | string;
  total: number | string;
  icon: React.ReactNode;
  progressColor: string;
  progressPct: number;
}

function KpiCard({ label, current, total, icon, progressColor, progressPct }: KpiCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-100 px-4 py-3">
      <p className="text-xs text-gray-400 mb-1.5">{label}</p>
      <div className="flex items-center gap-1 mb-2">
        <span className="text-gray-400">{icon}</span>
        <span className="text-sm font-bold text-gray-800">{current}</span>
        <span className="text-xs text-gray-400">/{total}</span>
      </div>
      <div className="h-1 rounded-full bg-gray-100 overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${progressPct}%`, backgroundColor: progressColor }}
        />
      </div>
    </div>
  );
}

const kpiData = [
  {
    label: "Contacts engaged",
    current: 0,
    total: 500,
    icon: <Users size={12} />,
    progressColor: "#00C896",
    progressPct: 0,
  },
  {
    label: "Companies engaged",
    current: 0,
    total: 500,
    icon: <Building2 size={12} />,
    progressColor: "#3B82F6",
    progressPct: 0,
  },
  {
    label: "Activities",
    current: 1000,
    total: 2000,
    icon: <CheckSquare size={12} />,
    progressColor: "#00C896",
    progressPct: 50,
  },
  {
    label: "Meetings",
    current: 20,
    total: 30,
    icon: <Calendar size={12} />,
    progressColor: "#F59E0B",
    progressPct: 67,
  },
  {
    label: "Deals",
    current: 100,
    total: 200,
    icon: <TrendingUp size={12} />,
    progressColor: "#00C896",
    progressPct: 50,
  },
  {
    label: "Pipeline",
    current: "€50K",
    total: "100K",
    icon: <Euro size={12} />,
    progressColor: "#00C896",
    progressPct: 50,
  },
];

export function PerformancePanel() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-gray-800">May's performance</h2>
        <button className="flex items-center gap-1 text-xs text-[#00C896] font-medium hover:underline">
          Edit KPIs <Pencil size={11} />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {kpiData.map((kpi) => (
          <KpiCard key={kpi.label} {...kpi} />
        ))}
      </div>
    </div>
  );
}
