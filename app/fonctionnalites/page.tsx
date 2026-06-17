"use client";

import Image from "next/image";
import Img1 from "@/public/imgF1.png";
import imgC from "@/public/imgC.png";
import imgA from "@/public/imgFa.png";
import imgB from "@/public/imgFb.png";
import imgc from "@/public/imgFc.png";
import imgd from "@/public/imgFd.png";

export default function Fonctionnalites() {
  return (
    <>
      <div
        className="items-center justify-center bg-[#F6F6F6] text-center py-12 sm:py-16 lg:py-20 px-4"
        id="fonctionnalites"
      >
        <h2 className="text-black text-xl sm:text-2xl lg:text-3xl">
          Comment ça marche ?
        </h2>

        <span className="font-bold text-black text-lg sm:text-xl lg:text-2xl block mt-2">
          C'est simple comme bonjour !
        </span>

        <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-10 py-6 sm:py-10">
          <Image
            src={Img1}
            alt="Image 1"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <div className="container-grid py-8 mx-auto px-4 sm:px-6 lg:px-10">
        <h2 className="text-2xl font-bold flex items-center justify-center">
          Ce que tu peux faire
        </h2>
        <h2 className="text-2xl font-bold flex items-center justify-center">avec l'application</h2>

        <div className="max-w-5xl mx-auto py-2 px-30 grid grid-cols-1 lg:grid-cols-3 items-center mt-6">
          {/* COLONNE GAUCHE */}
          <div className="flex flex-col gap-2">
            <Image
              src={imgA}
              alt="Image A"
              className="w-60 h-auto object-cover"
            />
            <Image
              src={imgB}
              alt="Image B"
              className="w-60 h-auto object-cover"
            />
          </div>

          {/* COLONNE MILIEU */}
          <div className="">
            <Image src={imgC} alt="Image C" className="w-60 h-auto" />
          </div>

          {/* COLONNE DROITE */}
          <div className="flex flex-col gap-2">
            <Image
              src={imgc}
              alt="Image c"
              className="w-60 h-auto object-cover"
            />
            <Image
              src={imgd}
              alt="Image d"
              className="w-60 h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
