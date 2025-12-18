import React from "react";

export default function StatusHeader({ openNow, subtitle }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide ${
          openNow
            ? "bg-emerald-500/20 text-emerald-200"
            : "bg-border-main text-secondary"
        }`}
      >
        <span
          className={`inline-block h-2 w-2 rounded-full ${
            openNow ? "bg-emerald-400" : "bg-secondary/70"
          }`}
        />
        {openNow ? "Open Now" : "Closed"}
      </div>

      {subtitle ? <p className="text-sm text-secondary">{subtitle}</p> : null}
    </div>
  );
}
