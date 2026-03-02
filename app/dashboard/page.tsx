import Background from "@/app/components/layout/Background";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs/server'

export default async function Dashboard() {
    const { isAuthenticated, redirectToSignIn, userId } = await auth()

    if (!isAuthenticated) return redirectToSignIn()
    return (
        <div className="min-h-screen bg-ink-950 text-white overflow-x-hidden">
            <Background />
            <Navbar />
            <h1>Welcome</h1>

            <Footer />
        </div>
    )
}