"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NavbarUser from "@/components/NavbarUser";
import Footer from "@/components/Footer";

const availableDates = [
  "Senin, 07 April 2026",
  "Selasa, 08 April 2026",
  "Rabu, 09 April 2026",
  "Kamis, 10 April 2026",
  "Jumat, 11 April 2026",
  "Senin, 14 April 2026",
  "Selasa, 15 April 2026",
  "Rabu, 16 April 2026",
];

const availableTimes = [
  "08:00-10:00",
  "10:00-12:00",
  "13:00-15:00",
  "15:00-17:00",
  "17:00-19:00",
];

const defaultLocation = "Setiabudi, Kota Bandung";
const bankOptions = ["BRI", "BCA", "Mandiri Bank", "Seabank"];
const paymentOptions = ["QRIS", "Dana", "OVO", "GoPay", "Transfer Bank"];
const pricePerSesi = 125000;
const diskon = 15000;

type SessionData = { date: string; time: string };

const selectStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "10px",
  padding: "11px 14px",
  color: "white",
  fontSize: "14px",
  fontFamily: "var(--font)",
  cursor: "pointer",
  outline: "none",
  appearance: "none",
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23aaa' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 12px center",
  paddingRight: "36px",
};

const labelStyle: React.CSSProperties = {
  fontSize: "12px",
  fontWeight: 700,
  letterSpacing: "0.6px",
  color: "rgba(255,255,255,0.4)",
  textTransform: "uppercase",
  marginBottom: "8px",
  display: "block",
};

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: "16px",
  padding: "24px",
  marginBottom: "16px",
};

export default function UserPesanPage() {
  const router = useRouter();

  const [kategori, setKategori] = useState<"Pribadi" | "Kelompok">("Pribadi");
  const [sesiCount, setSesiCount] = useState(1);
  const [metodePembayaran, setMetodePembayaran] = useState("QRIS");
  const [bankPilihan, setBankPilihan] = useState("BCA");
  const [sessions, setSessions] = useState<SessionData[]>(
    Array.from({ length: 8 }, () => ({ date: availableDates[0], time: availableTimes[0] }))
  );
  const [ordered, setOrdered] = useState(false);

  // ── Navigation Guard State ──
  const [showModal, setShowModal] = useState(false);
  const [pendingUrl, setPendingUrl] = useState<string | null>(null);
  const orderedRef = useRef(false);

  const subtotal = pricePerSesi * sesiCount;
  const total = subtotal - diskon;

  const updateSession = (index: number, field: keyof SessionData, value: string) => {
    setSessions((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleSesiChange = (val: number) => {
    const clamped = Math.max(1, Math.min(8, val));
    setSesiCount(clamped);
  };

  const handleOrder = () => {
    orderedRef.current = true;
    setOrdered(true);
    setTimeout(() => setOrdered(false), 3000);
  };

  // ── Navigation Guard: intercept all anchor clicks ──
  const handleAnchorClick = useCallback((e: MouseEvent) => {
    // Sudah selesai order → tidak perlu guard
    if (orderedRef.current) return;

    const target = (e.target as HTMLElement).closest("a");
    if (!target) return;

    const href = target.getAttribute("href");
    if (!href || href === "#" || href.startsWith("mailto:") || href.startsWith("tel:")) return;

    // Kalau link ke external atau download → biarkan
    if (target.getAttribute("target") === "_blank") return;

    e.preventDefault();
    e.stopPropagation();
    setPendingUrl(href);
    setShowModal(true);
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleAnchorClick, true); // capture phase
    return () => document.removeEventListener("click", handleAnchorClick, true);
  }, [handleAnchorClick]);

  // ── Modal handlers ──
  const handleBatalkan = () => {
    setShowModal(false);
    if (pendingUrl) {
      orderedRef.current = true; // Bypass guard saat navigate
      router.push(pendingUrl);
    }
  };

  const handleLanjutPembayaran = () => {
    setShowModal(false);
    setPendingUrl(null);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", paddingTop: "68px", fontFamily: "var(--font)" }}>
      <NavbarUser userName="Dina Agustina" />

      {/* ─── CONFIRMATION MODAL ─── */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "20px",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) handleLanjutPembayaran();
          }}
        >
          <div
            style={{
              background: "#111",
              border: "1px solid rgba(255,215,0,0.25)",
              borderRadius: "20px",
              padding: "36px 32px",
              maxWidth: "400px",
              width: "100%",
              textAlign: "center",
              boxShadow: "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,215,0,0.1)",
              animation: "modalIn 0.25s ease",
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "rgba(255,215,0,0.1)",
                border: "1.5px solid rgba(255,215,0,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
                margin: "0 auto 20px",
              }}
            >
              ⚠️
            </div>

            <h2
              style={{
                fontSize: "20px",
                fontWeight: 800,
                color: "white",
                marginBottom: "10px",
              }}
            >
              Tinggalkan Halaman?
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.65,
                marginBottom: "28px",
              }}
            >
              Pesananmu belum selesai dibuat. Jika kamu meninggalkan halaman ini, data yang sudah kamu isi akan hilang.
            </p>

            {/* Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <button
                onClick={handleLanjutPembayaran}
                style={{
                  background: "#FFD700",
                  color: "#000",
                  border: "none",
                  borderRadius: "12px",
                  padding: "13px",
                  fontSize: "14px",
                  fontWeight: 800,
                  cursor: "pointer",
                  fontFamily: "var(--font)",
                  transition: "all 0.2s",
                  boxShadow: "0 4px 16px rgba(255,215,0,0.25)",
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
                Lanjut Pembayaran
              </button>

              <button
                onClick={handleBatalkan}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.6)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "12px",
                  padding: "13px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "var(--font)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(239,68,68,0.1)";
                  e.currentTarget.style.borderColor = "rgba(239,68,68,0.3)";
                  e.currentTarget.style.color = "#ef4444";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                }}
              >
                Batalkan Pesanan
              </button>
            </div>
          </div>
        </div>
      )}

      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* ─── TITLE ─── */}
        <h1 style={{ fontSize: "28px", fontWeight: 800, color: "#FFD700", textAlign: "center", marginBottom: "28px" }}>
          Pesanan
        </h1>

        {/* ─── PEMESAN ─── */}
        <div style={cardStyle}>
          <p style={{ fontSize: "15px", fontWeight: 700, color: "#FFD700", marginBottom: "14px" }}>Pemesan</p>
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            <div>
              <p style={{ fontWeight: 700, fontSize: "14px", color: "white" }}>Dina Agustina</p>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", marginTop: "4px" }}>(+62) 821 671 17061</p>
            </div>
            <div>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>Jl. Setiabudi, Bandung, Jawa Barat</p>
            </div>
          </div>
        </div>

        {/* ─── JASA PELATIHAN ─── */}
        <div style={cardStyle}>
          <p style={{ fontSize: "15px", fontWeight: 700, color: "#FFD700", marginBottom: "16px" }}>Jasa Pelatihan</p>

          {/* Coach Mini Card */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "12px", overflow: "hidden", marginBottom: "24px",
          }}>
            <div style={{ padding: "16px 18px", flex: 1 }}>
              <p style={{ fontWeight: 800, fontSize: "17px", color: "white", marginBottom: "4px" }}>Sofia</p>
              <p style={{ fontSize: "12px", color: "#FFD700", fontWeight: 600, marginBottom: "2px" }}>Bulu Tangkis</p>
              <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "8px" }}>Cimpenan, Kota Bandung</p>
              <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "10px" }}>
                <span style={{ color: "#FFD700", fontSize: "12px" }}>★★★★★</span>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "white" }}>4.96</span>
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)" }}>(187 ulasan)</span>
              </div>
              <p style={{ fontSize: "18px", fontWeight: 800, color: "white" }}>
                Rp 125K <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>/ sesi</span>
              </p>
            </div>
            <div style={{ width: "170px", height: "130px", position: "relative", flexShrink: 0 }}>
              <Image src="/coach2.png" alt="Sofia" layout="fill" objectFit="cover" />
            </div>
          </div>

          {/* ── 3-column row: Kategori, Sesi, Metode Pembayaran ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px", marginBottom: "24px" }}>

            {/* Kategori Pesanan */}
            <div>
              <label style={labelStyle}>Kategori Pesanan</label>
              <select
                value={kategori}
                onChange={(e) => setKategori(e.target.value as "Pribadi" | "Kelompok")}
                style={selectStyle}
              >
                <option value="Pribadi" style={{ background: "#111" }}>Pribadi</option>
                <option value="Kelompok" style={{ background: "#111" }}>Kelompok</option>
              </select>
            </div>

            {/* Sesi */}
            <div>
              <label style={labelStyle}>Sesi</label>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <button
                  onClick={() => handleSesiChange(sesiCount - 1)}
                  style={{
                    width: "36px", height: "42px", borderRadius: "8px",
                    background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                    color: "white", fontSize: "18px", cursor: "pointer", flexShrink: 0,
                    fontFamily: "var(--font)", transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,215,0,0.15)"; e.currentTarget.style.borderColor = "#FFD700"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
                >−</button>
                <input
                  type="number"
                  min={1}
                  max={8}
                  value={sesiCount}
                  onChange={(e) => handleSesiChange(Number(e.target.value))}
                  style={{
                    ...selectStyle,
                    textAlign: "center",
                    paddingRight: "14px",
                    backgroundImage: "none",
                    width: "100%",
                  }}
                />
                <button
                  onClick={() => handleSesiChange(sesiCount + 1)}
                  style={{
                    width: "36px", height: "42px", borderRadius: "8px",
                    background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                    color: "white", fontSize: "18px", cursor: "pointer", flexShrink: 0,
                    fontFamily: "var(--font)", transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,215,0,0.15)"; e.currentTarget.style.borderColor = "#FFD700"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
                >+</button>
              </div>
              <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", marginTop: "5px" }}>Maks. 8 sesi</p>
            </div>

            {/* Metode Pembayaran */}
            <div>
              <label style={labelStyle}>Metode Pembayaran</label>
              <select
                value={metodePembayaran}
                onChange={(e) => { setMetodePembayaran(e.target.value); if (e.target.value !== "Transfer Bank") setBankPilihan(""); }}
                style={selectStyle}
              >
                {paymentOptions.map((opt) => (
                  <option key={opt} value={opt} style={{ background: "#111" }}>{opt}</option>
                ))}
              </select>
              {metodePembayaran === "Transfer Bank" && (
                <select
                  value={bankPilihan}
                  onChange={(e) => setBankPilihan(e.target.value)}
                  style={{ ...selectStyle, marginTop: "8px", borderColor: "rgba(255,215,0,0.3)" }}
                >
                  <option value="" style={{ background: "#111" }}>Pilih Bank</option>
                  {bankOptions.map((bank) => (
                    <option key={bank} value={bank} style={{ background: "#111" }}>{bank}</option>
                  ))}
                </select>
              )}
            </div>
          </div>

          {/* ── SESSION CARDS ── */}
          <div style={{
            maxHeight: sesiCount > 3 ? "420px" : "auto",
            overflowY: sesiCount > 3 ? "auto" : "visible",
            paddingRight: sesiCount > 3 ? "4px" : "0",
          }}>
            {Array.from({ length: sesiCount }, (_, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "12px",
                  padding: "16px",
                  marginBottom: "12px",
                }}
              >
                <p style={{ fontSize: "13px", fontWeight: 700, color: "#FFD700", marginBottom: "12px" }}>
                  Sesi {i + 1}
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div>
                    <label style={labelStyle}>Jadwal</label>
                    <select
                      value={sessions[i].date}
                      onChange={(e) => updateSession(i, "date", e.target.value)}
                      style={{ ...selectStyle, marginBottom: "8px" }}
                    >
                      {availableDates.map((d) => (
                        <option key={d} value={d} style={{ background: "#111" }}>{d}</option>
                      ))}
                    </select>
                    <select
                      value={sessions[i].time}
                      onChange={(e) => updateSession(i, "time", e.target.value)}
                      style={selectStyle}
                    >
                      {availableTimes.map((t) => (
                        <option key={t} value={t} style={{ background: "#111" }}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Lokasi</label>
                    <div style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "10px",
                      padding: "11px 14px",
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.5)",
                      minHeight: "42px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}>
                      <span style={{ fontSize: "14px" }}>📍</span>
                      {defaultLocation}
                    </div>
                    <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.25)", marginTop: "5px" }}>
                      Lokasi ditentukan oleh pelatih
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── ORDER SUMMARY ─── */}
        <div style={{ ...cardStyle, marginBottom: "0" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>Subtotal pemesanan</span>
              <span style={{ fontSize: "14px", fontWeight: 600, color: "white" }}>Rp {subtotal.toLocaleString("id-ID")}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>Metode Pembayaran</span>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#FFD700" }}>
                {metodePembayaran === "Transfer Bank" && bankPilihan ? bankPilihan : metodePembayaran}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>Diskon</span>
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#22c55e" }}>− Rp {diskon.toLocaleString("id-ID")}</span>
            </div>
            <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", margin: "4px 0" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "14px", fontWeight: 700, color: "white" }}>Total Pembayaran</span>
              <span style={{ fontSize: "18px", fontWeight: 800, color: "white" }}>Rp {total.toLocaleString("id-ID")}</span>
            </div>
          </div>

          <button
            onClick={handleOrder}
            style={{
              width: "100%",
              background: ordered ? "#22c55e" : "#FFD700",
              color: "#000",
              border: "none",
              borderRadius: "12px",
              padding: "14px",
              fontSize: "15px",
              fontWeight: 800,
              cursor: "pointer",
              fontFamily: "var(--font)",
              boxShadow: ordered ? "0 4px 20px rgba(34,197,94,0.35)" : "0 4px 20px rgba(255,215,0,0.25)",
              transition: "all 0.3s",
              letterSpacing: "0.3px",
            }}
            onMouseEnter={(e) => {
              if (!ordered) {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(255,215,0,0.4)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = ordered ? "0 4px 20px rgba(34,197,94,0.35)" : "0 4px 20px rgba(255,215,0,0.25)";
            }}
          >
            {ordered ? "✓ Pesanan Berhasil Dibuat!" : "Buat Pesanan"}
          </button>

          {ordered && (
            <div style={{ textAlign: "center", marginTop: "14px" }}>
              <Link href="/user/aktivitas" style={{ fontSize: "13px", color: "#FFD700", fontWeight: 600 }}>
                Lihat di Aktivitas →
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Modal animation */}
      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.92) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      <Footer />
    </div>
  );
}
