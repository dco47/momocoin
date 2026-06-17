"use client";

import Image from "next/image";

export default function About() {
  return (
    <main className="bg-[#F6F6F6] text-black">
      <section className="pt-28 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mt-6 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black">
              Chez MOMO COIN, notre mission est simple :
            </h1>
            <p className="mt-6 text-base sm:text-xl leading-8 text-slate-700">
              Te permettre d’échanger facilement ton argent mobile en
              cryptomonnaie (et vice-versa), en toute sécurité, sans prise de
              tête.
            </p>
            <p className="mt-4 text-sm sm:text-base leading-7 text-black">
              Nous rêvons d’un monde où chaque personne en Afrique peut accéder
              à la crypto et aux solutions de paiement digitales sans barrières.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-4xl bg-linear-to-r from-[#141414] to-[#515151] px-6 py-10 sm:px-10 sm:py-12 shadow-2xl">
            {/* <div className="absolute -right-20 top-1/2 h-72 w-72 rounded-full bg-[#f9c117] opacity-20 blur-3xl"></div> */}
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start relative">
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                  Pourquoi on a créé cette plateforme ?
                </h2>
                <p className="max-w-xl text-sm sm:text-base leading-7 text-slate-300">
                  Parce qu’on sait à quel point il est compliqué, <br /> voire
                  stressant, de :
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-9 w-9 flex items-center justify-center">
                    <Image
                      src="/iconAbout.png"
                      alt="Bullet"
                      width={16}
                      height={16}
                    />
                  </div>
                  <p className="text-sm leading-7 text-slate-100">
                    Trouver une plateforme fiable pour acheter de la crypto avec
                    Mobile Money,
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-9 w-9 flex items-center justify-center">
                    <Image
                      src="/iconAbout.png"
                      alt="Bullet"
                      width={16}
                      height={16}
                    />
                  </div>
                  <p className="text-sm leading-7 text-slate-100">
                    Envoyer de l’argent entre différents réseaux (MTN, Orange,
                    Wave…) sans galérer,
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-9 flex items-center justify-center">
                    <Image
                      src="/iconAbout.png"
                      alt="Bullet"
                      width={16}
                      height={16}
                    />
                  </div>
                  <p className="text-sm leading-7 text-slate-100">
                    Sécuriser ses transactions en Afrique avec des outils
                    modernes.
                  </p>
                </div>
                <p className="mt-4 text-sm italic text-[#FEB800]">
                  Alors on a décidé de changer ça !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col items-center gap-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight text-slate-950">
                Une équipe 100 % africaine, passionnée par la tech, la crypto,
                et surtout... la simplicité.
              </h2>
              <p className="mt-5 text-sm sm:text-base leading-7 text-slate-600 max-w-2xl">
                On vient de milieux différents (développeurs, designers, experts
                en sécurité, support client) mais on a une seule vision :{" "}
                <span className="font-bold text-slate-950">
                  te proposer une application utile, fluide et 100 % sécurisée.
                </span>
              </p>
            </div>
            <div className="w-full mx-auto max-w-md">
              <Image
                src="/aboutImg1.png"
                alt="Equipe Momocoin"
                className="w-full rounded-4xl object-cover"
                width={720}
                height={520}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-black text-center">
            Nos engagements
          </h1>
          <div className="grid md:grid-cols-3 mt-10">
            <div className="p-7 text-center">
              <div className="mx-auto flex h-0 w-10 items-center justify-center">
                <Image
                  src="/icon1-about.png"
                  alt="Sécurité maximale"
                  width={28}
                  height={28}
                />
              </div>
              <h3 className="mt-2 text-lg font-semibold text-slate-950">
                Sécurité maximale
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                KYC, 2FA, chiffrement des données.
              </p>
            </div>
            <div className="p-7 text-center">
              <div className="mx-auto flex h-0 w-10 items-center justify-center">
                <Image
                  src="/icon2-about.png"
                  alt="Transparence"
                  width={28}
                  height={28}
                />
              </div>
              <h3 className="mt-2 text-lg font-semibold text-slate-950">
                Transparence
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Pas de frais cachés, tout est clair dès le départ.
              </p>
            </div>
            <div className="p-7 text-center">
              <div className="mx-auto flex h-0 w-10 items-center justify-center">
                <Image
                  src="/icon3-about.png"
                  alt="Support réactif"
                  width={28}
                  height={28}
                />
              </div>
              <h3 className="mt-2 text-lg font-semibold text-slate-950">
                Support réactif
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                On est là pour toi, en cas de souci ou de question.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-4xl">
            <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr] items-center">
              <div>
                <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight text-slate-950">
                  Nous rêvons d’un monde où chaque personne en Afrique peut
                  accéder à la crypto et aux solutions de paiement digitales
                  sans barrière.
                </h2>
                <h4 className="mt-5 text-sm sm:text-base leading-7 text-slate-600 max-w-2xl">
                  Et on avance, pas à pas, avec toi.
                </h4>
              </div>
              <div className="mx-auto max-w-md">
                <Image
                  src="/aboutImg2.png"
                  alt="Illustration engageante"
                  className="w-full rounded-4xl object-cover"
                  width={720}
                  height={520}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative overflow-hidden bg-[#FEB800] px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center mt-6">
          <h2 className="text-2xl font-bold text-black leading-tight">
            Prêt à échanger ton argent en crypto
          </h2>
          <h2 className="text-2xl font-bold text-black leading-tight">
            ou envoyer de l'argent rapidement ?
          </h2>

          <button className="inline-flex items-center gap-2 rounded-full bg-black px-6  py-2 text-lg text-white shadow-lg transition hover:bg-neutral-900 mt-4 cursor-pointer">
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
    </main>
  );
}
