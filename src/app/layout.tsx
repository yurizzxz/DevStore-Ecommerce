import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // biome-ignore lint/a11y/useValidLang: <explanation>
    <html lang="pt-br">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>

      <body className="bg-black text-[#f5eeff]">
        <main>
          <Navbar />
          <div className="max-w-[1240] mx-auto px-6  md:py-0">{children}</div>
        </main>
      </body>
    </html>
  );
}
