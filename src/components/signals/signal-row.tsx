import { useState, useRef, useEffect, useCallback } from "react";
import { type Signal } from "../../data/mock-data";
import avatar2 from "../../assets/avatar-2.png";
import completeIcon from "../../assets/icons/complete.svg";
import deleteIcon from "../../assets/icons/delete.svg";

export const SignalRow = ({
  signal,
  onComplete,
  onDelete,
}: {
  signal: Signal;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, handleClickOutside]);

  const isWebView = signal.tag === "Website view";

  return (
    <div className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0">
      <div className="relative flex-shrink-0">
        <img
          src={avatar2}
          alt={signal.contact}
          className="w-8 h-8 rounded-full object-cover"
        />
        {signal.unread && (
          <span className="absolute -top-0.5 -left-0.5 w-3 h-3 bg-yellow-500 border-2 border-white rounded-full" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-[#232F3F]">{signal.contact}</span>{" "}
          {isWebView ? (
            <>
              viewed{" "}
              <span className="text-[#00C896] font-medium underline">{signal.highlight}</span>{" "}
              of your website for 65 sec
            </>
          ) : (
            <>{signal.description}</>
          )}
        </p>
        <div className="flex items-center gap-2 mt-0.5">
          <span className={`text-xs font-medium ${signal.tagColor}`}>{signal.tag}</span>
          {signal.subTag && (
            <span className="text-[11px] font-medium text-[#00C896] bg-[#E6FAF5] rounded-full px-2 py-0.5">{signal.subTag}</span>
          )}
        </div>
      </div>

      <span className="text-xs text-gray-400 flex-shrink-0 whitespace-nowrap">{signal.date}</span>

      <div className="relative flex-shrink-0" ref={ref}>
        <button
          onClick={() => setOpen((v) => !v)}
          className="bg-[#07C8C0] hover:bg-[#0A9B94] text-white text-xs font-semibold px-5 py-1.5 rounded-full transition-colors"
        >
          Action
        </button>

        {open && (
          <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-xl shadow-lg border border-gray-100 z-50 p-1.5 flex flex-col gap-0.5">
            <button
              onClick={() => {
                onComplete(signal.id);
                setOpen(false);
              }}
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-[#0A9B94] hover:bg-[#E6F7F6] rounded-lg transition-colors"
            >
              <span>Complete</span>
              <img src={completeIcon} alt="" className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                onDelete(signal.id);
                setOpen(false);
              }}
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <span>Delete</span>
              <img src={deleteIcon} alt="" className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
