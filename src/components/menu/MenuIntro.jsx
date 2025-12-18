import React from "react";

export default function MenuIntro() {
  return (
    <section className="flex flex-col gap-3 rounded-2xl border border-main bg-surface p-4 shadow-soft">
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary">
          Menu Ideologist
        </p>
        <p className="text-2xl font-semibold text-primary">
          Ringkas, best seller, dan menu full.
        </p>
        <p className="text-sm text-secondary">
          Temukan pilihan kopi, mocktail, dan bites favorit kami.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-xs uppercase tracking-[0.1em] text-secondary">
          Cari Menu (opsional)
        </label>
        <input
          type="search"
          placeholder="Search menu..."
          className="w-full rounded-xl border border-main bg-soft px-3 py-2 text-primary placeholder:text-secondary focus:border-secondary focus:outline-none"
        />
      </div>
    </section>
  );
}
