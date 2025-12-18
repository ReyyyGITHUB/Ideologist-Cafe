import React from "react";

export default function MenuHeader() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
        Best Sellers
      </p>
      <p className="text-left text-3xl font-semibold leading-tight text-primary">
        Curated for your <span className="text-emerald-300">sunset moments.</span>
      </p>
      <p className="text-left text-sm leading-relaxed text-secondary">
        Discover the industrial tropical flavors everyone is talking about.
      </p>
    </div>
  );
}
