import React from "react";

export default function FeatureChips({ items = [] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map(({ icon: Icon, label }) => (
        <span
          key={label}
          className="inline-flex items-center gap-2 rounded-xl border border-main bg-soft px-3 py-2 text-sm text-primary"
        >
          {Icon ? <Icon size={16} className="text-emerald-300" /> : null}
          <span>{label}</span>
        </span>
      ))}
    </div>
  );
}
