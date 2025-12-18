import React, { useState } from "react";
import { CalendarClock, MapPin, NotebookPen, User } from "lucide-react";
import GuestCounter from "./GuestCounter";
import { Send } from "lucide-react";

export default function ReservationForm() {
  const [fullName, setFullName] = useState("");
  const [area, setArea] = useState("indoor");
  const [isAreaOpen, setIsAreaOpen] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [note, setNote] = useState("");

  const isFormValid = fullName && date && time;

  const formatDate = (value) => {
    if (!value) return "-";
    const [year, month, day] = value.split("-");
    if (!year || !month || !day) return value;
    return `${day}/${month}/${year}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const areaLabel =
      area === "lake-view"
        ? "Lake View"
        : area === "vip-room"
        ? "VIP Room"
        : "Indoor";

    const noteText = note?.trim() ? note.trim() : "-";
    const dateText = formatDate(date);
    const timeText = time || "-";

    const message = `Halo Ideologist,

Reservasi meja:
Nama: ${fullName || "Tidak diisi"}
Area: ${areaLabel}
Tanggal: ${dateText}
Jam: ${timeText}
Jumlah: ${guests} orang
Catatan: ${noteText || "Tidak ada"}

Terima kasih.`;

    const phone = "6285799799857"; // 0 -> 62 for WhatsApp link
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-4xl flex-col gap-4 rounded-2xl border border-main bg-surface/80 p-6 text-primary shadow-soft backdrop-blur-sm"
    >
      <div className="flex w-full items-center gap-3">
        <div className="flex w-full flex-col gap-1">
          <label className="text-sm text-secondary" htmlFor="fullName">
            Nama Lengkap
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Masukkan nama lengkap"
            className="rounded-xl border border-main bg-soft w-full  px-3 py-3 text-primary placeholder:text-secondary focus:border-secondary focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-secondary" htmlFor="area">
            Pilih Area
          </label>
          <div
            className={`flex items-center gap-3 rounded-xl border px-3 py-2 transition ${
              isAreaOpen
                ? "border-secondary ring-2 ring-secondary/30"
                : "border-main"
            } bg-soft`}
          >
            <MapPin size={18} className="text-secondary" />
            <select
              id="area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              onFocus={() => setIsAreaOpen(true)}
              onBlur={() => setIsAreaOpen(false)}
              className="
    w-full appearance-none bg-transparent text-primary
    focus:outline-none
  "
            >
              <option value="indoor" className="bg-[#151515] text-white">
                Indoor
              </option>
              <option value="lake-view" className="bg-[#151515] text-white">
                Lake View
              </option>
              <option value="vip-room" className="bg-[#151515] text-white">
                VIP Room
              </option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-secondary" htmlFor="guests">
            Jumlah Orang
          </label>
          <GuestCounter value={guests} onChange={setGuests} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm text-secondary" htmlFor="date">
            Tanggal
          </label>
          <div className="flex items-center gap-3 rounded-xl border border-main bg-soft px-3 py-2">
            <CalendarClock size={18} className="text-secondary" />
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-transparent text-primary focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-secondary" htmlFor="time">
            Jam
          </label>
          <div className="flex items-center gap-3 rounded-xl border border-main bg-soft px-3 py-2">
            <CalendarClock size={18} className="text-secondary" />
            <input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full bg-transparent text-primary focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-secondary" htmlFor="note">
          Catatan (opsional)
        </label>
        <div className="flex items-start gap-3 rounded-xl border border-main bg-soft px-3 py-2">
          <NotebookPen size={18} className="mt-1 text-secondary" />
          <textarea
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            placeholder="Catatan khusus (opsional)"
            className="w-full resize-none bg-transparent text-primary placeholder:text-secondary focus:outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={!isFormValid}
        aria-disabled={!isFormValid}
        className={`
    mt-2 inline-flex w-full items-center justify-center gap-2
    rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wide
    transition-all duration-200 text-gray-500
    ${
      isFormValid
        ? "bg-emerald-500 text-black shadow-soft hover:bg-emerald-400 hover:shadow-lg active:scale-[0.98]"
        : "cursor-not-allowed bg-border-main text-secondary/60"
    }
  `}
      >
        {isFormValid && <Send size={16} />}
        Kirim via WhatsApp
      </button>
    </form>
  );
}
