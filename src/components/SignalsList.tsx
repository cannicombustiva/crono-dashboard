import { useState, useRef, useEffect } from "react";
import { Check, Trash2 } from "lucide-react";
import { signals as initialSignals, type Signal } from "../data/mockData";

function SignalRow({
  signal,
  onComplete,
  onDelete,
}: {
  signal: Signal;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const isWebView = signal.tag === "Website view";

  return (
    <div className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">
      {/* Avatar */}
      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 flex-shrink-0">
        {signal.contact[0]}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-800">
          <span className="font-semibold">{signal.contact}</span>{" "}
          {isWebView ? (
            <>
              viewed{" "}
              <span className="text-[#00C896] font-medium">{signal.highlight}</span>{" "}
              of your website for 65 sec
            </>
          ) : (
            <>{signal.description}</>
          )}
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className={`text-xs font-medium ${signal.tagColor}`}>{signal.tag}</span>
          {signal.subTag && (
            <span className={`text-xs ${signal.subTagColor}`}>{signal.subTag}</span>
          )}
        </div>
      </div>

      {/* Date */}
      <span className="text-xs text-gray-400 flex-shrink-0">{signal.date}</span>

      {/* Action button with tooltip */}
      <div className="relative flex-shrink-0" ref={ref}>
        <button
          onClick={() => setOpen((v) => !v)}
          className="bg-[#00C896] hover:bg-[#00A87E] text-white text-xs font-semibold px-4 py-1.5 rounded-full transition-colors"
        >
          Action
        </button>

        {open && (
          <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-lg shadow-lg border border-gray-100 z-50 overflow-hidden">
            <button
              onClick={() => {
                onComplete(signal.id);
                setOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-[#00C896]">Complete</span>
              <Check size={16} className="text-[#00C896]" />
            </button>
            <div className="h-px bg-gray-100" />
            <button
              onClick={() => {
                onDelete(signal.id);
                setOpen(false);
              }}
              className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span>Delete</span>
              <Trash2 size={16} className="text-gray-400" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function SignalsList() {
  const [signals, setSignals] = useState<Signal[]>(initialSignals);

  const unreadCount = signals.filter((s) => s.unread).length;

  const handleComplete = (id: number) => {
    setSignals((prev) =>
      prev.map((s) => (s.id === id ? { ...s, unread: false } : s))
    );
  };

  const handleDelete = (id: number) => {
    setSignals((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-1">
        <h2 className="text-sm font-semibold text-gray-800">Signals</h2>
        {unreadCount > 0 && (
          <span className="bg-[#00C896] text-white text-[10px] font-bold rounded-full px-1.5 py-0.5 leading-none min-w-[18px] text-center">
            {unreadCount}
          </span>
        )}
      </div>
      <p className="text-xs text-gray-400 mb-3">
        Never miss a single opportunity: check out your top signals from your 1st-degree LinkedIn connections.
      </p>

      {/* Rows */}
      {signals.length === 0 ? (
        <p className="text-sm text-gray-400 text-center py-6">No signals left.</p>
      ) : (
        signals.map((signal) => (
          <SignalRow
            key={signal.id}
            signal={signal}
            onComplete={handleComplete}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
}
