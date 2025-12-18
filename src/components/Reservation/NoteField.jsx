import React from "react";
import { NotebookPen } from "lucide-react";

export default function NoteField({ value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-secondary" htmlFor="note">
        Catatan (opsional)
      </label>
      <div className="flex items-start gap-3 rounded-xl border border-main bg-soft px-3 py-2">
        <NotebookPen size={18} className="mt-1 text-secondary" />
        <textarea
          id="note"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          placeholder="Catatan khusus (opsional)"
          className="w-full resize-none bg-transparent text-primary placeholder:text-secondary focus:outline-none"
        />
      </div>
    </div>
  );
}
