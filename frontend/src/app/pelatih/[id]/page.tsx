import Link from "next/link";
import Image from "next/image";

const reviews = [
  { id: 1, name: "Alex", rating: 4, comment: "Riki tuh bener-bener ngubah cara mainku, sumpah. Cuma 8 minggu, akurasi dropshot-ku jadi lebih tipis di net dan kontrol bolaku jadi stabil banget. Worth it banget lah harganya" },
  { id: 2, name: "Alex", rating: 4, comment: "Riki tuh bener-bener ngubah cara mainku, sumpah. Cuma 8 minggu, akurasi dropshot-ku jadi lebih tipis di net dan kontrol bolaku jadi stabil banget. Worth it banget lah harganya" },
  { id: 3, name: "Alex", rating: 4, comment: "Riki tuh bener-bener ngubah cara mainku, sumpah. Cuma 8 minggu, akurasi dropshot-ku jadi lebih tipis di net dan kontrol bolaku jadi stabil banget. Worth it banget lah harganya" },
];

const mediaPhotos = ["/coach1.png", "/coach2.png", "/hero.png", "/coach1.png"];

export default function CoachDetailPage({ params }: { params: { id: string } }) {
  return (
    <div style={{ minHeight: "100vh", background: "#000", paddingTop: "68px" }}>
      {/* ─── NAVBAR ─── */}
      <nav className="navbar">
        <div className="navbar-logo">train<span>exa</span></div>
        <ul className="navbar-menu">
          <li><Link href="/">Beranda</Link></li>
          <li><Link href="/kategori">Kategori</Link></li>
          <li><Link href="/pelatih" className="active">Pelatih</Link></li>
          <li><Link href="/ulasan">Ulasan</Link></li>
          <li><Link href="/aktivitas">Aktivitas</Link></li>
        </ul>
        <div className="navbar-actions">
          <button className="btn-masuk">Masuk</button>
          <Link href="/daftar"><button className="btn-daftar">Get Started</button></Link>
        </div>
      </nav>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 40px" }}>
        {/* ─── HERO IMAGE ─── */}
        <div style={{ position: "relative", height: "420px", borderRadius: "20px", overflow: "hidden", marginBottom: "28px" }}>
          <Image src="/coach2.png" alt="Sofia" layout="fill" objectFit="cover" />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />
          <span style={{ position: "absolute", top: "20px", left: "20px", background: "#ef4444", color: "white", fontSize: "12px", fontWeight: "700", padding: "4px 14px", borderRadius: "50px" }}>Full hari ini</span>
          <button style={{ position: "absolute", top: "20px", right: "20px", background: "rgba(0,0,0,0.5)", border: "none", borderRadius: "50%", width: "40px", height: "40px", cursor: "pointer", fontSize: "20px", color: "white" }}>♡</button>
        </div>

        {/* ─── COACH INFO + BOOKING ─── */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "32px", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <h1 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "6px" }}>Sofia</h1>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", marginBottom: "10px" }}>Bulu Tangkis · Cimpenan, Kota Bandung</p>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "14px" }}>
              {[1, 2, 3, 4, 5].map(s => <span key={s} style={{ color: "#FFD700", fontSize: "18px" }}>★</span>)}
              <span style={{ fontWeight: "700", fontSize: "15px", marginLeft: "4px" }}>4.96</span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>(391 ulasan)</span>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <span style={{ background: "rgba(255,215,0,0.12)", border: "1px solid rgba(255,215,0,0.3)", color: "#FFD700", fontSize: "12px", fontWeight: "600", padding: "4px 14px", borderRadius: "50px" }}>ATP Certified</span>
              <span style={{ background: "rgba(255,215,0,0.12)", border: "1px solid rgba(255,215,0,0.3)", color: "#FFD700", fontSize: "12px", fontWeight: "600", padding: "4px 14px", borderRadius: "50px" }}>Competitive</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginBottom: "2px" }}>Mulai dari</p>
              <p style={{ fontSize: "28px", fontWeight: "800" }}>Rp 125K<span style={{ fontSize: "14px", fontWeight: "400", color: "rgba(255,255,255,0.5)" }}> /sesi</span></p>
            </div>
            <button style={{ background: "#FFD700", color: "#000", border: "none", borderRadius: "12px", padding: "14px 36px", fontSize: "16px", fontWeight: "800", cursor: "pointer", fontFamily: "var(--font)" }}>
              Pesan
            </button>
          </div>
        </div>

        {/* ─── FOTO & VIDEO ─── */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "16px" }}>
            <span style={{ color: "#FFD700" }}>📸</span> Foto {"&"} Video
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
            {mediaPhotos.map((src, i) => (
              <div key={i} style={{ position: "relative", height: "140px", borderRadius: "12px", overflow: "hidden", cursor: "pointer" }}>
                <Image src={src} alt={`Media ${i + 1}`} layout="fill" objectFit="cover" />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0)", transition: "background 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.3)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "rgba(0,0,0,0)")} />
              </div>
            ))}
          </div>
        </section>

        {/* ─── ULASAN ─── */}
        <section>
          <h2 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "20px" }}>
            <span style={{ color: "#FFD700" }}>⭐</span> Ulasan
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {reviews.map(review => (
              <div key={review.id} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,215,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: "700", color: "#FFD700" }}>
                    {review.name[0]}
                  </div>
                  <div>
                    <p style={{ fontWeight: "700", fontSize: "15px" }}>{review.name}</p>
                    <div style={{ display: "flex", gap: "2px" }}>
                      {[1, 2, 3, 4, 5].map(s => (
                        <span key={s} style={{ color: s <= review.rating ? "#FFD700" : "rgba(255,255,255,0.2)", fontSize: "13px" }}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: "1.6" }}>{review.comment}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer" style={{ marginTop: "80px" }}>
        <div>
          <div className="footer-logo">train<span>exa</span></div>
          <p className="footer-desc">Platform marketplace pelatih olahraga terpercaya di Indonesia.</p>
          <p className="footer-address">Jl. Dipatiukur No. 35, Bandung, Jawa Barat 40132</p>
        </div>
        <div>
          <p className="footer-social-label">APA YANG <span className="highlight">BARU?</span></p>
          <p className="footer-social-sub">Ikuti kami di</p>
          <div className="footer-socials">
            <button className="social-btn">T</button>
            <button className="social-btn">F</button>
            <button className="social-btn">X</button>
            <button className="social-btn">Ig</button>
            <button className="social-btn">YT</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
