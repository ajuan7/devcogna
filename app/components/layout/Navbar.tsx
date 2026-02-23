"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Container from "./Container";
import { Menu, X } from "lucide-react";

type NavItem = { label: string; href: string };

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const items: NavItem[] = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Waitlist", href: "/#waitlist" },
    ],
    []
  );

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink-950">
      <Container>
        <div className="relative flex h-20 items-center justify-center md:justify-between">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="absolute left-0 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-ink-900 text-white/80 hover:bg-ink-800 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <a href="" className="flex items-center min-w-0">
            <div className="relative h-25 w-[60vw] max-w-[220px] sm:w-[240px] lg:w-[280px]">
              <Image
                src="/Logos/Logo-wText-Transparent.png"
                alt="DevCogna"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 60vw, 280px"
              />
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-white transition"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="rounded-3xl border border-white/10 bg-ink-900 p-3">
              <nav className="flex flex-col">
                {items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm text-white/80 hover:bg-ink-800"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}