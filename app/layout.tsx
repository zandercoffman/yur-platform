
import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Image from "next/image";


import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "AI Workspace",
  description: "Your unified AI workspace and project hub.",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
      <body className="min-h-svh bg-background text-foreground antialiased">
        <SidebarProvider>
          <AppSidebar />

          <SidebarInset>
            <header className="flex h-14 items-center gap-3 border-b border-border/60 bg-background/70 px-4 backdrop-blur-sm">
              <Image src="/icon.png" alt="Logo" width={48} height={48} />
              <SidebarTrigger />
            </header>

            <main className="flex-1 px-2 py-4">{children}</main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
