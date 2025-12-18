import React from "react";
import { Plus } from "lucide-react";

const badgeStyles = {
  signature: "bg-emerald-500 text-black",
  special: "bg-amber-400 text-black",
  top: "bg-slate-900 text-emerald-200",
};

export default function MenuCard({
  image,
  title,
  price,
  description,
  badge,
  badgeType = "signature",
}) {
  const badgeClass = badge
    ? badgeStyles[badgeType] || badgeStyles.signature
    : "";
  const truncatedDescription =
    description && description.length > 50
      ? `${description.slice(0, 50)}...`
      : description;

  return (
    <article className="relative overflow-hidden rounded-2xl border border-main bg-surface shadow-soft">
      <div className="relative h-48 w-full">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        {badge ? (
          <span
            className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${badgeClass}`}
          >
            {badge}
          </span>
        ) : null}
      </div>

      <div className="flex flex-col gap-2 p-4">
        <p className="text-lg font-semibold text-primary">{title}</p>
        {description ? (
          <p className="text-xs leading-relaxed text-secondary">
            {truncatedDescription}
          </p>
        ) : null}
        <div className="mt-1 flex items-center justify-between">
          <p className="text-sm font-semibold text-emerald-300">{price}</p>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-main bg-soft text-primary transition hover:border-secondary hover:text-secondary"
            aria-label="Add item"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}
