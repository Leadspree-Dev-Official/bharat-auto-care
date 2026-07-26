import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { BrandProvider } from '@/components/brand-demo/BrandProvider';
import { OnboardingModal, BrandResetButton } from '@/components/brand-demo/OnboardingModal';

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MotorKaka — Trusted Car Repair & Service in India" },
      { name: "description", content: "MotorKaka is India's neighbourhood car workshop. Expert multi-brand repair, periodic service, denting-painting and 24x7 roadside help." },
      { name: "author", content: "MotorKaka" },
      { property: "og:title", content: "MotorKaka — Trusted Car Repair & Service in India" },
      { property: "og:description", content: "Expert multi-brand car repair, periodic servicing and 24x7 roadside assistance across India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <BrandProvider>
      <OnboardingModal />
      <BrandResetButton />
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </BrandProvider>
    </QueryClientProvider>
  );
}

function SiteHeader() {
  const nav = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ] as const;
  return (
    <header className="sticky top-0 z-50 border-b-2 border-[var(--ink)] bg-[var(--cream)]/95 backdrop-blur">
      <div className="container-x flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center bg-[var(--brand-red)] text-primary-foreground font-black">M</span>
          <span className="display text-xl tracking-tight"><span data-brand-text="business-name">MOTOR</span><span className="text-[var(--brand-red)]">KAKA</span></span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-semibold uppercase tracking-wide text-foreground hover:text-[var(--brand-red)]" activeProps={{ className: "text-[var(--brand-red)]" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <a href="tel:+911800123456" className="hidden md:inline-flex items-center gap-2 border-2 border-[var(--ink)] bg-[var(--ink)] px-4 py-2 text-sm font-bold uppercase tracking-wide text-primary-foreground hover:bg-[var(--brand-red)] hover:border-[var(--brand-red)] transition">
          ☎ 1800-123-456
        </a>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t-2 border-[var(--ink)] bg-[var(--ink)] text-primary-foreground">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="display text-2xl"><span data-brand-text="business-name">MOTOR</span><span className="text-[var(--brand-orange)]">KAKA</span></div>
          <p className="mt-3 max-w-sm text-sm text-primary-foreground/70">India's most trusted neighbourhood car workshop. Serving 40+ cities since 2011.</p>
          <p className="mt-6 text-xs uppercase tracking-widest text-[var(--brand-orange)]">Workshop</p>
          <p className="mt-1 text-sm" data-brand-text="address">Plot 42, MIDC Industrial Area,<br/>Andheri East, Mumbai 400093</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-[var(--brand-orange)]">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-[var(--brand-orange)]">Reach us</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li data-brand-text="phone">+91 1800 123 456</li>
            <li>help@motorkaka.in</li>
            <li>Mon–Sat · 8am to 9pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-4 text-xs text-primary-foreground/60 md:flex-row">

          <div>
            <a href="/admin" className="text-sm hover:underline transition">🔑 Admin Console</a>
          </div>
          <p>© {new Date().getFullYear()} MotorKaka Auto Care Pvt. Ltd. All rights reserved.</p>
          <p>GSTIN 27AABCM1234K1Z5</p>
        </div>
        <div className="container-x pb-4 text-center text-xs text-primary-foreground/60">
          Developer: Aniruddha Das | Developed by LeadSpree Business Solutions
        </div>
      </div>
    </footer>
  );
}
