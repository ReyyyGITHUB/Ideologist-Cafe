import React from "react";
import { Star } from "lucide-react";
import Navbar from "../../components/ui/Navbar";
import ReservationForm from "../../components/Reservation/ReservationForm";

export default function Reservation() {
  return (
    <div className="relative">
      <Navbar title="Reservasi" isFixed />
      <div className="h-16" aria-hidden />
      <div className="flex flex-col justify-center items-center">
        <div
          className="relative flex w-full h-70 items-end bg-cover bg-center bg-no-repeat px-6 py-8"
          style={{
            backgroundImage: "url('/assets/images/reservation-hero.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/55" aria-hidden />
          <div className="relative flex flex-col not-even:auto justify-end items-end gap-3 text-right text-primary">
            <div className="flex flex-row gap-4 items-center w-full justify-start">
              <p className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-semibold uppercase text-emerald-200 tracking-wide">
                OPEN NOW
              </p>
              <div className="flex items-center gap-2 text-amber-300">
                <span className="text-sm font-semibold text-primary">4.8</span>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      size={18}
                      fill="currentColor"
                      strokeWidth={1.25}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="w-full text-3xl font-semibold leading-tight text-primary text-left">
              Reservasi Meja
            </p>
            <p className="w-full text-base font-medium leading-relaxed text-secondary text-left">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>

        <div className="flex w-full justify-center p-4">
          <ReservationForm />
        </div>
      </div>
    </div>
  );
}
