import React from "react";

export default function HoursRow({ day, note, time }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-main bg-soft px-4 py-3">
      <div className="flex flex-col">
        <p className="text-sm font-semibold text-primary">{day}</p>
        <p className="text-xs text-secondary">{note}</p>
      </div>
      <p className="text-sm font-semibold text-emerald-200">{time}</p>
    </div>
  );
}
