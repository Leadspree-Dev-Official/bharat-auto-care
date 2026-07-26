import { createFileRoute, Link } from "@tanstack/react-router";
import workshopImg from "@/assets/workshop.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MotorKaka — India's Neighbourhood Workshop" },
      { name: "description", content: "Started in a single Andheri bay in 2011, MotorKaka now runs 40+ workshops across India with 320 certified mechanics." },
      { property: "og:title", content: "About MotorKaka" },
      { property: "og:description", content: "The story, the people and the promise behind India's most trusted car workshop." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  ["2011", "One bay in Andheri", "Nikhil 'Kaka' Deshmukh opens a single-lift garage with his brother Aakash. First customer: a 1998 Maruti 800."],
  ["2014", "First body shop", "Sikkens-certified paint booth added. Insurance partnerships with HDFC Ergo and ICICI Lombard begin."],
  ["2018", "MotorKaka goes app-first", "Live status updates on WhatsApp. Doorstep pickup covers all of Mumbai."],
  ["2022", "Pan-India", "Bengaluru, Pune, Hyderabad, Delhi-NCR and Chennai workshops open in 18 months."],
  ["2026", "1.2 lakh cars served", "40 workshops · 320 mechanics · 24×7 roadside network across 40 cities."],
];

const values = [
  { t: "Written estimates", d: "Every job starts with a photo report and a fixed quote. If it changes, we call — we don't just add it to the bill." },
  { t: "OEM or nothing", d: "Bosch, Denso, MRF, Amaron, 3M. We publish the part number on your invoice. Cheap substitutes stay off our shelves." },
  { t: "Fair labour", d: "Our mechanics are on salary, not commission. Nobody up-sells you a job your car doesn't need." },
  { t: "30-day warranty", d: "Every repair carries a 30-day workmanship warranty. If it fails, we fix it free — no arguments." },
];

function AboutPage() {
  return (
    <>
      <section className="border-b-2 border-[var(--ink)] bg-[var(--cream)]">
        <div className="container-x py-16 md:py-24">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-red)]">About us</p>
          <h1 className="mt-3 max-w-4xl text-5xl md:text-7xl">Built by mechanics. Run for drivers.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            MotorKaka isn't a slick startup that outsources the wrenching. It's a workshop first — owned by the same family that started it in a single Andheri bay in 2011.
          </p>
        </div>
      </section>

      <section className="container-x py-20 grid gap-12 md:grid-cols-2 items-center">
        <img src={workshopImg} alt="MotorKaka workshop" width={1400} height={900} loading="lazy" className="border-4 border-[var(--ink)] shadow-[10px_10px_0_0_var(--brand-red)]" />
        <div>
          <h2 className="text-4xl">The one-line promise.</h2>
          <p className="mt-6 text-lg">
            <span className="bg-[var(--brand-orange)] px-2 py-1">Your car, treated like our own.</span> That's it. It's on the invoice, it's on the bay wall, and it's what every technician signs on their first day.
          </p>
          <p className="mt-4 text-muted-foreground">
            15 years in, we still pull every incoming car onto the same 40-point checklist. Because the car that comes in for a wiper blade is often the car that leaves before its brake pads fail on the Sion flyover.
          </p>
        </div>
      </section>

      <section className="bg-[var(--ink)] text-primary-foreground">
        <div className="container-x py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-orange)]">Timeline</p>
          <h2 className="mt-3 text-4xl md:text-5xl">15 years, one bay at a time.</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-5">
            {timeline.map(([y, t, d]) => (
              <div key={y} className="border-t-2 border-[var(--brand-orange)] pt-4">
                <div className="display text-3xl text-[var(--brand-orange)]">{y}</div>
                <h3 className="mt-3 text-base">{t}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-red)]">What we won't budge on</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Four things, non-negotiable.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {values.map((v, i) => (
            <div key={v.t} className="border-2 border-[var(--ink)] p-8">
              <div className="display text-4xl text-[var(--brand-red)]">0{i + 1}</div>
              <h3 className="mt-2 text-2xl">{v.t}</h3>
              <p className="mt-3 text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t-2 border-[var(--ink)] bg-[var(--brand-orange)]">
        <div className="container-x flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <h2 className="text-4xl md:text-5xl text-[var(--ink)] max-w-xl">Come see the workshop. Chai on us.</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[var(--ink)] px-8 py-4 font-bold uppercase tracking-wide text-primary-foreground hover:bg-[var(--brand-red)] transition">
            Find your nearest bay →
          </Link>
        </div>
      </section>
    </>
  );
}