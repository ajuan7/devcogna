import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { getOrCreateUser } from "@/app/lib/queries/user";
import { getNextQuestion } from "@/app/lib/queries/practice";

export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await getOrCreateUser(userId);

  const result = await getNextQuestion();
  if (!result) {
    return NextResponse.json({ error: "No questions available" }, { status: 404 });
  }

  return NextResponse.json(result);
}
