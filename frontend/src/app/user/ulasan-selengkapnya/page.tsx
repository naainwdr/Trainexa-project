"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarUser from "@/components/NavbarUser";
import Footer from "@/components/Footer";

const coach = {
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
};

const galleryImages = [
  "/coach2.png",
  "/coach2.png",
  "/coach2.png",
  "/coach2.png",
];

const reviews = [
  {
    id: 1,
    avatar: "/coach2.png",
    name: "Alex",
    stars: 4,
    comment:
      "Rizki tuh bener-bener ngubah cara mainku, sumpah. Cuma 8 minggu, akurasi dropshot-ku jadi lebih tipis di net dan kontrol bolaku jadi stabil banget. Worth it banget lah harganya.",
  },
  {
    id: 2,
    avatar: "/coach2.png",
    name: "Alex",
    stars: 4,
    comment:
      "Rizki tuh bener-bener ngubah cara mainku, sumpah. Cuma 8 minggu, akurasi dropshot-ku jadi lebih tipis di net dan kontrol bolaku jadi stabil banget. Worth it banget lah harganya.",
  },
  {
    id: 3,
    avatar: "/coach2.png",
    name: "Alex",
    stars: 4,
    comment:
      "Rizki tuh bener-bener ngubah cara mainku, sumpah. Cuma 8 minggu, akurasi dropshot-ku jadi lebih tipis di net dan kontrol bolaku jadi stabil banget. Worth it banget lah harganya.",
  },
];

export default function UlasanSelengkapnyaPage() {
  const [fav, setFav] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        paddingTop: "68px",
        fontFamily: "var(--font)",
      }}
    >
      <NavbarUser userName="Dina Agustina" />

      <div
        style={{
          maxWidth: "780px",
          margin: "40px auto 80px",
          padding: "0 20px",
        }}
      >
        {/* ─── Back link ─── */}
        <Link
          href="/user/ulasan"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "13px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.45)",
            textDecoration: "none",
            marginBottom: "20px",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "white")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
          }
        >
          ← Kembali ke Ulasan
        </Link>

        {/* ─── COACH CARD ─── */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "20px",
            overflow: "hidden",
            marginBottom: "24px",
          }}
        >
          {/* Hero Photo */}
          <div style={{ position: "relative", height: "280px" }}>
            <Image
              src={coach.image}
              alt={coach.name}
              layout="fill"
              objectFit="cover"
            />
            {/* Badge */}
            <span
              style={{
                position: "absolute",
                top: "14px",
                left: "14px",
                background:
                  coach.badge === "Full hari ini" ? "#ef4444" : "#22c55e",
                color: "white",
                fontSize: "11px",
                fontWeight: 700,
                padding: "5px 14px",
                borderRadius: "50px",
                zIndex: 1,
              }}
            >
              {coach.badge}
            </span>
            {/* Fav Button */}
            <button
              onClick={() => setFav(!fav)}
              style={{
                position: "absolute",
                top: "14px",
                right: "14px",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: fav ? "#FFD700" : "rgba(0,0,0,0.55)",
                border: "none",
                cursor: "pointer",
                fontSize: "17px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: fav ? "#000" : "white",
                transition: "all 0.2s",
                zIndex: 1,
              }}
            >
              {fav ? "♥" : "♡"}
            </button>
          </div>

          {/* Coach Info */}
          <div style={{ padding: "20px 24px" }}>
            {/* Row 1: Name + Price + Pesan */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "4px",
              }}
            >
              <p
                style={{
                  fontWeight: 800,
                  fontSize: "22px",
                  color: "white",
                }}
              >
                {coach.name}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: 800,
                      color: "#FFD700",
                    }}
                  >
                    Rp {(coach.price / 1000).toFixed(0)}K
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    {" "}
                    / sesi
                  </span>
                </div>
                <Link href="/user/pesan">
                <button
                  style={{
                    background: "#FFD700",
                    color: "#000",
                    border: "none",
                    borderRadius: "10px",
                    padding: "10px 24px",
                    fontSize: "14px",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontFamily: "var(--font)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#f0c800";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#FFD700";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Pesan
                </button>
                </Link>
              </div>
            </div>

            {/* Row 2: Specialty + Location */}
            <p
              style={{
                fontSize: "13px",
                color: "#FFD700",
                marginBottom: "6px",
                fontWeight: 600,
              }}
            >
              {coach.specialty} ·{" "}
              <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>
                {coach.location}
              </span>
            </p>

            {/* Row 3: Stars + Review Count */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                marginBottom: "14px",
              }}
            >
              <span style={{ color: "#FFD700", fontSize: "13px" }}>
                {"★".repeat(Math.round(coach.rating))}
              </span>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "white",
                }}
              >
                {coach.rating}
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                ({coach.reviewCount} ulasan)
              </span>
            </div>

            {/* Tags */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {coach.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "rgba(255,215,0,0.1)",
                    border: "1px solid rgba(255,215,0,0.3)",
                    color: "#FFD700",
                    fontSize: "11px",
                    fontWeight: 600,
                    padding: "4px 12px",
                    borderRadius: "50px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ─── FOTO & VIDEO GALLERY ─── */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              padding: "20px 24px",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "white",
                marginBottom: "14px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              📷 Foto & Video
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "10px",
              }}
            >
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    height: "110px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.03)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                >
                  <Image
                    src={img}
                    alt={`Foto ${i + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── ULASAN SECTION ─── */}
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "28px 28px",
          }}
        >
          <h2
            style={{
              fontSize: "26px",
              fontWeight: 800,
              color: "white",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            ⭐ Ulasan
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {reviews.map((rev) => (
              <div
                key={rev.id}
                style={{
                  background: "white",
                  borderRadius: "14px",
                  padding: "18px 20px",
                  display: "flex",
                  gap: "14px",
                  alignItems: "flex-start",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    flexShrink: 0,
                    position: "relative",
                  }}
                >
                  <Image
                    src={rev.avatar}
                    alt={rev.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "6px",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 700,
                        fontSize: "15px",
                        color: "#1a1a1a",
                      }}
                    >
                      {rev.name}
                    </p>
                    <div style={{ color: "#FFD700", fontSize: "13px" }}>
                      {"★".repeat(rev.stars)}
                      <span style={{ color: "#ddd" }}>
                        {"★".repeat(5 - rev.stars)}
                      </span>
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#555",
                      lineHeight: 1.65,
                    }}
                  >
                    {rev.comment}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Load more reviews */}
          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <button
              style={{
                background: "transparent",
                border: "1.5px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.5)",
                padding: "11px 32px",
                borderRadius: "10px",
                fontSize: "13px",
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
                e.currentTarget.style.borderColor =
                  "rgba(255,255,255,0.15)";
                e.currentTarget.style.color = "rgba(255,255,255,0.5)";
              }}
            >
              Muat Lebih Banyak Ulasan
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
