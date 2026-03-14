"use client";

import { useState } from "react";
import Link from "next/link";
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Wie läuft ein Erstgespräch ab?",
      a: "Das Erstgespräch (Sprechstunde) dient dem gegenseitigen Kennenlernen. Ihr Kind und Sie als Eltern haben hier den Raum, aktuelles Erleben und Probleme zu schildern. Ich erkläre meine Arbeitsweise und wir schätzen gemeinsam ein, ob eine Psychotherapie sinnvoll und indiziert ist."
    },
    {
      q: "Wer übernimmt die Kosten?",
      a: "Als approbierte psychologische Psychotherapeutin kann ich über private Krankenversicherungen und die Beihilfe abrechnen (nach GOP). Auch eine Behandlung als Selbstzahler ist unkompliziert möglich. Bitte erkundigen Sie sich vorab bei Ihrer Versicherung nach den genauen Konditionen Ihres Tarifs."
    },
    {
      q: "Gehe ich mit in die Therapiestunden meines Kindes?",
      a: "Das variiert je nach Alter. Bei jüngeren Kindern (z.B. 8-10 Jahre) ist die regelmäßige Einbindung der Bezugspersonen ein wesentlicher Bestandteil. Je älter die Jugendlichen werden, desto fokussierter wird auf das Einzelsetting gesetzt. Grundsätzlich werden aber bei Kindern und Jugendlichen immer begleitende Elterngespräche geführt (ca. jede 4. Sitzung)."
    },
    {
      q: "Wie funktioniert die Online-Therapie?",
      a: "Die Online-Therapie findet über eine zertifizierte, sichere Videosprechstunde statt. Sie erhalten vorab einen Link; es muss nichts extra installiert werden. Viele Jugendliche schätzen dieses Format aufgrund der Flexibilität und der vertrauten Home-Umgebung."
    },
    {
      q: "Was brauche ich für das Erstgespräch?",
      a: "Zum Erstgespräch bringen Sie bitte vorhandene Vorbefunde oder Schulzeugnisse mit, falls diese für die aktuelle Problematik relevant sind. Ansonsten benötigen wir im ersten Schritt nur Sie und Ihr Kind."
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="bg-primary/5 pt-20 pb-16 border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Häufige Fragen (FAQ)</h1>
          <p className="text-xl text-foreground/80 font-sans">
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um den Ablauf, die Kosten und die Organisation einer Psychotherapie.
          </p>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-primary/10 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-md border-primary/30' : 'hover:border-primary/20 bg-background'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center bg-white focus:outline-none"
              >
                <span className="font-serif text-lg font-medium text-foreground pr-8">{faq.q}</span>
                <svg className={`h-5 w-5 text-primary shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] mb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="text-foreground/80 leading-relaxed font-sans mt-2 border-t border-primary/5 pt-4">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}

          {/* Fallback Contact block */}
          <div className="mt-16 bg-primary/5 p-8 rounded-2xl border border-primary/10 flex flex-col items-center text-center">
            <div className="bg-white p-3 rounded-full shadow-sm mb-4">
              <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
            </div>
            <h3 className="font-serif text-xl font-medium text-foreground mb-3">Ihre Frage war nicht dabei?</h3>
            <p className="text-foreground/80 mb-6 max-w-lg">
              Schreiben Sie mir gerne eine Nachricht. Im Rahmen eines Erstgesprächs kläre ich gerne alle Ihre offenen Fragen in Ruhe.
            </p>
            <Link href="/kontakt" className="inline-flex justify-center items-center px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-all">
              Zur Kontakt-Seite
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
