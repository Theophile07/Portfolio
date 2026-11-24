
"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "./ui/Button";

const navLinks = [
  { label: "À propos", href: "#about" },
  { label: "Mes services", href: "#service" },
  { label: "Mes projets", href: "#project" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6 md:px-10 lg:px-16">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl bg-white px-4 py-4 shadow-sm sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="text-base font-bold tracking-tight text-slate-950 sm:text-xl"
        >
          <span className="text-2xl text-[#6366F1]">{"<"}</span>
          {" Théophile Lumbala "}
          <span className="text-2xl text-[#6366F1]">{"/>"}</span>
        </Link>

        {/* Navigation desktop */}
        <div className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[16px] font-semibold transition-colors hover:text-[#6366F1]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact desktop */}
        <div className="hidden md:block">
          <Button text="Me contacter" href="#contact" />
        </div>

        {/* Bouton hamburger mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl text-[#6366F1] transition-colors hover:bg-indigo-50 md:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl bg-white p-5 shadow-lg md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-slate-800 transition-colors hover:text-[#6366F1]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl bg-[#6366F1] px-5 py-3 text-center font-semibold text-white transition-colors hover:bg-indigo-700"
            >
              Me contacter
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
