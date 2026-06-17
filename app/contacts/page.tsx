"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const faqItems = [
  {
    question: "Comment acheter de la cryptomonnaie avec Mobile Money ?",
    answer:
      "Tu choisis le montant, l’opérateur (Orange, MTN, etc.) et la crypto que tu veux (USDT, BTC…). L’appli te donne le bon taux en temps réel, tu valides, et la transaction se fait en quelques secondes.",
  },
  {
    question: "Puis-je envoyer de l'argent vers un autre compte Mobile Money ?",
    // answer:
    //   "Oui, tu peux envoyer de l’argent vers un autre compte Mobile Money depuis ton portefeuille dans l’application. Le destinataire reçoit les fonds rapidement selon l’opérateur.",
  },
  {
    question: "Est-ce que l'application est sécurisée ?",
    // answer:
    //   "Oui, nous utilisons des protocoles de sécurité modernes, un chiffrement fort et des contrôles anti-fraude pour protéger tes transactions et tes données.",
  },
  {
    question: "Pourquoi dois-je faire le KYC ?",
    // answer:
    //   "Le KYC est nécessaire pour garantir la sécurité de ton compte, vérifier ton identité et respecter la réglementation. Cela protège aussi tous les utilisateurs de la plateforme.",
  },
  {
    question: "Combien de temps prend une transaction ?",
    // answer:
    //   "La majorité des transactions sont traitées instantanément ou en quelques minutes selon l’opérateur. Si une vérification manuelle est requise, cela peut prendre un peu plus de temps.",
  },
];

export default function ContactPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    if (!search.trim()) return faqItems;
    const lower = search.toLowerCase();
    return faqItems.filter((item) =>
      item.question.toLowerCase().includes(lower),
    );
  }, [search]);

  return (
    <main className="bg-[#F6F6F6] text-slate-900">
      <section className="pt-28 pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mt-5 sm:text-4xl lg:text-5xl font-bold tracking-tight text-1d1d1d">
              Questions fréquemment posées
            </h1>
          </div>

          <div className="mt-12">
            <div className="mx-auto max-w-3xl p-4 sm:p-6">
              <label htmlFor="faq-search" className="sr-only">
                Rechercher une question
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <Image
                    src="/search-interface-symbol 1.png"
                    alt="Recherche"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </span>
                <input
                  id="faq-search"
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Rechercher"
                  className="w-full rounded-full border border-slate-200 bg-slate-50 py-4 pl-12 pr-5 text-sm text-slate-800 outline-none transition focus:border-black focus:ring-2 focus:ring-[#f9c117]/30"
                />
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => {
                  const actualIndex = faqItems.findIndex(
                    (faq) => faq.question === item.question,
                  );
                  const open = actualIndex === activeIndex;

                  return (
                    <button
                      key={item.question}
                      type="button"
                      onClick={() => setActiveIndex(open ? -1 : actualIndex)}
                      className="w-full p-6 text-left shadow-sm transition hover:border-black/10"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-base font-semibold text-slate-950">
                          {item.question}
                        </span>
                        <span className="flex h-10 w-10 items-center justify-center] text-xl font-bold text-slate-950">
                          <Image
                            src={open ? "/arrow-2.png" : "/arrow.png"}
                            alt={open ? "Réduire" : "Développer"}
                            width={20}
                            height={20}
                            className="object-contain"
                          />
                        </span>
                      </div>
                      {open && (
                        <p className="mt-4 text-sm leading-7 text-slate-600">
                          {item.answer}
                        </p>
                      )}
                    </button>
                  );
                })
              ) : (
                <div className="rounded-4xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500 shadow-sm">
                  Aucune question trouvée. Essaie un autre mot-clé.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className=" support-contact mb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div
            className="grid gap-10 rounded-4xl px-6 py-10 text-white shadow-2xl sm:grid-cols-[1.1fr_0.9fr] sm:px-10 sm:py-12"
            style={{
              background: "linear-gradient(to right, #141414, #515151)",
            }}
          >
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <h1 className="font-bold text-3xl text-[#FFFFFF]">
                Une question ? Un souci ? <br /> on est la pour toi.
              </h1>
              <p className="max-w-xl text-sm text-[#FFFFFF]">
                Que ce soit pour un problème technique, une question <br /> sur
                une transaction, ou juste un renseignement, notre <br /> équipe
                te répond rapidement.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/Character_1.png"
                alt="Character support"
                width={220}
                height={220}
                className="rounded-4xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[#141414] text-center">Nos moyens de contact</h2>
          <div className="flex justify-center items-center">
            <div className=" p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center">
                <Image
                  src="/mail 1.png"
                  alt="Email"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
              <h3 className=" text-lg font-semibold text-[#141414]">
                Email support
              </h3>
              <p className="text-sm font-bold text-[#141414]">
                support@tonapp.com
              </p>
              <p className="text-xs text-[#141414]">(Réponse sous 24h)</p>
            </div>
            <div className="p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center">
                <Image
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-[#141414]">
                WhatsApp
              </h3>
              <p className="text-sm font-bold text-[#141414]">
                +225 01 23 45 67 89
              </p>
              <p className="text-xs text-[#141414]">
                (Support rapide tous les jours de 8h à 20h)
              </p>
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
