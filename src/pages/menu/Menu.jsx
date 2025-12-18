import React from "react";
import Navbar from "../../components/ui/Navbar";
import MenuIntro from "../../components/menu/MenuIntro";
import MenuPdfCard from "../../components/menu/MenuPdfCard";
import BestSellerSection from "../../components/menu/BestSellerSection";
import PopularCategories from "../../components/menu/PopularCategories";
import RecommendationCTA from "../../components/menu/RecommendationCTA";

export default function Menu() {
  const pdfViewUrl =
    "https://drive.google.com/file/d/1hCAFdntheQC2KON9z3wCZG6ztGJGraPu/view";
  const pdfDownloadUrl =
    "https://drive.google.com/uc?export=download&id=1hCAFdntheQC2KON9z3wCZG6ztGJGraPu";
  const bestSellerItems = [
    {
      image: "",
      title: "Gurame Bakar Ala Maari",
      price: "Rp 99.090",
      badge: "Signature",
      badgeType: "signature",
      description:
        "Gurame bakar khas Maari dengan bumbu rempah Nusantara, disajikan hangat dengan nasi dan sambal pilihan.",
    },
    {
      image: "",
      title: "Udang Bakar Bago Maranggi",
      price: "Rp 90.909",
      badge: "Chef Favorite",
      badgeType: "special",
      description:
        "Udang segar dibakar dengan bumbu maranggi, rasa manis-gurih seimbang dengan aroma smokey.",
    },
    {
      image: "",
      title: "Ayam Saus Mentega",
      price: "Rp 50.000",
      badge: "",
      badgeType: "",
      description:
        "Ayam goreng renyah dengan saus mentega gurih dan irisan bawang, comfort food favorit semua umur.",
    },
    {
      image: "",
      title: "Cumi Saus Telur Asin",
      price: "Rp 66.363",
      badge: "Top Rated",
      badgeType: "top",
      description:
        "Cumi goreng tepung disiram saus telur asin creamy dengan rasa gurih khas.",
    },
    {
      image: "",
      title: "Bistik Sapi Hotplate",
      price: "Rp 76.363",
      badge: "Hotplate",
      badgeType: "special",
      description:
        "Daging sapi empuk disajikan panas di hotplate dengan saus khas dan sayuran pelengkap.",
    },
    {
      image: "",
      title: "Ideo Creamy Latte",
      price: "Rp 38.181",
      badge: "",
      badgeType: "",
      description:
        "Single shot expresso, creamy milk, home made syrup.",
    },
  ];

  const popularCategories = [
    {
      id: "seafood",
      label: "Seafood",
      items: [
        { name: "Gurame Bakar Ala Maari", price: "Rp 99.090" },
        { name: "Udang Bakar Madu Ala Maari", price: "Rp 90.909" },
        { name: "Cumi Saus Telur Asin", price: "Rp 66.363" },
      ],
    },
    {
      id: "chicken",
      label: "Chicken",
      items: [{ name: "Ayam Saus Mentega", price: "Rp 50.000" }],
    },
    {
      id: "beef",
      label: "Beef",
      items: [{ name: "Bistik Sapi Hotplate", price: "Rp 76.363" }],
    },
    {
      id: "vegetable",
      label: "Vegetable",
      items: [{ name: "Cah Tauge Teri Asin", price: "Rp 38.181" }],
    },
  ];

  return (
    <div className="min-h-dvh bg-main text-primary">
      <Navbar title="Menu" isFixed />
      <div className="h-16" aria-hidden />

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 pb-10">
        <MenuIntro />

        <MenuPdfCard pdfViewUrl={pdfViewUrl} pdfDownloadUrl={pdfDownloadUrl} />

        <BestSellerSection items={bestSellerItems} pdfUrl={pdfViewUrl} />

        <PopularCategories
          categories={popularCategories}
          active="seafood"
          pdfUrl={pdfViewUrl}
        />

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
            <a
              className="hover:text-emerald-300"
              href="https://maps.google.com"
            >
              Maps
            </a>
            <a
              className="hover:text-emerald-300"
              href="https://wa.me/6285799799857"
            >
              WhatsApp
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
