import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Leistungen & Methoden | Psychotherapie Sophia Müller",
  description: "Erfahren Sie mehr über die therapeutischen Ansätze für Kinder und Jugendliche (8-16 Jahre) in meiner Praxis in München und Online."
};

export default function Services() {
  return (
    <div className="bg-background">
      {/* Header */}
      <section className="bg-primary/5 pt-20 pb-16 border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Leistungen & Methoden</h1>
          <p className="text-xl text-foreground/80 font-sans">
            Mein Therapieangebot richtet sich an Kinder, Jugendliche und junge Erwachsene zwischen <strong>8 und 16 Jahren</strong>. Gemeinsam finden wir den Weg, der am besten zur individuellen Situation passt.
          </p>
        </div>
      </section>

      {/* Main Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif text-foreground mb-6">Wie ich arbeite</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Psychotherapie für Kinder und Jugendliche bedeutet für mich nicht, &quot;Fehler zu reparieren&quot;. Vielmehr geht es darum, die eigenen Stärken und Fähigkeiten wiederzuentdecken. Herausforderungen wie Ängste, schulischer Druck oder emotionale Tieflagen sind oft Zeichen der Seele, dass etwas aus dem Gleichgewicht geraten ist.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Mit wissenschaftlich fundierten Ansätzen schaffen wir einen Ort, an dem <strong>Wachstum, Akzeptanz und Leichtigkeit</strong> wieder Platz finden können.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { image: "https://images.unsplash.com/photo-1510775750777-c6a9f669e051?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Sicherer Raum", desc: "Verständnisvoll und absolut vertraulich." },
                { image: "https://images.unsplash.com/photo-1569908687465-12cfceb6dead?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Ressourcenfokus", desc: "Wir stärken, was bereits an Gutem da ist." },
                { image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=600", title: "Entwicklung", desc: "Schritt für Schritt ins eigene Potenzial." },
                { image: "https://images.unsplash.com/photo-1638794582080-9614e7fecbaa?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", title: "Auf Augenhöhe", desc: "Echt, unkompliziert und aufgeschlossen." }
              ].map((item, i) => (
                <div key={i} className="bg-background rounded-2xl border border-primary/10 shadow-sm flex flex-col hover:-translate-y-1 transition-transform overflow-hidden">
                  <div className="relative w-full h-32 shrink-0">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-serif font-medium text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="py-20 bg-primary/5 border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-primary">Therapeutische Schwerpunkte</h2>
            <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
              Als approbierte Kinder- und Jugendlichenpsychotherapeutin nutze ich moderne Verfahren, die nachweislich wirken und ineinandergreifen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-primary/10 flex flex-col h-full overflow-hidden">
              <div className="relative w-full h-48 shrink-0">
                <Image src="https://images.unsplash.com/photo-1769720204501-75e6a3c25d3d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="KVT" fill className="object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-medium text-foreground mb-4">Kognitive Verhaltenstherapie (KVT)</h3>
                <p className="text-foreground/80 leading-relaxed flex-grow">
                  Die KVT ist eine der erfolgreichsten Behandlungsmethoden. Wir schauen uns gemeinsam an, wie Gedanken, Gefühle und Verhalten zusammenhängen, und üben neue, hilfreiche Denkweisen und Strategien für den Alltag ein. Die Methode ist sehr greifbar, transparent und alltagsnah.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-primary/10 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -mr-10 -mt-10 z-10 pointer-events-none" />
              <div className="relative w-full h-48 shrink-0">
                <Image src="https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="ACT Therapie" fill className="object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-grow relative z-10">
                <h3 className="text-2xl font-serif font-medium text-foreground mb-4">Akzeptanz &amp; Commitment (ACT)</h3>
                <p className="text-foreground/80 leading-relaxed flex-grow">
                  Manche Schmerzen oder Sorgen lassen sich nicht sofort &quot;wegmachen&quot;. Die ACT hilft dabei, unabänderliche Gefühle zu akzeptieren und dennoch ein wertvolles, sinnerfülltes Leben zu führen (Commitment). Wir arbeiten viel mit Metaphern und Achtsamkeitsübungen.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-primary/10 flex flex-col h-full overflow-hidden">
              <div className="relative w-full h-48 shrink-0">
                <Image src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600" alt="Achtsamkeit" fill className="object-cover" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-medium text-foreground mb-4">Achtsamkeit &amp; Meditation</h3>
                <p className="text-foreground/80 leading-relaxed flex-grow">
                  Achtsamkeit hilft, aus dem ständigen &quot;Gedankenkarussell&quot; auszusteigen. Vor dem Hintergrund meiner Yoga-Ausbildung integriere ich bei Bedarf altersgerechte Übungen zu Körperwahrnehmung und Entspannung, um Selbstregulation und innere Ruhe zu fördern.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Therapy vs Practice */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-foreground mb-6">Flexibel: Vor Ort oder Online</h2>
          <p className="text-lg text-foreground/80 mb-10 leading-relaxed">
            Ob in der vertrauten Umgebung des eigenen Zimmers per gesicherter Videosprechstunde, oder persönlich im Praxisraum in München: Die Wirksamkeit der Therapie hängt primär vom Vertrauen ab, nicht vom Ort. Gerade für Jugendliche ist das Online-Setting oft niederschwelliger und einfacher in den Schulalltag zu integrieren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/faq" className="inline-flex justify-center items-center px-6 py-3 border-2 border-primary/20 text-base font-medium rounded-full text-foreground bg-transparent hover:bg-primary/5 transition-all">
              Häufige Fragen lesen
            </Link>
            <Link href="/kontakt" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-accent hover:bg-accent/90 transition-all shadow-md font-sans">
              Termin anfragen <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
