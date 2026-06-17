
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="bg-[#F6F6F6] border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-8 sm:py-10">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image src="/logoMOMO.png" alt="MomoCoin" width={90} height={90} className="h-auto w-auto" />
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
            <a
              href="#"
              className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors duration-200 whitespace-nowrap"
            >
              A propos
            </a>
            <a
              href="#"
              className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors duration-200 whitespace-nowrap"
            >
              Contact/FAQ
            </a>
            <a
              href="#"
              className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors duration-200 whitespace-nowrap"
            >
              Conditions générales
            </a>
            <a
              href="#"
              className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors duration-200 whitespace-nowrap"
            >
              Politique de confidentialité
            </a>
          </div>

          {/* icon*/}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
            <Image
              src="/appStore.png"
              alt="Télécharger sur l'App Store"
              width={120}
              height={40}
              className="h-auto w-auto"
            />
            <Image
              src="/Gplay.png"
              alt="Disponible sur Google Play"
              width={135}
              height={40}
              className="h-auto w-auto"
            />
          </div>

          <div className="flex flex-col sm:flex-col items-center justify-center gap-4">
            <p className="text-xs sm:text-sm text-black text-center sm:text-left">
              &copy; {new Date().getFullYear()} MOMO COIN. Tous droits réservés.
            </p>
            <Image
              src="/sociaux.png"
              alt="Réseaux sociaux"
              width={50}
              height={28}
              className="h-auto w-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
