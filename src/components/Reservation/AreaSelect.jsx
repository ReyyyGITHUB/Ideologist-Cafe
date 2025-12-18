import React, { useState } from "react";
import { MapPin } from "lucide-react";

export default function AreaSelect({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-secondary" htmlFor="area">
        Pilih Area
      </label>
      <div
        className={`flex items-center gap-3 rounded-xl border px-3 py-2 transition ${
          isOpen ? "border-secondary ring-2 ring-secondary/30" : "border-main"
        } bg-soft`}
      >
        <MapPin size={18} className="text-secondary" />
        <select
          id="area"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          className="w-full appearance-none bg-transparent text-primary focus:outline-none"
        >
          <option value="indoor" className="bg-[#151515] text-white">
            Indoor
          </option>
          <option value="lake-view" className="bg-[#151515] text-white">
            Lake View
          </option>
          <option value="vip-room" className="bg-[#151515] text-white">
            VIP Room
          </option>
        </select>
      </div>
    </div>
  );
}
