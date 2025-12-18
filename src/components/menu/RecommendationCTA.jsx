import React from "react";
import { MessageCircle } from "lucide-react";

export default function RecommendationCTA() {
  return (
    <section className="flex flex-col gap-3 rounded-2xl border border-main bg-surface p-4 shadow-soft">
      <p className="text-lg font-semibold text-primary">Butuh rekomendasi?</p>
      <p className="text-sm text-secondary">
        Tulis preferensi kamu, kami bantu pilihkan menu terbaik.
      </p>
      <a
        href="https://wa.me/6285799799857?text=Halo%20Ideologist,%20minta%20rekomendasi%20menu%20dong."
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400 active:scale-[0.98]"
      >
        <MessageCircle size={16} />
        Tanya menu via WhatsApp
      </a>
    </section>
  );
}
