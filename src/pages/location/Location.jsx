import React from "react";
import {
  WifiIcon,
  MapPin,
  Power,
  Sunset,
  Clock3,
  Navigation,
} from "lucide-react";
import Navbar from "../../components/ui/Navbar";

export default function Location() {
  const openNow = true;

  const address =
    "Gombel, Jl. Setia Budi No.28, Ngesrep, Banyumanik, Semarang City, Central Java 50262";

  const mapsUrl =
    "https://www.google.com/maps?query=Ideologist%20Coffee%20And%20Social%20Space";

  return (
    <div className="min-h-dvh bg-main text-primary">
      <Navbar title="Lokasi" isFixed />
      <div className="h-16" aria-hidden />

      {/* MAP */}
      <section className="w-full">
        <div className="h-[46vh] w-full overflow-hidden rounded-b-3xl shadow-soft">
          <iframe
            title="Ideologist Coffee Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15802.906836057449!2d110.41105125!3d-7.038887399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b45ec6b0d13%3A0x32475e4297b2dfd3!2sIdeologist%20Coffee%20And%20Social%20Space!5e0!3m2!1sen!2sid!4v1733745672000!5m2!1sen!2sid"
            className="h-full w-full border-none"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      {/* CONTENT (SCROLL VERTICAL) */}
      <main className="mx-auto w-full max-w-3xl px-4 py-6">
        <section className="rounded-3xl border border-main bg-surface p-5 shadow-soft">
          {/* status + type */}
          <div className="flex flex-wrap items-center gap-3">
            <div
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide ${
                openNow
                  ? "bg-emerald-500/20 text-emerald-200"
                  : "bg-border-main text-secondary"
              }`}
            >
              <span
                className={`inline-block h-2 w-2 rounded-full ${
                  openNow ? "bg-emerald-400" : "bg-secondary/70"
                }`}
              />
              {openNow ? "Open Now" : "Closed"}
            </div>

            <p className="text-sm text-secondary">Industrial Tropical Space</p>
          </div>

          {/* title */}
          <p className="mt-3 text-2xl font-bold text-primary sm:text-3xl">
            Ideologist Coffee &amp; Space
          </p>

          {/* chips */}
          <div className="mt-4 flex flex-wrap gap-2">
            <Chip icon={WifiIcon} label="Fast WiFi" />
            <Chip icon={Power} label="Sockets" />
            <Chip icon={Sunset} label="Sunset View" />
          </div>

          <div className="my-5 h-px w-full bg-border-main" />

          {/* location */}
          <div className="rounded-2xl border border-main bg-soft p-4">
            <div className="flex items-center gap-2 text-emerald-300">
              <MapPin size={18} />
              <p className="font-semibold">Location</p>
            </div>

            <div className="mt-3 space-y-1">
              <p className="text-xs uppercase text-secondary">Address</p>
              <p className="text-sm font-semibold text-primary">{address}</p>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-secondary">
              <span className="text-base font-semibold text-primary">P</span>
              <span>Parkir mobil & motor</span>
              <span className="rounded-md bg-emerald-600/30 px-2 py-0.5 text-xs font-semibold text-emerald-200">
                Aman
              </span>
            </div>
          </div>

          {/* hours */}
          <div className="mt-6">
            <div className="flex items-center gap-2 text-emerald-300">
              <Clock3 size={18} />
              <p className="font-semibold">Operational Hours</p>
            </div>

            <div className="mt-3 grid gap-2">
              <HoursRow
                day="Senin - Kamis"
                note="Weekdays"
                time="09.00 - 23.00"
              />
              <HoursRow
                day="Jumat - Minggu"
                note="Weekend"
                time="08.00 - 24.00"
              />
            </div>
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

function Chip({ icon: Icon, label }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-xl border border-main bg-soft px-3 py-2 text-sm text-primary">
      <Icon size={16} className="text-emerald-300" />
      <span>{label}</span>
    </span>
  );
}

function HoursRow({ day, note, time }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-main bg-soft px-4 py-3">
      <div className="flex flex-col">
        <p className="text-sm font-semibold text-primary">{day}</p>
        <p className="text-xs text-secondary">{note}</p>
      </div>
      <p className="text-sm font-semibold text-emerald-200">{time}</p>
    </div>
  );
}
