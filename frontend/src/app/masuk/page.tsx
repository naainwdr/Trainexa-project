"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MasukPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    router.push("/user");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0c0d10", display: "flex", flexDirection: "column" }}>

      <Navbar />

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

      <Footer />
    </div>
  );
}