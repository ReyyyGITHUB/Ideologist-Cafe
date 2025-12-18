import React from "react";
import { MapPin } from "lucide-react";

export default function LocationCard({ address }) {
  return (
    <div className="rounded-2xl border border-main bg-soft p-4">
      <div className="flex items-center gap-2 text-emerald-300">
        <MapPin size={18} />
        <p className="font-semibold">Location</p>
      </div>

      <div className="mt-3 space-y-1">
        <p className="text-xs uppercase text-secondary">Address</p>
        <p className="text-sm font-semibold text-primary">{address}</p>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-secondary">
        <span className="text-base font-semibold text-primary">P</span>
        <span>Parkir mobil & motor</span>
        <span className="rounded-md bg-emerald-600/30 px-2 py-0.5 text-xs font-semibold text-emerald-200">
          Aman
        </span>
      </div>
    </div>
  );
}
