import React from "react";
import { Minus, Plus } from "lucide-react";

export default function GuestCounter({ value, onChange }) {
  const handleChange = (delta) => {
    const next = Math.max(1, value + delta);
    onChange?.(next);
  };

  return (
    <div className="flex items-center gap-3 rounded-xl border border-main bg-surface px-3 py-2">
      <button
        type="button"
        onClick={() => handleChange(-1)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-main bg-white/5 text-primary transition hover:border-secondary hover:text-secondary active:bg-soft"
        aria-label="Kurangi jumlah orang"
      >
        <Minus size={18} />
      </button>
      <p className="min-w-[3ch] text-center text-lg font-semibold text-primary">
        {value}
      </p>
      <button
        type="button"
        onClick={() => handleChange(1)}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-main bg-white/5 text-primary transition hover:border-secondary hover:text-secondary active:bg-soft"
        aria-label="Tambah jumlah orang"
      >
        <Plus size={18} />
      </button>
    </div>
  );
}
