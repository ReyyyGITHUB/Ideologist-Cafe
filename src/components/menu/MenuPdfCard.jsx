import React from "react";
import { Download, ExternalLink } from "lucide-react";

export default function MenuPdfCard() {
  return (
    <section className="flex flex-col gap-3 rounded-2xl border border-main bg-surface p-4 shadow-soft">
      <div className="flex flex-col gap-1">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          Menu Lengkap (PDF)
        </p>
        <p className="text-sm text-secondary">
          Food &amp; Drinks - 1 file. Updated: 3 minggu lalu • 8.2 MB
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <img
          src="/assets/images/menu-cover.png"
          alt="Menu Cover"
          className="h-80 w-full rounded-xl object-cover sm:h-40 sm:w-48"
        />
        <div className="flex flex-1 flex-col gap-2">
          <p className="text-sm text-secondary">
            Unduh atau buka PDF untuk melihat seluruh menu kami.
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href="/assets/menu.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-secondary px-4 py-2 text-sm font-semibold text-primary transition hover:border-emerald-400 hover:text-emerald-200"
            >
              <ExternalLink size={16} />
              Buka PDF
            </a>
            <a
              href="/assets/menu.pdf"
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-black transition hover:bg-emerald-400 active:scale-[0.98]"
            >
              <Download size={16} />
              Download
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
