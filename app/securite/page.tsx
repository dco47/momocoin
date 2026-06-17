"use client";

import Image from "next/image";
import imgS from "@/public/imgSeurite.png";

export default function Securite() {
  return (
    <>
      <div
        className="conatainerSecurite bg-[#f6f6f6] py-12 sm:py-16 lg:py-20 px-4"
        id="securite"
      >
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-4">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-black">
              Ta sécurité, notre priorité
            </h2>

            <p className="mt-4 text-sm sm:text-base text-black leading-relaxed">
              Chaque transaction est sécurisée avec une double vérification
              (2FA). Et avec notre vérification d'identité (KYC), on s'assure
              que personne d'autre ne peut utiliser ton compte.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src={imgS}
              alt="Sécurité"
              width={400}
              height={400}
              className="w-auto max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden bg-[#FEB800] px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center mt-6">
          <h2 className="text-2xl font-bold text-black leading-tight">
            Prêt à échanger ton argent en crypto
          </h2>
          <h2 className="text-2xl font-bold text-black leading-tight">
            ou envoyer de l'argent rapidement ?
          </h2>

          <button
            className="inline-flex items-center gap-2 rounded-full bg-black px-6  py-2 text-lg text-white shadow-lg transition hover:bg-neutral-900 mt-4 cursor-pointer"
          >
            <img src="/iconNav.png" alt="imgButton" />
            Télécharger
          </button>

          {/* IMAGE TELEPHONE + CERCLE */}
          <div className="relative mt-30 flex items-center justify-center">
            {/* CERCLE */}
            <Image
              src="/cercle.png"
              alt="Cercle"
              width={500}
              height={200}
              className="w-auto max-w-md h-auto"
            />

            {/* TELEPHONE */}
            <Image
              src="/Frame.png"
              alt="Téléphone"
              width={150}
              height={150}
              className="absolute bottom-0"
            />
          </div>
        </div>
      </div>
    </>
  );
}
