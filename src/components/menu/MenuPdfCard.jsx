import React from "react";
import { Download, ExternalLink } from "lucide-react";

export default function MenuPdfCard({
  pdfViewUrl = "/assets/menu.pdf",
  pdfDownloadUrl = "/assets/menu.pdf",
}) {
  return (
    <section className="flex flex-col gap-3 rounded-2xl border border-main bg-surface p-4 shadow-soft">
      <div className="flex flex-col gap-1">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
          Menu Lengkap - Ideologist Coffe (PDF)
        </p>
        <p className="text-sm text-secondary">
          Food &amp; Drinks - 1 file. Updated: 3 minggu lalu • 15.2 MB
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <img
          src="/assets/images/menu-cover.png"
          alt="Menu Cover"
          className="h-80 w-full rounded-xl object-cover sm:h-40 sm:w-48"
        />
        <div className="flex flex-1 flex-col gap-2 items-center">
          <p className="text-sm text-secondary">
            Unduh atau buka PDF untuk melihat seluruh menu kami.
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              href={pdfViewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-main bg-surface px-4 py-3 text-sm font-semibold text-primary transition hover:border-secondary"
            >
              <ExternalLink size={16} />
              Lihat Menu
            </a>
            <a
              href={pdfDownloadUrl}
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
