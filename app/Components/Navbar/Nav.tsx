"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NavLinks = [
  { label: "Accueil", href: "/" },
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Sécurité", href: "#securite" },
  { label: "A propos de nous", href: "/about" },
  { label: "FAQ/Contact", href: "/contacts" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NavLinks.map((link) => link.href.replace("#", ""));

      sections.forEach((id) => {
        if (!id) return;

        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed w-full z-50 navbar bg-(--prim) transition-all duration-300 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10 py-4">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img
              src="/logoMOMO.png"
              alt="Logo"
              className="h-auto w-30 object-cover"
              width={100}
              height={100}
            />
          </Link>

          {/* MENU POUR ORDINATEUR */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {NavLinks.map((link) => {
              const sectionId = link.href.replace("#", "#");

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 transition-all duration-300 font-medium text-sm ${
                    activeSection === sectionId
                      ? "bg-black text-white shadow-lg"
                      : "text-black hover:text-orange-500"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* BOUTON POUR ORDINATEUR */}
          <button className="hidden lg:flex items-center gap-2 rounded-full bg-black px-6 py-2 text-sm text-white shadow-lg hover:bg-neutral-900">
            <img src="/iconNav.png" alt="imgButton" />
            Télécharger
          </button>

          {/* HAMBURGER */}
          <button
            className="lg:hidden flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-white/95 shadow-[0_12px_35px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(0,0,0,0.18)]"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#141414]">
              {open ? (
                <>
                  <path
                    d="M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </>
              ) : (
                <>
                  <path
                    d="M5 7h14"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 12h14"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 17h14"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="fixed top-20 left-0 w-full z-40 lg:hidden">
          <div className="mx-auto w-full max-w-3xl rounded-b-4xl border border-white/10 bg-[#141414]/95 p-6 shadow-[0_26px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
            <div className="space-y-4">
              {NavLinks.map((link) => {
                const sectionId = link.href.replace("#", "");

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-lg font-semibold transition duration-300 ${
                      activeSection === sectionId
                        ? "border-[#f9c117] bg-[#f9c117]/15 text-[#f9c117]"
                        : "text-white hover:bg-white/10 hover:text-[#f9c117]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <Link
              href="#button"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#f9c117] px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-[#f9c117]/30 transition hover:bg-[#ffd53c]"
            >
              Télécharger
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
