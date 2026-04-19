"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ReportPage() {
  const router = useRouter();
  const [summary, setSummary] = useState("");

  const handleSave = () => {
    router.push("/pelatih/pemesanan");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#060606", color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif", display: "flex", flexDirection: "column" }}>
      {/* ─── NAVBAR ─── */}
      <nav className="navbar" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '68px', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 72px', boxSizing: 'border-box', zIndex: 1000, borderBottom: '1px solid #eee' }}>
        <div className="navbar-logo" style={{ fontSize: '22px', fontWeight: '800', color: '#fcc419', letterSpacing: '-0.5px' }}>
          <span style={{ marginRight: '5px' }}>⚡</span>
          train<span style={{ color: '#1a1a1a' }}>exa</span>
        </div>
        <ul className="navbar-menu" style={{ display: 'flex', gap: '36px', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><Link href="/pelatih/beranda" style={{ textDecoration: 'none', fontSize: '14px', fontWeight: '600', color: '#495057' }}>Beranda</Link></li>
          <li><Link href="/pelatih/profile" style={{ textDecoration: 'none', fontSize: '14px', fontWeight: '600', color: '#495057' }}>Profil</Link></li>
          <li><Link href="/pelatih/olahraga" style={{ textDecoration: 'none', fontSize: '14px', fontWeight: '600', color: '#495057' }}>Olahraga</Link></li>
          <li><Link href="/pelatih/jadwal" style={{ textDecoration: 'none', fontSize: '14px', fontWeight: '600', color: '#495057' }}>Jadwal</Link></li>
          <li><Link href="/pelatih/pemesanan" style={{ textDecoration: 'none', fontSize: '14px', fontWeight: '800', color: '#fcc419' }}>Pemesanan</Link></li>
        </ul>
        <div className="navbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div className="navbar-user" style={{ backgroundColor: '#fcc419', color: '#1a1a1a', padding: '8px 16px', borderRadius: '20px', fontWeight: '700', fontSize: '14px' }}>
            Hi, Arif Santoso
          </div>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#eee', overflow: 'hidden', border: '2px solid #fcc419' }}>
             <Image src="/img/coach-arif.png" alt="Avatar" width={40} height={40} style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </nav>

      {/* ─── MAIN CONTENT ─── */}
      <main style={{ flex: 1, padding: "120px 72px 80px", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        {/* Header Section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "40px" }}>
          <div>
            <h1 style={{ fontSize: "42px", fontWeight: "800", marginBottom: "8px", letterSpacing: "-1px" }}>Form Report</h1>
            <p style={{ color: "#aaa", fontSize: "16px" }}>Laporan sesi latihan</p>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <button 
              onClick={handleSave}
              style={{ backgroundColor: "#fcc419", color: "#1a1a1a", border: "none", padding: "12px 64px", borderRadius: "12px", fontSize: "24px", fontWeight: "900", cursor: "pointer" }}
            >
              Simpan
            </button>
          </div>
        </div>

        {/* Report Card */}
        <div style={{ backgroundColor: "#111", border: "1px solid #222", borderRadius: "24px", padding: "48px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "800", marginBottom: "40px", color: "#fff" }}>Jasmie David</h2>

          {/* SUMMARY */}
          <div style={{ marginBottom: "40px" }}>
            <label style={{ display: "block", fontSize: "16px", fontWeight: "700", color: "#fff", marginBottom: "16px", letterSpacing: "0.5px" }}>SUMMARY</label>
            <textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Tulis ringkasan sesi latihan di sini..."
              style={{ width: "100%", backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: "14px", padding: "18px", fontSize: "16px", color: "#fff", outline: "none", minHeight: "200px", resize: "none", boxSizing: "border-box" }}
            />
          </div>

          {/* UPLOAD FILE */}
          <div style={{ marginBottom: "0" }}>
            <label style={{ display: "block", fontSize: "16px", fontWeight: "700", color: "#fff", marginBottom: "16px", letterSpacing: "0.5px" }}>UPLOUD FILE</label>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "400px",
                backgroundColor: "#1a1a1a",
                border: "1px solid #333",
                borderRadius: "14px",
                cursor: "pointer",
                transition: "border-color 0.2s"
              }}
              onMouseOver={(e) => (e.currentTarget.style.borderColor = "#fcc419")}
              onMouseOut={(e) => (e.currentTarget.style.borderColor = "#333")}
            >
               <div style={{ fontSize: "64px", color: "#228be6", marginBottom: "16px" }}>
                 <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 16V16.01M11 16V16.01M15 16V16.01M19 16V16.01M7 12H7.01M11 12H11.01M15 12H15.01M19 12H19.01M7 8H7.01M11 8H11.01M15 8H15.01M19 8H19.01M4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 11V15M12 11L10 13M12 11L14 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#339af0" }}/>
                    <path d="M16 16.5C18.4853 16.5 20.5 14.4853 20.5 12C20.5 9.51472 18.4853 7.5 16 7.5C15.8203 7.5 15.6443 7.5106 15.4721 7.5312C14.7709 5.4853 12.8344 4 10.5 4C7.46243 4 5 6.46243 5 9.5C5 9.55403 5.00078 9.60787 5.0023 9.66141C3.29548 10.4357 2.1 12.1643 2.1 14.1667C2.1 16.966 4.36734 19 7.16667 19H15.3333C17.6345 19 19.5 17.1345 19.5 14.8333C19.5 13.9113 19.2001 13.0593 18.6893 12.3705" stroke="#339af0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                 </svg>
               </div>
               <p style={{ color: "#aaa", fontSize: "16px" }}>Klik atau seret file ke sini untuk mengunggah</p>
            </div>
          </div>
        </div>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="footer" style={{ padding: '60px 72px 40px', backgroundColor: '#fff', color: '#1a1a1a', borderTop: '1px solid #eee' }}>
        <div className="footer-container" style={{ maxWidth: "1200px", margin: "0 auto", display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div className="footer-left" style={{ flex: 1, maxWidth: '350px' }}>
            <div className="footer-logo" style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>
              <span style={{ color: '#fcc419' }}>⚡</span> train<span>exa</span>
            </div>
            <p className="footer-description" style={{ color: '#666', fontSize: '14px', lineHeight: '1.6', marginBottom: '40px' }}>
              Indonesia's premier sports coaching marketplace. Connecting athletes with certified coaches across 9+ disciplines.
            </p>
            <p className="footer-copyright" style={{ color: '#999', fontSize: '12px' }}>© 2026 Trainexa. All rights reserved.</p>
          </div>
          <div className="footer-center" style={{ flex: 2, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 className="footer-social-title" style={{ fontSize: '42px', fontWeight: '900', letterSpacing: '-1px', margin: 0, fontFamily: 'Arial Black, sans-serif' }}>
              WHAT'S <span style={{ color: '#f1df5d', WebkitTextStroke: '1px #ccc' }}>NEW?</span>
            </h2>
            <p className="footer-social-subtitle" style={{ fontSize: '32px', fontWeight: '700', color: '#7a869a', marginTop: '-10px', marginBottom: '25px' }}>Follow us on</p>
            <div className="footer-social-icons" style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                <Image src="/img/tiktok-logo.png" alt="TikTok" width={100} height={40} />
                <Image src="/img/facebook-logo.png" alt="Facebook" width={40} height={40} />
                <Image src="/img/instagram-logo.png" alt="Instagram" width={40} height={40} />
                <Image src="/img/youtube-logo.png" alt="YouTube" width={110} height={40} />
            </div>
          </div>
          <div className="footer-right">
            <button
              className="btn-back-to-top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{ backgroundColor: '#fcc419', border: 'none', borderRadius: '8px', width: '45px', height: '45px', fontSize: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              ▲
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
