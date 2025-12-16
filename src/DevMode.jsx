import React from "react";

export default function DevMode() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      {/* ======Copy Code In Here =====*/}
      <div className="flex flex-col gap-4 bg-grey-900 bg-slate-800 py-8 px-8 rounded-2xl border">
        <div className="icon w-8 bg-white">Icon</div>
        <div className="wrappertext flex flex-col gap-2">
          <p className="text-2xl">Booking Meja</p>
          <p className="text-base">Vip Room Available</p>
        </div>
      </div>
      {/* ======Copy Code In Here =====*/}
    </div>
  );
}
