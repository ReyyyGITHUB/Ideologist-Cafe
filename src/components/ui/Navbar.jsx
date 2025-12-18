import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MoreVertical } from "lucide-react";

export default function Navbar({
  title = "Name Menu",
  onBack,
  onMore,
  isFixed = false,
}) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) {
      onBack();
      return;
    }
    navigate("/");
  };

  return (
    <header
      className={`flex w-full items-center justify-between border-b border-white/10 bg-transparent px-4 py-3 text-primary backdrop-blur-sm ${
        isFixed ? "fixed inset-x-0 top-0 z-40" : ""
      }`}
    >
      <button
        type="button"
        onClick={handleBack}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-primary transition hover:border-white/30 hover:bg-white/10 active:bg-white/15"
        aria-label="Back"
      >
        <ArrowLeft size={20} strokeWidth={2.25} />
      </button>

      <p className="text-base font-semibold tracking-wide text-primary">
        {title}
      </p>

      <button
        type="button"
        onClick={onMore}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-primary transition hover:border-white/30 hover:bg-white/10 active:bg-white/15"
        aria-label="More options"
      >
        <MoreVertical size={20} strokeWidth={2.25} />
      </button>
    </header>
  );
}
