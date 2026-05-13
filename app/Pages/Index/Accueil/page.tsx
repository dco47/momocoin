"use client";

import Image from "next/image";
import Link from "next/link";
import AccueilImmage from "@/public/Frame.png";

export default function Accueil() {
  return (
    <div className="bg-(--prim) pb-10 pt-24">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 gap-10 mt-10">
        {/*infoAccueil*/}
        <div className="max-w-xl text-center lg:text-left mb-20">
          <h1 className="text-black text-4xl lg:text-5xl font-bold">
            Échange instantané entre Mobile Money et Crypto
          </h1>

          <p className="text-black mt-4">
            Convertis ton solde Orange, MTN, Moov ou Wave en Bitcoin ou USDT en
            quelques clics.
          </p>

          <button
            className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-2 text-lg text-white shadow-lg transition hover:bg-neutral-900 mt-6"
          >
            <img src="/iconNav.png" alt="imgButton" />
            Télécharger
          </button>
        </div>

        {/*immageAccueil */}
        <div className="flex justify-center">
          <Image
            src={AccueilImmage}
            alt="Image Accueil"
            className="w-72 lg:w-96 h-auto mt-10"
          />
        </div>
      </div>
    </div>
  );
}
