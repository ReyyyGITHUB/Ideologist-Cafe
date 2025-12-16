import React from "react";

export default function HeroTitle() {
  return (
    <div>
      <div className="flex flex-col gap-4 mt-8 items-center text-center">
        <h2 className="text-4xl font-semibold leading-tight text-primary md:text-5xl">
          Coffee & Social Space View Kota Semarang
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-secondary md:text-lg">
          Tempat ngopi nyaman dengan city light view, makanan lengkap, dan Wi-Fi
          Kencang
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3 text-sm text-secondary">
          <span className="rounded-full border border-secondary px-4 py-2 text-primary">
            ⭐ 4.8 dari 4.235+ ulasan
          </span>
          <span className="rounded-full border border-secondary px-4 py-2 text-primary">
            Harga terjangkau
          </span>
          <span className="rounded-full border border-secondary px-4 py-2 text-primary">
            City Light View
          </span>
          <span className="rounded-full border border-secondary px-4 py-2 text-primary">
            Cocok WFC
          </span>
        </div>
      </div>
    </div>
  );
}
