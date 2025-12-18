import React from "react";
import { CalendarClock } from "lucide-react";

export default function DateTimeFields({ date, time, onDateChange, onTimeChange }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div className="flex flex-col gap-2">
        <label className="text-sm text-secondary" htmlFor="date">
          Tanggal
        </label>
        <div className="flex items-center gap-3 rounded-xl border border-main bg-soft px-3 py-2">
          <CalendarClock size={18} className="text-secondary" />
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => onDateChange(e.target.value)}
            className="w-full bg-transparent text-primary focus:outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-secondary" htmlFor="time">
          Jam
        </label>
        <div className="flex items-center gap-3 rounded-xl border border-main bg-soft px-3 py-2">
          <CalendarClock size={18} className="text-secondary" />
          <input
            id="time"
            type="time"
            value={time}
            onChange={(e) => onTimeChange(e.target.value)}
            className="w-full bg-transparent text-primary focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
