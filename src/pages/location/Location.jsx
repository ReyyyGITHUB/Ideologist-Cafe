import React from "react";
import { Navigation, WifiIcon, Power, Sunset } from "lucide-react";
import Navbar from "../../components/ui/Navbar";
import StatusHeader from "../../components/location/StatusHeader";
import FeatureChips from "../../components/location/FeatureChips";
import LocationCard from "../../components/location/LocationCard";
import HoursSection from "../../components/location/HoursSection";
import MapEmbed from "../../components/location/MapEmbed";

export default function Location() {
  const openNow = true;

  const address =
    "Gombel, Jl. Setia Budi No.28, Ngesrep, Banyumanik, Semarang City, Central Java 50262";

  const mapsUrl =
    "https://www.google.com/maps/dir//Ideologist+Coffee+And+Social+Space,+Gombel+Jl.+Setia+Budi+No.28,+Ngesrep,+Banyumanik,+Semarang+City,+Central+Java+50262/@-7.0388874,110.4212297,19z/data=!4m16!1m7!3m6!1s0x2e708b45ec6b0d13:0x32475e4297b2dfd3!2sIdeologist+Coffee+And+Social+Space!8m2!3d-7.0387986!4d110.4213198!16s%2Fg%2F11l8swrqzg!4m7!1m0!1m5!1m1!1s0x2e708b45ec6b0d13:0x32475e4297b2dfd3!2m2!1d110.4213198!2d-7.0387986?authuser=1&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D";

  return (
    <div className="min-h-dvh bg-main text-primary">
      <Navbar title="Lokasi" isFixed />
      <div className="h-16" aria-hidden />

      <MapEmbed />

      {/* CONTENT (SCROLL VERTICAL) */}
      <main className="mx-auto w-full max-w-3xl px-4 py-6">
        <section className="rounded-3xl border border-main bg-surface p-5 shadow-soft">
          {/* status + type */}
          <StatusHeader
            openNow={openNow}
            subtitle="Industrial Tropical Space"
          />

          {/* title */}
          <p className="mt-3 text-2xl font-bold text-primary sm:text-3xl">
            Ideologist Coffee &amp; Space
          </p>

          {/* chips */}
          <FeatureChips
            items={[
              { icon: WifiIcon, label: "Fast WiFi" },
              { icon: Power, label: "Sockets" },
              { icon: Sunset, label: "Sunset View" },
            ]}
          />

          <div className="my-5 h-px w-full bg-border-main" />

          <LocationCard address={address} />

          <div className="mt-6">
            <HoursSection />
          </div>

          {/* CTA */}
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400 active:scale-[0.98]"
          >
            <Navigation size={18} />
            Get Directions
          </a>
        </section>
      </main>
    </div>
  );
}
