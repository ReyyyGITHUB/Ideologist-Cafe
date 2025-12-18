import React, { useMemo } from "react";
import { Clock3 } from "lucide-react";

function getScheduleForToday(now = new Date()) {
  const day = now.getDay(); // 0 Sunday, 1 Monday, ...
  const isWeekend = day === 0 || day === 5 || day === 6; // Fri-Sun

  if (isWeekend) {
    return { open: "08:00", close: "24:00", label: "Weekend" };
  }

  return { open: "09:00", close: "23:00", label: "Weekdays" };
}

function isWithinSchedule(now, openStr, closeStr) {
  const [openH, openM] = openStr.split(":").map(Number);
  const [closeH, closeM] = closeStr.split(":").map(Number);

  const openMinutes = openH * 60 + openM;
  const closeMinutes = closeH * 60 + closeM;

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
}

export default function OpenSign() {
  const now = useMemo(() => new Date(), []);
  const { open, close, label } = useMemo(() => getScheduleForToday(now), [now]);

  const openStatus = isWithinSchedule(now, open, close);
  const statusText = openStatus ? "OPEN NOW" : "CLOSED";

  return (
    <section
      className="flex w-full max-w-xl items-center gap-3 rounded-full border border-emerald-400/80 bg-white/5 px-5 py-2 text-primary shadow-soft backdrop-blur-sm transition hover:border-emerald-300"
      role="status"
      aria-live="polite"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
        <Clock3 size={22} strokeWidth={2.4} />
      </div>

      <div className="flex flex-1 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex h-2.5 w-2.5 rounded-full ${
              openStatus ? "bg-emerald-400" : "bg-red-400"
            }`}
            aria-hidden
          />
          <p className="text-sm font-semibold tracking-tight text-primary uppercase">
            {statusText}
          </p>
        </div>

        <div className="text-right text-sm text-secondary">
          <p className="font-semibold text-primary">{label}</p>
          {openStatus ? (
            <p>
              Tutup <span className="font-medium text-primary">{close}</span>
            </p>
          ) : (
            <p>
              Buka <span className="font-medium text-primary">{open}</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
