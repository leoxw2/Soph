"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-background">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl saturate-150" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl saturate-150" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32 md:py-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-tight">
                Ein sicherer Ort für Ihr Kind zum <span className="text-primary relative inline-block">Aufblühen<svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0 10 Q 50 20 100 10" stroke="currentColor" strokeWidth="4" fill="none" /></svg></span>
              </motion.h1>

              <motion.div variants={fadeInUp} className="text-lg text-foreground/80 md:pr-12 leading-relaxed space-y-4">
                <p>Empathische und professionelle Psychotherapie für Kinder und Jugendliche zwischen 8 und 16 Jahren in München und als Online-Therapie.</p>
                <blockquote className="border-l-4 border-accent/50 pl-4 py-1 italic relative text-foreground/70">
                  <span className="text-2xl font-serif text-accent/40 absolute -left-2 -top-2">&quot;</span>
                  Wolken ziehen in mein Leben herein, nicht mehr um Regen zu bringen oder Sturm heraufzubeschwören, sondern um meinem Sonnenuntergang Farbe zu verleihen.
                </blockquote>
              </motion.div>

              <motion.div variants={fadeInUp} className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-accent hover:bg-accent/90 transition-all font-sans">
                  Termin vereinbaren
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
                <Link href="/leistungen" className="inline-flex justify-center items-center px-6 py-3 border-2 border-primary/20 text-base font-medium rounded-full text-foreground/90 bg-transparent hover:bg-primary/5 hover:border-primary/40 transition-all font-sans">
                  Leistungen
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative mt-8 md:mt-0"
            >
              <div className="aspect-[4/5] md:aspect-square relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero-bild.jpg"
                  alt="Blumenwiese"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-primary">Ihre Begleitung auf neuen Wegen</h2>
            <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
              Mit modernen, wissenschaftlich fundierten Methoden helfe ich jungen Menschen dabei, Krisen als Chance für persönliches Wachstum zu nutzen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1638794582080-9614e7fecbaa?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Auf Augenhöhe",
                desc: "Ich begegne Kindern und Jugendlichen empathisch, um Vertrauen als Basis der gemeinsamen Arbeit aufzubauen."
              },
              {
                image: "https://images.unsplash.com/photo-1549633030-89d0743bad01?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Lösungsorientiert",
                desc: "Gemeinsam erarbeiten wir alltagstaugliche Strategien und stärken die individuellen Ressourcen jedes Kindes."
              },
              {
                image: "https://images.unsplash.com/photo-1637245048732-adf1a547835e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                title: "Flexibel & Modern",
                desc: "Therapie in München oder ganz bequem von Zuhause per geschützter Videosprechstunde."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-background rounded-2xl border border-primary/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden flex flex-col">
                <div className="relative w-full h-48 sm:h-56 shrink-0">
                  <Image src={feature.image} alt={feature.title} fill className="object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-serif font-medium text-foreground mb-3">{feature.title}</h3>
                  <p className="text-foreground/70 leading-relaxed font-sans">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] rounded-full bg-accent/5 blur-3xl -z-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-6">Möchten Sie den ersten Schritt gehen?</h2>
          <p className="text-lg text-foreground/80 mb-10 max-w-2xl mx-auto">
            Vereinbaren Sie ein unverbindliches Erstgespräch, um herauszufinden, wie wir die optimale Unterstützung für Ihr Kind aufbauen können.
          </p>
          <Link href="/kontakt" className="inline-flex justify-center items-center px-8 py-4 text-lg font-medium rounded-full shadow-md text-white bg-primary hover:bg-primary/90 transition-all transform hover:-translate-y-1">
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
