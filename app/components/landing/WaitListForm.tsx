"use client";

import Container from "@/app/components/layout/Container";
import React, { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "landing" }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data?.error || "Something went wrong.");
      } else {
        setMessage("You're on the waitlist 🚀");
        setEmail("");
      }
    } catch {
      setMessage("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="waitlist" className="border-t border-white/5 py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-900/70 px-4 py-2 text-xs font-medium tracking-wide text-white/50">
            <span className="uppercase">Full Version</span>
          </div>
          <h3 className="text-3xl font-semibold">Be first when v1.0 ships</h3>
          <p className="mt-4 text-white/60">
            Early access is live now. The full version — AI explanations, flashcard review, and billing — is in development. Leave your email and we'll reach out first.
          </p>

          <form onSubmit={handleSubmit} className="mt-10">
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="h-14 flex-1 rounded-2xl border border-white/10 bg-ink-900 px-5 text-white placeholder:text-white/40 focus:border-aura-400/50 focus:outline-none"
                disabled={loading}
              />

              <button
                type="submit"
                disabled={loading}
                className="h-14 rounded-2xl bg-aura-500 px-8 font-semibold text-ink-950 hover:bg-aura-400 disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Notify Me"}
              </button>
            </div>

            {message && (
              <p className="mt-4 text-sm text-white/60">{message}</p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}