import React from "react";
import { Clock3 } from "lucide-react";
import HoursRow from "./HoursRow";

export default function HoursSection() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 text-emerald-300">
        <Clock3 size={18} />
        <p className="font-semibold">Operational Hours</p>
      </div>
      <div className="grid gap-2">
        <HoursRow day="Senin - Kamis" note="Weekdays" time="09.00 - 23.00" />
        <HoursRow day="Jumat - Minggu" note="Weekend" time="08.00 - 24.00" />
      </div>
    </div>
  );
}
