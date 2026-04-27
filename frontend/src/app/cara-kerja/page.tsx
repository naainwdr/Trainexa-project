"use client";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const steps = [
  {
    number: "01",
    icon: "🔍",
    title: "Temukan Pelatih",
    desc: "Telusuri ratusan pelatih terverifikasi berdasarkan olahraga, lokasi, peringkat, dan harga. Gunakan filter canggih kami untuk menemukan pelatih yang paling sesuai dengan kebutuhan dan jadwal kamu.",
    details: [
      "Filter berdasarkan olahraga, lokasi & harga",
      "Lihat profil lengkap & sertifikat pelatih",
      "Baca ratusan ulasan dari pengguna nyata",
      "Bandingkan pelatih secara side-by-side",
    ],
    color: "#FFD700",
  },
  {
    number: "02",
    icon: "📅",
    title: "Pesan Sesi",
    desc: "Pilih waktu yang cocok dari kalender pelatih secara real-time. Pemesanan instan tersedia, atau ajukan permintaan dan pelatih akan konfirmasi dalam 2 jam. Bayar aman lewat platform kami.",
    details: [
      "Kalender ketersediaan real-time",
      "Pemesanan instan atau konfirmasi 2 jam",
      "Pembayaran aman & terenkripsi",
      "Reschedule mudah hingga 24 jam sebelumnya",
    ],
    color: "#60a5fa",
  },
  {
    number: "03",
    icon: "🏆",
    title: "Latih & Berkembang",
    desc: "Ikuti sesi latihan secara langsung atau daring sesuai pilihanmu. Pelatih akan membuat program personal, memantau progres, dan memberikan feedback agar kamu terus berkembang setiap sesinya.",
    details: [
      "Sesi langsung atau daring via video call",
      "Program latihan personal terstruktur",
      "Pantau progres dengan dashboard pribadi",
      "Feedback detail setelah setiap sesi",
    ],
    color: "#4ade80",
  },
];

const benefits = [
  { icon: "✅", title: "Pelatih Terverifikasi", desc: "Semua pelatih sudah melalui proses verifikasi ketat, pengecekan sertifikat, dan review rekam jejak sebelum bergabung." },
  { icon: "💳", title: "Bayar Per Sesi", desc: "Tidak ada kontrak atau biaya langganan tersembunyi. Bayar hanya untuk sesi yang kamu lakukan, kapan pun kamu mau." },
  { icon: "🔒", title: "Pembayaran Aman", desc: "Sistem escrow kami menahan pembayaran hingga sesi selesai. Uangmu 100% terlindungi jika pelatih tidak hadir." },
  { icon: "⭐", title: "Garansi Kepuasan", desc: "Tidak puas dengan sesi pertama? Kami kembalikan uangmu penuh. Kepuasan kamu adalah prioritas utama kami." },
  { icon: "📱", title: "Akses Kapan Saja", desc: "Kelola booking, pantau jadwal, dan chat dengan pelatih langsung dari aplikasi atau browser, 24/7." },
  { icon: "🌍", title: "Online & Offline", desc: "Pilih sesi tatap muka di lokasi yang disepakati, atau ikuti latihan daring via video call berkualitas tinggi." },
];

const faqs = [
  {
    q: "Bagaimana cara memilih pelatih yang tepat?",
    a: "Gunakan filter di halaman Pelatih untuk menyaring berdasarkan olahraga, lokasi, harga, dan rating. Baca ulasan dari pengguna lain, lihat profil lengkap pelatih termasuk sertifikat dan pengalaman mereka. Kamu juga bisa mengirim pesan ke pelatih sebelum memesan.",
  },
  {
    q: "Berapa biaya untuk menggunakan Trainexa?",
    a: "Mendaftar dan menelusuri pelatih sepenuhnya gratis. Kamu hanya membayar saat memesan sesi dengan pelatih. Harga per sesi ditentukan oleh masing-masing pelatih dan bervariasi mulai dari Rp 75.000 hingga Rp 500.000+.",
  },
  {
    q: "Apakah saya bisa membatalkan atau reschedule sesi?",
    a: "Ya! Kamu bisa reschedule atau batalkan sesi hingga 24 jam sebelum waktu yang ditentukan tanpa biaya apapun. Pembatalan mendadak (di bawah 24 jam) dapat dikenakan biaya pembatalan sesuai kebijakan pelatih.",
  },
  {
    q: "Bagaimana jika saya tidak puas dengan sesi pertama?",
    a: "Kami menawarkan garansi kepuasan untuk sesi pertama. Jika kamu merasa sesi tidak sesuai ekspektasi, hubungi tim support kami dalam 24 jam setelah sesi dan kami akan memproses refund penuh atau mencarikan pelatih pengganti.",
  },
  {
    q: "Apakah pelatih sudah terverifikasi?",
    a: "Semua pelatih melalui proses verifikasi ketat: pengecekan identitas, validasi sertifikat kepelatihan, wawancara dengan tim kami, dan review rekam jejak. Hanya pelatih yang lolos seluruh tahapan yang dapat bergabung di platform kami.",
  },
  {
    q: "Bisakah latihan dilakukan secara online?",
    a: "Tentu! Banyak pelatih di Trainexa menawarkan sesi daring via video call. Kamu bisa filter pelatih berdasarkan opsi 'Online' untuk menemukan pelatih yang menyediakan layanan ini.",
  },
];

export default function CaraKerjaPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div style={{ minHeight: "100vh", background: "#000", paddingTop: "68px" }}>
      <Navbar />

      {/* ─── HERO ─── */}
      <section
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 0%, rgba(255,215,0,0.1) 0%, transparent 60%)",
          padding: "80px 72px 64px",
          textAlign: "center",
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
          CARA KERJA TRAINEXA
        </p>
        <h1
          style={{
            fontSize: "56px",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "20px",
            maxWidth: "700px",
            margin: "0 auto 20px",
          }}
        >
          Mulai latihan dalam{" "}
          <span style={{ color: "#FFD700" }}>3 langkah</span> mudah
        </h1>
        <p
          style={{
            fontSize: "17px",
            color: "rgba(255,255,255,0.45)",
            maxWidth: "520px",
            margin: "0 auto 52px",
            lineHeight: 1.7,
          }}
        >
          Dari temukan pelatih hingga sesi pertamamu — semuanya bisa selesai
          dalam hitungan menit.
        </p>

        {/* Step Number Nav */}
        <div
          style={{
            display: "inline-flex",
            gap: "0",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "16px",
            padding: "6px",
          }}
        >
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveStep(i)}
              style={{
                background: activeStep === i ? "#FFD700" : "transparent",
                border: "none",
                color: activeStep === i ? "#000" : "rgba(255,255,255,0.5)",
                padding: "10px 28px",
                borderRadius: "12px",
                fontSize: "14px",
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "var(--font)",
                transition: "all 0.25s",
              }}
            >
              {s.number} {s.title}
            </button>
          ))}
        </div>
      </section>

      {/* ─── STEP DETAIL ─── */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "64px 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
        }}
      >
        {/* Left: Visual */}
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: `1px solid ${steps[activeStep].color}33`,
            borderRadius: "28px",
            padding: "56px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "300px",
              height: "300px",
              background: `radial-gradient(circle, ${steps[activeStep].color}18 0%, transparent 70%)`,
              pointerEvents: "none",
            }}
          />
          <div style={{ fontSize: "96px", marginBottom: "24px", lineHeight: 1 }}>
            {steps[activeStep].icon}
          </div>
          <div
            style={{
              fontSize: "100px",
              fontWeight: 900,
              color: steps[activeStep].color,
              opacity: 0.12,
              lineHeight: 1,
              fontFamily: "Arial Black, sans-serif",
              userSelect: "none",
            }}
          >
            {steps[activeStep].number}
          </div>

          {/* Step dots nav */}
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "32px" }}>
            {steps.map((_, i) => (
              <div
                key={i}
                onClick={() => setActiveStep(i)}
                style={{
                  width: activeStep === i ? "28px" : "8px",
                  height: "8px",
                  borderRadius: "99px",
                  background: activeStep === i ? steps[activeStep].color : "rgba(255,255,255,0.2)",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
              />
            ))}
          </div>
        </div>

        {/* Right: Text */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: `${steps[activeStep].color}18`,
              border: `1px solid ${steps[activeStep].color}40`,
              color: steps[activeStep].color,
              padding: "6px 16px",
              borderRadius: "50px",
              fontSize: "13px",
              fontWeight: 700,
              marginBottom: "20px",
            }}
          >
            Langkah {steps[activeStep].number}
          </div>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            {steps[activeStep].title}
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.75,
              marginBottom: "32px",
            }}
          >
            {steps[activeStep].desc}
          </p>

          {/* Checklist */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {steps[activeStep].details.map((d, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: `${steps[activeStep].color}20`,
                    border: `1.5px solid ${steps[activeStep].color}60`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    color: steps[activeStep].color,
                    flexShrink: 0,
                    fontWeight: 700,
                  }}
                >
                  ✓
                </div>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)" }}>{d}</p>
              </div>
            ))}
          </div>

          {/* Nav Buttons */}
          <div style={{ display: "flex", gap: "12px", marginTop: "40px" }}>
            {activeStep > 0 && (
              <button
                onClick={() => setActiveStep(activeStep - 1)}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.6)",
                  padding: "12px 24px",
                  borderRadius: "10px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "var(--font)",
                  transition: "all 0.2s",
                }}
              >
                ← Sebelumnya
              </button>
            )}
            {activeStep < steps.length - 1 ? (
              <button
                onClick={() => setActiveStep(activeStep + 1)}
                style={{
                  background: steps[activeStep].color,
                  border: "none",
                  color: "#000",
                  padding: "12px 28px",
                  borderRadius: "10px",
                  fontSize: "14px",
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "var(--font)",
                  transition: "all 0.2s",
                }}
              >
                Selanjutnya →
              </button>
            ) : (
              <Link href="/daftar">
                <button
                  style={{
                    background: "#FFD700",
                    border: "none",
                    color: "#000",
                    padding: "12px 28px",
                    borderRadius: "10px",
                    fontSize: "14px",
                    fontWeight: 700,
                    cursor: "pointer",
                    fontFamily: "var(--font)",
                    boxShadow: "0 4px 20px rgba(255,215,0,0.3)",
                  }}
                >
                  Mulai Sekarang 🎉
                </button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ─── ALL STEPS TIMELINE ─── */}
      <section
        style={{
          background: "rgba(255,255,255,0.02)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "80px 72px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#FFD700", marginBottom: "12px" }}>
            RINGKASAN
          </p>
          <h2 style={{ fontSize: "40px", fontWeight: 800 }}>
            Perjalanan <span style={{ color: "#FFD700" }}>kamu</span> bersama Trainexa
          </h2>
        </div>

        <div
          style={{
            display: "flex",
            gap: "0",
            maxWidth: "900px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {/* Connector line */}
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: "calc(16.6% + 20px)",
              right: "calc(16.6% + 20px)",
              height: "2px",
              background: "linear-gradient(to right, #FFD700, #60a5fa, #4ade80)",
              opacity: 0.3,
            }}
          />

          {steps.map((step, i) => (
            <div
              key={i}
              onClick={() => setActiveStep(i)}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                cursor: "pointer",
                padding: "0 20px",
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: activeStep === i ? step.color : "rgba(255,255,255,0.05)",
                  border: `2px solid ${activeStep === i ? step.color : "rgba(255,255,255,0.1)"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "32px",
                  marginBottom: "20px",
                  transition: "all 0.3s",
                  boxShadow: activeStep === i ? `0 0 32px ${step.color}40` : "none",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {step.icon}
              </div>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 900,
                  color: step.color,
                  marginBottom: "8px",
                }}
              >
                {step.number}
              </div>
              <div style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>
                {step.title}
              </div>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
                {step.desc.split(".")[0]}.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section style={{ padding: "80px 72px", background: "#000" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#FFD700", marginBottom: "12px" }}>
            KENAPA TRAINEXA?
          </p>
          <h2 style={{ fontSize: "40px", fontWeight: 800 }}>
            Yang membuat kami <span style={{ color: "#FFD700" }}>berbeda</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {benefits.map((b, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "20px",
                padding: "32px 28px",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,215,0,0.3)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  background: "rgba(255,215,0,0.1)",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  marginBottom: "20px",
                }}
              >
                {b.icon}
              </div>
              <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "10px" }}>
                {b.title}
              </h3>
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section
        style={{
          background: "rgba(255,255,255,0.02)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "80px 72px",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#FFD700", marginBottom: "12px" }}>
              FAQ
            </p>
            <h2 style={{ fontSize: "40px", fontWeight: 800 }}>
              Pertanyaan yang <span style={{ color: "#FFD700" }}>sering ditanyakan</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: openFaq === i ? "rgba(255,215,0,0.05)" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${openFaq === i ? "rgba(255,215,0,0.3)" : "rgba(255,255,255,0.08)"}`,
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "all 0.25s",
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    padding: "22px 28px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    fontFamily: "var(--font)",
                    textAlign: "left",
                    gap: "16px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: openFaq === i ? "#FFD700" : "white",
                      transition: "color 0.2s",
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      fontSize: "20px",
                      color: openFaq === i ? "#FFD700" : "rgba(255,255,255,0.35)",
                      transition: "all 0.3s",
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 28px 24px" }}>
                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        style={{
          background: "#000",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "100px 72px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(255,215,0,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <p style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "20px" }}>
          Siap memulai?
        </p>
        <h2 style={{ fontSize: "52px", fontWeight: 800, lineHeight: 1.15, maxWidth: "600px", margin: "0 auto 16px" }}>
          Sesi pertamamu hanya <span style={{ color: "#FFD700" }}>3 langkah</span> lagi
        </h2>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.45)", marginBottom: "44px" }}>
          Lebih dari 2.400 pelatih terverifikasi siap membantumu berkembang
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <Link href="/daftar">
            <button
              style={{
                background: "#FFD700",
                color: "#000",
                border: "none",
                borderRadius: "12px",
                padding: "16px 44px",
                fontSize: "16px",
                fontWeight: 800,
                cursor: "pointer",
                fontFamily: "var(--font)",
                boxShadow: "0 4px 20px rgba(255,215,0,0.3)",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 28px rgba(255,215,0,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 20px rgba(255,215,0,0.3)";
              }}
            >
              Daftar Gratis
            </button>
          </Link>
          <Link href="/pelatih">
            <button
              style={{
                background: "transparent",
                color: "rgba(255,255,255,0.7)",
                border: "1.5px solid rgba(255,255,255,0.2)",
                borderRadius: "12px",
                padding: "16px 36px",
                fontSize: "16px",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "var(--font)",
                transition: "all 0.25s",
              }}
            >
              Lihat Pelatih →
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
