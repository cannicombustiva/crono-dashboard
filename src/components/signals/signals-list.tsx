import { useCallback, useMemo, useState } from "react";
import { signals as initialSignals, type Signal } from "../../data/mock-data";
import { SignalRow } from "./signal-row";
import { Card } from "../card";

export const SignalsList = () => {
  const [signals, setSignals] = useState<Signal[]>(initialSignals);

  const unreadCount = useMemo(() => signals.filter((s) => s.unread).length, [signals]);

  const handleComplete = useCallback((id: number) => {
    setSignals((prev) =>
      prev.map((s) => (s.id === id ? { ...s, unread: false } : s))
    );
  }, []);

  const handleDelete = useCallback((id: number) => {
    setSignals((prev) => prev.filter((s) => s.id !== id));
  }, []);

  return (
    <Card className="px-5 py-4 h-full flex flex-col">
      <div className="flex items-center gap-2 mb-1">
        <h2 className="text-sm font-semibold text-[#232F3F]">Signals</h2>
        {unreadCount > 0 && (
          <span className="bg-yellow-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center leading-none">
            {unreadCount}
          </span>
        )}
      </div>
      <p className="text-xs text-gray-400 mb-2">
        Never miss a single opportunity: check out your top signals from your 1st-degree LinkedIn connections.
      </p>

      {signals.length === 0 ? (
        <p className="text-sm text-gray-400 text-center py-6">No signals left.</p>
      ) : (
        <div className="flex-1 overflow-y-auto min-h-0 custom-scrollbar">
          {signals.map((signal) => (
            <SignalRow
              key={signal.id}
              signal={signal}
              onComplete={handleComplete}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </Card>
  );
};
