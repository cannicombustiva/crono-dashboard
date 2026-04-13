import { Sidebar } from "./components/Sidebar";
import { WelcomeCard } from "./components/WelcomeCard";
import { RepliesCard } from "./components/RepliesCard";
import { TodaysTasks } from "./components/TodaysTasks";
import { SignalsList } from "./components/SignalsList";
import { PerformancePanel } from "./components/PerformancePanel";
import { OnboardingPanel } from "./components/OnboardingPanel";

function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#F4F5F7] font-sans">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-4 min-w-0">
        <div className="max-w-[1248px] mx-auto flex flex-col gap-3">
          {/* Row 1: Welcome + Replies + Performance */}
          <div className="flex gap-3">
            <div className="flex gap-3 flex-1 min-w-0">
              <div className="flex-1">
                <WelcomeCard />
              </div>
              <div className="w-[380px] flex-shrink-0">
                <RepliesCard />
              </div>
            </div>
            <div className="w-[408px] flex-shrink-0">
              <PerformancePanel />
            </div>
          </div>

          {/* Row 2: Today's tasks */}
          <div className="flex gap-3">
            <div className="flex-1 min-w-0">
              <TodaysTasks />
            </div>
            <div className="w-[408px] flex-shrink-0" />
          </div>

          {/* Row 3: Signals + Onboarding */}
          <div className="flex gap-3">
            <div className="flex-1 min-w-0">
              <SignalsList />
            </div>
            <div className="w-[408px] flex-shrink-0">
              <OnboardingPanel />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
