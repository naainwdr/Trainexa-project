"use client";
import { useState } from "react";
import Link from "next/link";
import NavbarUser from "@/components/NavbarUser";
import Footer from "@/components/Footer";

type Activity = {
  id: number;
  coach: string;
  specialty: string;
  date: string;
  time: string;
  duration: string;
  status: "Selesai" | "Dibatalkan" | "Mendatang";
  price: number;
  emoji: string;
};

const dummyActivities: Activity[] = [
  //Hapus jika ingin menampilkan halaman kosong
  {
    id: 1,
    coach: "Sofia",
    specialty: "Bulu Tangkis",
    date: "Senin, 5 Mei 2026",
    time: "09:00 – 10:00",
    duration: "1 Jam",
    status: "Selesai",
    price: 125000,
    emoji: "🏸",
  },
  {
    id: 2,
    coach: "Yogi",
    specialty: "Yoga",
    date: "Rabu, 7 Mei 2026",
    time: "07:00 – 08:00",
    duration: "1 Jam",
    status: "Mendatang",
    price: 95000,
    emoji: "🧘",
  },

  //Hapus sampai sini
];

const statusColor: Record<Activity["status"], { bg: string; border: string; text: string }> = {
  Selesai: {
    bg: "rgba(34,197,94,0.12)",
    border: "rgba(34,197,94,0.35)",
    text: "#22c55e",
  },
  Mendatang: {
    bg: "rgba(255,215,0,0.12)",
    border: "rgba(255,215,0,0.35)",
    text: "#FFD700",
  },
  Dibatalkan: {
    bg: "rgba(239,68,68,0.12)",
    border: "rgba(239,68,68,0.35)",
    text: "#ef4444",
  },
};

export default function UserAktivitasPage() {
  // Ganti ke [] untuk lihat tampilan kosong
  const [activities] = useState<Activity[]>(dummyActivities);

  const hasActivities = activities.length > 0;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        paddingTop: "68px",
        fontFamily: "var(--font)",
      }}
    >
      <NavbarUser userName="Dina Agustina" />

      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "48px 24px 80px",
        }}
      >
        {/* ─── PAGE HEADER ─── */}
        <div style={{ marginBottom: "32px" }}>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              color: "#FFD700",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            RIWAYAT
          </p>
          <h1
            style={{
              fontSize: "32px",
              fontWeight: 800,
              color: "white",
            }}
          >
            Aktivitas
          </h1>
          {hasActivities && (
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.4)",
                marginTop: "8px",
              }}
            >
              {activities.length} sesi tercatat
            </p>
          )}
        </div>

        {/* ─── CONTAINER ─── */}
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            overflow: "hidden",
            minHeight: "220px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {hasActivities ? (
            /* ── ADA AKTIVITAS ── */
            <div style={{ padding: "8px 0" }}>
              {activities.map((act, i) => (
                <div
                  key={act.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    padding: "22px 28px",
                    borderBottom:
                      i < activities.length - 1
                        ? "1px solid rgba(255,255,255,0.06)"
                        : "none",
                    background: "rgba(255,255,255,0.025)",
                    margin: "8px 12px",
                    borderRadius: "14px",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.025)";
                  }}
                >
                  {/* Emoji Icon */}
                  <div
                    style={{
                      width: "54px",
                      height: "54px",
                      borderRadius: "14px",
                      background: "rgba(255,215,0,0.08)",
                      border: "1px solid rgba(255,215,0,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "26px",
                      flexShrink: 0,
                    }}
                  >
                    {act.emoji}
                  </div>

                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "4px",
                      }}
                    >
                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: "16px",
                          color: "white",
                        }}
                      >
                        {act.specialty}
                      </p>
                      <span
                        style={{
                          background: statusColor[act.status].bg,
                          border: `1px solid ${statusColor[act.status].border}`,
                          color: statusColor[act.status].text,
                          fontSize: "11px",
                          fontWeight: 700,
                          padding: "3px 10px",
                          borderRadius: "50px",
                        }}
                      >
                        {act.status}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.45)",
                      }}
                    >
                      Coach {act.coach} · {act.date} · {act.time} · {act.duration}
                    </p>
                  </div>

                  {/* Price + Action */}
                  <div
                    style={{
                      textAlign: "right",
                      flexShrink: 0,
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 800,
                        fontSize: "18px",
                        color: "white",
                        marginBottom: "8px",
                      }}
                    >
                      Rp {(act.price / 1000).toFixed(0)}K
                    </p>
                    {act.status === "Selesai" && (
                      <Link href="/user/ulasan-selengkapnya">
                        <button
                          style={{
                            background: "rgba(255,215,0,0.1)",
                            border: "1px solid rgba(255,215,0,0.35)",
                            color: "#FFD700",
                            padding: "7px 16px",
                            borderRadius: "8px",
                            fontSize: "12px",
                            fontWeight: 600,
                            cursor: "pointer",
                            fontFamily: "var(--font)",
                            transition: "all 0.2s",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background =
                              "rgba(255,215,0,0.2)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background =
                              "rgba(255,215,0,0.1)";
                          }}
                        >
                          Beri Ulasan
                        </button>
                      </Link>
                    )}
                    {act.status === "Mendatang" && (
                      <button
                        style={{
                          background: "rgba(239,68,68,0.1)",
                          border: "1px solid rgba(239,68,68,0.3)",
                          color: "#ef4444",
                          padding: "7px 16px",
                          borderRadius: "8px",
                          fontSize: "12px",
                          fontWeight: 600,
                          cursor: "pointer",
                          fontFamily: "var(--font)",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            "rgba(239,68,68,0.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background =
                            "rgba(239,68,68,0.1)";
                        }}
                      >
                        Batalkan
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* ── TIDAK ADA AKTIVITAS ── */
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "64px 40px",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  color: "#FFD700",
                  marginBottom: "12px",
                }}
              >
                Belum ada aktivitas
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.45)",
                  marginBottom: "28px",
                }}
              >
                Mulai sesi pertamamu sekarang!
              </p>
              <Link href="/user/pelatih">
                <button
                  style={{
                    background: "#FFD700",
                    color: "#000",
                    border: "none",
                    borderRadius: "50px",
                    padding: "13px 32px",
                    fontSize: "15px",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontFamily: "var(--font)",
                    boxShadow: "0 4px 20px rgba(255,215,0,0.3)",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 28px rgba(255,215,0,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(255,215,0,0.3)";
                  }}
                >
                  Temukan Pelatih →
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
