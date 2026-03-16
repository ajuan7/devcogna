import Background from "@/app/components/layout/Background";
import Navbar from "@/app/components/layout/Navbar";
import Container from "@/app/components/layout/Container";
import DashboardHeader from "@/app/components/dashboard/DashboardHeader";
import DashboardStats from "@/app/components/dashboard/DashboardStats";
import DashboardEmpty from "@/app/components/dashboard/DashboardEmpty";
import PatternPerformance from "@/app/components/dashboard/PatternPerformance";
import RecentActivity from "@/app/components/dashboard/RecentActivity";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getOrCreateUser } from "@/app/lib/queries/user";
import { getDashboardData } from "@/app/lib/queries/dashboard";

export default async function Dashboard() {
  const { userId } = await auth();
  if (!userId) return redirect("/sign-in");

  const user = await getOrCreateUser(userId);
  const data = await getDashboardData(user.id);

  return (
    <div className="min-h-screen bg-ink-950 text-white overflow-x-hidden">
      <Background />
      <Navbar />

      <main>
        <DashboardHeader />

        <Container>
          <div className="pb-12 max-w-5xl mx-auto">
            <DashboardStats
              totalAttempts={data.totalAttempts}
              accuracy={data.accuracy}
              avgResponseMs={data.avgResponseMs}
              hasData={data.hasData}
            />

            {!data.hasData && <DashboardEmpty />}

            {data.hasData && (
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <PatternPerformance rows={data.patternRows} />
                <RecentActivity attempts={data.recentAttempts} />
              </div>
            )}
          </div>
        </Container>
      </main>
    </div>
  );
}
