import React from "react";
import { Navigation } from "lucide-react";
import Navbar from "../../components/ui/Navbar";
import MenuIntro from "../../components/menu/MenuIntro";
import MenuPdfCard from "../../components/menu/MenuPdfCard";
import BestSellerSection from "../../components/menu/BestSellerSection";
import PopularCategories from "../../components/menu/PopularCategories";
import RecommendationCTA from "../../components/menu/RecommendationCTA";

export default function Menu() {
  const bestSellerItems = [
    {
      image: "/assets/images/menu-aren-latte.png",
      title: "Ideologist Aren Latte",
      price: "Rp 28k",
      badge: "Signature",
      badgeType: "signature",
      description: "Espresso blend dengan gula aren premium.",
    },
    {
      image: "/assets/images/menu-sunset-mocktail.png",
      title: "Sunset Mocktail",
      price: "Rp 28k",
      badge: "Sunset Special",
      badgeType: "special",
      description: "Citrus dan grenadine segar.",
    },
    {
      image: "/assets/images/menu-cireng.png",
      title: "Cireng Rujak",
      price: "Rp 20k",
      badge: "",
      badgeType: "signature",
      description: "Cireng renyah dengan saus rujak pedas-manis.",
    },
    {
      image: "/assets/images/menu-butterscotch.png",
      title: "Butterscotch Sea Salt",
      price: "Rp 32k",
      badge: "Top Rated",
      badgeType: "top",
      description: "Karamel butterscotch dengan hint sea salt.",
    },
    {
      image: "/assets/images/menu-matcha.png",
      title: "Matcha Ishikawa",
      price: "Rp 30k",
      badge: "",
      badgeType: "signature",
      description: "Matcha Japan grade dengan susu creamy.",
    },
    {
      image: "/assets/images/menu-croissant.png",
      title: "Croissant Butter",
      price: "Rp 25k",
      badge: "",
      badgeType: "signature",
      description: "Croissant flaky buttered fresh baked.",
    },
  ];

  const popularCategories = [
    {
      id: "coffee",
      label: "Coffee",
      items: [
        { name: "Es Kopi Susu Hazelnut", price: "Rp 28k" },
        { name: "Butterscotch Sea Salt", price: "Rp 32k" },
        { name: "Americano", price: "Rp 24k" },
        { name: "Cappuccino", price: "Rp 28k" },
        { name: "Latte", price: "Rp 28k" },
      ],
    },
    {
      id: "non-coffee",
      label: "Non-Coffee",
      items: [
        { name: "Sunset Mocktail", price: "Rp 28k" },
        { name: "Matcha Ishikawa", price: "Rp 30k" },
        { name: "Chocolate Classic", price: "Rp 26k" },
      ],
    },
    {
      id: "food",
      label: "Food",
      items: [
        { name: "Cireng Rujak", price: "Rp 20k" },
        { name: "Croissant Butter", price: "Rp 25k" },
        { name: "Nasi Ayam Sambal Matah", price: "Rp 32k" },
      ],
    },
  ];

  return (
    <div className="min-h-dvh bg-main text-primary">
      <Navbar title="Menu" isFixed />
      <div className="h-16" aria-hidden />

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 pb-10">
        <MenuIntro />

        <MenuPdfCard />

        <BestSellerSection items={bestSellerItems} />

        <PopularCategories categories={popularCategories} active="coffee" />

        <RecommendationCTA />

        <footer className="flex flex-col items-center justify-center gap-2 pb-6 text-sm text-secondary">
          <p className="text-primary font-semibold">Ideologist Cafe</p>
          <div className="flex gap-3">
            <a className="hover:text-emerald-300" href="https://instagram.com">
              IG
            </a>
            <a className="hover:text-emerald-300" href="https://tiktok.com">
              TikTok
            </a>
            <a className="hover:text-emerald-300" href="https://maps.google.com">
              Maps
            </a>
            <a className="hover:text-emerald-300" href="https://wa.me/6285799799857">
              WhatsApp
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
