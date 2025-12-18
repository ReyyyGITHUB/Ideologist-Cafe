import React from "react";

export default function PopularCategories({ categories = [], active = "coffee" }) {
  return (
    <section className="flex flex-col gap-3 rounded-2xl border border-main bg-surface p-4 shadow-soft">
      <div className="flex flex-wrap gap-2 overflow-x-auto">
        {categories.map((cat) => {
          const isActive = cat.id === active;
          return (
            <button
              key={cat.id}
              type="button"
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "bg-emerald-500 text-black shadow-soft"
                  : "border border-main bg-soft text-primary hover:border-secondary"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold text-primary">{categories.find((c) => c.id === active)?.label || "Coffee"}</p>
        <div className="flex flex-col gap-1">
          {categories
            .find((c) => c.id === active)
            ?.items?.slice(0, 5)
            .map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-lg bg-soft px-3 py-2">
                <span className="text-sm text-primary">{item.name}</span>
                <span className="text-sm font-semibold text-emerald-300">
                  {item.price}
                </span>
              </div>
            ))}
        </div>
      </div>

      <div className="flex justify-end">
        <a
          href="/assets/menu.pdf"
          className="text-sm font-semibold text-emerald-300 hover:text-emerald-200"
        >
          Lihat semua di PDF →
        </a>
      </div>
    </section>
  );
}
