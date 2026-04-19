"use client";
import Link from "next/link";
import Image from "next/image";

const schedules = [
  {
    id: 1,
    day: "10",
    month: "APR",
    time: "08.00–09.00",
    sport: "Badminton",
    location: "Gor Pancoran",
    type: "Privat",
    participants: "1 peserta",
    price: "Rp 120.000",
    status: "Terpesan",
    statusColor: "#f97316", // orange
  },
  {
    id: 2,
    day: "12",
    month: "APR",
    time: "07.00–08.00",
    sport: "Renang",
    location: "Kolam Renang UPI",
    type: "Group",
    participants: "5 peserta",
    price: "Rp 500.000",
    status: "Tersedia",
    statusColor: "#22c55e", // green
  },
];

export default function JadwalPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#000", color: "#fff", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
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
          <li><Link href="/pelatih/jadwal" style={{ textDecoration: 'none', fontSize: '14px', fontWeight: '800', color: '#fcc419' }}>Jadwal</Link></li>
          <li><Link href="/pelatih/pemesanan" style={{ textDecoration: 'none', fontSize: '14px', fontWeight: '600', color: '#495057' }}>Pemesanan</Link></li>
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
      <main style={{ padding: "120px 72px 80px", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header Section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "48px" }}>
          <div>
            <h1 style={{ fontSize: "36px", fontWeight: "800", marginBottom: "12px" }}>Jadwal Sesi</h1>
            <p style={{ color: "#aaa", fontSize: "16px" }}>Kelola jadwal layanan Anda</p>
          </div>
          <Link href="/pelatih/jadwal/tambah">
            <button style={{ backgroundColor: "#fcc419", color: "#1a1a1a", border: "none", padding: "10px 32px", borderRadius: "12px", fontSize: "18px", fontWeight: "800", cursor: "pointer" }}>
              Tambah
            </button>
          </Link>
        </div>

        {/* Schedule Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {schedules.map((item) => (
            <div key={item.id} style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "24px", padding: "24px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
                {/* Date Block */}
                <div style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "12px 20px", textAlign: "center", minWidth: "80px" }}>
                  <div style={{ fontSize: "32px", fontWeight: "800", lineHeight: "1" }}>{item.day}</div>
                  <div style={{ fontSize: "14px", fontWeight: "700", color: "#aaa", marginTop: "4px" }}>{item.month}</div>
                </div>

                {/* Time & Info */}
                <div>
                  <div style={{ fontSize: "16px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                    <span style={{ color: "#aaa" }}>{item.time}</span>
                    <span style={{ height: "40px", width: "1px", backgroundColor: "rgba(255,255,255,0.1)", margin: "0 8px" }}></span>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span style={{ fontSize: "24px", fontWeight: "800" }}>{item.sport}</span>
                      <span style={{ fontSize: "14px", color: "#aaa", fontWeight: "600", marginTop: "4px", display: "flex", alignItems: "center", gap: "4px" }}>
                         <span style={{ color: "#ef4444" }}>📍</span> {item.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Participants Tag */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                   <span style={{ color: "#3b82f6", fontSize: "14px", fontWeight: "700" }}>{item.type}</span>
                   <span style={{ fontSize: "15px", fontWeight: "600", display: "flex", alignItems: "center", gap: "6px" }}>
                     👤 {item.participants}
                   </span>
                </div>
              </div>

              {/* Status & Actions */}
              <div style={{ textAlign: "right", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "12px" }}>
                <div style={{ fontSize: "24px", fontWeight: "800", color: "#fcc419" }}>{item.price}</div>
                <div style={{ backgroundColor: "rgba(255,255,255,0.05)", border: `1px solid ${item.statusColor}40`, padding: "4px 12px", borderRadius: "8px", color: item.statusColor, fontSize: "14px", fontWeight: "700" }}>
                  {item.status}
                </div>
                <div style={{ display: "flex", gap: "12px", marginTop: "4px" }}>
                  <Link href={`/pelatih/jadwal/edit`}>
                    <button style={{ backgroundColor: "#fcc419", color: "#1a1a1a", border: "none", padding: "8px 24px", borderRadius: "8px", fontSize: "14px", fontWeight: "800", cursor: "pointer" }}>
                      Edit
                    </button>
                  </Link>
                  <button style={{ backgroundColor: "#ef4444", color: "#fff", border: "none", padding: "8px 12px", borderRadius: "8px", fontSize: "14px", cursor: "pointer" }}>
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="footer" style={{ padding: '60px 0 40px 0', backgroundColor: '#fff', color: '#1a1a1a', borderTop: '1px solid #eee' }}>
        <div className="footer-container" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '0 20px' }}>
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
