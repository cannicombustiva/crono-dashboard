import infoIcon from "../../assets/performance/info-contacts-engaged.svg";

export interface KpiCardProps {
  label: string;
  current: number | string;
  total: number | string;
  icon?: string;
  valueColor: string;
  progressColor: string;
  progressPct: number;
  prefix?: string;
  showInfo?: boolean;
}

export const KpiCard = ({ label, current, total, icon, valueColor, progressColor, progressPct, prefix, showInfo }: KpiCardProps) => (
  <div className="rounded-lg border border-gray-100 px-3 py-2.5">
    <div className="flex items-center justify-between">
      <p className="text-[11px] text-gray-400 mb-1">{label}</p>
      {showInfo && <img src={infoIcon} alt="info" className="w-4 h-4 opacity-60" />}
    </div>
    <div className="flex items-center gap-1 mb-1.5">
      {icon && <img src={icon} alt="" className="w-4 h-4" />}
      <span className="text-sm font-bold" style={{ color: valueColor }}>{prefix}{current}</span>
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
