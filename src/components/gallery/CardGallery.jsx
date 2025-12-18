import React from "react";

export default function CardGallery({
  image = "/assets/images/gallery1.png",
  title = "Sky & Lake View",
  subtitle = "Spot dengan view danau dan sunset tanpa halangan.",
  Icon,
}) {
  return (
    <div>
      <article className="relative h-[420px] w-[320px] overflow-hidden rounded-[32px] border border-main bg-surface shadow-soft">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

        {Icon ? (
          <div className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/35 backdrop-blur">
            <Icon size={22} className="text-emerald-300" />
          </div>
        ) : null}

        <div className="relative z-10 flex h-full flex-col justify-end p-6">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">{subtitle}</p>
        </div>
      </article>
    </div>
  );
}
