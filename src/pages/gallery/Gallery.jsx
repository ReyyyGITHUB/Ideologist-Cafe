import React from "react";
import { Sun, Mountain, Coffee, Moon } from "lucide-react";
import Navbar from "../../components/ui/Navbar";
import CardGallery from "../../components/gallery/CardGallery";

export default function Gallery() {
  const cards = [
    {
      image: "/assets/images/gallery1.png",
      title: "Sky & Lake View",
      subtitle: "Spot dengan view danau dan sunset tanpa halangan.",
      Icon: Sun,
    },
    {
      image: "/assets/images/gallery2.png",
      title: "Indoor Cozy",
      subtitle: "Area indoor nyaman dengan pencahayaan hangat.",
      Icon: Coffee,
    },
    {
      image: "/assets/images/gallery3.png",
      title: "Tropical Corner",
      subtitle: "Teras tropis untuk kumpul santai bersama teman.",
      Icon: Mountain,
    },
    {
      image: "/assets/images/gallery4.png",
      title: "Night Vibes",
      subtitle: "Suasana malam dengan view citylight dan musik santai.",
      Icon: Moon,
    },
  ];

  return (
    <div>
      <Navbar title="Galeri" isFixed />
      <div className="h-16" aria-hidden />
      <div className="flex flex-col justify-center px-4 mt-8">
        <div className="flex flex-col gap-2 text-left">
          <p className="text-3xl font-semibold text-primary">
            Pilih spot favorit kamu
          </p>
          <p className="text-sm text-secondary">
            Lihat suasana Ideologist dari berbagai sudut.
          </p>
        </div>

        <div className="mt-8 flex w-full gap-4 overflow-x-auto pb-4">
          {cards.map((card) => (
            <div key={card.title} className="flex-shrink-0">
              <CardGallery {...card} />
            </div>
          ))}
        </div>

        <div className="mt-6 flex w-full justify-end">
          <a
            href="/reservation"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400 active:scale-[0.98] w-full"
          >
            Reservasi Meja
          </a>
        </div>
      </div>
    </div>
  );
}
