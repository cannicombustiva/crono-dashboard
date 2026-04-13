import { Puzzle, UserPlus, Target, Users, PlayCircle } from "lucide-react";

const steps = [
  { label: "Integrations Setup", time: "5 min", icon: Puzzle, color: "bg-blue-100 text-blue-600" },
  { label: "Add new Contact", time: "5 min", icon: UserPlus, color: "bg-green-100 text-green-600" },
  { label: "Create your first sequence", time: "10 min", icon: Target, color: "bg-purple-100 text-purple-600" },
  { label: "Add contacts to sequence", time: "5 min", icon: Users, color: "bg-orange-100 text-orange-600" },
  { label: "Run your first task", time: "10 min", icon: PlayCircle, color: "bg-pink-100 text-pink-600" },
];

export function OnboardingPanel() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4">
      <h2 className="text-sm font-semibold text-gray-800 mb-3">Onboarding</h2>
      <div className="flex flex-col gap-0">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={step.label}>
              <div className="flex items-center justify-between py-2.5 cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg ${step.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={16} />
                  </div>
                  <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                    {step.label}
                  </span>
                </div>
                <span className="text-xs text-gray-400 flex-shrink-0">{step.time}</span>
              </div>
              {i < steps.length - 1 && <div className="h-px bg-gray-50" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
