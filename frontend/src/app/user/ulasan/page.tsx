"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarUser from "@/components/NavbarUser";
import Footer from "@/components/Footer";

const coachesWithReviews = [
  {
    id: 1,
    name: "Sofia",
    specialty: "Bulu Tangkis",
    location: "Cimpenan, Kota Bandung",
    rating: 4.96,
    reviewCount: 187,
    price: 125000,
    tags: ["ATP Certified", "Competitive"],
    image: "/coach2.png",
    badge: "Full hari ini",
    reviews: [
      { avatar: "A", name: "Alex", stars: 4, comment: "Rizki tuh bener-bener ngubah cara mainku, sumpah. Cuma 8 minggu, akurasi dropshot-ku..." },
      { avatar: "A", name: "Alex", stars: 4, comment: "Rizki tuh bener-bener ngubah cara mainku, sumpah. Cuma 8 minggu, akurasi dropshot-ku..." },
    ],
  },
  {
    id: 2,
    name: "Sofia",
    specialty: "Bulu Tangkis",
    location: "Cimpenan, Kota Bandung",
    rating: 4.96,
    reviewCount: 187,
    price: 125000,
    tags: ["ATP Certified", "Competitive"],
    image: "/coach2.png",
    badge: "Full hari ini",
    reviews: [
      { avatar: "A", name: "Alex", stars: 4, comment: "Rizki tuh bener-bener ngubah cara mainku, sumpah. Cuma 8 minggu, akurasi dropshot-ku..." },
      { avatar: "A", name: "Alex", stars: 4, comment: "Rizki tuh bener-bener ngubah cara mainku, sumpah. Cuma 8 minggu, akurasi dropshot-ku..." },
    ],
  },
  {
    id: 3,
    name: "Sofia",
    specialty: "Bulu Tangkis",
    location: "Cimpenan, Kota Bandung",
    rating: 4.96,
    reviewCount: 187,
    price: 125000,
    tags: ["ATP Certified", "Competitive"],
    image: "/coach2.png",
    badge: "Full hari ini",
    reviews: [
      { avatar: "A", name: "Alex", stars: 4, comment: "Rizki tuh bener-bener ngubah cara mainku, sumpah. Cuma 8 minggu, akurasi dropshot-ku..." },
      { avatar: "A", name: "Alex", stars: 4, comment: "Rizki tuh bener-bener ngubah cara mainku, sumpah. Cuma 8 minggu, akurasi dropshot-ku..." },
    ],
  },
];

const sportOptions = ["Bulu Tangkis", "Futsal", "Lari", "Bola Basket", "Renang", "Tinju", "Golf"];
const locationOptions = ["Jakarta", "Bandung", "Surabaya", "Bekasi", "Lainnya..."];

export default function UserUlasanPage() {
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(500000);
  const [favs, setFavs] = useState<number[]>([]);
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);

  const toggleFav = (id: number) =>
    setFavs((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);

  const toggleSport = (s: string) =>
    setSelectedSports((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);

  const toggleLoc = (l: string) =>
    setSelectedLocations((prev) => prev.includes(l) ? prev.filter((x) => x !== l) : [...prev, l]);

  const clearAll = () => {
    setSelectedSports([]);
    setSelectedLocations([]);
    setMaxPrice(500000);
    setMinRating(0);
  };

  const filtered = coachesWithReviews.filter((c) => {
    const q = search.toLowerCase();
    const matchSearch = !q || c.name.toLowerCase().includes(q) || c.specialty.toLowerCase().includes(q) || c.location.toLowerCase().includes(q);
    const matchSport = selectedSports.length === 0 || selectedSports.includes(c.specialty);
    const matchLoc = selectedLocations.length === 0 || selectedLocations.some((l) => c.location.includes(l));
    const matchPrice = c.price <= maxPrice;
    const matchRating = c.rating >= (minRating || 0);
    return matchSearch && matchSport && matchLoc && matchPrice && matchRating;
  });

  return (
    <div style={{ minHeight: "100vh", background: "#000", paddingTop: "68px", fontFamily: "var(--font)" }}>
      <NavbarUser userName="Dina Agustina" />

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
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>210</span>
              </label>
            ))}
          </div>

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

          <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", marginBottom: "28px" }} />

          {/* RATING */}
          <div style={{ marginBottom: "28px" }}>
            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: "14px" }}>
              RATING
            </p>
            {[{ label: "★★★★★ 4.5+", val: 4.5 }, { label: "★★★★  4+", val: 4.0 }, { label: "Lainnya...", val: 0 }].map((r) => (
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

          {/* Search Bar */}
          <div style={{
            display: "flex", alignItems: "center",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "10px", padding: "0 16px", gap: "10px",
            marginBottom: "28px",
          }}>
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "18px" }}>🔍</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari ulasan berdasarkan cabang olahraga, nama pelatih, atau lokasi..."
              style={{
                flex: 1, background: "transparent", border: "none", outline: "none",
                color: "white", fontSize: "14px", padding: "14px 0", fontFamily: "var(--font)",
              }}
            />
          </div>

          {/* Result count */}
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", marginBottom: "20px" }}>
            Menampilkan <strong style={{ color: "white" }}>{filtered.length}</strong> pelatih dengan ulasan
          </p>

          {/* Coach + Review Cards */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0", color: "rgba(255,255,255,0.3)" }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>🔍</div>
              <p style={{ fontSize: "18px", fontWeight: 600 }}>Tidak ada hasil yang cocok</p>
              <p style={{ fontSize: "14px", marginTop: "8px" }}>Coba ubah filter atau kata kunci</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {filtered.map((coach) => (
                <div
                  key={coach.id}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "20px",
                    overflow: "hidden",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,215,0,0.3)";
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(255,215,0,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* ── TOP ROW: Photo + Reviews + Coach Info ── */}
                  <div style={{ display: "flex", minHeight: "240px" }}>

                    {/* Left: Coach Photo */}
                    <div style={{ position: "relative", width: "280px", flexShrink: 0 }}>
                      <Image
                        src={coach.image}
                        alt={coach.name}
                        layout="fill"
                        objectFit="cover"
                      />
                      {/* Badge */}
                      <span style={{
                        position: "absolute", top: "12px", left: "12px",
                        background: coach.badge === "Full hari ini" ? "#ef4444" : "#22c55e",
                        color: "white", fontSize: "11px", fontWeight: 700,
                        padding: "4px 12px", borderRadius: "50px",
                        zIndex: 1,
                      }}>
                        {coach.badge}
                      </span>
                      {/* Fav button */}
                      <button
                        onClick={() => toggleFav(coach.id)}
                        style={{
                          position: "absolute", top: "12px", right: "12px",
                          background: favs.includes(coach.id) ? "#FFD700" : "rgba(0,0,0,0.55)",
                          border: "none", borderRadius: "50%",
                          width: "34px", height: "34px", cursor: "pointer",
                          fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center",
                          color: favs.includes(coach.id) ? "#000" : "white",
                          transition: "all 0.2s", zIndex: 1,
                        }}
                      >
                        {favs.includes(coach.id) ? "♥" : "♡"}
                      </button>
                    </div>

                    {/* Middle: Reviews */}
                    <div style={{ flex: 1, padding: "20px 24px", borderLeft: "1px solid rgba(255,255,255,0.06)", borderRight: "1px solid rgba(255,255,255,0.06)" }}>
                      <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "1.2px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginBottom: "14px" }}>
                        Ulasan Pengguna
                      </p>

                      {/* Two mini review columns */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                        {coach.reviews.map((rev, ri) => (
                          <div key={ri} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            {/* Reviewer */}
                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                              <div style={{
                                width: "32px", height: "32px", borderRadius: "50%",
                                background: "rgba(255,215,0,0.15)",
                                border: "1.5px solid rgba(255,215,0,0.3)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                fontSize: "13px", fontWeight: 800, color: "#FFD700", flexShrink: 0,
                              }}>
                                {rev.avatar}
                              </div>
                              <div>
                                <p style={{ fontSize: "13px", fontWeight: 700, color: "white" }}>{rev.name}</p>
                                <div style={{ color: "#FFD700", fontSize: "11px" }}>
                                  {"★".repeat(rev.stars)}
                                  <span style={{ color: "rgba(255,215,0,0.2)" }}>{"★".repeat(5 - rev.stars)}</span>
                                </div>
                              </div>
                            </div>
                            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6, fontStyle: "italic" }}>
                              "{rev.comment}"
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Lihat Selengkapnya */}
                      <Link
                        href="/user/ulasan-selengkapnya"
                        style={{
                          display: "inline-flex", alignItems: "center", gap: "4px",
                          marginTop: "18px", fontSize: "13px", fontWeight: 600,
                          color: "#FFD700", textDecoration: "none",
                        }}
                      >
                        Lihat Selengkapnya →
                      </Link>
                    </div>

                    {/* Right: Coach Info */}
                    <div style={{ width: "200px", flexShrink: 0, padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                      <div>
                        {/* Name + Location */}
                        <p style={{ fontWeight: 700, fontSize: "16px", color: "white", marginBottom: "2px" }}>{coach.name}</p>
                        <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "10px", lineHeight: 1.4 }}>
                          {coach.specialty} · {coach.location}
                        </p>

                        {/* Rating */}
                        <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "12px" }}>
                          <span style={{ color: "#FFD700", fontSize: "12px" }}>★</span>
                          <span style={{ fontSize: "13px", fontWeight: 700, color: "white" }}>{coach.rating}</span>
                          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>({coach.reviewCount})</span>
                        </div>

                        {/* Tags */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginBottom: "16px" }}>
                          {coach.tags.map((tag) => (
                            <span key={tag} style={{
                              background: "rgba(255,215,0,0.1)",
                              border: "1px solid rgba(255,215,0,0.25)",
                              color: "#FFD700", fontSize: "10px", fontWeight: 600,
                              padding: "3px 8px", borderRadius: "50px", display: "inline-block",
                              width: "fit-content",
                            }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        {/* Price */}
                        <div style={{ marginBottom: "10px" }}>
                          <span style={{ fontSize: "18px", fontWeight: 800, color: "white" }}>
                            Rp {(coach.price / 1000).toFixed(0)}K
                          </span>
                          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}> / sesi</span>
                        </div>

                        {/* Pesan Button */}
                        <Link href="/user/pesan" style={{ display: "block" }}>
                          <button style={{
                            width: "100%",
                            background: "#FFD700", color: "#000",
                            border: "none", borderRadius: "8px",
                            padding: "9px 0", fontSize: "13px",
                            fontWeight: 700, cursor: "pointer",
                            fontFamily: "var(--font)", transition: "all 0.2s",
                          }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = "#f0c800"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = "#FFD700"; }}
                          >
                            Pesan
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
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
