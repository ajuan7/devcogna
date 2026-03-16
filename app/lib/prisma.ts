import { PrismaClient } from "@/app/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

function createPrismaClient() {
  // Parse the connection URL manually so we can control SSL without interference
  // from pg-connection-string v3, which treats sslmode=require as verify-full
  // and fails against Supabase's certificate chain.
  const raw = new URL(process.env.DIRECT_URL!);
  const pool = new Pool({
    host: raw.hostname,
    port: Number(raw.port) || 5432,
    database: raw.pathname.slice(1),
    user: decodeURIComponent(raw.username),
    password: decodeURIComponent(raw.password),
    ssl: { rejectUnauthorized: false },
  });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
}

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
