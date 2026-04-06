"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const coaches = [
  { id: 1, name: "Sofia", specialty: "Bulu Tangkis", location: "Cimpenan, Kota Bandung", rating: 4.96, reviewCount: 391, price: 125000, tags: ["ATP Certified", "Competitive"], image: "/coach2.png", badge: "Full hari ini" },
  { id: 2, name: "Sofia", specialty: "Bulu Tangkis", location: "Cimpenan, Kota Bandung", rating: 4.96, reviewCount: 187, price: 125000, tags: ["ATP Certified", "Competitive"], image: "/coach2.png", badge: "Tersedia" },
  { id: 3, name: "Sofia", specialty: "Bulu Tangkis", location: "Olahraga, Kota Bandung", rating: 4.96, reviewCount: 187, price: 125000, tags: ["ATP Certified", "Competitive"], image: "/coach2.png", badge: "Full hari ini" },
  { id: 4, name: "Sofia", specialty: "Bulu Tangkis", location: "Cimpenan, Kota Bandung", rating: 4.96, reviewCount: 187, price: 125000, tags: ["ATP Certified", "Competitive"], image: "/coach2.png", badge: "Tersedia" },
  { id: 5, name: "Sofia", specialty: "Bulu Tangkis", location: "Cimpenan, Kota Bandung", rating: 4.96, reviewCount: 187, price: 125000, tags: ["ATP Certified", "Competitive"], image: "/coach2.png", badge: "Full hari ini" },
  { id: 6, name: "Sofia", specialty: "Bulu Tangkis", location: "Olahraga, Kota Bandung", rating: 4.96, reviewCount: 187, price: 125000, tags: ["ATP Certified", "Competitive"], image: "/coach2.png", badge: "Tersedia" },
];

const sports = ["Bulu Tangkis", "Futsal", "Lari", "Bola Basket", "Renang", "Tinju", "Golf"];
const locations = ["Jakarta", "Bandung", "Surabaya", "Bekasi", "Lainnya..."];

export default function PelatihPage() {
  const [sortBy, setSortBy] = useState("Rating Tinggi");

  return (
    <div style={{ minHeight: "100vh", background: "#000", paddingTop: "68px" }}>
      {/* ─── NAVBAR ─── */}
      <nav className="navbar">
        <div className="footer-logo">train<span>exa</span></div>
        <ul className="navbar-menu">
          <li><Link href="/">Beranda</Link></li>
          <li><Link href="/kategori">Kategori</Link></li>
          <li><Link href="/pelatih" className="active">Pelatih</Link></li>
          <li><Link href="/ulasan">Ulasan</Link></li>
          <li><Link href="/aktivitas">Aktivitas</Link></li>
        </ul>
        <div className="navbar-actions">
          <button className="btn-masuk">Masuk</button>
          <Link href="/daftar"><button className="btn-daftar">Get Started</button></Link>
        </div>
      </nav>

      <div style={{ display: "flex", gap: "0", maxWidth: "1440px", margin: "0 auto", padding: "32px 40px" }}>

        {/* ─── FILTER SIDEBAR ─── */}
        <aside style={{ width: "240px", flexShrink: 0, marginRight: "32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "700" }}>Filter</h2>
            <button style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", fontSize: "13px", cursor: "pointer", fontFamily: "var(--font)" }}>Hapus semua</button>
          </div>

          {/* Sport Filter */}
          <div style={{ marginBottom: "28px" }}>
            <p style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: "14px" }}>SPORT</p>
            {sports.map(sport => (
              <label key={sport} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", cursor: "pointer" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <input type="checkbox" style={{ accentColor: "#FFD700", width: "16px", height: "16px" }} />
                  <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>{sport}</span>
                </div>
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>210</span>
              </label>
            ))}
          </div>

          {/* Price Filter */}
          <div style={{ marginBottom: "28px" }}>
            <p style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: "14px" }}>HARGA PER SESI</p>
            <input type="range" min="50000" max="500000" defaultValue="200000" style={{ width: "100%", accentColor: "#FFD700" }} />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "6px" }}>
              <span>Rp 50k</span><span>Rp 500k</span>
            </div>
          </div>

          {/* Rating Filter */}
          <div style={{ marginBottom: "28px" }}>
            <p style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: "14px" }}>RATING</p>
            {["5+", "4+", "Lainnya..."].map((r, i) => (
              <label key={r} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", cursor: "pointer" }}>
                <input type="radio" name="rating" style={{ accentColor: "#FFD700" }} defaultChecked={i === 0} />
                <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>
                  {"★".repeat(Math.min(5, parseInt(r)))} {r}
                </span>
              </label>
            ))}
          </div>

          {/* Location Filter */}
          <div style={{ marginBottom: "28px" }}>
            <p style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "1.5px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: "14px" }}>LOKASI</p>
            {locations.map(loc => (
              <label key={loc} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", cursor: "pointer" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <input type="checkbox" style={{ accentColor: "#FFD700", width: "16px", height: "16px" }} />
                  <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>{loc}</span>
                </div>
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>210</span>
              </label>
            ))}
          </div>
        </aside>

        {/* ─── MAIN CONTENT ─── */}
        <main style={{ flex: 1 }}>
          {/* Search Bar + Sort */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "28px" }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "0 16px", gap: "10px" }}>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "18px" }}>🔍</span>
              <input
                type="text"
                placeholder="Cari berdasarkan cabang olahraga, nama pelatih, atau lokasi..."
                style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "white", fontSize: "14px", padding: "14px 0", fontFamily: "var(--font)" }}
              />
            </div>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", color: "white", padding: "0 16px", fontSize: "14px", fontFamily: "var(--font)", cursor: "pointer" }}
            >
              <option>Rating Tinggi</option>
              <option>Harga Terendah</option>
              <option>Harga Tertinggi</option>
              <option>Terbaru</option>
            </select>
          </div>

          {/* Coach Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {coaches.map(coach => (
              <Link key={coach.id} href={`/pelatih/${coach.id}`} style={{ textDecoration: "none" }}>
                <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", overflow: "hidden", transition: "all 0.25s", cursor: "pointer" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "#FFD700")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")}
                >
                  {/* Image */}
                  <div style={{ position: "relative", height: "200px" }}>
                    <Image src={coach.image} alt={coach.name} layout="fill" objectFit="cover" />
                    <span style={{ position: "absolute", top: "10px", left: "10px", background: coach.badge === "Full hari ini" ? "#ef4444" : "#22c55e", color: "white", fontSize: "11px", fontWeight: "700", padding: "3px 10px", borderRadius: "50px" }}>
                      {coach.badge}
                    </span>
                    <button style={{ position: "absolute", top: "10px", right: "10px", background: "rgba(0,0,0,0.5)", border: "none", borderRadius: "50%", width: "32px", height: "32px", cursor: "pointer", fontSize: "16px", color: "white" }}>♡</button>
                  </div>

                  {/* Info */}
                  <div style={{ padding: "16px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "4px" }}>
                      <div>
                        <p style={{ fontWeight: "700", fontSize: "16px", marginBottom: "2px" }}>{coach.name}</p>
                        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>{coach.specialty} · {coach.location}</p>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "4px", margin: "8px 0" }}>
                      <span style={{ color: "#FFD700", fontSize: "13px" }}>★</span>
                      <span style={{ fontSize: "13px", fontWeight: "600" }}>{coach.rating}</span>
                      <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>({coach.reviewCount} ulasan)</span>
                    </div>
                    <div style={{ display: "flex", gap: "6px", marginBottom: "14px" }}>
                      {coach.tags.map(tag => (
                        <span key={tag} style={{ background: "rgba(255,215,0,0.1)", border: "1px solid rgba(255,215,0,0.3)", color: "#FFD700", fontSize: "11px", fontWeight: "600", padding: "3px 10px", borderRadius: "50px" }}>{tag}</span>
                      ))}
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <span style={{ fontSize: "18px", fontWeight: "800" }}>Rp {(coach.price / 1000).toFixed(0)}K</span>
                        <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}> / sesi</span>
                      </div>
                      <button style={{ background: "#FFD700", color: "#000", border: "none", borderRadius: "8px", padding: "8px 20px", fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "var(--font)" }}>
                        Pesan
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
