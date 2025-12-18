import React from "react";
import { WifiIcon, MapPin, Coffee, CoinsIcon } from "lucide-react";
import Navbar from "../../components/ui/Navbar";

export default function Location() {
  return (
    <div>
      <Navbar title="Lokasi" isFixed />
      <div className="h-16" aria-hidden />
      <div className="flex flex-col justify-center items-center">
        {/* embed map */}
        <div className="w-full h-70 overflow-hidden rounded-b-3xl shadow-soft">
          <iframe
            title="Ideologist Coffee Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15802.906836057449!2d110.41105125!3d-7.038887399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b45ec6b0d13%3A0x32475e4297b2dfd3!2sIdeologist%20Coffee%20And%20Social%20Space!5e0!3m2!1sen!2sid!4v1733745672000!5m2!1sen!2sid"
            className="h-full w-full border-none"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        {/* bottom sheet */}
        <div className="flex flex-col w-full px-4 pt-8 bg-surface text-primary">
          {/* container title */}
          <div className="flex flex-col gap-4 rounded-3xl border border-main bg-surface/90 p-5 shadow-soft backdrop-blur">
            {/* open now */}
            <div className="flex flex-row items-center justify-start gap-3">
              <div className="flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-200">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                OPEN NOW
              </div>
              <p className="text-sm text-secondary">Setiabudi, Semarang</p>
            </div>
            {/* title */}
            <div className="">
              <p className="text-3xl font-bold">Ideologist Coffee & Space</p>
            </div>
            {/* badge */}
            <div className="flex w-full flex-row justify-between gap-2">
              <span className="flex flex-row items-center gap-2 rounded-xl border border-main bg-soft px-3 py-2 text-sm text-primary">
                <WifiIcon size={18} />
                <p>Free Wi-Fi</p>
              </span>
              <span className="flex flex-row items-center gap-2 rounded-xl border border-main bg-soft px-3 py-2 text-sm text-primary">
                <Coffee size={18} />
                <p>Coffee</p>
              </span>
              <span className="flex flex-row items-center gap-2 rounded-xl border border-main bg-soft px-3 py-2 text-sm text-primary">
                <CoinsIcon size={18} />
                <p>Murah</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
