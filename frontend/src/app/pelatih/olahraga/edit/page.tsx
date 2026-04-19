"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditSportPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    jenisCabang: "Bulutangkis",
    judulSertifikat: "Sertifikat Pelatihan Badminton Tingkat Nasional",
    deskripsiMedia: "Dokumentasi pelatihan badminton bersama client member saya",
  });
  const [uploadedFiles, setUploadedFiles] = useState({
    sertifikat: "/img/certificate-sample.png",
    media: "/img/media-sample.png",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    router.push("/pelatih/olahraga");
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
          <li><Link href="/pelatih/olahraga" style={{ textDecoration: 'none', fontSize: '14px', fontWeight: '800', color: '#fcc419' }}>Olahraga</Link></li>
          <li><Link href="/pelatih/jadwal" style={{ textDecoration: 'none', fontSize: '14px', fontWeight: '600', color: '#495057' }}>Jadwal</Link></li>
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
      <main style={{ flex: 1, padding: "120px 72px 80px", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        {/* Header Section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "40px" }}>
          <div>
            <h1 style={{ fontSize: "42px", fontWeight: "800", marginBottom: "8px", letterSpacing: "-1px" }}>Edit Cabang<br/>Olahraga Badminton</h1>
            <p style={{ color: "#aaa", fontSize: "16px" }}>Kelola informasi olahraga cabang anda</p>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <Link href="/pelatih/olahraga">
              <button style={{ backgroundColor: "#8c2e2e", color: "#fff", border: "none", padding: "12px 40px", borderRadius: "12px", fontSize: "20px", fontWeight: "800", cursor: "pointer" }}>
                Batal
              </button>
            </Link>
            <button 
              onClick={handleSave}
              style={{ backgroundColor: "#fcc419", color: "#1a1a1a", border: "none", padding: "12px 40px", borderRadius: "12px", fontSize: "20px", fontWeight: "800", cursor: "pointer" }}
            >
              Simpan
            </button>
          </div>
        </div>

        {/* Form Card */}
        <div style={{ backgroundColor: "#111", border: "1px solid #222", borderRadius: "24px", padding: "48px" }}>
          {/* Jenis Cabang Olahraga */}
          <div style={{ marginBottom: "32px" }}>
            <label style={{ display: "block", fontSize: "16px", fontWeight: "700", color: "#fff", marginBottom: "16px", letterSpacing: "0.5px" }}>JENIS CABANG OLAHRAGA</label>
            <div style={{ position: "relative" }}>
              <select
                name="jenisCabang"
                value={formData.jenisCabang}
                onChange={handleChange}
                style={{ width: "100%", backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: "14px", padding: "18px", fontSize: "16px", color: "#fff", outline: "none", appearance: "none", cursor: "pointer" }}
              >
                <option value="Bulutangkis">Badminton</option>
                <option value="Renang">Renang</option>
                <option value="Basket">Basket</option>
                <option value="Sepakbola">Sepakbola</option>
                <option value="Tenis">Tenis</option>
              </select>
              <span style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", color: "#666", pointerEvents: "none", fontSize: "14px" }}>▼</span>
            </div>
          </div>

          {/* Judul Sertifikat */}
          <div style={{ marginBottom: "32px" }}>
            <label style={{ display: "block", fontSize: "16px", fontWeight: "700", color: "#fff", marginBottom: "16px", letterSpacing: "0.5px" }}>JUDUL SERTIFIKAT</label>
            <input
              type="text"
              name="judulSertifikat"
              value={formData.judulSertifikat}
              onChange={handleChange}
              style={{ width: "100%", backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: "14px", padding: "18px", fontSize: "16px", color: "#fff", outline: "none", boxSizing: "border-box" }}
            />
          </div>

          {/* Upload Sertifikat (Display) */}
          <div style={{ marginBottom: "32px" }}>
            <label style={{ display: "block", fontSize: "16px", fontWeight: "700", color: "#fff", marginBottom: "16px", letterSpacing: "0.5px" }}>UPLOUD SERTIFIKAT</label>
             <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "400px",
                backgroundColor: "#1a1a1a",
                border: "1px solid #333",
                borderRadius: "14px",
                overflow: "hidden",
                cursor: "pointer"
              }}
            >
              <Image 
                src="/img/certificate-sample.png" 
                alt="Certificate" 
                width={300} 
                height={400} 
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Deskripsi Media */}
          <div style={{ marginBottom: "32px" }}>
            <label style={{ display: "block", fontSize: "16px", fontWeight: "700", color: "#fff", marginBottom: "16px", letterSpacing: "0.5px" }}>DESKRIPSI MEDIA</label>
            <textarea
              name="deskripsiMedia"
              value={formData.deskripsiMedia}
              onChange={handleChange}
              style={{ width: "100%", backgroundColor: "#1a1a1a", border: "1px solid #333", borderRadius: "14px", padding: "18px", fontSize: "16px", color: "#fff", outline: "none", minHeight: "150px", resize: "none", boxSizing: "border-box" }}
            />
          </div>

          {/* Upload Media (Display) */}
          <div style={{ marginBottom: "0" }}>
            <label style={{ display: "block", fontSize: "16px", fontWeight: "700", color: "#fff", marginBottom: "16px", letterSpacing: "0.5px" }}>UPLOUD MEDIA</label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "350px",
                backgroundColor: "#1a1a1a",
                border: "1px solid #333",
                borderRadius: "14px",
                overflow: "hidden",
                cursor: "pointer"
              }}
            >
              <Image 
                src="/img/media-sample.png" 
                alt="Media Preview" 
                width={800} 
                height={350} 
                style={{ objectFit: 'cover', width: '100%' }}
              />
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
