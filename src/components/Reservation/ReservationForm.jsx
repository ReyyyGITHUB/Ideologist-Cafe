import React, { useState } from "react";
import NameField from "./NameField";
import AreaSelect from "./AreaSelect";
import DateTimeFields from "./DateTimeFields";
import NoteField from "./NoteField";
import GuestCounter from "./GuestCounter";
import SubmitButton from "./SubmitButton";

export default function ReservationForm() {
  const [fullName, setFullName] = useState("");
  const [area, setArea] = useState("indoor");
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
      <NameField value={fullName} onChange={setFullName} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <AreaSelect value={area} onChange={setArea} />
        <div className="flex flex-col gap-2">
          <label className="text-sm text-secondary" htmlFor="guests">
            Jumlah Orang
          </label>
          <GuestCounter value={guests} onChange={setGuests} />
        </div>
      </div>

      <DateTimeFields
        date={date}
        time={time}
        onDateChange={setDate}
        onTimeChange={setTime}
      />

      <NoteField value={note} onChange={setNote} />

      <SubmitButton disabled={!isFormValid} />
    </form>
  );
}
