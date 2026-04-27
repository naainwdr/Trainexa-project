"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const coaches = [
  { id: 1, name: "Sofia", specialty: "Bulu Tangkis", location: "Cimpenan, Kota Bandung", rating: 4.96, reviewCount: 391, price: 125000, tags: ["ATP Certified", "Competitive"], image: "/coach2.png", badge: "Full hari ini", emoji: "🏸", bg: "linear-gradient(135deg,#1a1a2e,#16213e)" },
  { id: 2, name: "Rafael", specialty: "Bola Basket", location: "Kemang, Kota Jakarta", rating: 4.88, reviewCount: 187, price: 150000, tags: ["Pro League", "Competitive"], image: "/coach2.png", badge: "Tersedia", emoji: "🏀", bg: "linear-gradient(135deg,#0f3460,#533483)" },
  { id: 3, name: "Yogi", specialty: "Yoga", location: "Seminyak, Kota Bandung", rating: 4.96, reviewCount: 304, price: 95000, tags: ["Certified", "Online"], image: "/coach2.png", badge: "Full hari ini", emoji: "🧘", bg: "linear-gradient(135deg,#1b4332,#2d6a4f)" },
  { id: 4, name: "Dian", specialty: "Renang", location: "Gubeng, Kota Surabaya", rating: 4.72, reviewCount: 187, price: 110000, tags: ["FINA Certified"], image: "/coach2.png", badge: "Tersedia", emoji: "🏊", bg: "linear-gradient(135deg,#023e8a,#0096c7)" },
  { id: 5, name: "Budi", specialty: "Futsal", location: "Buah Batu, Kota Bandung", rating: 4.63, reviewCount: 220, price: 85000, tags: ["Lisensi C", "Competitive"], image: "/coach2.png", badge: "Full hari ini", emoji: "⚽", bg: "linear-gradient(135deg,#370617,#6a040f)" },
  { id: 6, name: "Citra", specialty: "Lari", location: "Menteng, Kota Jakarta", rating: 4.91, reviewCount: 143, price: 100000, tags: ["Marathon Pro"], image: "/coach2.png", badge: "Tersedia", emoji: "🏃", bg: "linear-gradient(135deg,#212529,#495057)" },
  { id: 7, name: "Andi", specialty: "Tinju", location: "Bandung", rating: 4.78, reviewCount: 98, price: 120000, tags: ["Boxing Licensed"], image: "/coach2.png", badge: "Tersedia", emoji: "🥊", bg: "linear-gradient(135deg,#3d0000,#800000)" },
  { id: 8, name: "Maya", specialty: "Tennis", location: "Jakarta Selatan", rating: 4.85, reviewCount: 211, price: 135000, tags: ["WTA Certified"], image: "/coach2.png", badge: "Full hari ini", emoji: "🎾", bg: "linear-gradient(135deg,#1a472a,#2d6a4f)" },
];

const sportOptions = ["Bulu Tangkis", "Futsal", "Lari", "Bola Basket", "Renang", "Tinju", "Golf", "Yoga", "Tennis"];
const locationOptions = ["Jakarta", "Bandung", "Surabaya", "Bekasi", "Lainnya..."];

export default function KategoriPage() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Rating Tinggi");
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(500000);
  const [minRating, setMinRating] = useState(0);
  const [favs, setFavs] = useState<number[]>([]);

  // Pre-fill search dari query param ?q=
  useEffect(() => {
    const q = searchParams.get("q");
    if (q) setSearch(q);
  }, [searchParams]);

  const toggleSport = (s: string) =>
    setSelectedSports((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);

  const toggleLoc = (l: string) =>
    setSelectedLocations((prev) => prev.includes(l) ? prev.filter((x) => x !== l) : [...prev, l]);

  const toggleFav = (id: number) =>
    setFavs((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);

  const clearAll = () => {
    setSelectedSports([]);
    setSelectedLocations([]);
    setMaxPrice(500000);
    setMinRating(0);
  };

  const filtered = coaches
    .filter((c) => {
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.specialty.toLowerCase().includes(q) ||
        c.location.toLowerCase().includes(q);
      const matchSport = selectedSports.length === 0 || selectedSports.includes(c.specialty);
      const matchLoc =
        selectedLocations.length === 0 ||
        selectedLocations.some((l) => c.location.includes(l));
      const matchPrice = c.price <= maxPrice;
      const matchRating = c.rating >= (minRating || 0);
      return matchSearch && matchSport && matchLoc && matchPrice && matchRating;
    })
    .sort((a, b) => {
      if (sortBy === "Rating Tinggi") return b.rating - a.rating;
      if (sortBy === "Harga Terendah") return a.price - b.price;
      if (sortBy === "Harga Tertinggi") return b.price - a.price;
      return 0;
    });

  return (
    <div style={{ minHeight: "100vh", background: "#000", paddingTop: "68px", fontFamily: "var(--font)" }}>
      <Navbar />

      <div style={{ display: "flex", maxWidth: "1300px", margin: "0 auto", padding: "32px 40px", gap: "32px" }}>

        {/* ─── SIDEBAR FILTER ─── */}
        <aside style={{ width: "220px", flexShrink: 0 }}>
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "28px" }}>
            <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#fff" }}>Filter</h2>
            <button
              onClick={clearAll}
              style={{ background: "none", border: "none", color: "#FFD700", fontSize: "13px", fontWeight: 600, cursor: "pointer", fontFamily: "var(--font)" }}
            >
              Hapus semua
            </button>
          </div>

          {/* SPORT */}
          <div style={{ marginBottom: "28px" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: "14px" }}>
              SPORT
            </p>
            {sportOptions.map((sport) => (
              <label key={sport} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", cursor: "pointer" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <input
                    type="checkbox"
                    checked={selectedSports.includes(sport)}
                    onChange={() => toggleSport(sport)}
                    style={{ accentColor: "#FFD700", width: "15px", height: "15px", cursor: "pointer" }}
                  />
                  <span style={{ fontSize: "14px", color: selectedSports.includes(sport) ? "#FFD700" : "rgba(255,255,255,0.75)" }}>
                    {sport}
                  </span>
                </div>
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
                  {coaches.filter((c) => c.specialty === sport).length * 35}
                </span>
              </label>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", marginBottom: "28px" }} />

          {/* HARGA PER SESI */}
          <div style={{ marginBottom: "28px" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: "14px" }}>
              HARGA PER SESI
            </p>
            <input
              type="range"
              min={50000}
              max={500000}
              step={10000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              style={{ width: "100%", accentColor: "#FFD700", cursor: "pointer" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "6px" }}>
              <span>Rp 50k</span>
              <span style={{ color: "#FFD700", fontWeight: 600 }}>Rp {(maxPrice / 1000).toFixed(0)}k</span>
              <span>Rp 500k</span>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", marginBottom: "28px" }} />

          {/* RATING */}
          <div style={{ marginBottom: "28px" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: "14px" }}>
              RATING
            </p>
            {[{ label: "★★★★★ 4.9+", val: 4.9 }, { label: "★★★★  4.5+", val: 4.5 }, { label: "★★★★  4+", val: 4.0 }, { label: "Lainnya...", val: 0 }].map((r) => (
              <label key={r.val} style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", cursor: "pointer" }}>
                <input
                  type="radio"
                  name="rating"
                  checked={minRating === r.val}
                  onChange={() => setMinRating(r.val)}
                  style={{ accentColor: "#FFD700", cursor: "pointer" }}
                />
                <span style={{ fontSize: "13px", color: minRating === r.val ? "#FFD700" : "rgba(255,255,255,0.7)" }}>
                  {r.label}
                </span>
              </label>
            ))}
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", marginBottom: "28px" }} />

          {/* LOKASI */}
          <div style={{ marginBottom: "28px" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: "14px" }}>
              LOKASI
            </p>
            {locationOptions.map((loc) => (
              <label key={loc} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", cursor: "pointer" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <input
                    type="checkbox"
                    checked={selectedLocations.includes(loc)}
                    onChange={() => toggleLoc(loc)}
                    style={{ accentColor: "#FFD700", width: "15px", height: "15px", cursor: "pointer" }}
                  />
                  <span style={{ fontSize: "14px", color: selectedLocations.includes(loc) ? "#FFD700" : "rgba(255,255,255,0.75)" }}>
                    {loc}
                  </span>
                </div>
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>210</span>
              </label>
            ))}
          </div>
        </aside>

        {/* ─── MAIN CONTENT ─── */}
        <main style={{ flex: 1, minWidth: 0 }}>

          {/* Search + Sort */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "28px" }}>
            <div style={{
              flex: 1, display: "flex", alignItems: "center",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "10px", padding: "0 16px", gap: "10px",
            }}>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "18px" }}>🔍</span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari berdasarkan cabang olahraga, nama pelatih, atau lokasi..."
                style={{
                  flex: 1, background: "transparent", border: "none", outline: "none",
                  color: "white", fontSize: "14px", padding: "14px 0", fontFamily: "var(--font)",
                }}
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "10px", color: "white",
                padding: "0 16px", fontSize: "14px",
                fontFamily: "var(--font)", cursor: "pointer",
                minWidth: "150px",
              }}
            >
              <option style={{ background: "#111" }}>Rating Tinggi</option>
              <option style={{ background: "#111" }}>Harga Terendah</option>
              <option style={{ background: "#111" }}>Harga Tertinggi</option>
              <option style={{ background: "#111" }}>Terbaru</option>
            </select>
          </div>

          {/* Result count */}
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", marginBottom: "20px" }}>
            Menampilkan <strong style={{ color: "white" }}>{filtered.length}</strong> pelatih
            {selectedSports.length > 0 && <> — <span style={{ color: "#FFD700" }}>{selectedSports.join(", ")}</span></>}
          </p>

          {/* Coach Grid — 2 columns like reference */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0", color: "rgba(255,255,255,0.3)" }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>🔍</div>
              <p style={{ fontSize: "18px", fontWeight: 600 }}>Tidak ada pelatih yang cocok</p>
              <p style={{ fontSize: "14px", marginTop: "8px" }}>Coba ubah filter atau kata kunci pencarian</p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
              {filtered.map((coach) => (
                <Link key={coach.id} href={`/pelatih/${coach.id}`} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
                  <div
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "16px", overflow: "hidden",
                      transition: "all 0.25s", cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#FFD700";
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.boxShadow = "0 10px 32px rgba(255,215,0,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {/* Image Area */}
                    <div style={{ position: "relative", height: "210px", background: coach.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "72px" }}>
                      {coach.emoji}
                      {/* Badge */}
                      <span style={{
                        position: "absolute", top: "12px", left: "12px",
                        background: coach.badge === "Full hari ini" ? "#ef4444" : "#22c55e",
                        color: "white", fontSize: "11px", fontWeight: 700,
                        padding: "4px 12px", borderRadius: "50px",
                      }}>
                        {coach.badge}
                      </span>
                      {/* Fav button */}
                      <button
                        onClick={(e) => { e.preventDefault(); toggleFav(coach.id); }}
                        style={{
                          position: "absolute", top: "12px", right: "12px",
                          background: favs.includes(coach.id) ? "#FFD700" : "rgba(0,0,0,0.55)",
                          border: "none", borderRadius: "50%",
                          width: "34px", height: "34px", cursor: "pointer",
                          fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center",
                          color: favs.includes(coach.id) ? "#000" : "white",
                          transition: "all 0.2s",
                        }}
                      >
                        {favs.includes(coach.id) ? "♥" : "♡"}
                      </button>
                    </div>

                    {/* Info */}
                    <div style={{ padding: "18px" }}>
                      {/* Name + Rating */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
                        <div>
                          <p style={{ fontWeight: 700, fontSize: "16px", marginBottom: "2px" }}>{coach.name}</p>
                          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)" }}>{coach.specialty} · {coach.location}</p>
                        </div>
                      </div>

                      {/* Stars */}
                      <div style={{ display: "flex", alignItems: "center", gap: "4px", margin: "10px 0 12px" }}>
                        <span style={{ color: "#FFD700", fontSize: "13px" }}>★</span>
                        <span style={{ fontSize: "13px", fontWeight: 700 }}>{coach.rating}</span>
                        <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>({coach.reviewCount} ulasan)</span>
                      </div>

                      {/* Tags */}
                      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "16px" }}>
                        {coach.tags.map((tag) => (
                          <span key={tag} style={{
                            background: "rgba(255,215,0,0.1)",
                            border: "1px solid rgba(255,215,0,0.3)",
                            color: "#FFD700", fontSize: "11px", fontWeight: 600,
                            padding: "3px 10px", borderRadius: "50px",
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Price + CTA */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <span style={{ fontSize: "20px", fontWeight: 800 }}>Rp {(coach.price / 1000).toFixed(0)}K</span>
                          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}> / sesi</span>
                        </div>
                        <button
                          onClick={(e) => e.preventDefault()}
                          style={{
                            background: "#FFD700", color: "#000",
                            border: "none", borderRadius: "8px",
                            padding: "9px 24px", fontSize: "13px",
                            fontWeight: 700, cursor: "pointer",
                            fontFamily: "var(--font)", transition: "all 0.2s",
                          }}
                        >
                          Pesan
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Load More */}
          {filtered.length > 0 && (
            <div style={{ textAlign: "center", marginTop: "48px" }}>
              <button
                style={{
                  background: "transparent",
                  border: "1.5px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.55)",
                  padding: "13px 40px", borderRadius: "12px",
                  fontSize: "14px", fontWeight: 600,
                  cursor: "pointer", fontFamily: "var(--font)",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#FFD700";
                  e.currentTarget.style.color = "#FFD700";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                }}
              >
                Muat Lebih Banyak
              </button>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}
