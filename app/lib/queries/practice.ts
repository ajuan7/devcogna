import { prisma } from "@/app/lib/prisma";

export async function getNextQuestion() {
  const [count, patterns] = await Promise.all([
    prisma.question.count(),
    prisma.pattern.findMany({ orderBy: { name: "asc" } }),
  ]);

  if (count === 0) return null;

  const skip = Math.floor(Math.random() * count);
  const question = await prisma.question.findFirst({
    skip,
    include: { pattern: { select: { id: true, name: true, slug: true } } },
  });

  return { question, patterns };
}

export async function submitAttempt(
  userId: string,
  questionId: string,
  patternSelectedId: string,
  responseTimeMs: number
) {
  const question = await prisma.question.findUnique({
    where: { id: questionId },
    select: { patternId: true },
  });

  if (!question) return null;

  const correctPatternId = question.patternId;
  const isCorrect = patternSelectedId === correctPatternId;

  const attempt = await prisma.attempt.create({
    data: { userId, questionId, patternSelectedId, correctPatternId, isCorrect, responseTimeMs },
  });

  if (!isCorrect) {
    const [selected, correct, q] = await Promise.all([
      prisma.pattern.findUnique({ where: { id: patternSelectedId }, select: { name: true } }),
      prisma.pattern.findUnique({ where: { id: correctPatternId }, select: { name: true } }),
      prisma.question.findUnique({ where: { id: questionId }, select: { prompt: true } }),
    ]);

    if (selected && correct && q) {
      await prisma.flashcard.create({
        data: {
          userId,
          patternId: correctPatternId,
          front: q.prompt,
          back: `This maps to the **${correct.name}** pattern.\n\nYou selected: ${selected.name}`,
          sourceAttemptId: attempt.id,
        },
      });
    }
  }

  return { isCorrect, correctPatternId };
}
