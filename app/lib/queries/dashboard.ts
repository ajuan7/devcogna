import { prisma } from "@/app/lib/prisma";

export type PatternRow = {
  id: string;
  name: string;
  total: number;
  correct: number;
  accuracy: number;
  avgMs: number | null;
};

export type RecentAttempt = {
  id: string;
  isCorrect: boolean;
  responseTimeMs: number;
  question: { prompt: string };
  correctPattern: { name: string };
  patternSelected: { name: string };
};

export type DashboardData = {
  totalAttempts: number;
  accuracy: number;
  avgResponseMs: number | null;
  hasData: boolean;
  patternRows: PatternRow[];
  recentAttempts: RecentAttempt[];
};

export async function getDashboardData(userId: string): Promise<DashboardData> {
  const [totalAttempts, correctAttempts, recentAttempts, totalByPattern, correctByPattern] =
    await Promise.all([
      prisma.attempt.count({ where: { userId } }),
      prisma.attempt.count({ where: { userId, isCorrect: true } }),
      prisma.attempt.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
        take: 10,
        include: {
          question: { select: { prompt: true, difficulty: true } },
          correctPattern: { select: { name: true } },
          patternSelected: { select: { name: true } },
        },
      }),
      prisma.attempt.groupBy({
        by: ["correctPatternId"],
        where: { userId },
        _count: { id: true },
        _avg: { responseTimeMs: true },
      }),
      prisma.attempt.groupBy({
        by: ["correctPatternId"],
        where: { userId, isCorrect: true },
        _count: { id: true },
      }),
    ]);

  const avgResponseMs =
    totalAttempts > 0
      ? await prisma.attempt
          .aggregate({ where: { userId }, _avg: { responseTimeMs: true } })
          .then((r) => r._avg.responseTimeMs)
      : null;

  const accuracy = totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 0;

  const correctMap = Object.fromEntries(
    correctByPattern.map((r) => [r.correctPatternId, r._count.id])
  );

  const patternIds = totalByPattern.map((r) => r.correctPatternId);
  const patternNames =
    patternIds.length > 0
      ? await prisma.pattern
          .findMany({ where: { id: { in: patternIds } }, select: { id: true, name: true } })
          .then((rows) => Object.fromEntries(rows.map((r) => [r.id, r.name])))
      : {};

  const patternRows: PatternRow[] = totalByPattern
    .map((row) => ({
      id: row.correctPatternId,
      name: patternNames[row.correctPatternId] ?? "Unknown",
      total: row._count.id,
      correct: correctMap[row.correctPatternId] ?? 0,
      accuracy: Math.round(((correctMap[row.correctPatternId] ?? 0) / row._count.id) * 100),
      avgMs: row._avg.responseTimeMs,
    }))
    .sort((a, b) => b.total - a.total);

  return {
    totalAttempts,
    accuracy,
    avgResponseMs,
    hasData: totalAttempts > 0,
    patternRows,
    recentAttempts,
  };
}
