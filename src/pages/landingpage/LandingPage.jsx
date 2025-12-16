import React from "react";
import { CalendarClock, BookOpenCheck, MapPin, ShoppingBag } from "lucide-react";
import CardNavigation from "../../components/landingpage/CardNavigation";
import OpenSign from "../../components/landingpage/OpenSign";
import HeroTitle from "../../components/landingpage/HeroTitle";

export default function LandingPage() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/hero-placeholder.png')",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden />

      <div className="relative flex h-full flex-col px-4">
        {/* top */}
        <div className="mt-10 flex flex-col items-center gap-8 text-center">
          {/* logo */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold tracking-[0.25em] text-primary">
              IDEOLOGIST
            </h1>
            <p className="text-sm text-secondary tracking-[0.35em] uppercase">
              Coffee & Space
            </p>
          </div>

          {/* OpenSign */}
          <OpenSign />
        </div>

        {/* hero title */}
        <HeroTitle />

        {/* Card Nav Container*/}
        <div className="flex flex-col gap-1">
          <div className="mt-8 flex w-full flex-row justify-between gap-2">
            <CardNavigation
              title={"Booking Meja"}
              subtitle={"Vip Room Tersedia"}
              icon={CalendarClock}
            />
            <CardNavigation
              title={"Lihat Menu"}
              subtitle={"Coffee, Food & Snack"}
              icon={BookOpenCheck}
            />
          </div>
          <div className="mt-8 flex w-full flex-row justify-between gap-2">
            <CardNavigation
              title={"Lokasi & Rute"}
              subtitle={"Setiabudi, Semarang"}
              icon={MapPin}
            />
            <CardNavigation
              title={"Order Online"}
              subtitle={"Grabfood Tersedia"}
              icon={ShoppingBag}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
