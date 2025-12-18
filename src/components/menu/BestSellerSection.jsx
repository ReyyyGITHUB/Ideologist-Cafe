import React from "react";
import MenuCard from "./MenuCard";

export default function BestSellerSection({ items = [], pdfUrl = "/assets/menu.pdf" }) {
  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
          Best Seller
        </p>
        <p className="text-xs text-secondary">6 - 10 item favorit</p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MenuCard key={item.title} {...item} />
        ))}
      </div>
      <div className="flex w-full justify-center">
        <a
          href={pdfUrl}
          className="inline-flex items-center justify-center rounded-xl border border-secondary px-4 py-2 text-sm font-semibold text-primary transition hover:border-emerald-400 hover:text-emerald-200"
        >
          Lihat Menu Lengkap (PDF)
        </a>
      </div>
    </section>
  );
}
