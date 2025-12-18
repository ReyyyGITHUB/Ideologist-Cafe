import React from "react";

export default function NameField({ value, onChange }) {
  return (
    <div className="flex w-full flex-col gap-1">
      <label className="text-sm text-secondary" htmlFor="fullName">
        Nama Lengkap
      </label>
      <input
        id="fullName"
        type="text"
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Masukkan nama lengkap"
        className="w-full rounded-xl border border-main bg-soft px-3 py-3 text-primary placeholder:text-secondary focus:border-secondary focus:outline-none"
      />
    </div>
  );
}
