export default function Home() {
  const divisions = [
    {
      name: "YK Events",
      headline: "Celebrating Moments, Creating Memories",
      points: [
        "8+ years across weddings, corporate events, themed functions",
        "Decor, catering, entertainment, and full event management",
        "From intimate gatherings to high-end launches",
      ],
      accent: "from-amber-400/30 via-orange-500/10 to-rose-500/20",
    },
    {
      name: "YK Travels",
      headline: "Taking You to Your Dream Destinations",
      points: [
        "10+ years managing Umrah & Hajj (2–3 groups/year)",
        "Expanding to UAE, Sri Lanka, Malaysia, Azerbaijan, and more",
        "Pilgrimage, holidays, visa and ticketing assistance",
      ],
      accent: "from-sky-400/25 via-cyan-500/10 to-emerald-400/20",
    },
    {
      name: "YK Trading & Printing",
      headline: "Making Your Brand Seen and Remembered",
      points: [
        "Safety, fire, and security equipment; inter-locking systems",
        "Offset printing, graphic design, neon signs, and promotional items",
        "Textile/pharma chemicals, water treatment with installation",
      ],
      accent: "from-indigo-400/25 via-violet-500/10 to-blue-500/20",
    },
  ];

  const marketing = [
    "Billboards for shops and brands",
    "Printing, hoardings, branding, corporate gifts",
    "High-impact design and promotional materials",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 -top-32 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-10 top-10 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <main className="relative mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-16 sm:px-10 lg:px-16">
        <header className="flex flex-col gap-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-black uppercase tracking-tight text-slate-950 shadow-lg shadow-slate-900/40">
                YK
              </div>
              <div>
                <p className="text-lg font-semibold text-white">YK Groups</p>
                <p className="text-sm text-slate-200/80">
                  Events • Travels • Trading & Printing
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/90 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_6px_rgba(52,211,153,0.2)]" />
              Multi-Division Enterprise
            </div>
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                YK Groups — Corporate Profile 2025
              </p>
              <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                YK Groups creates experiences, journeys, and growth for people
                and
                brands.
              </h1>
              <p className="max-w-2xl text-lg text-slate-200/80">
                Built on a decade of trust, innovation, and customer
                satisfaction, YKGROUPS unites events, travel, and trading &
                printing to move ideas forward with precision and creativity.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+923139659436"
                  className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:shadow-cyan-400/40"
                >
                  Call +92 313 9659436
                </a>
                <a
                  href="mailto:Ykgroups.pk@gmail.com"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-50 transition hover:border-cyan-200/70 hover:text-cyan-100"
                >
                  Email Ykgroups.pk@gmail.com
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-900/50 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-200">
                Vision & Mission
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-4">
                  <h3 className="text-lg font-semibold text-white">
                    Vision
                  </h3>
                  <p className="mt-2 text-sm text-slate-200/80">
                    Become a leading multi-sector company recognized for
                    innovation, reliability, and excellence.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-4">
                  <h3 className="text-lg font-semibold text-white">
                    Mission
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-200/80">
                    <li>• Deliver unforgettable events.</li>
                    <li>• Guide travelers on safe, inspiring journeys.</li>
                    <li>• Empower brands with impactful trading & printing.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/70">
                Divisions
              </p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">
                Where we create value
              </h2>
            </div>
            <div className="text-sm text-slate-200/70">
              10+ years of trusted delivery across events, travel, and brand
              solutions.
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {divisions.map((division) => (
              <div
                key={division.name}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/40 transition hover:-translate-y-1 hover:border-white/20"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${division.accent}`}
                />
                <div className="relative flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                    {division.name}
                  </p>
                  <h3 className="text-xl font-semibold leading-tight text-white">
                    {division.headline}
                  </h3>
                  <ul className="mt-1 space-y-2 text-sm text-slate-100/80">
                    {division.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/80" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-900/50">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
              YK Trading & Printing Solutions
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Built for safety, visibility, and brand impact
            </h3>
            <div className="mt-6 grid gap-3 text-sm text-slate-100/80 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-4">
                <p className="font-semibold text-white">Safety & Security</p>
                <p className="mt-2 leading-relaxed text-slate-200/80">
                  Safety equipment, fire fighting gear, security equipment, and
                  inter-locking systems.
                </p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-4">
                <p className="font-semibold text-white">Printing & Signage</p>
                <p className="mt-2 leading-relaxed text-slate-200/80">
                  Offset printing, graphic design, neon signs, hoardings, and
                  promotional items to keep brands visible.
                </p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-4">
                <p className="font-semibold text-white">Industrial Supply</p>
                <p className="mt-2 leading-relaxed text-slate-200/80">
                  Textile and pharma chemicals, water treatment technology with
                  installation, and general order supplies.
                </p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-4">
                <p className="font-semibold text-white">Marketing Delivery</p>
                <ul className="mt-2 space-y-1 text-slate-200/80">
                  {marketing.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-400/20 via-cyan-400/10 to-indigo-500/20 p-6 shadow-lg shadow-slate-900/40">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-50">
                Our Team
              </p>
              <h3 className="mt-2 text-xl font-semibold">
                Passionate specialists in events, travel, and brand marketing.
              </h3>
              <p className="mt-3 text-sm text-slate-50/80">
                We believe in innovation, collaboration, and people-first
                service. Ideas become impactful realities through precision and
                creativity.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900">
                <span className="rounded-full bg-white/90 px-3 py-2">
                  Innovation
                </span>
                <span className="rounded-full bg-white/80 px-3 py-2">
                  Reliability
                </span>
                <span className="rounded-full bg-white/70 px-3 py-2">
                  People-first
                </span>
                <span className="rounded-full bg-white/60 px-3 py-2">
                  Precision
                </span>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-900/40">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/70">
                Clientelle
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                Trusted by families, corporates, and growing brands.
              </h3>
              <p className="mt-3 text-sm text-slate-200/80">
                From intimate celebrations to large-scale launches and
                international journeys, we deliver seamless experiences that
                build lasting relationships.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/90 p-8 shadow-xl shadow-slate-900/60">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-200/80">
                Ready to plan?
              </p>
              <h3 className="text-2xl font-semibold text-white">
                Let us bring your vision to life.
              </h3>
              <p className="max-w-2xl text-sm text-slate-200/80">
                Tell us about your event, travel plans, or brand needs. We will
                tailor a plan that keeps every detail aligned with your goals.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+923010213725"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-white/30 transition hover:-translate-y-0.5 hover:shadow-white/40"
              >
                Call +92 301 0213725
              </a>
              <a
                href="mailto:Ykgroups.pk@gmail.com"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-200/70 hover:text-cyan-100"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
