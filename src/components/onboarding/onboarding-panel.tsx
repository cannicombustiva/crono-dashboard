import { Card } from "../card";
import integrationsIcon from "../../assets/onboarding/integrations.svg";
import addContactIcon from "../../assets/onboarding/add-new-contact.svg";
import createSequenceIcon from "../../assets/onboarding/create-your-first-sequence.svg";
import addToSequenceIcon from "../../assets/onboarding/add-contacts-to-sequence.svg";
import runTaskIcon from "../../assets/onboarding/run-your-first-task.svg";

const steps = [
  { label: "Integrations Setup", time: "5 min", icon: integrationsIcon },
  { label: "Add new Contact", time: "5 min", icon: addContactIcon },
  { label: "Create your first sequence", time: "10 min", icon: createSequenceIcon },
  { label: "Add contacts to sequence", time: "5 min", icon: addToSequenceIcon },
  { label: "Run your first task", time: "10 min", icon: runTaskIcon },
];

export const OnboardingPanel = () => (
  <Card className="px-5 py-4">
    <h2 className="text-sm font-semibold text-gray-800 mb-3">Onboarding</h2>
    <div className="flex flex-col">
      {steps.map((step, i) => {
        return (
          <div key={step.label}>
            <div className="flex items-center justify-between py-2.5 cursor-pointer group">
              <div className="flex items-center gap-3">
                <img src={step.icon} alt={step.label} className="w-9 h-9 flex-shrink-0" />
                <span className="text-sm text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                  {step.label}
                </span>
              </div>
              <span className="text-xs text-gray-400 flex-shrink-0">{step.time}</span>
            </div>
            {i < steps.length - 1 && <div className="h-px bg-gray-100" />}
          </div>
        );
      })}
    </div>
  </Card>
);
