import Image from "next/image";


export const metadata = {
  title: "Über mich | Psychotherapie Sophia Müller",
  description: "Erfahren Sie mehr über Sophia Müller, approbierte Kinder- und Jugendlichenpsychotherapeutin in München, ihren Werdegang und ihren Therapie-Ansatz."
};

export default function About() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary/5 border-b border-primary/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-10 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl saturate-150" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl saturate-150" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Über mich</h1>
            <p className="text-xl text-foreground/80 leading-relaxed font-sans">
              Hi, ich bin Sophia Müller. Als approbierte Kinder- und Jugendlichenpsychotherapeutin (VT) in München unterstütze ich junge Menschen dabei, ihre eigenen Stärken zu entdecken und Herausforderungen selbstbewusst zu meistern.
            </p>
          </div>
        </div>
      </section>

      {/* Intro & Picture */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl font-serif text-foreground mb-4">Mein Ansatz</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Jeder Mensch ist einzigartig — und genauso individuell sollte auch Psychotherapie sein. In meiner Arbeit kombiniere ich fundierte, kognitive Verhaltenstherapie (KVT) mit Ansätzen der Akzeptanz- und Commitmenttherapie (ACT) sowie Achtsamkeitspraxis.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Besonders wichtig ist mir dabei, einen <strong>sicheren Ort auf Augenhöhe</strong> zu schaffen. Durch meine Erfahrungen in Kliniken, Forschungsbereichen und ehrenamtlichen Projekten in den Niederlanden und München weiß ich, wie wertvoll echte Empathie und ein lösungsorientierter Blick nach vorn sind.
              </p>

              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-4 bg-primary/5 p-4 rounded-xl border border-primary/10">
                  <div className="w-3 h-3 bg-accent rounded-full mt-1.5 shrink-0" />
                  <div>
                    <h3 className="font-serif font-medium text-foreground">Kognitive Verhaltenstherapie</h3>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-primary/5 p-4 rounded-xl border border-primary/10">
                  <div className="w-3 h-3 bg-primary rounded-full mt-1.5 shrink-0" />
                  <div>
                    <h3 className="font-serif font-medium text-foreground">Approbation (Okt. 2025)</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-primary/10 bg-primary/5">
                <Image
                  src="/sophia-mueller-2.png"
                  alt="Portrait von Sophia Müller"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Vitae Timeline */}
      <section className="py-20 bg-white border-t border-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center text-primary mb-16">Beruflicher Werdegang</h2>
          
          <div className="space-y-12">
            {[
              {
                date: "Seit Feb. 2026",
                title: "Kinder- und Jugendlichenpsychotherapeutin",
                org: "MVZ für Psychotherapie Dr. Flondor & Dr. Oellerer (München)",
                desc: "Einzel- und Gruppenpsychotherapie."
              },
              {
                date: "Apr. 2023 - Okt. 2025",
                title: "Praktische Ausbildung zur Psychotherapeutin",
                org: "MUNIK-Ambulanz, LMU München",
                desc: "Psychotherapeutische Behandlung von Kindern und Jugendlichen unter supervisorischer Anleitung. Schwerpunkte in KVT, ACT und Achtsamkeit."
              },
              {
                date: "2019 - 2020",
                title: "Master of Science in Clinical Child and Adolescent Psychology",
                org: "Universiteit Utrecht (Niederlande)",
                desc: "Fokus auf effektive Interventionen bei Jugendlichen, Forensische Psychopathologie und KVT-Einführung."
              },
              {
                date: "2016 - 2019",
                title: "Bachelor in Psychologie",
                org: "Erasmus Universiteit Rotterdam (Niederlande)",
                desc: "Problem-Based Learning, Vertiefung in Klinischer Psychologie und Entwicklungspsychologie."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 relative">
                {/* Timeline line */}
                {i !== 3 && <div className="absolute top-12 left-[19px] w-[2px] h-[calc(100%+1rem)] bg-primary/20" />}
                
                <div className="relative z-10 flex-shrink-0 w-4 h-4 rounded-full border-4 border-background bg-primary shadow-sm mt-8" />
                
                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 w-full hover:shadow-md transition-shadow">
                  <div className="text-sm text-accent font-medium mb-1">
                    {item.date}
                  </div>
                  <h3 className="text-xl font-serif font-medium text-foreground mb-1">{item.title}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{item.org}</p>
                  <p className="text-foreground/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Qualifications & Volunteering */}
      <section className="py-20 bg-background border-t border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Certifications */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-primary mb-6">Weiterbildungen & Zertifikate</h3>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Approbation (Okt. 2025)</p>
                    <p className="text-sm text-foreground/70">Kognitive Verhaltenstherapie</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">200h Yoga Lehrerin (Juni 2024)</p>
                    <p className="text-sm text-foreground/70">MahaShakti Yoga Studio / Gayatri Yoga Tenerife</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Psychological First Aid & Child Safeguarding (2020)</p>
                    <p className="text-sm text-foreground/70">Coursera & War Child Nederland</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Volunteering */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-primary mb-6">Ehrenamtliches Engagement</h3>
               <div className="space-y-6">
                 <div className="bg-white p-5 rounded-xl border border-primary/5 shadow-sm">
                   <h4 className="font-serif font-medium text-foreground">Consultant bei krisenchat.de</h4>
                   <p className="text-sm text-primary mb-2">2020 – 2024 (3 Jahre 8 Monate)</p>
                   <p className="text-sm text-foreground/80">Psychosoziale Beratung per Chat für Kinder und Jugendliche in akuten Krisensituationen.</p>
                 </div>
                 <div className="bg-white p-5 rounded-xl border border-primary/5 shadow-sm">
                   <h4 className="font-serif font-medium text-foreground">UNICEF STU Rotterdam</h4>
                   <p className="text-sm text-primary mb-2">2017 – 2019</p>
                   <p className="text-sm text-foreground/80">Board Member (Communication and Cooperation) und Volunteer bei Spenden-Aktionen.</p>
                 </div>
                 <div className="bg-white p-5 rounded-xl border border-primary/5 shadow-sm">
                   <h4 className="font-serif font-medium text-foreground">Freiwilliges Soziales Jahr (Bayerisches Rotes Kreuz)</h4>
                   <p className="text-sm text-primary mb-2">2015 – 2016</p>
                   <p className="text-sm text-foreground/80">Sanitätsdienstliche Versorgung und Notfallausbildung.</p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
