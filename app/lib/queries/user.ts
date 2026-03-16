import { prisma } from "@/app/lib/prisma";

export async function getOrCreateUser(clerkUserId: string) {
  return prisma.user.upsert({
    where: { clerkUserId },
    create: { clerkUserId },
    update: {},
  });
}
