import React from "react";
import { CalendarClock } from "lucide-react";

export default function CardNavigation({
  icon: Icon = CalendarClock,
  title,
  subtitle,
  className = "",
}) {
  const ResolvedIcon = Icon || CalendarClock;

  return (
    <article
      className={`card-nav flex w-full max-w-lg cursor-pointer flex-col gap-4 rounded-2xl border border-main bg-surface px-4 py-4 text-primary shadow-soft transition duration-150 active:bg-soft md:px-8 md:py-7 ${className}`}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-soft text-brand">
        <ResolvedIcon size={22} strokeWidth={2.4} />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xl font-semibold text-primary md:text-2xl">
          {title}
        </p>
        <p className="text-sm leading-relaxed text-secondary md:text-base">
          {subtitle}
        </p>
      </div>
    </article>
  );
}
