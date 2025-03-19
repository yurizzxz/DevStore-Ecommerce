import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "DevStore",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>

      <body className="bg-black text-[#f5eeff]">
        <main>
          <Navbar />
          <AuthProvider>
            <div className="max-w-[1440] mx-auto px-6 pt-45 md:pt-45 md:py-0">
              {children}
            </div>
          </AuthProvider>
        </main>
      </body>
    </html>
  );
}
