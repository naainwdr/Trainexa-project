"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/user", label: "Beranda" },
  { href: "/user/kategori", label: "Kategori" },
  { href: "/user/pelatih", label: "Pelatih" },
  { href: "/user/ulasan", label: "Ulasan" },
  { href: "/user/aktivitas", label: "Aktivitas" },
];

interface NavbarUserProps {
  userName?: string;
}

export default function NavbarUser({ userName = "Dina Agustina" }: NavbarUserProps) {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      {/* Bagian Kiri: Logo */}
      <Link href="/user" style={{ textDecoration: "none" }}>
        <div className="navbar-logo">
          train<span>exa</span>
        </div>
      </Link>

      {/* Menu */}
      <ul className="navbar-menu">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/user"
              ? pathname === "/user"
              : pathname.startsWith(link.href);
          return (
            <li key={link.href}>
              <Link href={link.href} className={isActive ? "active" : ""}>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* User Greeting + Avatar */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Link href="/user/profil" style={{ textDecoration: "none" }}>
          <button
            style={{
              background: "#fcc419",
              color: "#1a1a1a",
              border: "none",
              padding: "9px 18px",
              borderRadius: "10px",
              fontWeight: 700,
              fontSize: "13px",
              cursor: "pointer",
              fontFamily: "var(--font)",
              whiteSpace: "nowrap",
            }}
          >
            Hi, {userName}!
          </button>
        </Link>
        <Link href="/user/profil" style={{ textDecoration: "none" }}>
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #FFD700, #f0a500)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: 900,
              color: "#000",
              border: "2px solid rgba(255,215,0,0.4)",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            {userName[0]}
          </div>
        </Link>
      </div>
    </nav>
  );
}
