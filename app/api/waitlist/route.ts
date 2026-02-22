import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const rawEmail = String(body?.email ?? "");
    const source = body?.source ? String(body.source) : "landing";

    const email = normalizeEmail(rawEmail);

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("waitlist_emails")
      .upsert(
        { email, source },
        { onConflict: "email" }
      );

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { ok: false, error: "Database error" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}