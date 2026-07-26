import { createFileRoute, Link } from "@tanstack/react-router";
import engineImage from "@/assets/service-engine.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Car Services & Repair Packages — MotorKaka" },
      { name: "description", content: "Periodic service, denting-painting, AC service, battery, tyres, insurance claims and 24x7 roadside help — all under one roof." },
      { property: "og:title", content: "Car Services & Repair Packages — MotorKaka" },
      { property: "og:description", content: "Transparent packages for every Indian car — Maruti to Mahindra." },
    ],
  }),
  component: ServicesPage,
});

const categories = [
  {
    tag: "Everyday",
    title: "Periodic Servicing",
    desc: "The scheduled service your manufacturer recommends — done right and priced honestly.",
    items: [
      ["Basic Service", "Oil change · Air filter · Coolant top-up · 20-point check", "₹ 2,299"],
      ["Standard Service", "Basic + brake inspection · AC vents · wiper blades", "₹ 3,499"],
      ["Comprehensive Service", "Full fluid replacement · engine flush · 40-point check", "₹ 5,999"],
    ],
  },
  {
    tag: "Comfort",
    title: "AC & Electricals",
    desc: "Because Indian summers don't forgive a lazy compressor.",
    items: [
      ["AC Gas Refill", "Leak test · vacuum · R134a top-up", "₹ 1,999"],
      ["AC Cooling Kit", "Coil clean · condenser wash · cabin filter", "₹ 3,299"],
      ["Wiring & Sensor Repair", "Diagnostic scan · ECU / sensor fix", "₹ 1,499+"],
    ],
  },
  {
    tag: "Body Shop",
    title: "Denting, Painting & Detailing",
    desc: "Sikkens paint booth, dust-free bay and a colour-matching guarantee.",
    items: [
      ["Single Panel Paint", "Bare-metal prep · 3 coats · lacquer", "₹ 2,499"],
      ["Full Body Paint", "18-panel repaint · anti-rust · 2-year warranty", "₹ 34,999"],
      ["Ceramic Coating", "9H hardness · 3-year gloss protection", "₹ 12,999"],
    ],
  },
  {
    tag: "Wheels",
    title: "Tyres, Alignment & Battery",
    desc: "Doorstep fitting for tyres and batteries within 90 minutes.",
    items: [
      ["Wheel Alignment + Balancing", "Camber · toe · nitrogen fill", "₹ 899"],
      ["Tyre Replacement", "MRF · CEAT · Apollo · Bridgestone", "₹ 3,499+"],
      ["Battery Replacement", "Amaron / Exide · 55-month warranty", "₹ 4,899"],
    ],
  },
  {
    tag: "Emergency",
    title: "24×7 Roadside Assistance",
    desc: "Stuck on the expressway? A tow van is 40 minutes away.",
    items: [
      ["On-Spot Repair", "Battery jumpstart · flat tyre · fuel delivery", "₹ 799"],
      ["Flatbed Towing", "Up to 25 km included", "₹ 1,999"],
      ["Accident Recovery", "Cashless insurance coordination", "Free with plan"],
    ],
  },
  {
    tag: "Paperwork",
    title: "Insurance & RTO Services",
    desc: "We handle the paperwork so you don't have to visit the RTO office.",
    items: [
      ["Insurance Renewal", "Compare 12 insurers · zero-dep · engine cover", "Free assist"],
      ["Claim Assistance", "Surveyor coordination · cashless network", "Included"],
      ["Fitness & RC Transfer", "Doorstep pickup of documents", "₹ 1,499"],
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="border-b-2 border-[var(--ink)] bg-[var(--cream)]">
        <div className="container-x grid gap-10 py-16 md:grid-cols-[1.4fr_1fr] items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-red)]">Services</p>
            <h1 className="mt-3 text-5xl md:text-6xl">Everything your car needs, priced in plain rupees.</h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              From a two-hour oil change to a two-week full body respray, every job runs through the same 40-point inspection, OEM-parts policy and WhatsApp status updates.
            </p>
          </div>
          <img src={engineImage} alt="Engine service" width={1200} height={900} loading="lazy" className="border-4 border-[var(--ink)] shadow-[8px_8px_0_0_var(--brand-red)]" />
        </div>
      </section>

      <section className="container-x py-20 space-y-16">
        {categories.map((cat) => (
          <div key={cat.title} className="grid gap-8 md:grid-cols-[280px_1fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--brand-red)]">{cat.tag}</span>
              <h2 className="mt-2 text-3xl md:text-4xl">{cat.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{cat.desc}</p>
            </div>
            <div className="border-2 border-[var(--ink)] divide-y-2 divide-[var(--ink)]/10 bg-card">
              {cat.items.map(([n, d, p]) => (
                <div key={n} className="grid grid-cols-1 gap-3 p-5 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <h3 className="text-lg font-bold">{n}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="display text-lg text-[var(--brand-red)] whitespace-nowrap">{p}</span>
                    <Link to="/contact" className="text-xs font-bold uppercase tracking-wide border-b-2 border-[var(--ink)] hover:text-[var(--brand-red)] hover:border-[var(--brand-red)]">Book</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="border-t-2 border-[var(--ink)] bg-[var(--ink)] text-primary-foreground">
        <div className="container-x flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl md:text-4xl">Not sure which package fits?</h2>
            <p className="mt-2 text-primary-foreground/70">Send us the car model and last service date — we'll recommend the right one.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[var(--brand-red)] px-8 py-4 font-bold uppercase tracking-wide">
            Get a recommendation →
          </Link>
        </div>
      </section>
    </>
  );
}