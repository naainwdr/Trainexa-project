import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trainexa — Platform Pelatihan Olahraga Nomor 1",
  description: "Terhubung dengan pelatih olahraga profesional untuk sesi privat, latihan kelompok, dan program peningkatan performa terbaik.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
