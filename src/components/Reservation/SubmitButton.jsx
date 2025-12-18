import React from "react";
import { Send } from "lucide-react";

export default function SubmitButton({ disabled }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      aria-disabled={disabled}
      className={`
    mt-2 inline-flex w-full items-center justify-center gap-2
    rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wide
    transition-all duration-200 text-gray-500
    ${
      !disabled
        ? "bg-emerald-500 text-black shadow-soft hover:bg-emerald-400 hover:shadow-lg active:scale-[0.98]"
        : "cursor-not-allowed bg-border-main text-secondary/60"
    }
  `}
    >
      {!disabled && <Send size={16} />}
      Kirim via WhatsApp
    </button>
  );
}
