"use client";

import Container from "@/app/components/layout/Container";
import React from "react";

export default function WaitlistForm() {
  return (
    <section id="waitlist" className="border-t border-white/5 py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-3xl font-semibold">Join the waitlist</h3>
          <p className="mt-4 text-white/60">
            Early users get discounted Pro access and Sprint Mode.
          </p>

          <form
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: call /api/waitlist (Resend + DB)
              alert("Submitted (placeholder)");
            }}
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="h-14 flex-1 rounded-2xl border border-white/10 bg-ink-900 px-5 text-white placeholder:text-white/40 focus:border-aura-400/50 focus:outline-none"
            />
            <button className="h-14 rounded-2xl bg-aura-500 px-8 font-semibold text-ink-950 hover:bg-aura-400">
              Notify Me
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}