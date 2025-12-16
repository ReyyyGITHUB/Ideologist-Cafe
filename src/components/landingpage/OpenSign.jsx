import React from "react";
import { Clock3 } from "lucide-react";

export default function OpenSign({ closeTime = "22:00", isOpen = true }) {
  const statusText = isOpen ? "OPEN NOW" : "CLOSED";

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
              isOpen ? "bg-emerald-400" : "bg-red-400"
            }`}
            aria-hidden
          />
          <p className="text-sm font-semibold tracking-tight text-primary uppercase">
            {statusText}
          </p>
        </div>

        <p className="text-sm text-secondary">
          {isOpen ? (
            <>
              Close{" "}
              <span className="font-medium text-primary">{closeTime}</span>
            </>
          ) : (
            <>
              Opens at{" "}
              <span className="font-medium text-primary">{closeTime}</span>
            </>
          )}
        </p>
      </div>
    </section>
  );
}
