"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NavLinks = [
  { label: "Accueil", href: "#" },
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Sécurité", href: "#securite" },
  { label: "A propos de nous", href: "#aproposdenous" },
  { label: "FAQ/Contact", href: "#contact" },
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
      <div className="fixed w-full z-50 navbar bg-(--prim) transition-all duration-300 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10 py-4">
          {/* LOGO */}
          <Link href="#" className="flex items-center gap-2 shrink-0">
            <img
              src="/logoMOMO.png"
              alt="Logo"
              className="h-auto w-30 object-cover"
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
          <button
            className="hidden lg:flex items-center gap-2 rounded-full bg-black px-6 py-2 text-sm text-white shadow-lg hover:bg-neutral-900"
          >
            <img src="/iconNav.png" alt="imgButton" />
            Télécharger
          </button>

          {/* HAMBURGER */}
          <button
            className="lg:hidden text-black text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="fixed top-20 left-0 w-full bg-white shadow-lg z-40 lg:hidden">
          <div className="flex flex-col items-center gap-4 py-6">
            {NavLinks.map((link) => {
              const sectionId = link.href.replace("#", "");

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-lg font-medium ${
                    activeSection === sectionId
                      ? "text-black font-bold"
                      : "text-gray-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="#button"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center gap-2 rounded-full bg-black px-6 py-2 text-white"
            >
              Télécharger
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
