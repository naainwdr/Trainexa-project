"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const allReviews = [
  {
    id: 1,
    name: "Alex Pratama",
    sport: "Bulu Tangkis",
    coach: "Fahri",
    rating: 5,
    date: "12 April 2026",
    comment:
      "Riki tuh bener-bener ngubah cara mainku, sumpah. Cuma 8 minggu, akurasi dropshot-ku jadi lebih tipis di net dan kontrol bolaku jadi stabil banget. Worth it banget lah harganya.",
    avatar: "A",
    verified: true,
    helpful: 24,
    tags: ["Profesional", "Sabar", "Komunikatif"],
  },
  {
    id: 2,
    name: "Fia Rahma",
    sport: "Yoga",
    coach: "Yogi",
    rating: 5,
    date: "9 April 2026",
    comment:
      "Pelatih Citra beneran sabar banget jelasinnya. Sekarang postur badanku udah jauh lebih baik dan ga sering pegel-pegel lagi pas kerja. Highly recommended!",
    avatar: "F",
    verified: true,
    helpful: 18,
    tags: ["Sabar", "Detail", "Motivatif"],
  },
  {
    id: 3,
    name: "Budi Santoso",
    sport: "Futsal",
    coach: "Budi",
    rating: 4,
    date: "5 April 2026",
    comment:
      "Platform-nya gampang banget dipake. Booking dalam 2 menit, pelatih langsung konfirmasi. Sesi pertama udah langsung ngerasa ada peningkatan teknik passing-ku.",
    avatar: "B",
    verified: true,
    helpful: 11,
    tags: ["Responsif", "Terstruktur"],
  },
  {
    id: 4,
    name: "Dewi Kartika",
    sport: "Renang",
    coach: "Dian",
    rating: 5,
    date: "2 April 2026",
    comment:
      "Sudah 3 bulan latihan renang bareng Coach Dian. Teknik freestyle-ku meningkat drastis! Sekarang bisa nempuh 1km tanpa berhenti. Dian sangat perhatian dan selalu kasih feedback yang konkret.",
    avatar: "D",
    verified: true,
    helpful: 31,
    tags: ["Detail", "Profesional", "Motivatif"],
  },
  {
    id: 5,
    name: "Rizky Aditya",
    sport: "Bola Basket",
    coach: "Rafael",
    rating: 5,
    date: "29 Maret 2026",
    comment:
      "Coach Rafael itu luar biasa! Dalam 2 bulan, three-point percentage-ku naik dari 28% ke 45%. Dia tau banget cara jelasin mekanik shooting yang bener dan bisa adaptasi sama level skill yang beda-beda.",
    avatar: "R",
    verified: true,
    helpful: 42,
    tags: ["Expert", "Komunikatif", "Sabar"],
  },
  {
    id: 6,
    name: "Sari Indah",
    sport: "Lari",
    coach: "Citra",
    rating: 4,
    date: "25 Maret 2026",
    comment:
      "Latihan lari bareng Coach Citra bener-bener mengubah hidup. Program latihannya terstruktur banget dan dia selalu motivasi aku ketika udah mulai cape. PB-ku di 10K turun dari 65 menit ke 54 menit!",
    avatar: "S",
    verified: true,
    helpful: 19,
    tags: ["Terstruktur", "Motivatif"],
  },
  {
    id: 7,
    name: "Hendra Wijaya",
    sport: "Tinju",
    coach: "Andi",
    rating: 5,
    date: "20 Maret 2026",
    comment:
      "Awalnya takut nyoba tinju, tapi Coach Andi bikin suasana latihan jadi nyaman dan aman. Teknik dasar diajarin dengan sangat jelas. Sekarang udah bisa sparring ringan!",
    avatar: "H",
    verified: false,
    helpful: 8,
    tags: ["Sabar", "Aman", "Menyenangkan"],
  },
  {
    id: 8,
    name: "Maya Putri",
    sport: "Tennis",
    coach: "Rafael",
    rating: 5,
    date: "15 Maret 2026",
    comment:
      "Coach Rafael juga jagoan tennis! Serve-ku jadi lebih konsisten dan backhand-ku sekarang jadi senjata andalan. Sesi dengan dia selalu produktif dan menyenangkan.",
    avatar: "M",
    verified: true,
    helpful: 27,
    tags: ["Expert", "Profesional", "Fun"],
  },
  {
    id: 9,
    name: "Fandi Ahmad",
    sport: "Futsal",
    coach: "Budi",
    rating: 3,
    date: "10 Maret 2026",
    comment:
      "Secara keseluruhan oke, materi latihannya bagus dan Coach Budi sangat berpengetahuan. Cuma jadwal konfirmasi kadang agak lama. Tapi hasil latihannya memang terasa nyata.",
    avatar: "F",
    verified: true,
    helpful: 5,
    tags: ["Berpengetahuan"],
  },
];

const ratingStats = [
  { star: 5, count: 1248, pct: 72 },
  { star: 4, count: 312, pct: 18 },
  { star: 3, count: 86, pct: 5 },
  { star: 2, count: 34, pct: 2 },
  { star: 1, count: 52, pct: 3 },
];

const sportFilters = ["Semua", "Bulu Bangkis", "Yoga", "Renang", "Futsal", "Bola Basket", "Lari", "Tinju", "Tennis"];

export default function UlasanPage() {
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [activeStar, setActiveStar] = useState(0);
  const [helpfulMap, setHelpfulMap] = useState<Record<number, boolean>>({});

  const filtered = allReviews.filter((r) => {
    const matchSport = activeFilter === "Semua" || r.sport === activeFilter;
    const matchStar = activeStar === 0 || r.rating === activeStar;
    return matchSport && matchStar;
  });

  const avgRating = (
    allReviews.reduce((s, r) => s + r.rating, 0) / allReviews.length
  ).toFixed(1);

  const toggleHelpful = (id: number) => {
    setHelpfulMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div style={{ minHeight: "100vh", background: "#000", paddingTop: "68px" }}>
      <Navbar />

      {/* ─── HERO HEADER ─── */}
      <section
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,215,0,0.12) 0%, transparent 65%)",
          padding: "64px 72px 48px",
          textAlign: "center",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#FFD700",
            marginBottom: "16px",
          }}
        >
          ULASAN PENGGUNA
        </p>
        <h1
          style={{
            fontSize: "52px",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "12px",
          }}
        >
          Apa yang{" "}
          <span style={{ color: "#FFD700" }}>Mereka</span> Katakan
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "rgba(255,255,255,0.45)",
            maxWidth: "480px",
            margin: "0 auto 48px",
            lineHeight: 1.6,
          }}
        >
          Lebih dari 1.700 ulasan nyata dari atlet yang telah merasakan manfaat
          pelatihan bersama Trainexa
        </p>

        {/* ─── RATING SUMMARY BOX ─── */}
        <div
          style={{
            display: "inline-flex",
            gap: "56px",
            alignItems: "center",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,215,0,0.2)",
            borderRadius: "24px",
            padding: "36px 56px",
          }}
        >
          {/* Big Number */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{ fontSize: "72px", fontWeight: 900, color: "#FFD700", lineHeight: 1 }}
            >
              {avgRating}
            </div>
            <div style={{ fontSize: "22px", color: "#FFD700", marginTop: "6px", letterSpacing: "3px" }}>
              {"★".repeat(5)}
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.4)",
                marginTop: "8px",
              }}
            >
              1.732 ulasan
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: "1px", height: "100px", background: "rgba(255,255,255,0.1)" }} />

          {/* Bar Chart */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", minWidth: "220px" }}>
            {ratingStats.map((s) => (
              <div
                key={s.star}
                style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}
                onClick={() => setActiveStar(activeStar === s.star ? 0 : s.star)}
              >
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    color: activeStar === s.star ? "#FFD700" : "rgba(255,255,255,0.5)",
                    width: "48px",
                    flexShrink: 0,
                  }}
                >
                  {s.star} ★
                </span>
                <div
                  style={{
                    flex: 1,
                    height: "8px",
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "99px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${s.pct}%`,
                      background:
                        activeStar === s.star
                          ? "#FFD700"
                          : "rgba(255,215,0,0.5)",
                      borderRadius: "99px",
                      transition: "all 0.3s",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.35)",
                    width: "36px",
                    textAlign: "right",
                    flexShrink: 0,
                  }}
                >
                  {s.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FILTER + GRID ─── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 40px" }}>

        {/* Sport Filter Tabs */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "36px" }}>
          {sportFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                background: activeFilter === f ? "#FFD700" : "rgba(255,255,255,0.06)",
                border: `1px solid ${activeFilter === f ? "#FFD700" : "rgba(255,255,255,0.1)"}`,
                color: activeFilter === f ? "#000" : "rgba(255,255,255,0.6)",
                padding: "8px 20px",
                borderRadius: "50px",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "var(--font)",
                transition: "all 0.2s",
              }}
            >
              {f}
            </button>
          ))}

          {/* Active star filter badge */}
          {activeStar > 0 && (
            <button
              onClick={() => setActiveStar(0)}
              style={{
                background: "rgba(255,215,0,0.15)",
                border: "1px solid rgba(255,215,0,0.4)",
                color: "#FFD700",
                padding: "8px 16px",
                borderRadius: "50px",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "var(--font)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              {activeStar} ★ <span style={{ opacity: 0.6 }}>✕</span>
            </button>
          )}
        </div>

        {/* Result count */}
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", marginBottom: "28px" }}>
          Menampilkan <strong style={{ color: "white" }}>{filtered.length}</strong> ulasan
          {activeStar > 0 && <> dengan rating <strong style={{ color: "#FFD700" }}>{activeStar} bintang</strong></>}
          {activeFilter !== "Semua" && <> untuk <strong style={{ color: "#FFD700" }}>{activeFilter}</strong></>}
        </p>

        {/* Reviews Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "rgba(255,255,255,0.3)" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>🔍</div>
            <p style={{ fontSize: "18px", fontWeight: 600 }}>Tidak ada ulasan yang cocok</p>
            <p style={{ fontSize: "14px", marginTop: "8px" }}>Coba ubah filter di atas</p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "24px",
            }}
          >
            {filtered.map((review) => (
              <div
                key={review.id}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "20px",
                  padding: "28px",
                  transition: "all 0.25s",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(255,215,0,0.3)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")
                }
              >
                {/* Header: Avatar + Name + Rating */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div
                      style={{
                        width: "46px",
                        height: "46px",
                        borderRadius: "50%",
                        background: "rgba(255,215,0,0.15)",
                        border: "1.5px solid rgba(255,215,0,0.35)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "18px",
                        fontWeight: 800,
                        color: "#FFD700",
                        flexShrink: 0,
                      }}
                    >
                      {review.avatar}
                    </div>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <p style={{ fontWeight: 700, fontSize: "15px" }}>{review.name}</p>
                        {review.verified && (
                          <span
                            style={{
                              background: "rgba(34,197,94,0.15)",
                              border: "1px solid rgba(34,197,94,0.3)",
                              color: "#22c55e",
                              fontSize: "10px",
                              fontWeight: 700,
                              padding: "2px 8px",
                              borderRadius: "50px",
                            }}
                          >
                            ✓ Terverifikasi
                          </span>
                        )}
                      </div>
                      <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>
                        {review.sport} · Pelatih {review.coach}
                      </p>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div style={{ textAlign: "right" }}>
                    <div style={{ color: "#FFD700", fontSize: "14px", letterSpacing: "1px" }}>
                      {"★".repeat(review.rating)}
                      <span style={{ color: "rgba(255,215,0,0.2)" }}>
                        {"★".repeat(5 - review.rating)}
                      </span>
                    </div>
                    <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", marginTop: "4px" }}>
                      {review.date}
                    </p>
                  </div>
                </div>

                {/* Comment */}
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.75,
                    fontStyle: "italic",
                  }}
                >
                  "{review.comment}"
                </p>

                {/* Tags */}
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {review.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: "rgba(255,215,0,0.08)",
                        border: "1px solid rgba(255,215,0,0.2)",
                        color: "rgba(255,215,0,0.8)",
                        fontSize: "11px",
                        fontWeight: 600,
                        padding: "3px 10px",
                        borderRadius: "50px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Helpful */}
                <div
                  style={{
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    paddingTop: "14px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
                    Bermanfaat bagi {review.helpful + (helpfulMap[review.id] ? 1 : 0)} orang
                  </span>
                  <button
                    onClick={() => toggleHelpful(review.id)}
                    style={{
                      background: helpfulMap[review.id]
                        ? "rgba(255,215,0,0.15)"
                        : "rgba(255,255,255,0.05)",
                      border: `1px solid ${
                        helpfulMap[review.id]
                          ? "rgba(255,215,0,0.4)"
                          : "rgba(255,255,255,0.1)"
                      }`,
                      color: helpfulMap[review.id]
                        ? "#FFD700"
                        : "rgba(255,255,255,0.4)",
                      padding: "5px 14px",
                      borderRadius: "8px",
                      fontSize: "12px",
                      fontWeight: 600,
                      cursor: "pointer",
                      fontFamily: "var(--font)",
                      transition: "all 0.2s",
                    }}
                  >
                    👍 Bermanfaat
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More */}
        <div style={{ textAlign: "center", marginTop: "52px" }}>
          <button
            style={{
              background: "transparent",
              border: "1.5px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.6)",
              padding: "14px 40px",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "var(--font)",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#FFD700";
              e.currentTarget.style.color = "#FFD700";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              e.currentTarget.style.color = "rgba(255,255,255,0.6)";
            }}
          >
            Muat Lebih Banyak Ulasan
          </button>
        </div>
      </div>

      {/* ─── CTA SECTION ─── */}
      <section
        style={{
          background: "#050505",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "80px 72px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "16px" }}>
          Bergabung sekarang
        </p>
        <h2 style={{ fontSize: "40px", fontWeight: 800, marginBottom: "12px" }}>
          Siap tulis ulasan{" "}
          <span style={{ color: "#FFD700" }}>pertamamu?</span>
        </h2>
        <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", marginBottom: "36px" }}>
          Daftar sekarang dan mulai perjalanan latihanmu bersama pelatih terbaik
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center" }}>
          <Link href="/daftar">
            <button
              style={{
                background: "#FFD700",
                color: "#000",
                border: "none",
                borderRadius: "12px",
                padding: "15px 40px",
                fontSize: "15px",
                fontWeight: 800,
                cursor: "pointer",
                fontFamily: "var(--font)",
                boxShadow: "0 4px 20px rgba(255,215,0,0.3)",
              }}
            >
              Mulai Sekarang
            </button>
          </Link>
          <Link href="/pelatih">
            <button
              style={{
                background: "transparent",
                color: "rgba(255,255,255,0.7)",
                border: "1.5px solid rgba(255,255,255,0.2)",
                borderRadius: "12px",
                padding: "15px 36px",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "var(--font)",
              }}
            >
              Temukan Pelatih →
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
