import { Sidebar } from "./components/sidebar";
import { WelcomeCard } from "./components/welcome";
import { RepliesCard } from "./components/replies";
import { TodaysTasks } from "./components/todays-tasks";
import { SignalsList } from "./components/signals";
import { PerformancePanel } from "./components/performance";
import { OnboardingPanel } from "./components/onboarding";

const App = () => (
  <div className="flex h-screen w-screen overflow-hidden bg-[#F4F5F7] font-sans">
    <Sidebar />
    <main className="flex-1 overflow-y-auto py-4 px-4 min-w-0">
      <div className="max-w-[1216px] mx-auto flex flex-col gap-2">
        {/* Top section: Welcome+Replies+Tasks | Performance */}
        <div className="flex gap-2">
          <div className="flex-1 min-w-0 flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="flex-1">
                <WelcomeCard />
              </div>
              <div className="flex-1">
                <RepliesCard />
              </div>
            </div>
            <TodaysTasks />
          </div>
          <div className="w-[408px] flex-shrink-0">
            <PerformancePanel />
          </div>
        </div>

        {/* Bottom section: Signals | Onboarding */}
        <div className="grid gap-2" style={{ gridTemplateColumns: '1fr 408px' }}>
          <div className="relative min-w-0">
            <div className="absolute inset-0">
              <SignalsList />
            </div>
          </div>
          <div>
            <OnboardingPanel />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default App;
