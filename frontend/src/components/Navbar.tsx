"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/kategori", label: "Kategori" },
  { href: "/cara-kerja", label: "Cara Kerja" },
  { href: "/pelatih", label: "Pelatih" },
  { href: "/ulasan", label: "Ulasan" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      {/* Bagian Kiri: Logo */}
      <div className="navbar-logo">
        train<span>exa</span>
      </div>

      {/* Bagian Tengah: Menu */}
      <ul className="navbar-menu">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={isActive ? "active" : ""}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Bagian Kanan: Actions */}
      <div className="navbar-actions">
        <Link href="/masuk">
          <button className="btn-masuk">Masuk</button>
        </Link>
        <Link href="/daftar">
          <button className="btn-daftar">Get Started</button>
        </Link>
      </div>
    </nav>
  );
}
