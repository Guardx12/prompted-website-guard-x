
import Image from "next/image";

const highlights = [
  { k: "Callout", v: "Same‑day slots" },
  { k: "Testing", v: "Certified (demo)" },
  { k: "Cover", v: "Domestic + Commercial" },
  { k: "Guarantee", v: "Workmanship backed" },
];

const pillars = [
  { title: "Emergency faults", desc: "Trips, sparks, burning smells, sockets down — safe diagnostics and repair." },
  { title: "EV chargers", desc: "Home charger installs with neat trunking and a clean handover." },
  { title: "EICR reports", desc: "Landlord & homeowner inspections (demo) with clear next steps." },
];

const services = [
  "Consumer unit upgrades",
  "Fault finding & repairs",
  "Lighting installs",
  "Partial rewires",
  "Outdoor power",
  "Smoke/heat alarms",
  "Data & Wi‑Fi points",
  "Commercial maintenance",
];

const areas = ["Brighton", "Hove", "Worthing", "Chichester", "Littlehampton", "Horsham"];

const reviews = [
  { title: "Customer Review", body: "Rapid response, explained everything clearly, and fixed the fault safely." },
  { title: "Customer Review", body: "Very tidy install — great communication and the finish looks spot on." },
  { title: "Customer Review", body: "Professional, punctual, and thorough testing. Would recommend." },
];

function Stars() {
  return (
    <div className="flex items-center gap-1 text-volt-200" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M10 15.27l-5.18 3.06 1.64-5.81L1.5 8.97l6-.48L10 3l2.5 5.49 6 .48-4.96 3.55 1.64 5.81z" />
        </svg>
      ))}
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-white/85">
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-obsidian">
      {/* Compact demo bar */}
      <div className="border-b border-white/10 bg-midnight">
        <div className="container flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/75">
            Showroom demo website • No forms collect data • Buttons are placeholders
          </p>
          <div className="flex items-center gap-3 text-sm">
            <a href="#" className="text-white/80 hover:text-white">← Back to examples</a>
            <span className="hidden text-white/20 sm:inline">|</span>
            <a href="tel:+447000000000" className="font-semibold text-white hover:underline">Call 07000 000000</a>
          </div>
        </div>
      </div>

      {/* Header (sharper, more industrial) */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-obsidian/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-md bg-ember-600 text-white shadow-ember">
              <span className="text-sm font-black tracking-widest">VG</span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-extrabold tracking-wide text-white">VoltGuard Electrical</p>
              <p className="text-[11px] text-white/55">Emergency • EV • EICR • Upgrades</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#proof" className="hover:text-white">Proof</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#compliance" className="hover:text-white">Compliance</a>
            <a href="#areas" className="hover:text-white">Areas</a>
            <a href="#reviews" className="hover:text-white">Reviews</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#quote"
              className="hidden rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 sm:inline-flex"
            >
              Request quote
            </a>
            <a
              href="tel:+447000000000"
              className="inline-flex rounded-md bg-ember-600 px-4 py-2 text-sm font-bold text-white shadow-ember hover:bg-ember-700"
            >
              Call now
            </a>
          </div>
        </div>
      </header>

      {/* Hero (distinct: diagonal split + neon) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Dark electrician hero background"
            fill
            priority
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/70 via-obsidian/60 to-obsidian" />
        </div>

        <div className="relative">
          <div className="container py-16 sm:py-24">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2">
                  <Chip><span className="h-2 w-2 rounded-full bg-volt-300" /> Same‑day slots</Chip>
                  <Chip><Stars /><span className="text-white/85">5.0 demo rating</span></Chip>
                  <Chip>Insured (demo)</Chip>
                </div>

                <h1 className="mt-6 text-balance text-4xl font-black tracking-tight text-white sm:text-6xl">
                  High‑standard electrical work.
                  <span className="text-volt-200"> Tested. Labelled. Signed off (demo).</span>
                </h1>

                <p className="mt-5 max-w-2xl text-pretty text-lg text-white/70">
                  For homeowners, landlords and small commercial — fault finding, EV chargers, consumer units and EICR safety reports.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#quote"
                    className="inline-flex items-center justify-center rounded-md bg-volt-400 px-6 py-3 text-base font-black text-obsidian shadow-neon hover:bg-volt-300"
                  >
                    Get a fixed quote
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-6 py-3 text-base font-semibold text-white hover:bg-white/10"
                  >
                    See services
                  </a>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-4">
                  {highlights.map((h) => (
                    <div key={h.k} className="rounded-md border border-white/10 bg-white/5 p-4">
                      <p className="text-xs font-semibold tracking-widest text-white/60">{h.k.toUpperCase()}</p>
                      <p className="mt-1 text-sm font-bold text-white">{h.v}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div id="quote" className="rounded-md border border-white/10 bg-midnight p-6 shadow-crisp">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold tracking-widest text-volt-200">FAST CALLBACK</p>
                      <h2 className="mt-2 text-2xl font-black text-white">Tell us what you need</h2>
                      <p className="mt-2 text-sm text-white/60">Pick a job type — this is a demo (no data collected).</p>
                    </div>
                    <div className="rounded-md bg-white/5 px-3 py-2 text-right">
                      <p className="text-[11px] font-semibold text-white/60">Callout from</p>
                      <p className="text-lg font-black text-white">£95*</p>
                      <p className="text-[10px] text-white/45">demo pricing</p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {pillars.map((p) => (
                      <div key={p.title} className="rounded-md border border-white/10 bg-white/5 p-4">
                        <p className="text-sm font-extrabold text-white">{p.title}</p>
                        <p className="mt-1 text-sm text-white/60">{p.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <a
                      href="tel:+447000000000"
                      className="inline-flex items-center justify-center rounded-md bg-ember-600 px-5 py-3 text-sm font-black text-white shadow-ember hover:bg-ember-700"
                    >
                      Call now
                    </a>
                    <a
                      href="#compliance"
                      className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-black text-white hover:bg-white/10"
                    >
                      Compliance
                    </a>
                  </div>

                  <p className="mt-4 text-[11px] text-white/45">*Demo pricing shown for showroom realism.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof / Work (distinct: dark "console" cards) */}
      <section id="proof" className="border-t border-white/10 bg-obsidian">
        <div className="container py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-widest text-volt-200">WORK QUALITY</p>
              <h2 className="mt-2 text-3xl font-black text-white">Neat installs, engineered for safety</h2>
              <p className="mt-2 max-w-2xl text-white/60">
                A premium “dark” brand style for electricians — cleaner, sharper, more technical.
              </p>
            </div>
            <div className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
              Images are generated locally for demo use.
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              { src: "/images/work-1.jpg", title: "Consumer unit upgrade", meta: "RCBO board • labelling • test results (demo)" },
              { src: "/images/work-2.jpg", title: "EICR safety report", meta: "Landlords • homeowners • clear actions (demo)" },
              { src: "/images/work-3.jpg", title: "EV charger install", meta: "Neat trunking • safe isolation • handover" },
            ].map((c) => (
              <div key={c.src} className="overflow-hidden rounded-md border border-white/10 bg-midnight shadow-crisp">
                <Image src={c.src} alt={c.title} width={1200} height={800} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <p className="text-lg font-black text-white">{c.title}</p>
                  <p className="mt-2 text-sm text-white/60">{c.meta}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-white/70">Tested</span>
                    <span className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-white/70">Labelled</span>
                    <span className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-white/70">Tidy finish</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services (distinct: list + side panel) */}
      <section id="services" className="border-t border-white/10 bg-midnight">
        <div className="container py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-widest text-volt-200">SERVICES</p>
              <h2 className="mt-2 text-3xl font-black text-white">Domestic & commercial electrical</h2>
              <p className="mt-2 max-w-2xl text-white/60">
                A more “technical” presentation than the other demos: structured lists, compliance-first messaging.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <div key={s} className="rounded-md border border-white/10 bg-white/5 p-4 text-sm font-semibold text-white/85">
                    {s}
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-md border border-white/10 bg-obsidian p-6 shadow-crisp">
                <p className="text-xs font-semibold tracking-widest text-ember-200">EMERGENCY</p>
                <h3 className="mt-2 text-xl font-black text-white">What we cover</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/65">
                  <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-volt-300" /> Power trips & burning smells</li>
                  <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-volt-300" /> Faulty sockets & lighting</li>
                  <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-volt-300" /> Fuseboard issues</li>
                  <li className="flex gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-volt-300" /> Outdoor supply problems</li>
                </ul>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a href="tel:+447000000000" className="inline-flex items-center justify-center rounded-md bg-ember-600 px-5 py-3 text-sm font-black text-white shadow-ember hover:bg-ember-700">
                    Call now
                  </a>
                  <a href="#areas" className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-black text-white hover:bg-white/10">
                    Areas served
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Compliance (unique electrician section) */}
      <section id="compliance" className="border-t border-white/10 bg-obsidian">
        <div className="container py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-widest text-volt-200">COMPLIANCE</p>
              <h2 className="mt-2 text-3xl font-black text-white">Safety-first. Documentation-ready (demo).</h2>
              <p className="mt-2 max-w-2xl text-white/60">
                Electricians win on trust. This section is intentionally more compliance-led than other trade demos.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  ["EICR reports (demo)", "Landlord compliance checks with clear actions."],
                  ["Part P (demo)", "Domestic work signed off correctly."],
                  ["Insurance (demo)", "Public liability & workmanship guarantee."],
                  ["Testing (demo)", "Results recorded, circuits labelled."],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-md border border-white/10 bg-white/5 p-5">
                    <p className="text-sm font-extrabold text-white">{t}</p>
                    <p className="mt-2 text-sm text-white/60">{d}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-md border border-white/10 bg-midnight p-6 shadow-crisp">
                <p className="text-xs font-semibold tracking-widest text-white/60">TRUST SIGNALS</p>
                <div className="mt-4 flex items-center gap-3">
                  <Stars />
                  <p className="text-sm font-semibold text-white">5.0 demo rating</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["NICEIC-style (demo)", "EICR (demo)", "EV installer (demo)", "Guaranteed"].map((x) => (
                    <span key={x} className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/70">
                      {x}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-sm text-white/60">
                  This demo shows a “premium electrician” brand style. Your real site would include multiple pages and navigation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section id="areas" className="border-t border-white/10 bg-midnight">
        <div className="container py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-widest text-volt-200">AREAS</p>
              <h2 className="mt-2 text-3xl font-black text-white">Covering Sussex</h2>
              <p className="mt-2 text-white/60">Local response for callouts and scheduled installs.</p>
            </div>
            <div className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
              Call: <span className="font-bold text-white">07000 000000</span>
            </div>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((a) => (
              <div key={a} className="rounded-md border border-white/10 bg-obsidian p-4 text-sm font-semibold text-white/80">
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="border-t border-white/10 bg-obsidian">
        <div className="container py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-widest text-volt-200">REVIEWS</p>
              <h2 className="mt-2 text-3xl font-black text-white">Trusted workmanship</h2>
              <div className="mt-3 flex items-center gap-3">
                <Stars />
                <p className="text-sm font-semibold text-white/80">5.0 (demo rating)</p>
              </div>
            </div>
            <div className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
              Placeholder reviews only — no fake names.
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <figure key={i} className="rounded-md border border-white/10 bg-midnight p-7 shadow-crisp">
                <blockquote className="text-lg font-black text-white">“{r.title}”</blockquote>
                <p className="mt-3 text-sm text-white/60">{r.body}</p>
                <figcaption className="mt-6 text-xs font-semibold tracking-widest text-white/55">
                  VERIFIED CUSTOMER
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-midnight">
        <div className="container py-14">
          <div className="grid gap-8 rounded-md border border-white/10 bg-gradient-to-r from-ember-700/30 via-obsidian to-obsidian p-10 shadow-crisp lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h2 className="text-3xl font-black text-white">Need an electrician this week?</h2>
              <p className="mt-2 text-white/60">Fast callouts, tidy installs, and clear pricing. Safety-first from start to finish.</p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a
                href="tel:+447000000000"
                className="inline-flex w-full items-center justify-center rounded-md bg-volt-400 px-6 py-3 text-base font-black text-obsidian shadow-neon hover:bg-volt-300 sm:w-auto"
              >
                Call 07000 000000
              </a>
              <p className="mt-2 text-[11px] text-white/45">Demo site — buttons are placeholders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (distinct: minimalist, technical) */}
      <footer className="border-t border-white/10 bg-obsidian">
        <div className="container py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-md bg-ember-600 text-white shadow-ember">
                <span className="text-sm font-black tracking-widest">VG</span>
              </div>
              <div>
                <p className="text-sm font-extrabold tracking-wide text-white">VoltGuard Electrical</p>
                <p className="text-xs text-white/55">Emergency • EV • EICR • Upgrades</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#compliance" className="hover:text-white">Compliance</a>
              <a href="#reviews" className="hover:text-white">Reviews</a>
              <a href="#quote" className="hover:text-white">Quote</a>
            </div>
          </div>
          <p className="mt-6 text-xs text-white/45">
            This is a GuardX showroom example website (demo). No customer data is collected.
          </p>
        </div>
      </footer>
    </main>
  );
}
