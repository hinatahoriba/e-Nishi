"use client";

import { Suspense, use, useEffect, useState } from "react";
import MenuOverlay from "../../components/card/MenuOverlay";
import BusinessCard from "../../components/card/BusinessCard";

function CardContent({ searchParamsPromise }) {
  const searchParams = use(searchParamsPromise);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const name = searchParams.name || "";
  const roman = searchParams.roman || "";
  const affiliation = searchParams.affiliation || "";
  const skill = searchParams.skill || "";
  const message = searchParams.message || "";
  const portfolio = searchParams.portfolio || "";
  const line = searchParams.line || "";
  const twitter = searchParams.x || "";
  const insta = searchParams.insta || "";
  const tiktok = searchParams.tiktok || "";
  const github = searchParams.github || "";
  const templateId = searchParams.template || "1";
  const currentQuery = new URLSearchParams(searchParams).toString();
  const cardUrl = currentQuery ? `/card?${currentQuery}` : "/card";

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);


  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-6">
      <header className="fixed top-0 left-0 z-30 h-20 w-full bg-[#FAF8F5]/80 backdrop-blur-sm" />

      <button
        type="button"
        className="fixed top-5 right-6 z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] focus:outline-none"
        aria-label="メニュー"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span
          className={`block h-px w-6 bg-stone-600 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-px w-6 bg-stone-600 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-px w-6 bg-stone-600 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "translate-y-[-7px] -rotate-45" : ""
          }`}
        />
      </button>

      <MenuOverlay
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        cardUrl={cardUrl}
      />

      <BusinessCard
        name={name}
        roman={roman}
        affiliation={affiliation}
        skill={skill}
        message={message}
        portfolio={portfolio}
        line={line}
        twitter={twitter}
        insta={insta}
        tiktok={tiktok}
        github={github}
        templateId={templateId}
        isFlipped={isFlipped}
        onToggleFlip={() => setIsFlipped((prev) => !prev)}
      />
    </div>
  );
}

export default function CardPage({ searchParams }) {
  return (
    <Suspense
      fallback={<div className="flex min-h-screen items-center justify-center">Loading...</div>}
    >
      <CardContent searchParamsPromise={searchParams} />
    </Suspense>
  );
}
