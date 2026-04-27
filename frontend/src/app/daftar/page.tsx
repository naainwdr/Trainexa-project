"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

export default function DaftarPage() {
  const router = useRouter();

  return (
    <div style={{ minHeight: "100vh", background: "#000", display: "flex", flexDirection: "column" }}>
      {/* ─── NAVBAR ─── */}
      <nav className="navbar">
        {/* Bagian Kiri: Logo */}
        <div className="navbar-logo">
          train<span>exa</span>
        </div>

        {/* Bagian Tengah: Menu */}
        <ul className="navbar-menu">
          <li><Link href="/">Beranda</Link></li>
          <li><Link href="/olahraga">Olahraga</Link></li>
          <li><Link href="/cara-kerja">Cara Kerja</Link></li>
          <li><Link href="/pelatih">Pelatih</Link></li>
          <li><Link href="/ulasan">Ulasan</Link></li>
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

      {/* ─── CONTENT ─── */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "100px 20px 60px" }}>
        <div style={{
          background: "#FFFFFF", // Diubah menjadi Putih
          border: "1px solid #EEEEEE", // Border disesuaikan agar halus di warna putih
          borderRadius: "28px",
          padding: "56px 64px",
          maxWidth: "640px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 25px 50px rgba(0,0,0,0.1)" // Shadow diperhalus untuk background putih
        }}>
          {/* Logo */}
          <div style={{ marginBottom: "20px" }}>
            {/* <span style={{ fontSize: "14px" }}>🏅</span> */}
            <span style={{ fontSize: "26px", fontWeight: "800", color: "#fcc419", marginLeft: "6px" }}>
              train<span style={{ color: "#1a1a1a" }}>exa</span> {/* Warna teks "exa" diubah ke gelap agar terbaca */}
            </span>
          </div>

          <h1 style={{ fontSize: "30px", fontWeight: "800", marginBottom: "10px", lineHeight: 1.2, color: "#1a1a1a" }}>
            Mulai <span style={{ color: "#fcc419", fontStyle: "italic" }}>semangat</span> Anda
          </h1>
          <p style={{ fontSize: "15px", color: "#666666", marginBottom: "40px", lineHeight: 1.6 }}>
            Pilih bagaimana Anda ingin bergabung dengan kami?
          </p>

          {/* Role Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px", marginBottom: "32px" }}>
            {/* Anggota */}
            <button
              onClick={() => router.push("/daftar/member")}
              style={{
                background: "#fcc419",
                border: "none",
                borderRadius: "18px",
                padding: "28px 20px",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.25s",
                fontFamily: "var(--font)",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(252,196,25,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ fontSize: "36px", marginBottom: "14px" }}>🧑‍🤝‍🧑</div>
              <p style={{ fontSize: "15px", fontWeight: "800", color: "#000", marginBottom: "8px" }}>
                Bergabung sebagai Anggota
              </p>
              <p style={{ fontSize: "12px", color: "rgba(0,0,0,0.6)", lineHeight: 1.6 }}>
                Temukan pelatih profesional, atur jadwal latihan, dan capai target fisik Anda dengan monitoring detail.
              </p>
            </button>

            {/* Pelatih */}
            <button
              onClick={() => router.push("/daftar/pelatih")}
              style={{
                background: "#f8f9fa", // Warna abu-abu sangat muda agar kontras dengan card putih
                border: "1.5px solid #eeeeee",
                borderRadius: "18px",
                padding: "28px 20px",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.25s",
                fontFamily: "var(--font)",
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "#fcc419"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "#eeeeee"; }}
            >
              <div style={{ fontSize: "36px", marginBottom: "14px" }}>🏋️</div>
              <p style={{ fontSize: "15px", fontWeight: "800", color: "#1a1a1a", marginBottom: "8px" }}>
                Bergabung sebagai Pelatih
              </p>
              <p style={{ fontSize: "12px", color: "#666666", lineHeight: 1.6 }}>
                Bangun reputasi Anda, kelola klien secara profesional, dan tingkatkan pendapatan dari keahlian olahraga Anda.
              </p>
            </button>
          </div>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "0 0 20px" }}>
            <div style={{ flex: 1, height: "1px", background: "#eeeeee" }} />
            <span style={{ fontSize: "13px", color: "#999999" }}>atau</span>
            <div style={{ flex: 1, height: "1px", background: "#eeeeee" }} />
          </div>

          <p style={{ fontSize: "14px", color: "#666666" }}>
            Sudah punya akun?{" "}
            <Link href="/masuk" style={{ color: "#fcc419", fontWeight: "700" }}>
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
