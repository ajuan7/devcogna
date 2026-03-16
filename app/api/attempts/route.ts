import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { getOrCreateUser } from "@/app/lib/queries/user";
import { submitAttempt } from "@/app/lib/queries/practice";

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { questionId, patternSelectedId, responseTimeMs } = body;

  if (!questionId || !patternSelectedId || typeof responseTimeMs !== "number") {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const user = await getOrCreateUser(userId);
  const result = await submitAttempt(user.id, questionId, patternSelectedId, responseTimeMs);

  if (!result) {
    return NextResponse.json({ error: "Question not found" }, { status: 404 });
  }

  return NextResponse.json(result);
}
