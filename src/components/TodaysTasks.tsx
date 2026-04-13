import { ChevronRight, AlertTriangle } from "lucide-react";
import { taskStats } from "../data/mockData";

const bgColors: Record<string, string> = {
  "text-red-500": "bg-red-50",
  "text-yellow-500": "bg-yellow-50",
  "text-blue-500": "bg-blue-50",
  "text-green-500": "bg-green-50",
};

export function TodaysTasks() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4">
      <h2 className="text-sm font-semibold text-gray-700 mb-3">Today's tasks</h2>
      <div className="grid grid-cols-4 gap-3">
        {taskStats.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-lg ${bgColors[stat.color]} px-4 py-3 flex items-center justify-between cursor-pointer group hover:opacity-90 transition-opacity`}
          >
            <div>
              <div className="flex items-center gap-1">
                <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                {stat.hasError && (
                  <span className="flex items-center gap-0.5 text-[10px] text-red-500 font-medium">
                    <AlertTriangle size={10} /> 1 error
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
            </div>
            <ChevronRight size={14} className="text-gray-300 group-hover:text-gray-400 transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
}
