import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-garage.jpg";
import engineImage from "@/assets/service-engine.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const stats = [
  { k: "12 yrs", v: "In the workshop" },
  { k: "4.8★", v: "Google rating" },
  { k: "1.2 L+", v: "Cars serviced" },
  { k: "40+", v: "Cities across India" },
];

const quickServices = [
  { title: "Periodic Service", desc: "Every 10,000 km. Oil, filters, fluids and a 40-point health check.", price: "₹ 3,499" },
  { title: "AC Service & Regas", desc: "Cabin filter clean, gas top-up, cooling coil wash and leak test.", price: "₹ 1,999" },
  { title: "Denting & Painting", desc: "Bare-metal prep, 3-coat Sikkens paint and full body polish.", price: "₹ 2,499/panel" },
  { title: "Battery Replacement", desc: "Amaron/Exide with doorstep fitting and 55-month warranty.", price: "₹ 4,899" },
];

const brands = ["Maruti Suzuki", "Hyundai", "Tata", "Mahindra", "Kia", "Honda", "Toyota", "Skoda"];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--ink)] text-primary-foreground">
        <div className="container-x grid gap-10 py-16 md:grid-cols-2 md:py-24 md:gap-16 items-center">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 border border-[var(--brand-orange)]/50 bg-[var(--brand-orange)]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[var(--brand-orange)]">
              ● Now booking · Mumbai · Pune · Bengaluru
            </span>
            <h1 className="mt-6 text-5xl leading-[1.02] md:text-7xl">
              Your car deserves
              <span className="block text-[var(--brand-orange)]">a bhai in the garage.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-primary-foreground/75">
              Honest labour, OEM-grade spares and pickup-drop across the city. From a quick service to full-body denting-painting — MotorKaka gets it done.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[var(--brand-red)] px-6 py-3 font-bold uppercase tracking-wide text-primary-foreground hover:translate-y-[-2px] transition">
                Book a service →
              </Link>
              <a href="tel:+911800123456" className="inline-flex items-center gap-2 border-2 border-white/30 px-6 py-3 font-bold uppercase tracking-wide hover:border-white transition">
                Call 1800-123-456
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.v}>
                  <dt className="display text-2xl text-[var(--brand-orange)]">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-widest text-primary-foreground/60">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-[var(--brand-red)]/30 blur-3xl" aria-hidden />
            <div className="relative border-4 border-[var(--brand-orange)] shadow-[12px_12px_0_0_var(--brand-red)]">
              <img src={heroImage} alt="MotorKaka mechanic servicing a car engine" width={1600} height={1200} className="block h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE / BRANDS */}
      <section className="border-y-2 border-[var(--ink)] bg-[var(--cream)]">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-6">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">We service</span>
          {brands.map((b) => (
            <span key={b} className="display text-lg text-[var(--ink)]/70">{b}</span>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-x py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-red)]">What we fix</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Transparent packages. No hidden bills.</h2>
          </div>
          <Link to="/services" className="text-sm font-bold uppercase tracking-wide underline decoration-[var(--brand-red)] decoration-2 underline-offset-4">
            See all services →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {quickServices.map((s, i) => (
            <article key={s.title} className="group flex flex-col justify-between border-2 border-[var(--ink)] bg-card p-6 transition hover:-translate-y-1 hover:shadow-[8px_8px_0_0_var(--brand-red)]">
              <div>
                <div className="display text-5xl text-[var(--ink)]/10 group-hover:text-[var(--brand-orange)]/70">0{i + 1}</div>
                <h3 className="mt-2 text-xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-[var(--ink)]/10 pt-4">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Starting</span>
                <span className="display text-xl text-[var(--brand-red)]">{s.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[var(--ink)] text-primary-foreground">
        <div className="container-x grid gap-14 py-20 md:grid-cols-2 items-center">
          <div>
            <img src={engineImage} alt="Hands working on a car engine" width={1200} height={900} loading="lazy" className="border-4 border-[var(--brand-orange)] shadow-[10px_10px_0_0_var(--brand-red)]" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-orange)]">The MotorKaka way</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Four steps. Zero drama.</h2>
            <ol className="mt-10 space-y-6">
              {[
                ["Book online or call", "Tell us the car, symptoms and preferred slot. Pickup within 2 hours."],
                ["Free 40-point inspection", "We share a written estimate with photos before touching anything."],
                ["Repair with OEM spares", "Only Bosch, MRF, Amaron & OEM parts. Real-time WhatsApp updates."],
                ["Doorstep delivery", "Cashless insurance, GST invoice and a 30-day service warranty."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-5">
                  <span className="display text-3xl text-[var(--brand-orange)] shrink-0 w-10">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-lg">{t}</h3>
                    <p className="mt-1 text-sm text-primary-foreground/70">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-x py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-red)]">From our regulars</p>
        <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">Word gets around when the invoice is fair.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { q: "Got my Swift Dzire serviced in a day. Even sent photos of the old brake pads before replacing. Rare in Mumbai.", n: "Rohit Sharma", c: "Andheri" },
            { q: "Insurance claim ke liye run around nahi karna pada. Cashless ho gaya, car delivered on Sunday.", n: "Priya Nair", c: "Bandra" },
            { q: "Been servicing my old Innova here for 5 years. Nikhil bhai treats it like his own car. Full trust.", n: "Ajay Menon", c: "Powai" },
          ].map((t) => (
            <blockquote key={t.n} className="border-2 border-[var(--ink)] bg-card p-6">
              <p className="display text-3xl leading-none text-[var(--brand-red)]">"</p>
              <p className="mt-2 text-base">{t.q}</p>
              <footer className="mt-6 border-t border-[var(--ink)]/10 pt-4 text-sm">
                <span className="font-bold">{t.n}</span> · <span className="text-muted-foreground">{t.c}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t-2 border-[var(--ink)] bg-[var(--brand-orange)]">
        <div className="container-x flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <h2 className="text-4xl md:text-5xl text-[var(--ink)]">Car acting weird? Let's take a look.</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[var(--ink)] px-8 py-4 font-bold uppercase tracking-wide text-primary-foreground hover:bg-[var(--brand-red)] transition">
            Book free inspection →
          </Link>
        </div>
      </section>
    </>
  );
}
