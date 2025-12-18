import React from "react";

export default function FilterChips({ categories = [], active }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((item) => {
        const isActive = item.id === active;
        return (
          <button
            key={item.id}
            type="button"
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              isActive
                ? "bg-emerald-500 text-black shadow-soft"
                : "border border-main bg-soft text-primary hover:border-secondary"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
