import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Service — Contact MotorKaka" },
      { name: "description", content: "Book a car service, request roadside help or find your nearest MotorKaka workshop. Call 1800-123-456 or drop us a message." },
      { property: "og:title", content: "Book a Service — Contact MotorKaka" },
      { property: "og:description", content: "Book a slot, request pickup or chat on WhatsApp." },
    ],
  }),
  component: ContactPage,
});

const workshops = [
  { city: "Mumbai — Andheri", addr: "Plot 42, MIDC, Andheri East, Mumbai 400093", ph: "+91 98200 12345", hrs: "Mon–Sat · 8am – 9pm" },
  { city: "Pune — Kothrud", addr: "Shop 5, Paud Road, Kothrud, Pune 411038", ph: "+91 98600 23456", hrs: "Mon–Sun · 9am – 8pm" },
  { city: "Bengaluru — HSR", addr: "27th Main, HSR Layout, Bengaluru 560102", ph: "+91 98450 34567", hrs: "Mon–Sat · 8am – 9pm" },
  { city: "Delhi — Okhla", addr: "B-19, Phase II, Okhla Industrial Area, New Delhi 110020", ph: "+91 98110 45678", hrs: "Mon–Sat · 9am – 8pm" },
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="border-b-2 border-[var(--ink)] bg-[var(--cream)]">
        <div className="container-x py-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-red)]">Contact</p>
          <h1 className="mt-3 max-w-3xl text-5xl md:text-6xl">Book a slot. Or just tell us what's rattling.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Fill the form and a service advisor calls you back within 20 minutes — or skip the queue and dial our helpline.
          </p>
        </div>
      </section>

      <section className="container-x grid gap-12 py-20 lg:grid-cols-[1.2fr_1fr]">
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="border-2 border-[var(--ink)] bg-card p-8 shadow-[10px_10px_0_0_var(--brand-red)]"
        >
          <h2 className="text-3xl">Request a callback</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <Field label="Your name" name="name" placeholder="Ravi Kumar" />
            <Field label="Mobile number" name="phone" placeholder="+91 " />
            <Field label="Car make & model" name="car" placeholder="Hyundai Creta 2021" />
            <Field label="City" name="city" placeholder="Mumbai" />
          </div>
          <div className="mt-5">
            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Service needed</label>
            <select className="mt-2 w-full border-2 border-[var(--ink)] bg-background p-3 text-sm focus:outline-none focus:border-[var(--brand-red)]">
              <option>Periodic service</option>
              <option>AC repair</option>
              <option>Denting & painting</option>
              <option>Battery / tyres</option>
              <option>Insurance claim</option>
              <option>Roadside assistance</option>
              <option>Not sure — please advise</option>
            </select>
          </div>
          <div className="mt-5">
            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Describe the issue</label>
            <textarea rows={4} placeholder="Any noise, warning light or symptom you've noticed…" className="mt-2 w-full border-2 border-[var(--ink)] bg-background p-3 text-sm focus:outline-none focus:border-[var(--brand-red)]" />
          </div>
          <button type="submit" className="mt-6 w-full bg-[var(--brand-red)] px-6 py-4 font-bold uppercase tracking-wide text-primary-foreground hover:bg-[var(--ink)] transition">
            {sent ? "✓ Received — we'll call you back" : "Request callback →"}
          </button>
          <p className="mt-3 text-xs text-muted-foreground">By submitting you agree to be contacted about your service enquiry.</p>
        </form>

        <aside className="space-y-6">
          <div className="border-2 border-[var(--ink)] bg-[var(--ink)] p-6 text-primary-foreground">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-orange)]">24×7 helpline</p>
            <a href="tel:+911800123456" className="display mt-2 block text-4xl">1800-123-456</a>
            <p className="mt-2 text-sm text-primary-foreground/70">Roadside emergencies · breakdown towing · accident assistance.</p>
          </div>
          <div className="border-2 border-[var(--ink)] p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-red)]">WhatsApp</p>
            <p className="mt-2 display text-2xl">+91 98200 12345</p>
            <p className="mt-2 text-sm text-muted-foreground">Send a photo of the dashboard warning — we'll tell you if it's urgent.</p>
          </div>
          <div className="border-2 border-[var(--ink)] p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-red)]">Email</p>
            <p className="mt-2 display text-2xl">help@motorkaka.in</p>
            <p className="mt-2 text-sm text-muted-foreground">For insurance paperwork, fleet enquiries or feedback.</p>
          </div>
        </aside>
      </section>

      <section className="border-t-2 border-[var(--ink)] bg-[var(--cream)]">
        <div className="container-x py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--brand-red)]">Workshops</p>
          <h2 className="mt-3 text-4xl md:text-5xl">Drop by any bay.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {workshops.map((w) => (
              <div key={w.city} className="border-2 border-[var(--ink)] bg-card p-6 hover:shadow-[6px_6px_0_0_var(--brand-red)] transition">
                <h3 className="text-lg font-bold">{w.city}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.addr}</p>
                <p className="mt-4 text-sm"><span className="text-muted-foreground">Phone · </span>{w.ph}</p>
                <p className="text-sm"><span className="text-muted-foreground">Hours · </span>{w.hrs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, placeholder }: { label: string; name: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</label>
      <input id={name} name={name} placeholder={placeholder} className="mt-2 w-full border-2 border-[var(--ink)] bg-background p-3 text-sm focus:outline-none focus:border-[var(--brand-red)]" />
    </div>
  );
}