import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpenCheck,
  CalendarClock,
  MapPin,
  ShoppingBag,
} from "lucide-react";

export default function CardNavigation({
  icon: Icon = CalendarClock,
  title,
  subtitle,
  className = "",
  to = "/",
}) {
  const navigate = useNavigate();

  const iconMap = {
    "booking meja": CalendarClock,
    "lihat menu": BookOpenCheck,
    menu: BookOpenCheck,
    "lokasi & rute": MapPin,
    lokasi: MapPin,
    "order online": ShoppingBag,
    order: ShoppingBag,
  };

  const normalizedTitle = (title || "").toLowerCase();
  const AutoIcon = iconMap[normalizedTitle] || Icon || CalendarClock;

  const handleClick = () => {
    if (to) navigate(to);
  };

  return (
    <article
      className={`card-nav flex w-full max-w-lg cursor-pointer flex-col gap-4 rounded-2xl border border-main bg-surface px-4 py-4 text-primary shadow-soft transition duration-150 active:bg-soft md:px-8 md:py-7 ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-soft text-brand">
        <AutoIcon size={22} strokeWidth={2.4} />
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
