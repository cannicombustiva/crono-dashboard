import { ChevronRight, AlertTriangle } from "lucide-react";
import { taskStats } from "../../data/mock-data";
import { Card } from "../card";

export const TodaysTasks = () => (
  <Card className="px-5 py-4">
    <h2 className="text-sm font-semibold text-gray-700 mb-3">Today's tasks</h2>
    <div className="flex gap-2">
      {taskStats.map((stat, i) => (
        <div key={stat.label} className="flex flex-1 gap-2">
          <div
            className={`relative rounded-xl ${stat.bgColor} px-4 py-3 flex-1 flex items-end justify-between cursor-pointer group hover:opacity-90 transition-opacity`}
          >
            {stat.hasError && (
              <div className="absolute top-2 right-2 flex items-center gap-1 bg-white text-red-500 text-[10px] font-medium rounded-full px-1.5 py-0.5 leading-none">
                <span>1 error</span>
                <AlertTriangle size={10} />
              </div>
            )}
            <div>
              <span
                className={`text-2xl font-medium ${stat.color}`}
                style={{ fontFamily: "Poppins, sans-serif", lineHeight: "30px" }}
              >
                {stat.value}
              </span>
              <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
            </div>
            {stat.label !== "Completed" && (
              <ChevronRight
                size={14}
                className="text-gray-300 group-hover:text-gray-400 transition-colors mb-0.5"
              />
            )}
          </div>
          {i < taskStats.length - 1 && (
            <div className="w-px bg-gray-200 self-stretch" />
          )}
        </div>
      ))}
    </div>
  </Card>
);
