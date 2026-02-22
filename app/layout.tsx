import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevCogna — Pattern Recognition Training for Technical Interviews",
  description:
    "DevCogna trains algorithm pattern recognition speed for coding interviews.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "DevCogna",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    description:
      "Pattern recognition training platform for technical interviews.",
    creator: {
      "@type": "Person",
      name: "Angelo Juanico",
      jobTitle: "Founder",
      sameAs: [
        "https://www.instagram.com/devcogna",
        "https://www.linkedin.com/in/angelo-juanico",
      ],
    },
  };

  return (
    <html lang="en-AU">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}