import "dotenv/config";
import { PrismaClient, Difficulty } from "../app/generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

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
const prisma = new PrismaClient({ adapter });

const patterns = [
  { name: "Two Pointers", slug: "two-pointers" },
  { name: "Sliding Window", slug: "sliding-window" },
  { name: "Fast & Slow Pointers", slug: "fast-slow-pointers" },
  { name: "Binary Search", slug: "binary-search" },
  { name: "BFS", slug: "bfs" },
  { name: "DFS / Backtracking", slug: "dfs-backtracking" },
  { name: "Dynamic Programming", slug: "dynamic-programming" },
  { name: "Heap / Priority Queue", slug: "heap-priority-queue" },
  { name: "Merge Intervals", slug: "merge-intervals" },
  { name: "Monotonic Stack", slug: "monotonic-stack" },
  { name: "Prefix Sum", slug: "prefix-sum" },
  { name: "Hash Map / Set", slug: "hash-map-set" },
];

type QuestionSeed = {
  prompt: string;
  difficulty: Difficulty;
  tags: string[];
  patternSlug: string;
};

const questions: QuestionSeed[] = [
  // Two Pointers
  {
    prompt: "Given a sorted array of integers, find two numbers that sum to a given target. Return their indices.",
    difficulty: "EASY",
    tags: ["array", "sorting"],
    patternSlug: "two-pointers",
  },
  {
    prompt: "Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring case.",
    difficulty: "EASY",
    tags: ["string"],
    patternSlug: "two-pointers",
  },

  // Sliding Window
  {
    prompt: "Find the maximum sum of any contiguous subarray of exactly size k.",
    difficulty: "EASY",
    tags: ["array", "subarray"],
    patternSlug: "sliding-window",
  },
  {
    prompt: "Find the length of the longest substring containing at most k distinct characters.",
    difficulty: "MEDIUM",
    tags: ["string", "hash map"],
    patternSlug: "sliding-window",
  },

  // Fast & Slow Pointers
  {
    prompt: "Given the head of a linked list, determine if the list contains a cycle.",
    difficulty: "EASY",
    tags: ["linked list"],
    patternSlug: "fast-slow-pointers",
  },
  {
    prompt: "Given the head of a linked list, return the middle node. If there are two middle nodes, return the second one.",
    difficulty: "EASY",
    tags: ["linked list"],
    patternSlug: "fast-slow-pointers",
  },

  // Binary Search
  {
    prompt: "Given a rotated sorted array with no duplicates, search for a target value. Return its index or -1.",
    difficulty: "MEDIUM",
    tags: ["array", "sorting"],
    patternSlug: "binary-search",
  },
  {
    prompt: "Given an array of integers where every element appears twice except for one, find the element that appears only once. The array is sorted.",
    difficulty: "MEDIUM",
    tags: ["array", "bit manipulation"],
    patternSlug: "binary-search",
  },

  // BFS
  {
    prompt: "Given a binary tree, return the level-order traversal of its node values (from left to right, level by level).",
    difficulty: "MEDIUM",
    tags: ["tree", "queue"],
    patternSlug: "bfs",
  },
  {
    prompt: "Given an m×n grid of '1's (land) and '0's (water), count the number of islands.",
    difficulty: "MEDIUM",
    tags: ["graph", "grid"],
    patternSlug: "bfs",
  },

  // DFS / Backtracking
  {
    prompt: "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    difficulty: "MEDIUM",
    tags: ["string", "recursion"],
    patternSlug: "dfs-backtracking",
  },
  {
    prompt: "Given an array of distinct integers, return all possible subsets (the power set).",
    difficulty: "MEDIUM",
    tags: ["array", "recursion"],
    patternSlug: "dfs-backtracking",
  },

  // Dynamic Programming
  {
    prompt: "Given an array of coin denominations and a target amount, return the minimum number of coins needed to make up that amount.",
    difficulty: "MEDIUM",
    tags: ["array", "optimization"],
    patternSlug: "dynamic-programming",
  },
  {
    prompt: "Given an unsorted array of integers, find the length of the longest strictly increasing subsequence.",
    difficulty: "MEDIUM",
    tags: ["array", "subsequence"],
    patternSlug: "dynamic-programming",
  },

  // Heap / Priority Queue
  {
    prompt: "Given an integer array and a number k, return the k largest elements in the array.",
    difficulty: "MEDIUM",
    tags: ["array", "sorting"],
    patternSlug: "heap-priority-queue",
  },
  {
    prompt: "You are given an array of k sorted linked lists. Merge them all into one sorted linked list.",
    difficulty: "HARD",
    tags: ["linked list", "sorting"],
    patternSlug: "heap-priority-queue",
  },

  // Merge Intervals
  {
    prompt: "Given a list of intervals, merge all overlapping intervals and return an array of the non-overlapping intervals.",
    difficulty: "MEDIUM",
    tags: ["array", "sorting"],
    patternSlug: "merge-intervals",
  },
  {
    prompt: "Given a list of non-overlapping intervals sorted by start time, insert a new interval and merge if necessary.",
    difficulty: "MEDIUM",
    tags: ["array"],
    patternSlug: "merge-intervals",
  },

  // Monotonic Stack
  {
    prompt: "Given an array, for each element find the next greater element to its right. Return -1 if none exists.",
    difficulty: "MEDIUM",
    tags: ["array", "stack"],
    patternSlug: "monotonic-stack",
  },
  {
    prompt: "Given an array of integers representing the heights of bars in a histogram, find the area of the largest rectangle.",
    difficulty: "HARD",
    tags: ["array", "stack"],
    patternSlug: "monotonic-stack",
  },

  // Prefix Sum
  {
    prompt: "Given an array of integers and a target k, find the total number of contiguous subarrays whose sum equals k.",
    difficulty: "MEDIUM",
    tags: ["array", "hash map"],
    patternSlug: "prefix-sum",
  },
  {
    prompt: "Given a 2D matrix of integers, handle multiple queries that ask for the sum of elements in a subregion.",
    difficulty: "MEDIUM",
    tags: ["matrix", "query"],
    patternSlug: "prefix-sum",
  },

  // Hash Map / Set
  {
    prompt: "Given a string, find the first non-repeating character and return its index. Return -1 if none exists.",
    difficulty: "EASY",
    tags: ["string", "frequency"],
    patternSlug: "hash-map-set",
  },
  {
    prompt: "Given an unsorted array of integers, determine if any value appears at least twice.",
    difficulty: "EASY",
    tags: ["array"],
    patternSlug: "hash-map-set",
  },
];

async function main() {
  console.log("Seeding patterns...");

  for (const p of patterns) {
    await prisma.pattern.upsert({
      where: { slug: p.slug },
      update: { name: p.name },
      create: { name: p.name, slug: p.slug },
    });
  }

  console.log(`Seeded ${patterns.length} patterns.`);

  const patternMap = await prisma.pattern
    .findMany({ select: { id: true, slug: true } })
    .then((rows) => Object.fromEntries(rows.map((r) => [r.slug, r.id])));

  console.log("Seeding questions...");

  for (const q of questions) {
    const patternId = patternMap[q.patternSlug];
    if (!patternId) {
      console.warn(`Pattern not found for slug: ${q.patternSlug}`);
      continue;
    }
    await prisma.question.create({
      data: {
        prompt: q.prompt,
        difficulty: q.difficulty,
        tags: q.tags,
        patternId,
      },
    });
  }

  console.log(`Seeded ${questions.length} questions.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
