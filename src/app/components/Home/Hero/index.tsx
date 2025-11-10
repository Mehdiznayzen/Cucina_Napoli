"use client";

import React, { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    mobile: "",
    date: "",
    time: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsOpen(false);
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
  }, [isOpen]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nom.trim()) e.nom = "Le nom est requis.";
    if (!form.prenom.trim()) e.prenom = "Le prénom est requis.";
    if (!form.mobile.trim()) e.mobile = "Le numéro de téléphone est requis.";
    if (!form.date) e.date = "La date de réservation est requise.";
    if (!form.time) e.time = "L'heure de réservation est requise.";

    if (form.time) {
      const [h, m] = form.time.split(":").map(Number);
      if (Number.isNaN(h) || Number.isNaN(m)) {
        e.time = "Format d'heure invalide.";
      } else {
        const minutes = h * 60 + m;
        const min = 12 * 60; 
        const max = 22 * 60; 
        if (minutes < min || minutes > max) {
          e.time = "L'heure doit être entre 12:00 et 22:00.";
        }
      }
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (field: string, value: string) => {
    setForm((s) => ({ ...s, [field]: value }));
    setErrors((errs) => ({ ...errs, [field]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        {
          nom: form.nom,
          prenom: form.prenom,
          mobile: form.mobile,
          date: form.date,
          time: form.time,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );

      console.log("Email envoyé avec succès :", result.text);
      alert(
        `Réservation envoyée. Un agent prendra contact avec vous dans les meilleurs délais .`
      );

      setForm({
        nom: "",
        prenom: "",
        mobile: "",
        date: "",
        time: "",
      });
      setIsOpen(false);

    } catch (error: any) {
      console.error("Erreur lors de l'envoi :", error);
      alert(
        "Erreur lors de l'envoi de la réservation. Veuillez vérifier votre connexion ou réessayer plus tard."
      );
    }
  };

  return (
    <section id="home-section" className="bg-gray-50">
      <div className="container xl:pt-7 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6">
            <h1 className="font-semibold mb-5 text-black lg:text-start text-center sm:leading-20 leading-16">
              Cuisine Italienne Raffinée
            </h1>
            <p className="text-black/55 text-lg font-normal mb-10 lg:text-start text-center">
              Savourez un voyage culinaire raffiné, élaboré à partir d’ingrédients locaux soigneusement sélectionnés et de saveurs
              d’inspiration internationale — préparé avec passion, chaque jour.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start">
              <a target="_blank" rel="noreferrer">
                <button
                  onClick={() => window.open("/index.html", "_blank")}
                  className="text-xl font-medium rounded-full text-white py-3 px-8 bg-primary hover:text-primary border border-primary hover:bg-transparent hover:cursor-pointer transition ease-in-out duration-300"
                >
                  Voir Menu
                </button>
              </a>
              <button
                onClick={() => window.open("https://wa.me/212664784101", "_blank")}
                className="text-xl border border-primary rounded-full font-medium py-3 px-8 text-primary hover:text-white hover:bg-primary hover:cursor-pointer transition ease-in-out duration-300"
              >
                Réserver une Table
              </button>
            </div>
          </div>
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="flex bg-white p-2 gap-5 items-center bottom-10 left-10 rounded-xl absolute">
              <img src="/images/hero/pizza.webp" alt="pizza-image" width={68} height={68} />
              <p className="text-lg font-normal">
                Over 50+ <br /> signature dishes
              </p>
            </div>
            <img src="/images/Cook/cook.webp" alt="cook" width={1000} height={805} />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6"
        >
          <div className="fixed inset-0 bg-black/40" onClick={() => setIsOpen(false)} />

          <div className="relative w-full max-w-xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-xl border border-green-200">
              <div className="bg-primary px-6 py-4">
                <h3 className="text-white text-lg font-semibold">Réserver une table</h3>
                <p className="text-green-100 text-sm mt-1">Remplissez tous les champs obligatoires pour confirmer</p>
              </div>

              <form onSubmit={handleSubmit} className="bg-white p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      value={form.nom}
                      onChange={(e) => handleChange("nom", e.target.value)}
                      className='w-full rounded-md border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-gray-200 placeholder:text-black/30 focus:border-primary focus-visible:shadow-none text-black'
                      type="text"
                      placeholder="Votre nom"
                    />
                    {errors.nom && <p className="mt-1 text-sm text-red-600">{errors.nom}</p>}
                  </div>

                  <div>
                    <input
                      value={form.prenom}
                      onChange={(e) => handleChange("prenom", e.target.value)}
                      className='w-full rounded-md border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-gray-200 placeholder:text-black/30 focus:border-primary focus-visible:shadow-none text-black'
                      type="text"
                      placeholder="Votre prénom"
                    />
                    {errors.prenom && <p className="mt-1 text-sm text-red-600">{errors.prenom}</p>}
                  </div>

                  <div>
                    <input
                      value={form.mobile}
                      onChange={(e) => handleChange("mobile", e.target.value)}
                      className='w-full rounded-md border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-gray-200 placeholder:text-black/30 focus:border-primary focus-visible:shadow-none text-black'
                      type="tel"
                      placeholder="0664685275"
                    />
                    {errors.mobile && <p className="mt-1 text-sm text-red-600">{errors.mobile}</p>}
                  </div>

                  <div>
                    <input
                      value={form.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      className='w-full rounded-md border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-gray-200 placeholder:text-black/30 focus:border-primary focus-visible:shadow-none text-black'
                      type="date"
                    />
                    {errors.date && <p className="mt-1 text-sm text-red-600">{errors.date}</p>}
                  </div>

                  <div>
                    <input
                      value={form.time}
                      onChange={(e) => handleChange("time", e.target.value)}
                      className='w-full rounded-md border border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition border-gray-200 placeholder:text-black/30 focus:border-primary focus-visible:shadow-none text-black'
                      type="time"
                      min="12:00"
                      max="22:00"
                    />
                    {errors.time && <p className="mt-1 text-sm text-red-600">{errors.time}</p>}
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 rounded-md border text-slate-700 bg-white hover:bg-slate-50"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-md bg-primary text-white hover:bg-green-700"
                  >
                    Confirmer la réservation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
