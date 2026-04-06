"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function MasukPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert("Login berhasil!");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0c0d10", display: "flex", flexDirection: "column" }}>

      {/* ─── NAVBAR (Mengikuti page.tsx) ─── */}
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

      {/* ─── CONTENT / LOGIN CARD ─── */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 20px 120px" // Jarak aman agar tidak menempel footer
      }}>
        <div style={{
          background: "#FFFFFF",
          borderRadius: "28px",
          padding: "56px 64px",
          maxWidth: "500px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 25px 50px rgba(0,0,0,0.4)"
        }}>

          <div style={{ marginBottom: "20px" }}>
            <span style={{ fontSize: "26px", fontWeight: "800", color: "#fcc419" }}>
              train<span style={{ color: "#1a1a1a" }}>exa</span>
            </span>
          </div>

          <h1 style={{ fontSize: "30px", fontWeight: "800", color: "#1a1a1a", marginBottom: "10px" }}>Selamat Datang</h1>
          <p style={{ fontSize: "15px", color: "#666", marginBottom: "35px" }}>Sign in to your account to continue</p>

          <form onSubmit={handleSubmit} style={{ textAlign: "left", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <label style={{ display: "block", fontSize: "14px", fontWeight: "700", color: "#1a1a1a", marginBottom: "8px" }}>Alamat Email</label>
              <input
                type="email"
                placeholder="name@example.com"
                style={{ width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1.5px solid #eee", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                required
              />
            </div>

            <div>
              <label style={{ display: "block", fontSize: "14px", fontWeight: "700", color: "#1a1a1a", marginBottom: "8px" }}>Kata Sandi</label>
              <input
                type="password"
                placeholder="*******"
                style={{ width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1.5px solid #eee", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                required
              />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px" }}>
              <label style={{ color: "#666", cursor: "pointer", display: "flex", alignItems: "center", gap: "5px" }}>
                <input type="checkbox" /> Ingatkan saya
              </label>
              <Link href="/lupa-password" style={{ color: "#007bff", textDecoration: "none", fontWeight: "600" }}>Lupa kata sandi?</Link>
            </div>

            <button type="submit" style={{
              width: "100%", background: "#fcc419", color: "#000", border: "none", padding: "16px",
              borderRadius: "15px", fontSize: "16px", fontWeight: "800", cursor: "pointer", marginTop: "10px"
            }}>
              Masuk
            </button>
          </form>

          <p style={{ marginTop: "30px", fontSize: "14px", color: "#666" }}>
            Tidak punya akun? <Link href="/daftar" style={{ color: "#fcc419", fontWeight: "700", textDecoration: "none" }}>Daftar Sekarang</Link>
          </p>
        </div>
      </div>

      {/* ─── FOOTER (Mengikuti page.tsx) ─── */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-logo">train<span>exa</span></div>
            <p className="footer-description">
              Indonesia's premier sports coaching marketplace. Connecting athletes with certified coaches across 9+ disciplines.
            </p>
            <p className="footer-copyright">© 2026 Trainexa. All rights reserved.</p>
          </div>

          <div className="footer-center">
            <h2 className="footer-social-title">WHAT'S <span>NEW?</span></h2>
            <p className="footer-social-subtitle">Follow us on</p>
            <div className="footer-social-icons">
              <Link href="#" className="social-icon"><Image src="/tiktok-logo.png" alt="TikTok" width={100} height={40} /></Link>
              <Link href="#" className="social-icon"><Image src="/facebook-logo.png" alt="FB" width={40} height={40} /></Link>
              <Link href="#" className="social-icon"><Image src="/instagram-logo.png" alt="IG" width={40} height={40} /></Link>
              <Link href="#" className="social-icon"><Image src="/youtube-logo.png" alt="YT" width={110} height={40} /></Link>
            </div>
          </div>

          <div className="footer-right">
            <button className="btn-back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>▲</button>
          </div>
        </div>
      </footer>
    </div>
  );
}